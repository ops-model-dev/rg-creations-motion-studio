# RG Creations Website — Roadmap

Rebuild the MOJJU template into the RG Creations site per the client brief.

## Tasks

- [x] Clarify scope with user (services: Events, Production, Talent, Marketing & Promotion; form + WhatsApp; real content; fresh editorial build)
- [x] Enable Lovable Cloud (backing for enquiry storage)
- [x] Build editorial site structure: Hero, Services (4 lines), Live showcase, Process, Contact, Footer
- [x] Enquiry form: validated, stored server-side, honeypot + rate limit, clear success state (AC-04, AC-05) — verified end-to-end
- [x] Logo: transparent dark/light versions, favicon, head metadata for RG Creations
- [x] Real content: hero reel + stage reel videos placed in Hero and Live sections
- [x] Cinematic dark rebrand approved and shipped (charcoal/ivory/gold, Anton + Archivo, scroll reveals, asymmetric layouts)
- [x] Hero text contrast fixed (stronger scrims, full-ivory/gold type)
- [x] Reels section: 4 tiles from real footage linking to instagram.com/rgcreationsmy
- [ ] Point reel tiles at specific Instagram reel posts when the client shares post links
- [ ] WhatsApp CTA wired to the client's number (number needed from user — button renders automatically once set in src/lib/site.ts)
- [ ] Contact email / phone shown once provided (src/lib/site.ts)
- [ ] Owner email notification for new enquiries (blocked: no verified sending domain — user must set up a domain they own)
- [ ] Analytics events: dataLayer events added (form started/submitted, service view, CTA clicks); connect GA4/tag when user provides an ID
- [x] SEO: title, description, OG tags, Organization JSON-LD, favicon
- [ ] Sitemap.xml + search engine setup
- [ ] Accessibility pass: labels, contrast, alt text, keyboard focus (AC-09)
- [ ] More real content: event photos, portfolio projects, copy, team details as the client supplies them
- [ ] Business owner sign-off before launch (AC-11)

## Waiting on user
- WhatsApp number (digits with country code) and contact email
- Real photos/videos/copy/portfolio projects and team details
- Email sending domain (their own domain) if they want enquiry emails
