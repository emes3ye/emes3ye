"use client";

import Link from "next/link";
import { useInView } from "@/hooks/useInView";

export default function CTASection() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="bg-accent">
      <div
        className={`max-w-6xl mx-auto px-6 py-24 md:py-32 text-center transition-all duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-6 text-balance">
          Let&apos;s Build Something Meaningful Together
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 text-balance">
          Whether you&apos;re looking for a tech partner, investment opportunity,
          or just want to connect — I&apos;d love to hear from you.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-accent font-heading font-semibold text-sm tracking-wide hover:bg-white/90 transition-colors duration-200"
        >
          Start a Conversation
        </Link>
      </div>
    </section>
  );
}
