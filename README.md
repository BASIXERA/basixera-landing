# BASIXERA TECH Landing Page

React + Vite + TypeScript + Tailwind CSS (v3) + Lucide icons.

## Run locally

```bash
npm install
cp .env.example .env     # then set VITE_FORM_ENDPOINT (see below)
npm run dev              # http://localhost:5173
npm run build            # type-check + production build into dist/
npm run preview
```

## Structure

- `index.html` : title, meta description, Open Graph, favicon link, Manrope font
- `public/favicon.svg` : favicon
- `src/data/site.ts` : company details, contact info, socials, legal links (taken from basixera.tech)
- `src/data/content.ts` : nav, services, training, benefits, projects, steps (edit copy here)
- `src/components/` : Navbar, Hero, Services, Training, WhyChoose, Projects, HowItWorks, CTA, Contact, EnquiryForm, Footer, ui (Logo, Button, SectionHeading, Reveal)
- `tailwind.config.js` : brand colors (#2563EB, #0B1220, #111827, #6B7280), shadows, float animation

## Things to finish before launch

1. **Forms**: set `VITE_FORM_ENDPOINT` in `.env` to a real service (Formspree, Web3Forms, your own API). Until set, the forms show an honest "not connected" error and never fake a success. No secrets belong in frontend code.
2. **Projects**: the three entries in `src/data/content.ts` are marked `placeholder: true` and show a "Sample placeholder" badge. Replace them with real projects (set `placeholder: false`, add `image` and `link`).
3. **Training details**: durations, fees, certifications and placement info are intentionally absent. Add them to `training` once verified.
4. **OG image**: add a 1200x630 image and an `og:image` tag in `index.html`.
5. **Learn More links** point to the on-page enquiry forms. Swap in real pages in `content.ts` (e.g. `site.existing.services`) when ready.
