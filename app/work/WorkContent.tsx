"use client";

import Link from "next/link";
import { useInView } from "@/hooks/useInView";

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "$7.66B", label: "Total licensed asset value automated (UEL Cap)" },
  { value: "$1.6B", label: "Payment risk mitigated (India SVOD Iceberg)" },
  { value: "$59M", label: "GL journal entries automated (TRAM2GL Luna)" },
  { value: "3,500 hrs", label: "Manual work eliminated (India SVOD Iceberg)" },
  { value: "30×", label: "Query performance improvement (3 hrs → 6 min)" },
  { value: "2×", label: "Customer Obsession Award winner" },
  {
    value: "Exceeds High Bar",
    label: "Forte rating, 2025 — Amazon's top tier, awarded to <10% of engineers",
  },
  { value: "504K lines", label: "Code authored in 2025 alone" },
];

const projects = [
  {
    title: "UEL Cap Automation — $7.66B scope",
    what: "Owned the full technical design and delivery of an amortisation cap enforcement system touching 122,000+ run-of-series licences across 5 currencies. Coordinated Accounting, Acquire, Cost Allocator, and PM teams across organisations with VP-level visibility (tracked in Matthias's Asana).",
    outcome: "$7.66B in licensed asset value now managed automatically; zero major incidents post-launch.",
    signal:
      "Ambiguous, org-wide problem → clear design doc → on-time delivery with full stakeholder alignment.",
  },
  {
    title: "India SVOD Iceberg — Worldwide First, $1.6B risk",
    what: "Designed and delivered the first-ever India SVOD payment pipeline through Amazon's Iceberg system. Worked directly with Prime Video Business, Finance, Legal, and Accounting teams across time zones.",
    outcome: "Eliminated ~3,500 manual processing hours; $1.6B in payment risk now correctly managed.",
    signal:
      "Cross-org initiative with no playbook — drove it from blank page to production.",
  },
  {
    title: "Security Bug — Found What the Red Team Missed",
    what: "During TRAM Access Control Enhancement, identified a product-line-specific edit access vulnerability that the FORI OS Red Team (external security audit) had not caught. Proactively flagged and fixed; acknowledged by VP-level Accounting leadership.",
    outcome: "Security gap closed before it reached production; trust established with senior leadership.",
    signal:
      "Ownership beyond scope, security judgment, and proactive stakeholder communication.",
  },
  {
    title: "A3P3 Lambda — 30× Performance",
    what: "Inherited a broken reconciliation alarm (failing since August 2024). Diagnosed root cause: 448 DB round-trips per run. Refactored to batch queries and migrated to Redshift SPECTRUM.",
    outcome: "Runtime reduced from 3 hours to 6 minutes — a 30× improvement.",
    signal:
      "No one asked — took it on, fixed the underlying architecture, not just the symptom.",
  },
];

const lps = [
  {
    principle: "Customer Obsession",
    evidence:
      "Won Q4 2024 + Q1 2025 FinSys Empty Chair Award; released TRAM Access Control ahead of schedule for accounting stakeholders.",
  },
  {
    principle: "Ownership",
    evidence:
      "Drove UEL Cap solo while team lead was OOO; owned Sev-2 response for 188 delayed partner payments (37 contracts, 182 resolved).",
  },
  {
    principle: "Invent & Simplify",
    evidence:
      "Built automated email notifications for amortisation template changes on own initiative — no one asked.",
  },
  {
    principle: "Are Right, A Lot",
    evidence:
      "Pushed back on SNS/Salesforce integration proposal — identified 2/3 of fields were missing or wrong before external team set the wrong direction; wrote full technical assessment.",
  },
  {
    principle: "Dive Deep",
    evidence:
      "Diagnosed Hibernate flush-order race condition only visible outside debug mode; diagnosed n+1 join outage; traced Redshift IAM + DATASHARE → SPECTRUM migration path.",
  },
  {
    principle: "Deliver Results",
    evidence:
      "Exceeds High Bar performance rating; 250 code changes + 504K LOC in 2025; all major projects shipped on time.",
  },
  {
    principle: "Raise the Bar",
    evidence:
      "Certified Amazon interviewer (6+ loops); selected as FinSys AI Bar Raiser to drive AI-Native adoption across the team.",
  },
];

const timeline = [
  {
    year: "2018",
    desc: "ACM ICPC Dhaka Regional (8th), BUET IUPC (9th), NCPC (7th) — competitive programming foundation.",
  },
  {
    year: "2018–2019",
    desc: "Samsung R&D Bangladesh — iOS engineering, VeoSens B2B healthcare platform.",
  },
  {
    year: "2019–2020",
    desc: "CodeMarshal — ML/CV: NID detector, 100% accuracy, no paid APIs.",
  },
  {
    year: "2020–2021",
    desc: "Tiger IT — Signal Protocol end-to-end encryption for desktop messaging.",
  },
  {
    year: "2021–Present",
    desc: "Amazon London — SDE II, Prime Video FinSys. Financial systems at global scale.",
  },
  {
    year: "2025–Present",
    desc: "Building imfluence.co.uk — influencer platform for Muslim brands.",
  },
];

// ─── Shared animation wrapper ─────────────────────────────────────────────────

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WorkContent() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      {/* ── 1. Hero ──────────────────────────────────────────────────────────── */}
      <FadeIn>
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-heading font-semibold tracking-wide text-accent uppercase">
              Open to L6 opportunities
            </span>
          </div>

          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
            Software Development<br className="hidden sm:block" /> Engineer II @ Amazon
            <br className="hidden sm:block" />
            <span className="text-accent">4+ years.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mb-8">
            I build and own mission-critical financial systems at Amazon scale — billions
            of dollars, zero major incidents, and a track record of shipping things other
            engineers said were too complex.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-heading font-semibold text-sm hover:bg-accent/90 transition-colors duration-200"
            >
              Let&apos;s talk
            </Link>
            <a
              href="https://linkedin.com/in/emes3ye"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-foreground/15 text-foreground font-heading font-semibold text-sm hover:border-foreground/30 transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </FadeIn>

      {/* ── 2. By the Numbers ─────────────────────────────────────────────────── */}
      <FadeIn delay={100}>
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-2">
          By the Numbers
        </h2>
        <p className="text-muted text-sm mb-8">Impact at a glance — all figures from internal Amazon records.</p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
        {stats.map((stat, i) => (
          <FadeIn key={stat.value + i} delay={i * 60}>
            <div className="rounded-2xl border border-foreground/8 bg-foreground/[0.02] p-6 h-full">
              <p className="font-heading font-bold text-2xl md:text-3xl text-accent mb-2 leading-none">
                {stat.value}
              </p>
              <p className="text-xs text-muted leading-relaxed">{stat.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* ── 3. Flagship Projects ──────────────────────────────────────────────── */}
      <FadeIn>
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-2">
          Flagship Projects
        </h2>
        <p className="text-muted text-sm mb-10">
          Four examples of the scope, depth, and judgment I operate at.
        </p>
      </FadeIn>

      <div className="space-y-6 mb-20">
        {projects.map((project, i) => (
          <FadeIn key={project.title} delay={i * 80}>
            <div className="rounded-2xl border border-foreground/8 bg-foreground/[0.02] p-8">
              <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                {project.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">{project.what}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 rounded-xl bg-accent/5 border border-accent/15 px-4 py-3">
                  <p className="text-xs font-heading font-semibold tracking-widest text-accent uppercase mb-1">
                    Outcome
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">{project.outcome}</p>
                </div>
                <div className="flex-1 rounded-xl bg-foreground/[0.03] border border-foreground/8 px-4 py-3">
                  <p className="text-xs font-heading font-semibold tracking-widest text-muted uppercase mb-1">
                    L6 Signal
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">{project.signal}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* ── 4. Leadership Principles ──────────────────────────────────────────── */}
      <FadeIn>
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-2">
          Amazon Leadership Principles — Evidence
        </h2>
        <p className="text-muted text-sm mb-8">
          Every claim is anchored to a named artefact or outcome.
        </p>
      </FadeIn>

      <FadeIn delay={80}>
        <div className="rounded-2xl border border-foreground/8 overflow-hidden mb-20">
          {lps.map((lp, i) => (
            <div
              key={lp.principle}
              className={`px-6 py-5 flex flex-col sm:flex-row gap-2 sm:gap-6 ${
                i % 2 === 0 ? "bg-foreground/[0.015]" : "bg-transparent"
              } ${i !== lps.length - 1 ? "border-b border-foreground/6" : ""}`}
            >
              <p className="font-heading font-semibold text-sm text-foreground shrink-0 w-full sm:w-52">
                {lp.principle}
              </p>
              <p className="text-sm text-muted leading-relaxed">{lp.evidence}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* ── 5. Career Timeline ────────────────────────────────────────────────── */}
      <FadeIn>
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-10">
          Career Timeline
        </h2>
      </FadeIn>

      <ul className="mb-20">
        {timeline.map((item, i) => (
          <FadeIn key={item.year} delay={i * 80}>
            <li className="relative pl-8 border-l-2 border-foreground/10">
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-accent" />
              <div className="pb-8">
                <p className="font-heading font-bold text-sm text-accent mb-1">{item.year}</p>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            </li>
          </FadeIn>
        ))}
      </ul>

      {/* ── 6. What I'm Looking For ───────────────────────────────────────────── */}
      <FadeIn>
        <div className="rounded-2xl border border-foreground/8 bg-foreground/[0.02] p-8 mb-10">
          <h2 className="font-heading font-bold text-xl text-foreground mb-4">
            What I&apos;m Looking For
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            L6 / Senior SDE role at Amazon — or equivalent Staff Engineer at a top-tier
            company. I&apos;m drawn to systems with real financial or operational
            consequence: where correctness matters and the blast radius of a bug is
            measured in dollars, not pixels. Open to London or remote-friendly roles.
          </p>
        </div>
      </FadeIn>

      {/* ── 7. CTA ───────────────────────────────────────────────────────────── */}
      <FadeIn delay={80}>
        <div className="rounded-2xl border border-accent/20 bg-accent/5 p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
          <div>
            <h2 className="font-heading font-bold text-xl text-foreground mb-1">
              Ready to talk?
            </h2>
            <p className="text-sm text-muted">
              30 minutes is enough to know if there&apos;s a fit.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white text-sm font-heading font-semibold hover:bg-accent/90 transition-colors duration-200"
            >
              Let&apos;s talk
            </Link>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-foreground/15 text-foreground text-sm font-heading font-semibold hover:border-foreground/30 transition-colors duration-200"
            >
              <DownloadIcon />
              Download CV
            </a>
            <a
              href="https://linkedin.com/in/emes3ye"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-foreground/15 text-foreground text-sm font-heading font-semibold hover:border-foreground/30 transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>
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
