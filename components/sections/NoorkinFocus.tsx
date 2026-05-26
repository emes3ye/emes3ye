"use client";

import { useInView } from "@/hooks/useInView";

export default function NoorkinFocus() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="max-w-6xl mx-auto px-6 py-20 md:py-28"
    >
      <div
        className={`rounded-3xl border border-accent/15 bg-accent/[0.03] p-8 md:p-12 transition-all duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="font-heading font-semibold text-accent text-sm tracking-widest uppercase mb-4">
          Current Focus
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <div>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-5 text-balance">
              Building Noorkin into a portfolio of useful subscription products.
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Noorkin is where my team and I ship small, focused tools that solve
              recurring problems. The goal is simple: create products people use
              every month, earn sustainable recurring revenue, and keep building
              without compromising our values.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.noorkin.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent text-white font-heading font-semibold text-sm hover:bg-accent/90 transition-colors duration-200"
              >
                Explore Noorkin ↗
              </a>
              <a
                href="https://www.noorkin.dev/products/noorlock"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-accent text-accent font-heading font-semibold text-sm hover:bg-accent hover:text-white transition-colors duration-200"
              >
                Try Noorlock ↗
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-background border border-black/5 dark:border-white/5 p-6">
            <p className="font-heading font-bold text-foreground mb-4">
              Building in public
            </p>
            <ul className="space-y-4 text-sm text-muted leading-relaxed">
              <li>
                <span className="font-heading font-semibold text-foreground">Noorlock</span>{" "}
                — Android, iOS, and browser extension to block short-form video
                distractions.
              </li>
              <li>
                <span className="font-heading font-semibold text-foreground">More products</span>{" "}
                — launching under the Noorkin brand as we validate recurring
                problems.
              </li>
              <li>
                <span className="font-heading font-semibold text-foreground">Goal</span>{" "}
                — sustainable monthly recurring revenue from useful, ethical
                software.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
