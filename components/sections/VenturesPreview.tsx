"use client";

import Link from "next/link";
import { useInView } from "@/hooks/useInView";

const ventures = [
  {
    number: "01",
    name: "Carrot Soft",
    description:
      "A bootstrap software company delivering digital solutions for businesses ready to scale.",
    href: "https://carrotsoft.uk",
    external: true,
  },
  {
    number: "02",
    name: "Digital Marketing Agency",
    description:
      "Helping brands grow their online presence with data-driven strategies and authentic storytelling.",
    href: "/ventures",
    external: false,
  },
  {
    number: "03",
    name: "Restaurant Investments",
    description:
      "Investing in halal food businesses that serve communities with quality and integrity.",
    href: "/ventures",
    external: false,
  },
  {
    number: "04",
    name: "Rent to Rent Property",
    description:
      "Building a property portfolio that generates sustainable, halal income streams.",
    href: "/ventures",
    external: false,
  },
];

export default function VenturesPreview() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-foreground/[0.02] py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-12">
          What I&apos;m Building
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {ventures.map((venture, i) => {
            const cardClasses = `group rounded-2xl border border-black/8 bg-background p-8 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`;

            const style = {
              transitionDelay: inView ? `${i * 100}ms` : "0ms",
            };

            const content = (
              <>
                <span className="font-heading font-bold text-accent text-sm">
                  {venture.number}
                </span>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-heading font-bold text-xl text-foreground">
                    {venture.name}
                  </h3>
                  {venture.external && (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-accent flex-shrink-0 mt-1"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 13L13 3M13 3H7M13 3V9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  {venture.description}
                </p>
              </>
            );

            if (venture.external) {
              return (
                <a
                  key={venture.number}
                  href={venture.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClasses}
                  style={style}
                >
                  {content}
                </a>
              );
            }

            return (
              <div key={venture.number} className={cardClasses} style={style}>
                {content}
              </div>
            );
          })}
        </div>

        <Link
          href="/ventures"
          className="inline-flex items-center gap-2 text-accent font-heading font-semibold text-sm hover:gap-3 transition-all duration-200"
        >
          See all ventures
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
