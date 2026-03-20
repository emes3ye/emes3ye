"use client";

import Link from "next/link";
import { useInView } from "@/hooks/useInView";

// ─── Data ────────────────────────────────────────────────────────────────────

const currentRole = {
  title: "Founder & CEO",
  company: "Carrot Soft",
  period: "2022 – Present",
  location: "London, UK",
  summary:
    "Leading a bootstrapped software company that ships B2B SaaS products and bespoke client solutions. Responsible for technical architecture, product strategy, hiring, and revenue.",
};

type CareerEntry = {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
};

const timeline: CareerEntry[] = [
  {
    title: "Founder & CEO",
    company: "Carrot Soft",
    period: "2022 – Present",
    location: "London, UK",
    bullets: [
      "Architected and shipped 4 in-house SaaS products from zero to production, serving clients across the UK and Middle East.",
      "Built and managed a fully-remote engineering team; established code-review workflows, CI/CD pipelines, and engineering culture.",
      "Grew monthly recurring revenue to five figures within 18 months through a founder-led sales motion.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Thoughtworks",
    period: "2019 – 2022",
    location: "London, UK",
    bullets: [
      "Delivered large-scale digital transformation projects for FTSE 250 clients, leading squads of 6–8 engineers across frontend and backend stacks.",
      "Championed test-driven development and pair-programming practices that reduced production incidents by over 30%.",
      "Contributed to open-source tooling used by the wider Thoughtworks community and mentored junior engineers through structured growth plans.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Accenture UK",
    period: "2016 – 2019",
    location: "London, UK",
    bullets: [
      "Built full-stack features for a high-traffic e-commerce platform (React, Node.js, PostgreSQL) serving 2 M+ monthly active users.",
      "Collaborated with product and design teams in two-week agile sprints, consistently shipping features on schedule.",
      "Improved page load performance by 40% through lazy-loading, code-splitting, and CDN configuration optimisations.",
    ],
  },
  {
    title: "Junior Developer (Graduate)",
    company: "Sky UK",
    period: "2015 – 2016",
    location: "London, UK",
    bullets: [
      "Joined Sky's graduate engineering programme and rotated across three product teams: streaming, billing, and internal tooling.",
      "Shipped a self-service onboarding flow that reduced customer support tickets for account creation by 18%.",
      "Gained grounding in enterprise software delivery, version control workflows, and cross-functional collaboration.",
    ],
  },
];

type SkillGroup = {
  label: string;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "SQL", "Bash"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Figma → Code"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "Redis", "REST APIs"],
  },
  {
    label: "Infrastructure",
    skills: ["AWS", "Vercel", "Docker", "GitHub Actions", "Render"],
  },
  {
    label: "Leadership",
    skills: [
      "Team building",
      "Agile / Scrum",
      "Code review",
      "Mentoring",
      "Technical strategy",
    ],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {children}
    </div>
  );
}

function TimelineEntry({
  entry,
  index,
}: {
  entry: CareerEntry;
  index: number;
}) {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <li
      ref={ref as React.RefObject<HTMLLIElement>}
      style={{ transitionDelay: `${index * 120}ms` }}
      className={`relative pl-8 border-l-2 border-foreground/10 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {/* Dot */}
      <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-accent" />

      <div className="pb-12">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
          <h3 className="font-heading font-semibold text-lg text-foreground">
            {entry.title}
          </h3>
          <span className="text-accent font-medium text-sm">{entry.company}</span>
        </div>
        <p className="text-xs text-muted mb-4 flex flex-wrap gap-x-3">
          <span>{entry.period}</span>
          <span>{entry.location}</span>
        </p>
        <ul className="space-y-2">
          {entry.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3 text-sm text-muted leading-relaxed">
              <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-muted" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WorkContent() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Header */}
      <FadeIn>
        <div className="mb-16">
          <span className="text-xs font-heading font-semibold tracking-widest text-accent uppercase">
            Work &amp; Resume
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mt-3 mb-5 leading-tight">
            Building software.<br className="hidden sm:block" /> Leading teams.
          </h1>
          <p className="text-muted text-lg leading-relaxed max-w-xl">
            I&apos;m a senior engineer turned founder with a decade of experience
            shipping production software — from enterprise consultancies to my own
            bootstrapped SaaS company.
          </p>
        </div>
      </FadeIn>

      {/* Current role card */}
      <FadeIn delay={100}>
        <div className="mb-20 rounded-2xl border border-accent/20 bg-accent/5 p-8">
          <p className="text-xs font-heading font-semibold tracking-widest text-accent uppercase mb-4">
            Current Role
          </p>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
            <h2 className="font-heading font-bold text-2xl text-foreground">
              {currentRole.title}
            </h2>
            <span className="text-accent font-semibold">{currentRole.company}</span>
          </div>
          <p className="text-xs text-muted mb-4 flex flex-wrap gap-x-3">
            <span>{currentRole.period}</span>
            <span>{currentRole.location}</span>
          </p>
          <p className="text-muted text-sm leading-relaxed">{currentRole.summary}</p>
        </div>
      </FadeIn>

      {/* Career Timeline */}
      <FadeIn delay={150}>
        <h2 className="font-heading font-bold text-2xl text-foreground mb-10">
          Career Timeline
        </h2>
      </FadeIn>
      <ul className="mb-20">
        {timeline.map((entry, i) => (
          <TimelineEntry key={entry.company + entry.period} entry={entry} index={i} />
        ))}
      </ul>

      {/* Skills */}
      <FadeIn>
        <h2 className="font-heading font-bold text-2xl text-foreground mb-8">
          Skills &amp; Stack
        </h2>
      </FadeIn>
      <div className="space-y-6 mb-20">
        {skillGroups.map((group, gi) => (
          <FadeIn key={group.label} delay={gi * 80}>
            <div>
              <p className="text-xs font-heading font-semibold tracking-widest text-muted uppercase mb-3">
                {group.label}
              </p>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-foreground/5 text-sm text-foreground font-medium"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Resume download + CTA */}
      <FadeIn>
        <div className="rounded-2xl bg-foreground/[0.03] border border-foreground/8 p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
          <div>
            <h2 className="font-heading font-bold text-xl text-foreground mb-1">
              Download my CV
            </h2>
            <p className="text-sm text-muted">
              One-page PDF — updated March 2026.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white text-sm font-heading font-semibold hover:bg-accent/90 transition-colors duration-200"
            >
              <DownloadIcon />
              Download CV
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-foreground/15 text-foreground text-sm font-heading font-semibold hover:border-foreground/30 transition-colors duration-200"
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>
      </FadeIn>

      {/* Recruiter pitch link */}
      <FadeIn delay={80}>
        <div className="mt-6 rounded-2xl border border-accent/20 bg-accent/5 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div>
            <p className="text-xs font-heading font-semibold tracking-widest text-accent uppercase mb-1">
              For Recruiters &amp; Hiring Managers
            </p>
            <p className="text-sm text-muted leading-relaxed">
              Detailed L6 pitch — real impact numbers, flagship projects, LP evidence.
            </p>
          </div>
          <Link
            href="/open-to-work"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white text-sm font-heading font-semibold hover:bg-accent/90 transition-colors duration-200"
          >
            View full pitch →
          </Link>
        </div>
      </FadeIn>
    </main>
  );
}

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
