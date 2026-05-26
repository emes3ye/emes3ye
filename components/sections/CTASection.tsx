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
          Follow along as we build Noorkin.
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 text-balance">
          We&apos;re launching subscription products that help people live and work
          with more intention — starting with Noorlock.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://www.noorkin.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-accent font-heading font-semibold text-sm tracking-wide hover:bg-white/90 transition-colors duration-200"
          >
            Visit Noorkin ↗
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/40 text-white font-heading font-semibold text-sm tracking-wide hover:bg-white hover:text-accent transition-colors duration-200"
          >
            Start a Conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
