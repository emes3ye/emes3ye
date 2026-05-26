import type { Metadata } from "next";
import Link from "next/link";
import SupportCTA from "@/components/ui/SupportCTA";

export const metadata: Metadata = {
  title: "Products — Shafiul Islam",
  description:
    "Subscription products, apps, and extensions built by Shafiul Islam and the Noorkin team.",
  openGraph: {
    title: "Products — Shafiul Islam",
    description:
      "Subscription products, apps, and extensions built by Shafiul Islam and the Noorkin team.",
  },
};

const products = [
  {
    slug: "noorlock",
    name: "Noorlock",
    tagline: "Block short-form videos before they steal your day.",
    description:
      "The first product from Noorkin — an Android app, iOS app, and browser extension designed to block addictive short-form video feeds and help you use the internet with intention.",
    status: "Launching",
    platform: "Android · iOS · Browser Extension",
    href: "https://www.noorkin.dev/products/noorlock",
    cta: "View Noorlock ↗",
    external: true,
  },
  {
    slug: "leetview",
    name: "LeetView",
    tagline: "Track your LeetCode grind — privately.",
    description:
      "A Chrome extension that logs every accepted LeetCode submission locally in your browser. No account, no server, no tracking. Just a clean history of the problems you've solved.",
    status: "Live",
    platform: "Chrome Extension",
    href: "/products/leetview",
    cta: "View product →",
    external: false,
  },
  {
    slug: "cityrunway",
    name: "CityRunway",
    tagline: "Discover where you can fly from any airport.",
    description:
      "Pick any departure airport and instantly see every destination you can reach by direct flight — airlines, cities, and routes at a glance. Built for curious travellers who want to explore their options, not parse a timetable.",
    status: "Live",
    platform: "Web App",
    href: "https://cityrunway.emes3ye.com",
    cta: "Explore destinations ↗",
    external: true,
  },
];

export default function ProductsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
      <div className="mb-16">
        <p className="font-heading font-semibold text-accent text-sm tracking-widest uppercase mb-4">
          Products
        </p>
        <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground mb-5">
          Products I&apos;m building into sustainable businesses
        </h1>
        <p className="text-muted text-lg max-w-2xl leading-relaxed">
          Apps, extensions, and tools designed to solve real problems — with
          Noorkin focused on subscription-based products that can earn recurring
          monthly revenue by delivering recurring value.
        </p>
      </div>

      <div className="rounded-3xl border border-accent/20 bg-accent/[0.03] p-8 md:p-10 mb-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          <div>
            <p className="font-heading font-semibold text-accent text-sm tracking-widest uppercase mb-3">
              Flagship Noorkin Product
            </p>
            <h2 className="font-heading font-extrabold text-3xl text-foreground mb-3">
              Noorlock
            </h2>
            <p className="text-muted leading-relaxed max-w-2xl mb-6">
              Android, iOS, and browser extension tools to block short-form video
              feeds before they steal your attention. Built as the first Noorkin
              subscription product for intentional digital living.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-muted">
              {[
                "Android",
                "iOS",
                "Browser Extension",
                "Subscription-focused",
              ].map((item) => (
                <span key={item} className="px-3 py-1.5 rounded-full bg-background border border-black/5 dark:border-white/5">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <a
            href="https://www.noorkin.dev/products/noorlock"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent text-white font-heading font-semibold text-sm hover:bg-accent/90 transition-colors duration-200 shrink-0"
          >
            Try Noorlock ↗
          </a>
        </div>
      </div>

      <div className="grid gap-6 mb-8">
        {products.map((product) => {
          const cardClass =
            "group block border border-black/8 dark:border-white/8 rounded-2xl p-8 hover:border-accent/30 hover:bg-accent/[0.02] transition-all duration-300";
          const cardContent = (
            <>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <h2 className="font-heading font-bold text-2xl text-foreground group-hover:text-accent transition-colors duration-200">
                    {product.name}
                  </h2>
                  <span className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                    {product.status}
                  </span>
                </div>
                <span className="text-xs text-muted font-heading font-medium border border-black/10 dark:border-white/10 px-2.5 py-1 rounded-full shrink-0">
                  {product.platform}
                </span>
              </div>
              <p className="font-heading font-semibold text-foreground mb-2">
                {product.tagline}
              </p>
              <p className="text-muted leading-relaxed">{product.description}</p>
              <p className="mt-5 text-sm text-accent font-heading font-semibold flex items-center gap-1.5 transition-all duration-200">
                {product.cta}
              </p>
            </>
          );

          return product.external ? (
            <a
              key={product.slug}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cardClass}
            >
              {cardContent}
            </a>
          ) : (
            <Link
              key={product.slug}
              href={product.href}
              className={cardClass}
            >
              {cardContent}
            </Link>
          );
        })}
      </div>

      <SupportCTA />
    </div>
  );
}
