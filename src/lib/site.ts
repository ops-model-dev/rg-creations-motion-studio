export const site = {
  name: 'RG Creations',
  tagline: 'Brewing Talents',
  headline: ['Big ideas.', 'Unforgettable', 'moments.'],
  // Real contact details pending from the business owner — buttons render only when set.
  whatsappNumber: '', // digits only with country code, e.g. 9198xxxxxxx
  whatsappDisplay: '',
  email: '',
  phoneDisplay: '',
  services: [
    {
      id: 'events',
      name: 'Events',
      blurb: 'Concept, planning, décor and on-the-day management for shows, launches and private celebrations.',
    },
    {
      id: 'production',
      name: 'Production',
      blurb: 'Video, photography and AV production that captures the energy of the moment and the story behind it.',
    },
    {
      id: 'talent',
      name: 'Talent',
      blurb: 'Booking and management of artists, hosts and performers — the right face for the right stage.',
    },
    {
      id: 'promotion',
      name: 'Marketing & Promotion',
      blurb: 'Campaigns and promotion that carry the experience beyond the venue, online and on the ground.',
    },
  ],
}

export function whatsappLink(): string | null {
  if (!site.whatsappNumber) return null
  return `https://wa.me/${site.whatsappNumber}`
}

/** Push a lightweight analytics event; a tag manager can pick these up later. */
export function track(event: string, params: Record<string, unknown> = {}) {
  const w = window as unknown as { dataLayer?: unknown[] }
  w.dataLayer = w.dataLayer || []
  w.dataLayer.push({ event, ...params })
}
