"use client";

import Link from "next/link";
import { useInView } from "@/hooks/useInView";

export default function AboutPreview() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`max-w-6xl mx-auto px-6 py-24 md:py-32 transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
        {/* Text (60%) */}
        <div className="flex-1 md:w-3/5">
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-6">
            The Journey
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-8">
            I&apos;m Shafiul Islam — a tenured software engineer at Amazon with
            8+ years of experience, founder of Carrot Soft, and a halal investor
            building businesses rooted in Islamic principles. From restaurants to
            rent-to-rent properties to digital marketing, I believe in creating
            opportunities that empower people financially so they can pursue
            their true purpose. Every day, I strive to be a better version of
            myself.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-accent font-heading font-semibold text-sm hover:gap-3 transition-all duration-200"
          >
            Read my full story
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Photo placeholder (40%) */}
        <div className="relative w-full md:w-2/5 flex-shrink-0">
          <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-accent/30" aria-hidden="true" />
          <div className="relative rounded-2xl bg-gradient-to-br from-accent/10 to-secondary/10 aspect-[4/5] w-full max-w-sm mx-auto flex items-center justify-center">
            <span className="font-heading font-bold text-accent/30 text-6xl select-none">SI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
