# Delfínici Website – Progress Tracker

_Last updated: 2026-02-27 (session 2)_

## Project Info
- **Stack**: React 18 + Vite 6, custom CSS (no framework)
- **Deployment**: Azure Static Web Apps
- **Language**: Slovak (NGO – youth water sports club)

---

## Completed

- [x] Project scaffolding (Vite + React 18)
- [x] Azure SWA config (`staticwebapp.config.json`, SPA fallback)
- [x] Global design system (`src/index.css` – CSS variables, fonts, animations)
- [x] Google Fonts integration (Nunito + Inter via `index.html`)
- [x] `Header` component + CSS
- [x] `Hero` component + CSS
- [x] `About` component + CSS
- [x] `Sports` component + CSS
- [x] `Members` component + CSS
- [x] `History` component + CSS
- [x] `Join` component + CSS
- [x] `Contact` component + CSS
- [x] `Footer` component + CSS
- [x] Scroll animations (`react-intersection-observer` + `.fade-up`)
- [x] Production build (`dist/`)
- [x] Real photos added to Sports section (football player, hockey on ice, Delfinici_MM2 for volleyball)
- [x] Illustrated overlay images removed from sport cards
- [x] DNS zone file created (`delfinici.sk.zone`) for import to Azure DNS
- [x] `staticwebapp.config.json` – fixed invalid `serve` → `rewrite` in routes
- [x] Deployed to Azure SWA – https://kind-river-01cf6e303.1.azurestaticapps.net

---

## In Progress

- [ ] _(nothing active)_

---

## To Do

- [ ] Content review – copy/text accuracy in Slovak
- [ ] SEO meta tags (`<title>`, `<meta description>`, Open Graph)
- [ ] Favicon + PWA icons
- [ ] Accessibility audit (ARIA labels, color contrast, keyboard nav)
- [ ] Mobile responsiveness QA (all breakpoints)
- [ ] Form handling for Contact section (backend / email service)
- [ ] Import DNS zone to Azure DNS + point delfinici.sk to SWA
- [ ] Custom domain setup on Azure SWA (delfinici.sk)
- [ ] Google Analytics or Plausible integration (optional)
- [ ] Cookie consent banner (if analytics added)

---

## Notes

- Section order: Hero → About → Sports → Members → History → Join → Contact → Footer
- MEMORY.md in `.claude/projects/` documents stable patterns for AI sessions
