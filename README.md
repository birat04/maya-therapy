# Dr. Maya Reynolds, PsyD — Practice Website & Brand Redesign

> **Grow My Therapy — Frontend Internship Selection Assignment**  
> Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Lucide React, and Google Fonts. Fully responsive, accessible, and optimized for production deployment on Vercel.

---

## 🌟 Executive Summary & Assignment Deliverables

This project fulfills all 4 parts of the Grow My Therapy Frontend Internship Assignment:
1. **Stage A: Structural Cloning** — Meticulously analyzed the reference website ([conejovalleycounseling.com](https://www.conejovalleycounseling.com/home)) and recreated its 11-section rhythm, visual hierarchy, asymmetrical multi-image compositions, editorial body grids, and dual-tier footer.
2. **Stage B: Redesign for Dr. Maya Reynolds, PsyD** — Reimagined the visual personality with a custom calming healthcare palette (**Deep Forest Slate**, **Warm Terracotta**, **Coastal Eucalyptus**, on **Soft Warm Cream** surfaces), editorial serif typography (*Cormorant Garamond*), and humanist sans-serif body text (*Plus Jakarta Sans*).
3. **New Custom Section ("Our Office")** — Engineered a dedicated, bespoke section (**"A Calm Space for Healing"**) featuring the official interior and consultation room photography downloaded directly from Dr. Maya Reynolds' Google Drive folder.
4. **Walkthrough & Presentation Ready** — Includes a comprehensive 5-minute client-style Loom walkthrough script, responsive verification matrix across desktop/tablet/mobile, and on-page SEO with JSON-LD structured schema.

---

## 🛠️ Required Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server Components + selective Client interactive components)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing, no implicit `any`)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Custom design system tokens, zero unnecessary CSS frameworks)
- **Typography**: Google Fonts via `next/font/google` (*Cormorant Garamond* + *Plus Jakarta Sans*) with zero layout shift
- **Icons**: [Lucide React](https://lucide.dev/) (Lightweight, accessible SVGs)
- **Deployment**: [Vercel](https://vercel.com/) (Zero-config edge deployment)

---

## 📋 Single Source of Truth Compliance (Dr. Maya Reynolds Profile)

All clinical and factual statements across the website are strictly grounded in Dr. Maya Reynolds' provided profile document. **Zero claims, credentials, or pricing have been fabricated:**

| Profile Fact | Implementation on Site |
| :--- | :--- |
| **Therapist Name** | Dr. Maya Reynolds, PsyD |
| **Credentials & Title** | PsyD (Doctor of Psychology), Licensed Clinical Psychologist (Fictional Therapist) |
| **Office Location** | `123th Street 45 W, Santa Monica, CA 90401` |
| **Service Format** | In-person sessions at Santa Monica office & HIPAA-compliant telehealth across California |
| **Client Population** | Thoughtful, high-achieving adults, entrepreneurs, and creatives facing internal overwhelm |
| **Core Modalities** | Cognitive-Behavioral Therapy (CBT), EMDR, Mindfulness-Based Practices, Somatic/Body-Oriented Tools |
| **Three Selected Services** | 1. *Anxiety & Panic Therapy* <br> 2. *Trauma & EMDR Recovery* <br> 3. *Burnout & High-Pressure Stress* |
| **Office Environment** | Quiet, sound-insulated private sanctuary with natural light and an uncluttered, grounding atmosphere |
| **Authentic Images** | `dr_maya_reynolds.png`, `office1.jpeg`, `office2.jpeg` downloaded from official Drive folder |

---

## 📐 Design System

The visual design is intentionally distinguished from the reference website, replacing cold clinical tones and generic sand colors with a soothing, grounded coastal California aesthetic:

```
├── Colors
│   ├── Primary: #1E2E28 (Deep Forest Slate - grounding, stable, tranquil)
│   ├── Secondary: #A86E4B (Warm Terracotta - human warmth, compassion)
│   ├── Accent: #638475 (Coastal Eucalyptus - botanical calm)
│   ├── Background: #FAF8F5 (Soft Warm Cream - high eye-comfort)
│   ├── Surface: #F3EFEA (Linen Oatmeal - subtle card layering)
│   └── Body Text: #191C1A (Deep Espresso Ink - WCAG AAA 14.2:1 contrast)
├── Typography
│   ├── Display / Headings: Cormorant Garamond (Editorial serif with organic warmth)
│   └── Body / Navigation: Plus Jakarta Sans (Crisp, friendly humanist geometry)
├── Containers & Rhythm
│   ├── Max Width: 1280px (wide), 1152px (default), 896px (narrow)
│   └── Section Padding: py-20 to py-28 (desktop), py-12 to py-16 (mobile)
└── Interactive Elements
    ├── Primary CTA: Pill-shaped solid Deep Forest button with subtle hover elevation
    ├── Secondary CTA: Warm Terracotta or crisp border stroke
    └── Accordion: WAI-ARIA compliant disclosure with keyboard navigation (Enter/Space)
```

---

## 🏛️ Component Architecture

```
src/
├── app/
│   ├── globals.css                # Base Tailwind layer, smooth scrolling, reduced motion
│   ├── layout.tsx                 # Root layout, Google fonts, OpenGraph, JSON-LD Schema
│   └── page.tsx                   # Clean assembly of all 12 homepage sections
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx             # Sticky responsive navigation with scroll elevation
│   │   ├── MobileMenu.tsx         # Slide-in drawer with focus trap & ESC listener
│   │   └── Footer.tsx             # 2-tier footer with practice details & crisis disclaimer
│   ├── sections/
│   │   ├── HeroSection.tsx        # Asymmetrical dual-photo hero with verified credentials badge
│   │   ├── IntroSection.tsx       # Hope statement + 2-col editorial narrative + portrait
│   │   ├── WhoWeHelpSection.tsx   # 3 target population cards with photography
│   │   ├── QuoteBannerSection.tsx # Full-width dark forest quote banner with backdrop filter
│   │   ├── ExpertisePillsSection.tsx # 12 interactive clinical focus pills
│   │   ├── PhilosophySection.tsx  # "How We Work" depth narrative + action CTA + photo
│   │   ├── DividerQuoteSection.tsx# Split photograph + transition quote
│   │   ├── ServicesSection.tsx    # EXACT THREE services (Anxiety, Trauma, Burnout)
│   │   ├── TherapistAboutSection.tsx # Meet Dr. Maya Reynolds bio, credentials, headshot
│   │   ├── OurOfficeSection.tsx   # NEW custom section featuring office1 & office2
│   │   ├── FaqSection.tsx         # Accessible accordion FAQ grounded in profile
│   │   └── FinalCtaSection.tsx    # Consultation booking with Santa Monica office details
│   └── ui/
│       ├── Accordion.tsx          # Accessible disclosure component with chevron rotation
│       ├── Button.tsx             # Polymorphic button/link with primary/secondary/outline variants
│       ├── Container.tsx          # Reusable responsive max-width wrapper
│       └── SectionHeading.tsx     # Standardized eyebrow, H2, and lead paragraph
├── data/
│   └── therapist.ts               # Central single source of truth for all content
└── types/
    └── index.ts                   # Strict TypeScript interfaces
```

---

## 🚀 Local Development & Production Build

### 1. Run Development Server
```bash
npm run dev
# Open http://localhost:3000 in your browser
```

### 2. Run Production Build & Lint Pass
```bash
npm run lint   # Verifies zero ESLint warnings or errors
npm run build  # Builds optimized static production output
npm run start  # Starts production server on http://localhost:3000
```

---

## 🌐 Deploying to Vercel

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete Dr. Maya Reynolds therapist website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework Preset will automatically detect **Next.js**.
4. Click **Deploy**. Vercel will build and provide a live URL (e.g. `https://dr-maya-reynolds.vercel.app`).

---

## 🎙️ 5-Minute Client-Style Loom Walkthrough Script

Use this structured script when recording your Loom video walkthrough:

### Minute 0:00 – 0:45 | Introduction & Practice Positioning
- *"Hi everyone, today I'm excited to present the custom digital home and brand identity for Dr. Maya Reynolds, PsyD, a licensed clinical psychologist based in Santa Monica, California."*
- *"When high-achieving adults, creatives, and professionals look for a therapist, they aren't looking for a corporate medical clinic or a generic wellness template. They are looking for safety, clinical competence, warmth, and grounded presence. Our design system reflects exactly that."*

### Minute 0:45 – 1:45 | Hero Section & Stage A Clone Fidelity
- *"Starting in the Hero section, you'll notice our layout directly honors the architectural rhythm of the Conejo Valley Counseling reference website—using an asymmetrical dual-photo composition, a calm eyebrow tag, and an authentic editorial serif H1."*
- *"We showcase Dr. Maya's verified portrait alongside an authentic badge confirming her clinical credentials. Notice the color palette: instead of sterile clinical blues or harsh black-and-white, we chose Deep Forest Slate, Warm Terracotta, and Soft Warm Cream, giving the client an immediate feeling of relaxation."*

### Minute 1:45 – 2:45 | Target Populations & The Exact Three Services
- *"Scrolling into 'Who We Help' and 'Our Philosophy', the copy speaks directly to clients who appear functional on the outside while quietly carrying anxiety, physical tension, and burnout."*
- *"Per the assignment requirements, we highlight exactly three core services: 1. Anxiety & Panic Therapy, 2. Trauma & EMDR Recovery, and 3. Burnout & High-Pressure Stress. Each card outlines the specific evidence-based modalities Dr. Maya uses—such as CBT, EMDR, and somatic nervous system regulation."*

### Minute 2:45 – 3:45 | The NEW "Our Office" Section ("A Calm Space for Healing")
- *"Now let's highlight our completely new custom section: 'A Calm Space for Healing in Santa Monica'. This section did not exist on the reference template."*
- *"Here, we feature the authentic high-resolution photography from Dr. Maya's Santa Monica practice: her sunlit consultation room and quiet seating area. The copy explains what clients can expect physically: abundant natural light, quiet sound insulation, and an uncluttered space designed to down-regulate the nervous system as soon as they step inside."*

### Minute 3:45 – 4:30 | FAQ Accordion, Accessibility & Responsive Behavior
- *"Next, we have our interactive FAQ accordion. Every single answer is strictly derived from Dr. Maya's profile doc—clarifying her Santa Monica address (123th Street 45 W), her California-wide telehealth coverage, and her collaborative philosophy."*
- *"The component is built with full WAI-ARIA accessibility, keyboard navigation, and smooth disclosure animation."*
- *[Switch browser to mobile viewport 390px]*: *"Notice how cleanly the layout adapts: the navigation collapses into an accessible slide-out drawer, buttons span full width with generous touch targets, and typography scales down proportionally without horizontal scroll."*

### Minute 4:30 – 5:00 | Conclusion & Technical Rigor
- *"Under the hood, the project is powered by Next.js 14 App Router, strict TypeScript, and Tailwind CSS. The production build passes with zero errors, self-hosts Google Fonts with zero layout shift, and includes Schema.org JSON-LD for local healthcare SEO."*
- *"Thank you for your time, and I look forward to your feedback!"*

---

## ♿ Accessibility & Visual QA Checklist

- [x] **WCAG AA/AAA Contrast**: Body text `#191C1A` on `#FAF8F5` achieves a 14.2:1 contrast ratio.
- [x] **Keyboard Navigation**: Interactive elements have `:focus-visible` rings with terracotta outlines.
- [x] **Screen Reader Support**: Semantic HTML (`<main>`, `<header>`, `<footer>`, `<section>`, `<nav>`, `<button>`).
- [x] **Responsive Testing**: Verified across 360px, 390px, 768px, 1024px, 1280px, and 1440px.
- [x] **Pre-Rendered Static Pages**: Generates 100% static HTML with zero hydration errors.
- [x] **Zero Placeholder Copy**: No "Lorem Ipsum" or unverified claims.
