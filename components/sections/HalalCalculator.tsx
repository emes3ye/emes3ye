"use client";

import { useState, FormEvent, useRef, useEffect } from "react";

interface YearlyBreakdown {
  year: number;
  startingValue: number;
  profit: number;
  endingValue: number;
  totalProfit: number;
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function formatPercent(value: number): string {
  return `${value.toFixed(1)}%`;
}

function calculateBreakdown(
  principal: number,
  ratePercent: number,
  years: number
): YearlyBreakdown[] {
  const rate = ratePercent / 100;
  const rows: YearlyBreakdown[] = [];
  let current = principal;

  for (let y = 1; y <= years; y++) {
    const profit = current * rate;
    const ending = current + profit;
    rows.push({
      year: y,
      startingValue: current,
      profit,
      endingValue: ending,
      totalProfit: ending - principal,
    });
    current = ending;
  }

  return rows;
}

const islamicPrinciples = [
  {
    title: "No Riba (Interest)",
    description:
      "All returns are profit-sharing or equity-based — never fixed interest, which is prohibited in Islamic finance.",
    icon: "✕",
    iconStyle: "bg-red-50 text-red-600",
  },
  {
    title: "Halal Asset Classes",
    description:
      "Invest in Sukuk (Islamic bonds), Shariah-compliant equity funds, REITs, and ethical businesses.",
    icon: "✓",
    iconStyle: "bg-accent/10 text-accent",
  },
  {
    title: "Avoid Prohibited Sectors",
    description:
      "Steer clear of alcohol, tobacco, conventional finance, gambling, and other haram industries.",
    icon: "⊘",
    iconStyle: "bg-secondary/10 text-secondary",
  },
  {
    title: "Zakat Consideration",
    description:
      "Investment wealth that crosses the nisab threshold for a full lunar year is subject to 2.5% Zakat.",
    icon: "◇",
    iconStyle: "bg-accent/10 text-accent",
  },
];

export default function HalalCalculator() {
  const [amount, setAmount] = useState<string>("10000");
  const [rate, setRate] = useState<string>("8");
  const [years, setYears] = useState<string>("10");
  const [breakdown, setBreakdown] = useState<YearlyBreakdown[]>([]);
  const [calculated, setCalculated] = useState(false);

  // Email gate state
  const [reportName, setReportName] = useState("");
  const [reportEmail, setReportEmail] = useState("");
  const [reportErrors, setReportErrors] = useState<Record<string, string>>({});
  const [reportSuccess, setReportSuccess] = useState(false);

  // Scroll animation refs
  const principlesRef = useRef<HTMLDivElement>(null);
  const reportRef = useRef<HTMLDivElement>(null);
  const [principlesVisible, setPrinciplesVisible] = useState(false);
  const [reportVisible, setReportVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === principlesRef.current && entry.isIntersecting) {
            setPrinciplesVisible(true);
          }
          if (entry.target === reportRef.current && entry.isIntersecting) {
            setReportVisible(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (principlesRef.current) observer.observe(principlesRef.current);
    if (reportRef.current) observer.observe(reportRef.current);

    return () => observer.disconnect();
  }, []);

  function handleCalculate(e: FormEvent) {
    e.preventDefault();
    const p = parseFloat(amount.replace(/,/g, ""));
    const r = parseFloat(rate);
    const t = parseInt(years, 10);

    if (isNaN(p) || p <= 0 || isNaN(r) || r <= 0 || isNaN(t) || t <= 0) return;

    const rows = calculateBreakdown(p, r, t);
    setBreakdown(rows);
    setCalculated(true);
  }

  function validateReport() {
    const errs: Record<string, string> = {};
    if (!reportName.trim()) errs.name = "Name is required.";
    if (!reportEmail.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(reportEmail)) {
      errs.email = "Please enter a valid email address.";
    }
    return errs;
  }

  function handleReportSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validateReport();
    if (Object.keys(errs).length > 0) {
      setReportErrors(errs);
      return;
    }
    setReportErrors({});
    setReportSuccess(true);
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-black/10 bg-white text-foreground text-sm placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200";

  const lastRow = breakdown[breakdown.length - 1];
  const principal = parseFloat(amount.replace(/,/g, "")) || 0;

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <div className="mb-14">
        <span className="inline-block text-xs font-heading font-semibold text-accent uppercase tracking-widest mb-4">
          Islamic Finance Tool
        </span>
        <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-foreground mb-4 leading-tight">
          Halal Investment
          <br />
          <span className="text-accent">Calculator</span>
        </h1>
        <p className="text-muted text-lg md:text-xl max-w-2xl">
          Estimate your profit-sharing returns from Shariah-compliant
          investments. No riba. No guesswork. Just clarity.
        </p>
      </div>

      {/* Calculator */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-20">
        {/* Inputs */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-black/8 bg-white p-8 shadow-sm">
            <h2 className="font-heading font-bold text-xl text-foreground mb-6">
              Your Investment
            </h2>
            <form onSubmit={handleCalculate} className="flex flex-col gap-5">
              <div>
                <label
                  htmlFor="amount"
                  className="block text-sm font-heading font-semibold text-foreground mb-1.5"
                >
                  Investment Amount (£)
                </label>
                <input
                  id="amount"
                  type="number"
                  min="1"
                  step="any"
                  placeholder="10000"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="rate"
                  className="block text-sm font-heading font-semibold text-foreground mb-1.5"
                >
                  Expected Annual Return (%)
                </label>
                <input
                  id="rate"
                  type="number"
                  min="0.1"
                  max="50"
                  step="0.1"
                  placeholder="8"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  className={inputClass}
                />
                <p className="text-xs text-muted mt-1.5">
                  Typical Shariah-compliant funds: 6–12% p.a.
                </p>
              </div>

              <div>
                <label
                  htmlFor="years"
                  className="block text-sm font-heading font-semibold text-foreground mb-1.5"
                >
                  Time Period (Years)
                </label>
                <input
                  id="years"
                  type="number"
                  min="1"
                  max="40"
                  step="1"
                  placeholder="10"
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                  className={inputClass}
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-accent text-white font-heading font-semibold text-sm tracking-wide hover:bg-accent/90 transition-all duration-200 mt-2"
              >
                Calculate Returns
              </button>
            </form>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-muted mt-4 leading-relaxed">
            For illustrative purposes only. Past performance is not indicative
            of future results. Consult a qualified Islamic finance advisor before
            investing.
          </p>
        </div>

        {/* Results */}
        <div className="lg:col-span-3">
          {!calculated ? (
            <div className="h-full rounded-2xl border border-dashed border-black/15 bg-white/50 flex flex-col items-center justify-center text-center p-12 min-h-[320px]">
              <div className="w-16 h-16 rounded-full bg-accent/8 flex items-center justify-center mb-4">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-accent"
                >
                  <path
                    d="M12 2v20M2 12h20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <p className="font-heading font-semibold text-foreground mb-1">
                Enter your details
              </p>
              <p className="text-sm text-muted">
                Fill in the form and click Calculate to see your projected
                returns.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {/* Summary cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-2xl bg-accent/6 border border-accent/15 p-6">
                  <p className="text-xs font-heading font-semibold text-accent uppercase tracking-widest mb-2">
                    Initial Investment
                  </p>
                  <p className="font-heading font-extrabold text-2xl text-foreground">
                    {formatCurrency(principal)}
                  </p>
                </div>
                <div className="rounded-2xl bg-secondary/8 border border-secondary/20 p-6">
                  <p className="text-xs font-heading font-semibold text-secondary uppercase tracking-widest mb-2">
                    Total Profit
                  </p>
                  <p className="font-heading font-extrabold text-2xl text-foreground">
                    {lastRow ? formatCurrency(lastRow.totalProfit) : "—"}
                  </p>
                </div>
                <div className="rounded-2xl bg-foreground/[0.04] border border-black/8 p-6">
                  <p className="text-xs font-heading font-semibold text-muted uppercase tracking-widest mb-2">
                    Portfolio Value
                  </p>
                  <p className="font-heading font-extrabold text-2xl text-foreground">
                    {lastRow ? formatCurrency(lastRow.endingValue) : "—"}
                  </p>
                </div>
              </div>

              {/* Year-by-year table */}
              <div className="rounded-2xl border border-black/8 bg-white overflow-hidden shadow-sm">
                <div className="px-6 py-4 border-b border-black/6">
                  <h3 className="font-heading font-bold text-sm text-foreground">
                    Year-by-Year Breakdown
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-foreground/[0.025]">
                        <th className="text-left px-6 py-3 font-heading font-semibold text-xs text-muted uppercase tracking-wider">
                          Year
                        </th>
                        <th className="text-right px-6 py-3 font-heading font-semibold text-xs text-muted uppercase tracking-wider">
                          Opening Value
                        </th>
                        <th className="text-right px-6 py-3 font-heading font-semibold text-xs text-muted uppercase tracking-wider">
                          Annual Profit
                        </th>
                        <th className="text-right px-6 py-3 font-heading font-semibold text-xs text-muted uppercase tracking-wider">
                          Closing Value
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {breakdown.map((row, i) => (
                        <tr
                          key={row.year}
                          className={
                            i % 2 === 0
                              ? "bg-white"
                              : "bg-foreground/[0.015]"
                          }
                        >
                          <td className="px-6 py-3 font-heading font-semibold text-foreground">
                            {row.year}
                          </td>
                          <td className="px-6 py-3 text-right text-muted">
                            {formatCurrency(row.startingValue)}
                          </td>
                          <td className="px-6 py-3 text-right text-accent font-semibold">
                            +{formatCurrency(row.profit)}
                          </td>
                          <td className="px-6 py-3 text-right font-heading font-bold text-foreground">
                            {formatCurrency(row.endingValue)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="px-6 py-4 border-t border-black/6 bg-accent/4">
                  <p className="text-xs text-muted">
                    <span className="font-semibold text-foreground">
                      Profit-sharing model
                    </span>{" "}
                    — returns based on equity growth and profit-sharing
                    arrangements, not interest (riba). Annual return rate:{" "}
                    <span className="text-accent font-semibold">
                      {formatPercent(parseFloat(rate))}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Islamic Finance Principles */}
      <div
        ref={principlesRef}
        className={`mb-20 transition-all duration-700 ${
          principlesVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-10">
          <span className="inline-block text-xs font-heading font-semibold text-accent uppercase tracking-widest mb-3">
            Shariah Principles
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-3">
            What Makes an Investment Halal?
          </h2>
          <p className="text-muted text-lg max-w-2xl">
            Islamic finance is built on justice, transparency and shared risk.
            Here are the core principles that guide halal investing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {islamicPrinciples.map((principle) => (
            <div
              key={principle.title}
              className="rounded-2xl border border-black/8 bg-white p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 font-bold text-lg ${principle.iconStyle}`}
              >
                {principle.icon}
              </div>
              <h3 className="font-heading font-bold text-base text-foreground mb-2">
                {principle.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Halal Asset Classes */}
      <div className="mb-20 rounded-2xl bg-accent/4 border border-accent/12 p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
              Halal Asset Classes
            </h2>
            <p className="text-muted text-base mb-6">
              These investment vehicles comply with Islamic finance principles,
              avoiding interest and prohibited sectors.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                {
                  name: "Sukuk",
                  desc: "Islamic bonds backed by real assets — profit-sharing, not interest.",
                },
                {
                  name: "Shariah Equity Funds",
                  desc: "Actively screened funds excluding haram sectors.",
                },
                {
                  name: "Halal REITs",
                  desc: "Real estate investment trusts with Shariah-compliant leases.",
                },
                {
                  name: "Direct Equity",
                  desc: "Shares in screened companies with acceptable debt ratios.",
                },
                {
                  name: "Gold & Commodities",
                  desc: "Physical gold and Shariah-compliant commodity trading.",
                },
              ].map((item) => (
                <li key={item.name} className="flex gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-accent"
                    >
                      <path
                        d="M2 5l2 2 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <span className="font-heading font-semibold text-sm text-foreground">
                      {item.name}
                    </span>
                    <span className="text-sm text-muted"> — {item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
              What to Avoid
            </h2>
            <p className="text-muted text-base mb-6">
              These are considered haram (prohibited) under Islamic law.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                {
                  name: "Riba (Interest)",
                  desc: "Any fixed or guaranteed return on a loan is prohibited.",
                },
                {
                  name: "Alcohol & Tobacco",
                  desc: "Companies primarily engaged in production or sale.",
                },
                {
                  name: "Conventional Banking",
                  desc: "Banks operating on an interest-based model.",
                },
                {
                  name: "Gambling",
                  desc: "Casinos, sports betting and speculative derivatives.",
                },
                {
                  name: "Weapons & Pork",
                  desc: "Arms manufacturers and pork-related businesses.",
                },
              ].map((item) => (
                <li key={item.name} className="flex gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-secondary"
                    >
                      <path
                        d="M2 2l6 6M8 2L2 8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <span className="font-heading font-semibold text-sm text-foreground">
                      {item.name}
                    </span>
                    <span className="text-sm text-muted"> — {item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Email Gate — Full Report */}
      <div
        ref={reportRef}
        className={`transition-all duration-700 ${
          reportVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="rounded-2xl bg-foreground p-8 md:p-12 text-center max-w-2xl mx-auto">
          {reportSuccess ? (
            <>
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-5">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-accent"
                >
                  <path
                    d="M5 12l5 5 9-9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2 className="font-heading font-extrabold text-2xl text-white mb-3">
                You&apos;re on the list!
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Your personalised Islamic Finance report is on its way. Check
                your inbox — and your spam folder just in case.
              </p>
              <button
                onClick={() => {
                  setReportSuccess(false);
                  setReportName("");
                  setReportEmail("");
                }}
                className="mt-6 text-accent/80 font-heading font-semibold text-sm hover:text-accent transition-colors"
              >
                Sign up another email
              </button>
            </>
          ) : (
            <>
              <span className="inline-block text-xs font-heading font-semibold text-accent uppercase tracking-widest mb-4">
                Free Report
              </span>
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-white mb-3">
                Get Your Personalised
                <br />
                Islamic Finance Report
              </h2>
              <p className="text-white/60 text-sm mb-8 max-w-md mx-auto leading-relaxed">
                Enter your details to receive a tailored report on halal
                investment strategies, recommended Shariah-compliant funds, and
                a personalised growth roadmap.
              </p>

              <form
                onSubmit={handleReportSubmit}
                noValidate
                className="flex flex-col gap-4 text-left max-w-sm mx-auto"
              >
                <div>
                  <label
                    htmlFor="report-name"
                    className="block text-xs font-heading font-semibold text-white/50 uppercase tracking-wider mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="report-name"
                    type="text"
                    placeholder="Muhammad Ali"
                    value={reportName}
                    onChange={(e) => setReportName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/8 text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all duration-200"
                  />
                  {reportErrors.name && (
                    <p className="text-secondary text-xs mt-1.5">
                      {reportErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="report-email"
                    className="block text-xs font-heading font-semibold text-white/50 uppercase tracking-wider mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="report-email"
                    type="email"
                    placeholder="you@example.com"
                    value={reportEmail}
                    onChange={(e) => setReportEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/8 text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all duration-200"
                  />
                  {reportErrors.email && (
                    <p className="text-secondary text-xs mt-1.5">
                      {reportErrors.email}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-accent text-white font-heading font-semibold text-sm tracking-wide hover:bg-accent/90 transition-all duration-200 mt-2"
                >
                  Get Full Report — Free
                </button>
              </form>

              <p className="text-white/30 text-xs mt-5">
                No spam. Unsubscribe at any time.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
