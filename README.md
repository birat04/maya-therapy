# Dr. Maya Reynolds, PsyD — Practice Website

A responsive marketing site for a fictional clinical psychology practice in Santa Monica, CA. Built with Next.js 14, TypeScript, and Tailwind CSS, with a focus on calm visual design, accessibility, and a smooth consultation booking flow.

## Features

- Editorial layout with a coastal California palette (forest slate, terracotta, eucalyptus on warm cream)
- Custom typography via Google Fonts (*Cormorant Garamond* + *Plus Jakarta Sans*)
- Structured content for services, credentials, office photos, FAQ, and contact
- Accessible consultation modal (session format, concerns, preferred times)
- Mobile navigation, accordion FAQ, and back-to-top control
- SEO metadata and JSON-LD for local practice discovery

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) icons
- Deployed on [Vercel](https://vercel.com/)

## Project structure

```
src/
├── app/                    # Routes, layout, global styles
├── components/
│   ├── layout/             # Navbar, footer, mobile menu, client shell
│   ├── sections/           # Homepage sections
│   └── ui/                 # Buttons, modal, accordion, etc.
├── data/therapist.ts       # Site copy and practice details
└── types/                  # Shared TypeScript types
```

## Design tokens

| Token        | Value     | Role                          |
| ------------ | --------- | ----------------------------- |
| Primary      | `#1E2E28` | Headings, primary buttons     |
| Secondary    | `#A86E4B` | Accents, focus rings          |
| Accent       | `#638475` | Supporting UI                 |
| Background   | `#FAF8F5` | Page background               |
| Body text    | `#191C1A` | High-contrast readable copy   |

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run lint
npm run build
npm run start
```

## Accessibility

- Semantic landmarks and keyboard-friendly interactive components
- `:focus-visible` styles on controls
- Accordion and modal patterns aligned with common ARIA practices
- Layout tested across common mobile and desktop breakpoints

## Note on content

Dr. Maya Reynolds and practice details are fictional demo content for portfolio purposes. Crisis resources in the footer point to real national helplines.
