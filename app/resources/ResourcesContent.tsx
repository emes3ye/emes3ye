"use client";

import { useInView } from "@/hooks/useInView";

type Resource = {
  name: string;
  description: string;
  href: string;
  tag?: string;
};

type Section = {
  id: string;
  title: string;
  subtitle: string;
  items: Resource[];
};

const sections: Section[] = [
  {
    id: "books",
    title: "Books",
    subtitle: "Non-fiction that shaped how I think about business, life, and faith.",
    items: [
      {
        name: "The Almanack of Naval Ravikant",
        description:
          "A guide to wealth and happiness — distilled from years of Naval's tweets, podcasts, and essays. Changed how I think about leverage and long-term decisions.",
        href: "https://www.navalmanack.com/",
        tag: "Mindset",
      },
      {
        name: "Zero to One",
        description:
          "Peter Thiel's counter-intuitive lessons on startups and innovation. Building something truly new rather than copying what already works.",
        href: "https://www.goodreads.com/book/show/18050143-zero-to-one",
        tag: "Business",
      },
      {
        name: "The Psychology of Money",
        description:
          "Morgan Housel on how emotions, biases, and history shape our relationship with money. Essential reading for any investor.",
        href: "https://www.goodreads.com/book/show/41881472-the-psychology-of-money",
        tag: "Finance",
      },
      {
        name: "Atomic Habits",
        description:
          "James Clear's practical framework for building good habits and breaking bad ones. Small 1% improvements compound into remarkable results.",
        href: "https://jamesclear.com/atomic-habits",
        tag: "Productivity",
      },
      {
        name: "The Hard Thing About Hard Things",
        description:
          "Ben Horowitz on the brutally honest reality of building and running a startup. No platitudes — just real lessons from real pain.",
        href: "https://www.goodreads.com/book/show/18176747-the-hard-thing-about-hard-things",
        tag: "Business",
      },
      {
        name: "The Intelligent Investor",
        description:
          "Benjamin Graham's timeless bible on value investing. Principles that work equally well in halal investing — focus on fundamentals, not noise.",
        href: "https://www.goodreads.com/book/show/106835.The_Intelligent_Investor",
        tag: "Finance",
      },
    ],
  },
  {
    id: "tools",
    title: "Tools I Use",
    subtitle: "Software and services that power my work every day.",
    items: [
      {
        name: "Linear",
        description:
          "The best project management tool I've used. Fast, opinionated, and built for engineers. Replaced Jira for all my personal and Carrot Soft projects.",
        href: "https://linear.app",
        tag: "Productivity",
      },
      {
        name: "Vercel",
        description:
          "Deployment and hosting for all my Next.js projects. Zero config, instant previews, and edge functions that actually work.",
        href: "https://vercel.com",
        tag: "Dev",
      },
      {
        name: "Supabase",
        description:
          "Open-source Firebase alternative with Postgres at its core. My go-to for any project that needs a database and auth out of the box.",
        href: "https://supabase.com",
        tag: "Dev",
      },
      {
        name: "Notion",
        description:
          "Where I do all my thinking and planning. Second brain for notes, business docs, research, and personal goal tracking.",
        href: "https://notion.so",
        tag: "Productivity",
      },
      {
        name: "Resend",
        description:
          "Modern email API for developers. Replaced SendGrid — far simpler DX, better deliverability, and a generous free tier.",
        href: "https://resend.com",
        tag: "Dev",
      },
      {
        name: "Raycast",
        description:
          "Supercharged spotlight replacement for Mac. Snippets, clipboard history, window management, and AI — all from the keyboard.",
        href: "https://raycast.com",
        tag: "Productivity",
      },
    ],
  },
  {
    id: "courses",
    title: "Courses & Learning",
    subtitle: "Resources that helped me level up as an engineer and entrepreneur.",
    items: [
      {
        name: "CS50 — Harvard",
        description:
          "The best free introduction to computer science. Changed how I think about problem solving. Essential for anyone serious about software.",
        href: "https://cs50.harvard.edu/",
        tag: "Engineering",
      },
      {
        name: "Total TypeScript by Matt Pocock",
        description:
          "Went from writing TypeScript to understanding it. Matt's workshops are the most practical and well-structured TS learning resource out there.",
        href: "https://www.totaltypescript.com/",
        tag: "Engineering",
      },
      {
        name: "Startup School by Y Combinator",
        description:
          "Free curriculum from YC on how to build a startup. Watched this before launching Carrot Soft — clear, no-nonsense, and genuinely useful.",
        href: "https://www.startupschool.org/",
        tag: "Business",
      },
      {
        name: "The Muslim Money Guy",
        description:
          "A brilliant resource for halal personal finance and investing in the UK. Covers ISAs, halal investment accounts, and Islamic finance principles clearly.",
        href: "https://www.muslimmoneyguy.com/",
        tag: "Finance",
      },
      {
        name: "Patrick Boyle on Finance",
        description:
          "YouTube channel by a former hedge fund manager. One of the clearest explainers of macro-economics, derivatives, and markets I've found.",
        href: "https://www.youtube.com/@PBoyle",
        tag: "Finance",
      },
    ],
  },
];

const tagColors: Record<string, string> = {
  Mindset: "bg-accent/10 text-accent",
  Business: "bg-secondary/15 text-secondary",
  Finance: "bg-blue-50 text-blue-700",
  Productivity: "bg-purple-50 text-purple-700",
  Dev: "bg-accent/10 text-accent",
  Engineering: "bg-accent/10 text-accent",
};

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

function ResourceCard({ item }: { item: Resource }) {
  const tagClass = item.tag ? (tagColors[item.tag] ?? "bg-black/5 text-foreground") : "";
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 rounded-2xl border border-black/10 bg-background p-6 hover:border-accent/40 hover:shadow-sm transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-heading font-semibold text-base text-foreground group-hover:text-accent transition-colors duration-200 leading-snug">
          {item.name}
        </h3>
        {item.tag && (
          <span
            className={`shrink-0 text-xs font-heading font-medium px-2.5 py-1 rounded-full ${tagClass}`}
          >
            {item.tag}
          </span>
        )}
      </div>
      <p className="text-muted text-sm leading-relaxed">{item.description}</p>
      <div className="mt-auto pt-1 flex items-center gap-1.5 text-accent text-xs font-heading font-medium">
        <span>View resource</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
          aria-hidden="true"
        >
          <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5.5M9.5 2.5V6.5" />
        </svg>
      </div>
    </a>
  );
}

export default function ResourcesContent() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <AnimatedSection className="mb-16 md:mb-24">
        <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-foreground mb-4">
          Resources
        </h1>
        <p className="text-muted text-xl md:text-2xl max-w-2xl">
          Books, tools, and courses I genuinely recommend — things I return to
          again and again.
        </p>
      </AnimatedSection>

      {/* Sections */}
      <div className="space-y-20 md:space-y-28">
        {sections.map((section) => (
          <AnimatedSection key={section.id}>
            <div className="mb-8">
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-2">
                {section.title}
              </h2>
              <p className="text-muted text-base md:text-lg">{section.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {section.items.map((item) => (
                <ResourceCard key={item.name} item={item} />
              ))}
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Footer note */}
      <AnimatedSection className="mt-20 md:mt-28">
        <div className="rounded-2xl bg-accent/5 border border-accent/20 p-8 text-center">
          <p className="text-muted text-base">
            Some links may be affiliate links — if you purchase through them,
            I may earn a small commission at no extra cost to you. I only
            recommend things I personally use and believe in.
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
}
