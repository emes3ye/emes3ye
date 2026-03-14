import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Decorative gradient orbs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none bg-accent"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none bg-secondary"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center hero-fade-up">
        <h1 className="font-heading font-extrabold text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight text-balance mb-6">
          Building Halal Businesses That Create Purpose-Driven Employment
        </h1>
        <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 text-balance">
          Entrepreneur. Software Engineer. Halal Investor. Helping people solve
          financial barriers so they can focus on what truly matters.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/ventures"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-accent text-white font-heading font-semibold text-sm tracking-wide hover:bg-accent/90 transition-colors duration-200"
          >
            Explore My Ventures
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-accent text-accent font-heading font-semibold text-sm tracking-wide hover:bg-accent hover:text-white transition-colors duration-200"
          >
            Get In Touch
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce" aria-hidden="true">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-muted"
        >
          <path
            d="M5 8l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
