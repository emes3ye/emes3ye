import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-32 text-center">
      <p className="font-heading font-bold text-accent text-sm tracking-widest uppercase mb-6">
        404
      </p>
      <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-foreground mb-6">
        Page not found
      </h1>
      <p className="text-muted text-lg mb-12 max-w-md mx-auto">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-accent font-heading font-semibold hover:gap-3 transition-all duration-200"
      >
        <span aria-hidden="true">←</span> Go home
      </Link>
    </div>
  );
}
