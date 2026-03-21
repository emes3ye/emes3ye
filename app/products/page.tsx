import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products — Shafiul Islam",
  description:
    "Tools and extensions built by Shafiul Islam. Practical software that solves real problems.",
  openGraph: {
    title: "Products — Shafiul Islam",
    description:
      "Tools and extensions built by Shafiul Islam. Practical software that solves real problems.",
  },
};

const products = [
  {
    slug: "leetview",
    name: "LeetView",
    tagline: "Track your LeetCode grind — privately.",
    description:
      "A Chrome extension that logs every accepted LeetCode submission locally in your browser. No account, no server, no tracking. Just a clean history of the problems you've solved.",
    status: "Live",
    platform: "Chrome Extension",
    href: "/products/leetview",
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
          Things I&apos;ve built
        </h1>
        <p className="text-muted text-lg max-w-xl leading-relaxed">
          Practical tools and extensions I&apos;ve shipped. Each one solves a
          specific problem I ran into personally.
        </p>
      </div>

      <div className="grid gap-6">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={product.href}
            className="group block border border-black/8 dark:border-white/8 rounded-2xl p-8 hover:border-accent/30 hover:bg-accent/[0.02] transition-all duration-300"
          >
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
            <p className="mt-5 text-sm text-accent font-heading font-semibold group-hover:gap-2 flex items-center gap-1.5 transition-all duration-200">
              View product{" "}
              <span aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform duration-200 inline-block">→</span>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
