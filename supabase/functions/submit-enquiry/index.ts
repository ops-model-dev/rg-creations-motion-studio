import { createClient } from 'npm:@supabase/supabase-js@2'
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { z } from 'npm:zod@3'

const EnquirySchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(20).nullable().optional(),
  service: z.enum(['events', 'production', 'talent', 'promotion']).nullable().optional(),
  message: z.string().trim().min(1).max(2000),
  // Honeypot, filled only by bots
  company: z.string().max(100).optional().nullable(),
})

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: corsHeaders })
  }

  try {
    const parsed = EnquirySchema.safeParse(await req.json())
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: 'Invalid submission', details: parsed.error.flatten().fieldErrors }), {
        status: 400,
        headers: corsHeaders,
      })
    }
    const { company, ...data } = parsed.data

    // Honeypot: pretend success, store nothing
    if (company && company.trim().length > 0) {
      return new Response(JSON.stringify({ ok: true }), { status: 200, headers: corsHeaders })
    }

    const admin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    )

    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'

    // Basic spam throttle: max 5 enquiries per IP per 10 minutes
    const { count, error: countError } = await admin
      .from('enquiries')
      .select('id', { count: 'exact', head: true })
      .eq('ip', ip)
      .gte('created_at', new Date(Date.now() - 10 * 60 * 1000).toISOString())
    if (!countError && (count ?? 0) >= 5) {
      return new Response(JSON.stringify({ error: 'Too many enquiries, please try again later' }), {
        status: 429,
        headers: corsHeaders,
      })
    }

    const { error: insertError } = await admin.from('enquiries').insert({ ...data, ip })
    if (insertError) {
      console.error('Enquiry insert failed:', insertError)
      return new Response(JSON.stringify({ error: 'Could not save your enquiry' }), { status: 500, headers: corsHeaders })
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: corsHeaders })
  } catch (e) {
    console.error('submit-enquiry error:', e)
    return new Response(JSON.stringify({ error: 'Unexpected error' }), { status: 500, headers: corsHeaders })
  }
})
