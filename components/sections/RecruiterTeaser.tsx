"use client";

import Link from "next/link";
import { useInView } from "@/hooks/useInView";

const skills = ["TypeScript", "React", "Next.js", "Node.js", "AWS", "Team leadership"];

export default function RecruiterTeaser() {
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`max-w-6xl mx-auto px-6 py-16 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="rounded-2xl border border-foreground/8 bg-foreground/[0.02] p-8 md:p-12 flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
        {/* Left */}
        <div className="max-w-lg">
          <span className="text-xs font-heading font-semibold tracking-widest text-accent uppercase">
            For Recruiters
          </span>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mt-3 mb-4 leading-snug">
            10 years of engineering.<br className="hidden sm:block" /> Now building my own.
          </h2>
          <p className="text-muted text-sm leading-relaxed mb-6">
            Senior engineer turned founder — ex Thoughtworks, Accenture, Sky UK. I&apos;m
            selectively open to fractional CTO or advisory roles with mission-aligned
            companies.
          </p>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="px-3 py-1.5 rounded-full bg-foreground/5 text-xs text-foreground font-medium"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-3 shrink-0">
          <Link
            href="/work"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent text-white text-sm font-heading font-semibold hover:bg-accent/90 transition-colors duration-200"
          >
            View full profile
          </Link>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-foreground/15 text-foreground text-sm font-heading font-semibold hover:border-foreground/30 transition-colors duration-200"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
