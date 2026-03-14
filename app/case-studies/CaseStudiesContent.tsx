"use client";

import Link from "next/link";
import { useInView } from "@/hooks/useInView";

type CaseStudy = {
  number: string;
  client: string;
  industry: string;
  href: string;
  challenge: string;
  solution: string;
  results: string[];
};

const caseStudies: CaseStudy[] = [
  {
    number: "01",
    client: "Snow Laundry",
    industry: "Laundry Services",
    href: "https://snowlaundry.com",
    challenge:
      "Snow Laundry was operating without a proper digital presence — no website, no online booking, and no way for customers to check opening hours or services. They were losing potential customers to competitors with better visibility.",
    solution:
      "Carrot Soft designed and built a clean, mobile-first website with an online booking system, service menu, and contact integration. We also set up Google Business Profile and implemented local SEO to drive organic discovery.",
    results: [
      "Professional web presence launched in under 3 weeks",
      "Online bookings introduced for the first time",
      "Improved local search visibility across London",
      "Customers can check pricing and availability 24/7",
    ],
  },
  {
    number: "02",
    client: "Selekt Chicken Archway",
    industry: "Halal Fast Food",
    href: "https://selektchickenarchway.com",
    challenge:
      "Selekt Chicken had strong footfall but no way to convert that into online orders or repeat customers. Their digital presence was scattered across third-party delivery apps with no brand consistency.",
    solution:
      "We built a branded website with a digital menu and integrated online ordering. Alongside this, we developed a social media content strategy focused on showcasing their halal quality and community roots.",
    results: [
      "Branded website with integrated digital menu",
      "Online ordering channel established",
      "Consistent brand identity across digital touchpoints",
      "Increased repeat customer engagement through social media",
    ],
  },
  {
    number: "03",
    client: "Penang City UK",
    industry: "Malaysian Restaurant",
    href: "https://penangcityuk.com",
    challenge:
      "Penang City UK is a beloved Malaysian restaurant with a loyal local following, but their online presence didn't reflect the quality of their food or experience. They needed a platform to showcase their menu and culture.",
    solution:
      "Carrot Soft created an immersive restaurant website with full menu, photo gallery, and reservation functionality. We focused on storytelling — bringing the Penang food culture to life online and making it easy for new customers to discover them.",
    results: [
      "Full menu and gallery website delivered",
      "Table reservation system integrated",
      "Brand story communicated effectively online",
      "Better discoverability for Malaysian cuisine searches",
    ],
  },
  {
    number: "04",
    client: "Mega Laundry",
    industry: "Laundry Services",
    href: "https://megalaundry.com",
    challenge:
      "Mega Laundry needed to modernise their business operations and connect with a younger, digital-native customer base while retaining their existing community relationships.",
    solution:
      "We built a modern website with service descriptions, pricing transparency, and a click-to-call feature. We also implemented a simple CRM to help them manage customer relationships and follow-ups.",
    results: [
      "Modern, responsive website with clear pricing",
      "Click-to-call and WhatsApp integration added",
      "Customer management process streamlined",
      "Improved trust signals for new customers",
    ],
  },
];

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const { ref, inView } = useInView();
  const isEven = index % 2 === 0;

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 md:py-24 transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${index !== 0 ? "border-t border-black/5" : ""}`}
    >
      {/* Header */}
      <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-16 items-start mb-12`}>
        <div className="flex-shrink-0 md:w-1/4">
          <span className="font-heading font-extrabold text-7xl md:text-8xl text-foreground/5 leading-none select-none block">
            {study.number}
          </span>
        </div>
        <div className="flex-1">
          <p className="text-xs font-heading font-semibold text-foreground/40 uppercase tracking-widest mb-2">
            {study.industry}
          </p>
          <h2 className="font-heading font-extrabold text-2xl md:text-4xl text-foreground mb-4">
            {study.client}
          </h2>
          <a
            href={study.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-accent text-sm font-heading font-medium hover:underline underline-offset-2"
          >
            {study.href.replace("https://", "")}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5.5M9.5 2.5V6.5" />
            </svg>
          </a>
        </div>
      </div>

      {/* Body: Challenge, Solution, Results */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Challenge */}
        <div className="rounded-2xl border border-black/10 bg-background p-6 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0">
              <div className="w-2 h-2 rounded-full bg-red-400" />
            </div>
            <h3 className="font-heading font-bold text-sm text-foreground uppercase tracking-wider">
              Challenge
            </h3>
          </div>
          <p className="text-muted text-sm leading-relaxed">{study.challenge}</p>
        </div>

        {/* Solution */}
        <div className="rounded-2xl border border-black/10 bg-background p-6 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
              <div className="w-2 h-2 rounded-full bg-accent" />
            </div>
            <h3 className="font-heading font-bold text-sm text-foreground uppercase tracking-wider">
              Solution
            </h3>
          </div>
          <p className="text-muted text-sm leading-relaxed">{study.solution}</p>
        </div>

        {/* Results */}
        <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
              <div className="w-2 h-2 rounded-full bg-accent" />
            </div>
            <h3 className="font-heading font-bold text-sm text-accent uppercase tracking-wider">
              Results
            </h3>
          </div>
          <ul className="space-y-2">
            {study.results.map((result, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted">
                <span className="text-accent mt-0.5 shrink-0">✓</span>
                <span className="leading-snug">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function CaseStudiesContent() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <AnimatedSection className="mb-8 md:mb-4">
        <p className="text-xs font-heading font-semibold text-accent uppercase tracking-widest mb-4">
          Carrot Soft
        </p>
        <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-foreground mb-4">
          Case Studies
        </h1>
        <p className="text-muted text-xl md:text-2xl max-w-2xl">
          Real clients, real results. Here&apos;s how we helped small businesses
          build their digital presence and grow.
        </p>
      </AnimatedSection>

      {/* Case studies */}
      {caseStudies.map((study, i) => (
        <CaseStudyCard key={study.client} study={study} index={i} />
      ))}

      {/* CTA */}
      <AnimatedSection className="border-t border-black/5 pt-16 md:pt-24">
        <div className="rounded-2xl bg-accent/5 border border-accent/20 p-10 text-center">
          <p className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
            Ready to grow your digital presence?
          </p>
          <p className="text-muted mb-8 max-w-md mx-auto">
            Whether you&apos;re a restaurant, service business, or local brand
            — Carrot Soft can help you compete online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-accent text-white font-heading font-semibold text-sm tracking-wide hover:bg-accent/90 transition-colors duration-200"
            >
              Work With Us
            </Link>
            <a
              href="https://carrotsoft.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-accent text-accent font-heading font-semibold text-sm tracking-wide hover:bg-accent/5 transition-colors duration-200"
            >
              Visit Carrot Soft
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
