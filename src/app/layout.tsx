import type { Metadata } from "next";
import "./globals.css";
import { THERAPIST_INFO } from "@/data/therapist";

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist in Santa Monica, CA",
  description:
    "Warm, grounded, and collaborative psychotherapy for adults navigating anxiety, trauma, and burnout. In-person therapy in Santa Monica, CA and secure telehealth across California.",
  keywords: [
    "Dr. Maya Reynolds PsyD",
    "Therapist Santa Monica",
    "Psychologist Santa Monica CA",
    "Anxiety Therapy Santa Monica",
    "Trauma Therapy California",
    "EMDR Therapist Santa Monica",
    "Burnout Therapy Professionals",
    "Licensed Clinical Psychologist Santa Monica",
    "Online Therapy California",
  ],
  authors: [{ name: "Dr. Maya Reynolds, PsyD" }],
  creator: "Dr. Maya Reynolds, PsyD",
  metadataBase: new URL("https://drmayareynolds.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Clinical Psychologist in Santa Monica",
    description:
      "Grounded, depth-oriented psychotherapy for adults navigating anxiety, trauma, and professional burnout. In-person in Santa Monica and telehealth across California.",
    url: "https://drmayareynolds.vercel.app",
    siteName: "Dr. Maya Reynolds Psychology",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/dr_maya_reynolds.png",
        width: 1200,
        height: 630,
        alt: "Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Maya Reynolds, PsyD | Clinical Psychologist Santa Monica",
    description:
      "Warm, grounded therapy for anxiety, trauma, and burnout in Santa Monica, CA and across California via telehealth.",
    images: ["/images/dr_maya_reynolds.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "Physician"],
    name: "Dr. Maya Reynolds, PsyD",
    alternateName: "Dr. Maya Reynolds Psychology",
    description:
      "Licensed Clinical Psychologist in Santa Monica, CA offering individual therapy for anxiety, trauma, and burnout.",
    url: "https://drmayareynolds.vercel.app",
    image: "https://drmayareynolds.vercel.app/images/dr_maya_reynolds.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: THERAPIST_INFO.location.street,
      addressLocality: THERAPIST_INFO.location.city,
      addressRegion: THERAPIST_INFO.location.state,
      postalCode: THERAPIST_INFO.location.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "34.0195",
      longitude: "-118.4912",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    medicalSpecialty: [
      "Psychology",
      "Psychotherapy",
      "CognitiveBehavioralTherapy",
      "EyeMovementDesensitizationAndReprocessing",
    ],
    availableService: [
      {
        "@type": "MedicalTherapy",
        name: "Anxiety & Panic Therapy",
      },
      {
        "@type": "MedicalTherapy",
        name: "Trauma & EMDR Recovery",
      },
      {
        "@type": "MedicalTherapy",
        name: "Burnout & High-Pressure Stress Support",
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-cream text-charcoal min-h-screen antialiased flex flex-col selection:bg-terracotta selection:text-cream">
        {children}
      </body>
    </html>
  );
}
