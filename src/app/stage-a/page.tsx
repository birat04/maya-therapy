import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AssignmentBanner } from "@/components/ui/AssignmentBanner";
import { StageAHeader } from "@/components/layout/StageAHeader";
import { StageAFaqSection } from "@/components/sections/StageAFaqSection";

export default function StageAClone() {
  return (
    <div className="bg-[#FAF7F2] text-[#2B2B2B] min-h-screen font-sans">
      <AssignmentBanner currentStage="A" />
      <StageAHeader />

      {/* Hero */}
      <section id="hero" className="py-16 sm:py-24 bg-[#FAF7F2]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-md bg-[#E8E2D8] border border-[#DDD]">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/80513bd1-30ee-4a2d-aaf6-782d9be095ce/Jennifer+A+-+Images+%2866%29.jpg"
                  alt="Counseling in Newbury Park, CA"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Typography */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 lg:pl-6">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8B6B55] block">
                ONLINE & IN-PERSON COUNSELING IN NEWBURY PARK & ACROSS CA
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2B2B2B] font-normal leading-tight text-balance">
                Rebuild your foundation on solid ground and finally begin to thrive.
              </h1>
              <p className="text-base sm:text-lg text-[#555] leading-relaxed max-w-2xl">
                Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#2B2B2B] text-white font-medium text-sm sm:text-base hover:bg-black transition-colors shadow-sm"
                >
                  <span>Book an Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Intro */}
      <section className="py-20 bg-[#F4EFEA] border-y border-[#E5E0D8]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2B2B] font-normal leading-snug">
                You’re holding onto hope that life can be better than it is right now.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#555] leading-relaxed text-sm sm:text-base">
                <div className="space-y-4">
                  <p>
                    At Conejo Valley Family Counseling we want to make that hope a reality. Whether you&apos;re an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space.
                  </p>
                </div>
                <div className="space-y-4">
                  <p>
                    First and foremost, we believe what you’re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md bg-[#DDD]">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7a40691c-70a5-4307-b9ae-974592087a8f/Jennifer+A+-+Images+%283%29.jpg"
                  alt="Therapy support"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Who We Help */}
      <section id="who-we-help" className="py-20 bg-[#FAF7F2]">
        <Container size="wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2B2B]">Who we help</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Adults",
                desc: "Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.",
                img: "https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/066f60e6-1354-4d47-a586-ab3f2f2ba612/Jennifer+A+-+Images+%288%29.jpg"
              },
              {
                title: "Couples",
                desc: "Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy.",
                img: "https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/d0157712-388c-4800-aada-c78db97ee966/Jennifer+A+-+Images+%289%29.jpg"
              },
              {
                title: "Children & Teens",
                desc: "Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood while working closely with their parents.",
                img: "https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/d5d62bf4-34a7-4bf4-bf00-e1169863ace7/Jennifer+A+-+Images+%2810%29.jpg"
              }
            ].map((card, i) => (
              <div key={i} className="flex flex-col bg-white p-6 rounded-2xl border border-[#E5E0D8] shadow-xs">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-[#E8E2D8]">
                  <Image src={card.img} alt={card.title} fill className="object-cover" />
                </div>
                <h3 className="font-serif text-2xl text-[#2B2B2B] mb-2">{card.title}</h3>
                <p className="text-sm text-[#555] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quote */}
      <section className="relative py-24 bg-[#1E2322] text-white text-center">
        <Container size="narrow">
          <blockquote className="font-serif text-2xl sm:text-4xl leading-relaxed text-balance">
            “You deserve a place where your story is heard, valued, and understood. Nothing will be too heavy for us to carry together.”
          </blockquote>
        </Container>
      </section>

      {/* Expertise */}
      <section className="py-16 bg-[#F4EFEA] border-b border-[#E5E0D8]">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <h3 className="font-serif text-3xl text-[#2B2B2B]">Our areas of expertise</h3>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                {[
                  "Dissociation", "Trauma", "Family conflict", "Special needs parenting",
                  "Depression", "Marriage", "Anxiety", "Relationships",
                  "Children", "Teens", "Intimacy & connection", "…and more."
                ].map((item, i) => (
                  <div key={i} className="p-3 bg-white rounded-lg border border-[#DDD] text-center font-medium text-[#333]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* How We Work */}
      <section id="about" className="py-20 bg-[#FAF7F2]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#8B6B55] font-semibold">HOW WE WORK</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2B2B]">We’re here to make a difference.</h2>
              <p className="text-[#555] leading-relaxed text-sm sm:text-base">
                The clients we work with are balancing so many things at once, it’s often hard for them to put themselves first. Here, your needs are always top priority. Our team takes the time to deeply listen in order to truly understand your story and struggles.
              </p>
              <p className="text-[#555] leading-relaxed text-sm sm:text-base">
                Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you’ve learned in your daily life.
              </p>
              <a href="#contact" className="inline-block text-sm font-semibold underline underline-offset-4 text-[#2B2B2B] hover:text-[#8B6B55]">
                Learn more about us
              </a>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-md bg-[#DDD]">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/389808ad-7273-4e03-a32b-c172aa735f12/Jennifer+A+-+Images+%286%29.jpg"
                  alt="Therapy practice"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Divider */}
      <section className="py-16 bg-[#F4EFEA] border-y border-[#E5E0D8]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#DDD]">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/6f1501bf-74a5-4c57-a957-8ce4c5876848/Jennifer+A+-+Images+%285%29.jpg"
                  alt="Inspiration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-6">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2B2B] leading-tight">
                Honoring where you’ve been & helping shape where you’re headed.
              </h2>
            </div>
          </div>
        </Container>
      </section>

      {/* Specialties */}
      <section id="specialties" className="py-20 bg-[#FAF7F2]">
        <Container size="wide">
          <h3 className="font-serif text-3xl sm:text-4xl text-[#2B2B2B] mb-12">Our specialties include…</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Trauma",
                desc: "We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay 'stuck,' and regain a sense of safety, control, and hope."
              },
              {
                title: "Dissociation",
                desc: "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences and recognize your triggers."
              },
              {
                title: "EMDR",
                desc: "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain."
              },
              {
                title: "Special Needs Parenting",
                desc: "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise."
              }
            ].map((spec, idx) => (
              <div key={idx} className="p-6 bg-white rounded-xl border border-[#E5E0D8] space-y-3">
                <h4 className="font-serif text-2xl text-[#2B2B2B]">{spec.title}</h4>
                <p className="text-sm text-[#555] leading-relaxed">{spec.desc}</p>
                <a href="#contact" className="inline-block text-xs font-semibold text-[#8B6B55] underline underline-offset-4">
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <StageAFaqSection />

      {/* Contact */}
      <section id="contact" className="py-20 bg-[#F4EFEA] border-t border-[#E5E0D8]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="hidden lg:block lg:col-span-3">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#DDD]">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/1b9495e0-ce39-4826-9df9-e24de99da82f/Jennifer+A+-+Images+%2812%29.jpg"
                  alt="Booking"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-6 text-center space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#8B6B55] font-semibold">SCHEDULE AN APPOINTMENT</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2B2B]">Find a therapist who is the right fit for you.</h2>
              <p className="text-sm sm:text-base text-[#555] leading-relaxed max-w-lg mx-auto">
                Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. Click below to schedule an appointment.
              </p>
              <div className="pt-2">
                <a
                  href="mailto:info@conejovalleycounseling.com"
                  className="inline-block px-8 py-3.5 rounded-full bg-[#2B2B2B] text-white font-medium hover:bg-black transition-colors"
                >
                  Book now
                </a>
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-3">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#DDD]">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7557312a-044d-4489-a9d1-6f43ee9888b1/Jennifer+A+-+Images+%2811%29.jpg"
                  alt="Appointment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-14 bg-[#2B2B2B] text-white">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-[#444] text-sm text-[#BBB]">
            <div className="space-y-3">
              <h3 className="text-white font-serif text-xl">Conejo Valley Family Counseling</h3>
              <p>We want to make getting started simple. You’re welcome to come into our office in Newbury Park or schedule virtual appointments from anywhere in CA.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-white font-semibold text-xs uppercase tracking-wider">Navigate</h4>
              <p><a href="#hero" className="hover:text-white">Home</a></p>
              <p><a href="#about" className="hover:text-white">About</a></p>
              <p><a href="#specialties" className="hover:text-white">Specialties</a></p>
              <p><a href="#faqs" className="hover:text-white">FAQs</a></p>
              <p><a href="#contact" className="hover:text-white">Contact</a></p>
            </div>
            <div className="space-y-2">
              <h4 className="text-white font-semibold text-xs uppercase tracking-wider">Contact & Location</h4>
              <p>925 Broadbeck Dr Suites 200 and 225, Newbury Park, CA 91320</p>
              <p>info@conejovalleycounseling.com • 805.242.3120</p>
              <p className="text-xs text-[#888]">Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, & Simi Valley</p>
            </div>
          </div>
          <div className="pt-6 text-center text-xs text-[#777]">
            <p>Terms | Privacy Policy | Disclaimer | Website by Walker Strategy Co.</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
