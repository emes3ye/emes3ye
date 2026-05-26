"use client";

import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import SupportCTA from "@/components/ui/SupportCTA";

type Status = "Active" | "Launching" | "Investing" | "Growing";

const statusStyles: Record<Status, string> = {
  Active: "bg-accent/10 text-accent",
  Launching: "bg-secondary/10 text-secondary",
  Investing: "bg-secondary/10 text-secondary",
  Growing: "bg-muted/10 text-muted",
};

const ventures = [
  {
    category: "Product Studios",
    number: "01",
    name: "Noorkin",
    status: "Launching" as Status,
    href: "https://www.noorkin.dev/",
    description:
      "A product studio building focused apps and extensions for intentional living. Noorkin is our main commercial focus: a home for subscription products that solve recurring problems and create sustainable monthly income.",
    details: [
      "Noorlock — Android, iOS, and browser extension to block short-form videos",
      "Multiple products launching under the Noorkin brand",
      "Subscription-first products with recurring value",
      "Built by me and the team for digital discipline and mindful usage",
    ],
    label: "Products",
  },
  {
    category: "Product Studios",
    number: "02",
    name: "Carrot Soft",
    status: "Active" as Status,
    href: "https://carrotsoft.uk",
    description:
      "A bootstrapped software company delivering digital solutions for businesses ready to scale. Founded on the principle that you don't need venture capital to build something great — just conviction, craft, and consistency.",
    details: [
      "Eat Halal Food — a halal restaurant discovery platform",
      "DDMS — Document and Data Management System",
      "Portal — internal client communication hub",
      "Teamtrack — lightweight team project tracker",
    ],
    label: "In-house products",
  },
  {
    category: "Service Businesses",
    number: "03",
    name: "Digital Marketing Agency",
    status: "Active" as Status,
    href: null,
    description:
      "Helping brands cut through the noise with honest, data-driven digital marketing. From SEO strategy to social media to paid acquisition, we build online presence that converts.",
    details: ["SEO", "Social Media Management", "Content Strategy", "Paid Ads"],
    label: "Services",
  },
  {
    category: "Investments",
    number: "04",
    name: "Restaurant Investments",
    status: "Investing" as Status,
    href: null,
    description:
      "Building a portfolio of halal food businesses across London. Food is community — and community is the best investment I know. Every restaurant we back creates jobs and serves a neighbourhood with quality and integrity.",
    details: [
      "Halal-certified partners only",
      "London-focused",
      "Minority equity stakes",
      "Operator-first approach",
    ],
    label: "Investment principles",
  },
  {
    category: "Investments",
    number: "05",
    name: "Rent to Rent Property",
    status: "Growing" as Status,
    href: null,
    description:
      "Building a property income portfolio the halal way — no interest-based financing, no compromises. Rent-to-rent allows me to generate sustainable returns while providing quality housing for tenants.",
    details: [
      "No riba (interest-free structures)",
      "HMO and single-let properties",
      "London and surrounding areas",
      "Focused on long-term yield",
    ],
    label: "Portfolio focus",
  },
];

const ventureCategories = ["Product Studios", "Service Businesses", "Investments"] as const;

function VentureSection({
  venture,
  index,
}: {
  venture: (typeof ventures)[0];
  index: number;
}) {
  const { ref, inView } = useInView();
  const isEven = index % 2 === 0;

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 md:py-28 transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${index !== 0 ? "border-t border-black/5" : ""}`}
    >
      <div
        className={`flex flex-col ${
          isEven ? "md:flex-row" : "md:flex-row-reverse"
        } gap-12 md:gap-20 items-start`}
      >
        {/* Decorative number */}
        <div className="flex-shrink-0 md:w-1/3 flex flex-col gap-4">
          <span className="font-heading font-extrabold text-8xl md:text-9xl text-foreground/5 leading-none select-none">
            {venture.number}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground">
              {venture.name}
            </h2>
            <span
              className={`px-3 py-1 rounded-full text-xs font-heading font-semibold ${
                statusStyles[venture.status]
              }`}
            >
              {venture.status}
            </span>
          </div>

          <p className="text-muted text-lg leading-relaxed mb-8">
            {venture.description}
          </p>

          <div className="mb-8">
            <p className="text-xs font-heading font-semibold text-foreground/40 uppercase tracking-widest mb-3">
              {venture.label}
            </p>
            <ul className="flex flex-wrap gap-2">
              {venture.details.map((detail) => (
                <li
                  key={detail}
                  className="px-3 py-1.5 rounded-lg bg-foreground/5 text-sm text-muted"
                >
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          {venture.href && (
            <a
              href={venture.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-accent text-accent font-heading font-semibold text-sm hover:bg-accent hover:text-white transition-colors duration-200"
            >
              Visit {venture.name}
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default function VenturesContent() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <div className="mb-16 md:mb-4">
        <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-foreground mb-4">
          Ventures &amp; Investments
        </h1>
        <p className="text-muted text-xl max-w-2xl">
          Everything I build is grounded in halal principles — ethical, purposeful,
          and designed to create real opportunity for real people.
        </p>
      </div>

      {/* Venture sections */}
      {ventureCategories.map((category) => {
        const categoryVentures = ventures.filter(
          (venture) => venture.category === category
        );

        return (
          <div key={category} className="border-t border-black/5 pt-12 first:border-t-0 first:pt-0">
            <p className="font-heading font-semibold text-accent text-sm tracking-widest uppercase mb-2">
              {category}
            </p>
            {category === "Product Studios" && (
              <p className="text-muted max-w-2xl mb-4">
                Noorkin is the primary focus: small subscription products with
                recurring value, backed by the craft and execution discipline I
                developed through Carrot Soft.
              </p>
            )}
            {categoryVentures.map((venture) => (
              <VentureSection
                key={venture.number}
                venture={venture}
                index={ventures.findIndex((item) => item.number === venture.number)}
              />
            ))}
          </div>
        );
      })}

      <div className="border-t border-black/5 pt-12 mb-12">
        <SupportCTA />
      </div>

      {/* Contact CTA */}
      <div className="border-t border-black/5 pt-20 text-center">
        <p className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">
          Interested in partnering? Let&apos;s talk.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-accent text-white font-heading font-semibold text-sm tracking-wide hover:bg-accent/90 transition-colors duration-200"
        >
          Get In Touch
        </Link>
      </div>
    </div>
  );
}
