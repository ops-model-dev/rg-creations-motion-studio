import { useState } from 'react'
import { motion } from 'framer-motion'
import { useToast } from '@/hooks/use-toast'
import { supabase } from '@/integrations/supabase/client'
import { site, track, whatsappLink } from '@/lib/site'

// RG Creations enquiry form — sends to the submit-enquiry function.
const empty = { name: '', email: '', phone: '', service: '', message: '', company: '' }


const inputClass =
  'w-full px-4 py-3 bg-input-background border border-border text-ivory placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-gold/60 gentle-animation'
const labelClass = 'block font-body text-sm font-semibold mb-2 text-ivory'

export function Contact() {
  const { toast } = useToast()
  const [form, setForm] = useState(empty)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [startedTracked, setStartedTracked] = useState(false)

  const set = (k: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }))

  const onStart = () => {
    if (!startedTracked) {
      setStartedTracked(true)
      track('contact_form_started')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Honeypot: bots that fill the hidden field get a fake success.
    if (form.company) {
      toast({ title: 'Message sent!' })
      setForm(empty)
      return
    }
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: 'Please fill in name, email and message', variant: 'destructive' })
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      toast({ title: 'That email address looks incomplete', variant: 'destructive' })
      return
    }

    setIsSubmitting(true)
    const { error } = await supabase.functions.invoke('submit-enquiry', {
      body: {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        service: form.service || null,
        message: form.message.trim(),
      },
    })
    setIsSubmitting(false)

    if (error) {
      console.error('Enquiry failed:', error)
      toast({
        title: 'Something went wrong',
        description: 'Your message could not be sent. Please try again in a moment.',
        variant: 'destructive',
      })
      return
    }

    track('contact_form_submitted', { service: form.service || 'unspecified' })
    toast({ title: 'Thank you!', description: 'Your enquiry is with the RG Creations team — we will get back to you soon.' })
    setForm(empty)
    setStartedTracked(false)
  }

  const wa = whatsappLink()

  return (
    <section id="contact" className="bg-black text-ivory py-24 sm:py-36">
      <div className="px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <p className="font-body text-gold uppercase tracking-[0.35em] text-xs mb-4">Let's create together</p>
          <h2 className="font-display uppercase leading-[0.95] text-5xl sm:text-7xl">
            Ready to light up
            <span className="block text-gold">the screen?</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg mt-7 leading-relaxed max-w-md">
            Tell us about your project and the RG Creations team will come back with a plan to bring it to life.
          </p>

          <div className="mt-8 space-y-4">
            {wa && (
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('whatsapp_clicked')}
                className="inline-flex items-center gap-3 border border-ivory/50 px-6 py-4 hover:border-gold hover:text-gold text-ivory gentle-animation"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M12.04 2a9.9 9.9 0 0 0-8.4 15.2L2 22l4.9-1.6A9.9 9.9 0 1 0 12.04 2Zm5.8 14.1c-.2.7-1.2 1.3-1.9 1.4-.5.1-1.2.2-3.4-.7-2.9-1.2-4.8-4-5-4.2-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.4l.9 2.1c0 .2.1.3 0 .5l-.4.6-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.4.1.1.1.8-.1 1.5Z"/></svg>
                <span className="font-body font-medium">Chat on WhatsApp{site.whatsappDisplay ? ` · ${site.whatsappDisplay}` : ''}</span>
              </a>
            )}

            {site.email && (
              <p className="font-body text-muted-foreground">
                Prefer email? Write to{' '}
                <a className="text-gold underline hover:text-gold-soft gentle-animation" href={`mailto:${site.email}`} onClick={() => track('email_link_clicked')}>
                  {site.email}
                </a>
              </p>
            )}
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          onFocus={onStart}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 bg-charcoal border border-gold/20 p-8 sm:p-10 space-y-6"
          noValidate
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className={labelClass}>Name *</label>
              <input
                id="name"
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={set('name')}
                className={inputClass}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>Email *</label>
              <input
                id="email"
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={set('email')}
                className={inputClass}
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className={labelClass}>Phone / WhatsApp</label>
              <input
                id="phone"
                type="tel"
                maxLength={20}
                value={form.phone}
                onChange={set('phone')}
                className={inputClass}
                placeholder="Optional"
              />
            </div>
            <div>
              <label htmlFor="service" className={labelClass}>Service</label>
              <select
                id="service"
                value={form.service}
                onChange={set('service')}
                className={inputClass}
              >
                <option value="">Not sure yet</option>
                {site.services.map((s) => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Honeypot — hidden from humans, catches bots */}
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label htmlFor="company">Company</label>
            <input id="company" type="text" tabIndex={-1} autoComplete="off" value={form.company} onChange={set('company')} />
          </div>

          <div>
            <label htmlFor="message" className={labelClass}>Tell us about your project *</label>
            <textarea
              id="message"
              required
              maxLength={2000}
              rows={5}
              value={form.message}
              onChange={set('message')}
              className={`${inputClass} resize-y`}
              placeholder="The occasion, the audience, the dates you have in mind…"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gold text-black font-semibold px-6 py-4 hover:bg-gold-soft gentle-animation disabled:opacity-60 cursor-pointer"
          >
            {isSubmitting ? 'Sending…' : 'Send enquiry'}
          </button>
        </motion.form>
      </div>
    </section>
  )
}
