# Kebede — Portfolio (React + Vite + Tailwind)

A responsive, single-page portfolio with smooth scrolling, a sticky navbar with a mobile hamburger menu, a sunset color palette and a dark/light toggle.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
npm run preview  # preview the production build
```

## Make it yours

| What | Where |
| --- | --- |
| Name, tagline, email, phone, social links | `src/data.js` → `profile` |
| About text and stats | `src/data.js` → `about` |
| Skills and levels | `src/data.js` → `skillGroups`, `tools` |
| Projects (links, tags, descriptions) | `src/data.js` → `projects` |
| Work history / education | `src/data.js` → `experience` |
| Certificates | `src/data.js` → `certificates` |
| **Your photo** | replace with `public/profile.jpg` (square, ~800×800) |
| **Your CV** | replace `public/cv/kebede-CV.pdf` |
| **Certificate files** | replace the PDFs in `public/certificates/` |
| Colors | `tailwind.config.js` → `colors.sunset` |

The files currently in `public/` are placeholders. Until `public/profile.jpg` exists, the hero shows `public/profile.svg`.

## Contact form

The form opens the visitor's email app with the message pre-filled (no backend needed). To send messages directly, point `onSubmit` in `src/components/Contact.jsx` at Formspree, EmailJS or your own Express endpoint.

## Deploy

Any static host works (Vercel, Netlify, Cloudflare Pages, GitHub Pages): build command `npm run build`, output directory `dist`.
