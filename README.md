# Dr. Maya Reynolds, PsyD — Practice Website

A responsive marketing site for a fictional clinical psychology practice in Santa Monica, CA. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Pages

- **`/`** — Dr. Maya Reynolds practice site (theme, copy, and photography)
- **`/stage-a`** — Structural layout study of the Conejo Valley Counseling homepage

## Features

- Editorial layout with a coastal California palette (forest slate, terracotta, eucalyptus on warm cream)
- Custom typography via Google Fonts (*Cormorant Garamond* + *Plus Jakarta Sans*)
- Three core services, about, office, FAQ, and consultation booking
- Mobile navigation and accessible accordion FAQ
- SEO metadata and JSON-LD for local practice discovery

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) icons

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Layout study: [http://localhost:3000/stage-a](http://localhost:3000/stage-a).

### Production build

```bash
npm run lint
npm run build
npm run start
```

## Deploy

1. Push this repo to GitHub.
2. Import the repo on [Vercel](https://vercel.com/new).
3. Framework preset: Next.js. Deploy.
4. Update `metadataBase` in `src/app/layout.tsx` to match your live URL.

## Design tokens

| Token      | Value     | Role                        |
| ---------- | --------- | --------------------------- |
| Primary    | `#1E2E28` | Headings, primary buttons   |
| Secondary  | `#A86E4B` | Accents, focus rings        |
| Accent     | `#638475` | Supporting UI               |
| Background | `#FAF8F5` | Page background             |
| Body text  | `#191C1A` | High-contrast readable copy |

## Note

Therapist details are demo content. Crisis resources in the footer point to real national helplines (988).

## Submission checklist

Fill these in after you deploy and record the walkthrough:

| Deliverable | Link |
| ----------- | ---- |
| Live site (redesign) | `https://YOUR-PROJECT.vercel.app/` |
| Layout clone | `https://YOUR-PROJECT.vercel.app/stage-a` |
| GitHub (public) | `https://github.com/YOUR-USERNAME/maya-therapy` |
| 5-minute Loom | *(record after deploy)* |
# maya-therapy
