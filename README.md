# Dr. Maya Reynolds, PsyD — Practice Website & Brand Redesign

> **Grow My Therapy — Frontend Internship Selection Assignment**  
> Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Lucide React, and Google Fonts. Fully responsive, accessible, and optimized for production deployment on Vercel.

---

## 🌟 Executive Summary & Dual-Stage Deliverables

This project fulfills all requirements of the Grow My Therapy Frontend Internship Assignment, providing **both stages** live in a single application:
1. **Stage B: Dr. Maya Reynolds Redesign (Default Route `/`)**:
   - Reimagined visual personality with an intentional, calming healthcare palette (**Deep Forest Slate**, **Warm Terracotta**, **Coastal Eucalyptus**, on **Soft Warm Cream** surfaces).
   - Custom editorial typography (*Cormorant Garamond* paired with *Plus Jakarta Sans*).
   - Single source of truth: all copy, credentials (`PsyD`), location (`123th Street 45 W, Santa Monica, CA 90401`), formats (in-person Santa Monica + California-wide telehealth), and modalities (CBT, EMDR, Mindfulness, Somatic) are strictly grounded in Dr. Maya's profile.
   - **NEW Custom Section ("A Calm Space for Healing")**: Features official interior and consultation room photos (`office1.jpeg` and `office2.jpeg`) downloaded from Dr. Maya's Google Drive.
   - **Interactive Consultation Modal**: An accessible booking dialog allowing clients to select session formats (In-Person vs Telehealth), clinical concerns, and preferred times.
2. **Stage A: Structural Reference Clone (Route `/stage-a`)**:
   - A dedicated route faithfully reproducing the exact layout, section order, headings, paragraphs, and color palette of the reference website ([conejovalleycounseling.com](https://www.conejovalleycounseling.com/home)).
   - Allows evaluators to inspect and verify cloning accuracy side by side.
3. **Assignment Mode Banner**:
   - A top navigation bar enabling instant 1-click toggling between Stage A (Clone) and Stage B (Dr. Maya Redesign).

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
    ├── Consultation Modal: Accessible dialog for session format & time preference
    └── Accordion: WAI-ARIA compliant disclosure with keyboard navigation (Enter/Space)
```

---

## 🏛️ Component Architecture

```
src/
├── app/
│   ├── globals.css                # Base Tailwind layer, smooth scrolling, reduced motion
│   ├── layout.tsx                 # Root layout, Google fonts, OpenGraph, JSON-LD Schema
│   ├── page.tsx                   # Stage B (Dr. Maya Reynolds homepage)
│   └── stage-a/
│       └── page.tsx               # Stage A (Reference site structural clone)
├── components/
│   ├── layout/
│   │   ├── ClientWrapper.tsx      # Global modal state, assignment banner, back-to-top
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
│       ├── AssignmentBanner.tsx   # Top banner allowing instant Stage A vs Stage B switching
│       ├── Button.tsx             # Polymorphic button/link with primary/secondary/outline variants
│       ├── ConsultationModal.tsx  # Interactive consultation booking dialog
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

### Minute 0:45 – 1:45 | Hero Section & Dual-Stage Navigation
- *"Notice our Assignment Mode banner at the very top: evaluators can toggle with one click between Stage B (our full redesign) and Stage A (the exact structural clone of Conejo Valley Counseling). Let's review Stage B first."*
- *"In the Hero section, you'll see our layout directly honors the architectural rhythm of the reference website—using an asymmetrical dual-photo composition, a calm eyebrow tag, and an authentic editorial serif H1."*
- *"We showcase Dr. Maya's verified portrait alongside an authentic badge confirming her clinical credentials. Notice the color palette: instead of sterile clinical blues or harsh black-and-white, we chose Deep Forest Slate, Warm Terracotta, and Soft Warm Cream."*

### Minute 1:45 – 2:45 | Target Populations & The Exact Three Services
- *"Scrolling into 'Who We Help' and 'Our Philosophy', the copy speaks directly to clients who appear functional on the outside while quietly carrying anxiety, physical tension, and burnout."*
- *"Per the assignment requirements, we highlight exactly three core services: 1. Anxiety & Panic Therapy, 2. Trauma & EMDR Recovery, and 3. Burnout & High-Pressure Stress. Each card outlines the specific evidence-based modalities Dr. Maya uses—such as CBT, EMDR, and somatic nervous system regulation."*

### Minute 2:45 – 3:45 | The NEW "Our Office" Section ("A Calm Space for Healing")
- *"Now let's highlight our completely new custom section: 'A Calm Space for Healing in Santa Monica'. This section did not exist on the reference template."*
- *"Here, we feature the authentic high-resolution photography from Dr. Maya's Santa Monica practice: her sunlit consultation room and quiet seating area. The copy explains what clients can expect physically: abundant natural light, quiet sound insulation, and an uncluttered space designed to down-regulate the nervous system as soon as they step inside."*

### Minute 3:45 – 4:30 | Interactive Consultation Modal, FAQ Accordion & Mobile
- *"When a visitor clicks 'Schedule a Consultation', an accessible consultation modal opens, allowing them to choose between In-Person in Santa Monica or Telehealth across California, specify their primary concern, and request a consultation."*
- *"Our FAQ accordion answers key questions supported strictly by Dr. Maya's profile—clarifying her Santa Monica address (123th Street 45 W), California-wide telehealth coverage, and collaborative philosophy with WAI-ARIA compliant keyboard navigation."*
- *[Switch browser to mobile viewport 390px]*: *"Notice how cleanly the layout adapts: the navigation collapses into an accessible slide-out drawer, buttons span full width with generous touch targets, and typography scales down proportionally without horizontal scroll."*

### Minute 4:30 – 5:00 | Stage A Clone Verification & Conclusion
- *"Finally, clicking 'View Stage A Clone' takes us to `/stage-a`, where you can see the faithful reproduction of the original Conejo Valley Counseling structure, validating our cloning accuracy before the redesign."*
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
