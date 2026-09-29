import { Service, WhoWeHelpItem, FaqItem, OfficeFeature, NavLink } from "@/types";

export const THERAPIST_INFO = {
  name: "Dr. Maya Reynolds, PsyD",
  shortName: "Dr. Maya Reynolds",
  credentials: "PsyD",
  role: "Licensed Clinical Psychologist",
  practiceType: "Individual Adult Psychotherapy & Psychological Services",
  location: {
    street: "123th Street 45 W",
    city: "Santa Monica",
    state: "CA",
    zip: "90401",
    fullAddress: "123th Street 45 W, Santa Monica, CA 90401",
    region: "Santa Monica & Greater Los Angeles",
    serviceArea: "Serving Santa Monica, West Los Angeles, Venice, Pacific Palisades, Brentwood & all of California via secure Telehealth",
  },
  formats: {
    inPerson: "In-Person Therapy at our Santa Monica Office",
    telehealth: "Secure Telehealth for Clients Across California",
  },
  hero: {
    eyebrow: "ONLINE & IN-PERSON THERAPY IN SANTA MONICA & ACROSS CALIFORNIA",
    h1: "Santa Monica psychologist offering grounded therapy for anxiety, trauma, and burnout.",
    subheading:
      "Compassionate, evidence-based psychotherapy for thoughtful adults, creatives, and professionals navigating anxiety, trauma, and burnout.",
    ctaPrimary: "Schedule a Consultation",
    ctaSecondary: "Explore Our Specialties",
  },
  intro: {
    heading: "Holding onto hope that life can feel calmer, lighter, and more sustainable.",
    paragraphs: [
      "Many of the people I work with are high-achieving, thoughtful, and deeply self-aware—yet internally feel exhausted, stuck in overthinking, or emotionally on edge. You may look completely 'functional' on the outside while quietly carrying persistent worry, physical tension, sleep disruption, or the sense that you are constantly bracing for what comes next.",
      "First and foremost, what you are experiencing is real, valid, and worthy of attentive care. Whether you are navigating lingering effects of past experiences, managing intense professional pressure, or seeking deeper connection with yourself, therapy offers a safe, dedicated space to pause, reflect, and rebuild on solid ground.",
      "Together, we work to uncover the root causes of distress rather than simply offering surface-level fixes—fostering lasting resilience, emotional safety, and a grounded sense of self in everyday life."
    ],
  },
  philosophy: {
    eyebrow: "HOW WE WORK",
    heading: "A warm, collaborative approach combining practical tools with depth.",
    paragraphs: [
      "I believe therapy is most powerful when it is both structured enough to feel supportive and spacious enough for genuine reflection and depth. My approach is warm, non-judgmental, and grounded in active collaboration—never cold, distant, or one-size-fits-all.",
      "We integrate proven, evidence-based methods including Cognitive-Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), mindfulness practices, and somatic, body-oriented techniques. This integrative care honors both the emotional and physiological dimensions of healing.",
      "Trauma work is paced with great care, prioritizing stabilization, psychological safety, and nervous system regulation so you feel supported and centered not only during our sessions, but throughout your daily life."
    ],
    ctaText: "Learn More About Our Approach",
  },
  quoteBanner: {
    quote: "You deserve a place where your story is heard, valued, and understood. Nothing you carry is too heavy to explore together.",
    attribution: "Dr. Maya Reynolds, PsyD — Licensed Clinical Psychologist",
  },
  dividerQuote: {
    quote: "Honoring where you’ve been & helping shape where you’re headed.",
    subtext: "A collaborative journey combining clinical evidence with profound human connection.",
  },
  office: {
    eyebrow: "OUR SANTA MONICA SPACE",
    title: "A Calm Space for Healing in Santa Monica",
    subtitle: "A quiet, private sanctuary designed with natural light, organic textures, and an uncluttered environment to help you feel at ease.",
    description:
      "Located at 123th Street 45 W in Santa Monica, California, our practice is designed from the ground up to feel grounding, safe, and tranquil. Clients frequently share that the atmosphere of the space itself allows them to exhale and let their guard down from the moment they arrive.",
    features: [
      {
        title: "Natural Light & Grounded Aesthetics",
        description: "Sunlit consultation rooms filled with warm, organic tones and uncluttered comfort.",
        iconName: "Sun",
      },
      {
        title: "Quiet, Sound-Insulated Privacy",
        description: "Confidential, protected setting where your story and vulnerability remain entirely secure.",
        iconName: "Shield",
      },
      {
        title: "In-Person & Virtual Flexibility",
        description: "Conveniently located near coastal Santa Monica, complemented by telehealth across California.",
        iconName: "MapPin",
      },
      {
        title: "Calm, Reflective Seating",
        description: "Thoughtfully arranged therapeutic furnishings designed to encourage physiological relaxation.",
        iconName: "Heart",
      },
    ] as OfficeFeature[],
    images: [
      {
        src: "/images/office1.jpeg",
        alt: "Sunlit therapy consultation room at Dr. Maya Reynolds' Santa Monica office",
        caption: "Main consultation room featuring abundant natural light and tranquil decor",
      },
      {
        src: "/images/office2.jpeg",
        alt: "Comfortable, quiet therapeutic seating area in Santa Monica",
        caption: "A private, peaceful environment created for mindful reflection and safety",
      },
    ],
  },
  ctaSection: {
    eyebrow: "SCHEDULE A CONSULTATION",
    title: "Take the next step toward clarity, relief, and resilience.",
    description:
      "Reaching out for therapy is a courageous decision. Whether you are seeking in-person sessions at our Santa Monica office or virtual sessions from anywhere in California, we are here to support you with dedicated clinical care and deep compassion.",
    primaryButton: "Schedule a Consultation",
    officeReassurance: "In-person appointments available in Santa Monica • Telehealth throughout CA",
  },
  footer: {
    tagline: "We want to make getting started simple. You are welcome to come into our Santa Monica office or connect virtually from anywhere in California.",
    copyright: `© ${new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.`,
    disclaimer:
      "Dr. Maya Reynolds, PsyD is a Licensed Clinical Psychologist practicing in Santa Monica, California. Information on this website is for educational and informational purposes only and does not constitute medical advice or a doctor-patient relationship. In an emergency or crisis, please call 988 or go to your nearest emergency room.",
  },
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Who We Help", href: "#who-we-help" },
  { label: "Specialties", href: "#services" },
  { label: "Our Office", href: "#office" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export const WHO_WE_HELP: WhoWeHelpItem[] = [
  {
    id: "adults",
    title: "High-Achieving Adults",
    subtitle: "Overcoming Internal Overwhelm",
    description:
      "Feeling functional on the outside while quietly struggling with anxiety, overthinking, tension, and fatigue. We help you uncover the root causes of distress, build sustainable calm, and reconnect with your inner self.",
    image: "/images/who_adults.jpg",
    imageAlt: "Adult reflecting mindfully by a peaceful sunlit window",
  },
  {
    id: "professionals",
    title: "Professionals & Creatives",
    subtitle: "Burnout & Perfectionism",
    description:
      "Entrepreneurs, artists, and professionals who feel disconnected or exhausted after years of relentless pressure. Therapy provides a dedicated space to slow down, release impossible standards, and restore genuine fulfillment.",
    image: "/images/who_professionals.jpg",
    imageAlt: "Professional taking a mindful pause in a serene workspace",
  },
  {
    id: "trauma",
    title: "Trauma Recovery",
    subtitle: "Paced Healing & Stabilization",
    description:
      "Adults navigating the lingering impact of single-incident trauma or complex childhood and relational patterns. We emphasize nervous system regulation, pacing, and emotional safety to foster lasting integration.",
    image: "/images/who_trauma.jpg",
    imageAlt: "Quiet and calming sunrise illuminating an open, peaceful path",
  },
];

export const THREE_SERVICES: Service[] = [
  {
    id: "anxiety-panic",
    title: "Anxiety & Panic Therapy",
    shortDescription:
      "Targeted relief for chronic worry, racing thoughts, panic, and bodily tension using Cognitive-Behavioral Therapy and somatic tools.",
    description:
      "When anxiety becomes your constant companion, daily life can feel like an endless cycle of bracing for what could go wrong. We combine evidence-based CBT with body-oriented techniques to help you understand your nervous system, dismantle catastrophic thought loops, and reclaim a profound sense of physical and emotional ease.",
    modalities: ["Cognitive-Behavioral Therapy (CBT)", "Somatic Grounding", "Mindfulness"],
    image: "/images/service_anxiety.jpg",
    imageAlt: "Person practicing calm breathing and somatic centering outdoors",
  },
  {
    id: "trauma-emdr",
    title: "Trauma & EMDR Recovery",
    shortDescription:
      "Carefully paced therapy for single-incident and complex trauma utilizing EMDR and nervous system stabilization.",
    description:
      "Past experiences can continue to dictate current reactions, relationships, and confidence. Using Eye Movement Desensitization and Reprocessing (EMDR) alongside gentle stabilization practices, we work to reprocess distressing memories so they no longer trigger acute emotional and physiological distress in the present.",
    modalities: ["EMDR Therapy", "Trauma-Informed Care", "Nervous System Regulation"],
    image: "/images/service_trauma.jpg",
    imageAlt: "Serene mountain lake reflection symbolizing psychological balance",
  },
  {
    id: "burnout-stress",
    title: "Burnout & High-Pressure Stress",
    shortDescription:
      "Depth-oriented support for high achievers, entrepreneurs, and creatives navigating chronic exhaustion and perfectionism.",
    description:
      "Living in a culture of constant achievement often leads to internal disconnection, emotional depletion, and unrelenting pressure. Therapy becomes a protected sanctuary where you can step off the treadmill, explore your underlying needs, uncouple your worth from productivity, and develop sustainable practices for living.",
    modalities: ["Depth-Oriented Psychotherapy", "Mindful Stress Reduction", "Values Re-alignment"],
    image: "/images/service_burnout.jpg",
    imageAlt: "Calm tea setting with natural light and notebook representing mindful rest",
  },
];

export const EXPERTISE_PILLS: string[] = [
  "Anxiety & Constant Worry",
  "Panic Attacks",
  "Trauma & Complex PTSD",
  "EMDR Therapy",
  "Professional Burnout",
  "High Internal Pressure",
  "Perfectionism",
  "Somatic & Body Grounding",
  "Mindfulness-Based Practices",
  "Cognitive-Behavioral Therapy",
  "Nervous System Regulation",
  "Sleep & Emotional Fatigue",
];

export const FAQS: FaqItem[] = [
  {
    question: "Who do you typically work with in your therapy practice?",
    answer:
      "I specialize in working with adults who feel overwhelmed by anxiety, stress, burnout, or the lingering effects of earlier life experiences. Many of my clients are thoughtful, self-aware, and high-achieving individuals—such as entrepreneurs, creatives, and professionals—who function well outwardly but quietly deal with constant worry, internal pressure, physical tension, or exhaustion.",
  },
  {
    question: "What therapeutic approaches and modalities do you use?",
    answer:
      "My approach is warm, collaborative, and grounded. I integrate evidence-based methods including Cognitive-Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), mindfulness-based practices, and body-oriented somatic techniques. This allows us to address both the cognitive patterns and physiological reactions that accompany stress and trauma.",
  },
  {
    question: "Do you offer in-person sessions, virtual therapy, or both?",
    answer:
      "I offer both options. In-person therapy is provided at my Santa Monica office (123th Street 45 W, Santa Monica, CA 90401) for clients who appreciate a dedicated physical space. I also provide secure, HIPAA-compliant telehealth sessions for clients residing anywhere throughout California.",
  },
  {
    question: "What is your approach to trauma and EMDR therapy?",
    answer:
      "Trauma work in my practice is carefully paced with a strong foundation in safety and stabilization. We work collaboratively to ensure your nervous system feels regulated before and throughout processing painful experiences, whether stemming from a single incident or complex, developmental backgrounds.",
  },
  {
    question: "What is your Santa Monica office environment like?",
    answer:
      "My office is a quiet, private space designed to feel calm, comforting, and grounding. It features natural sunlight, comfortable furnishings, and an uncluttered, peaceful environment. Clients frequently remark that the space itself helps them feel more at ease as soon as they step inside.",
  },
  {
    question: "How do we get started with therapy?",
    answer:
      "Getting started begins with an initial consultation. We will discuss what brings you to therapy, what you hope to achieve, and answer any questions you may have about my approach to ensure we are a good clinical fit.",
  },
];
