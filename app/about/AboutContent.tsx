"use client";

import Link from "next/link";
import { useInView } from "@/hooks/useInView";

const values = [
  {
    title: "Faith First",
    description:
      "Islamic principles guide every decision I make — in business, investment, and life. Halal isn't a constraint; it's a compass.",
  },
  {
    title: "Halal Impact",
    description:
      "I build businesses that create ethical, purpose-driven employment — so others can pursue what truly matters to them.",
  },
  {
    title: "Continuous Growth",
    description:
      "Every day is an opportunity to improve. Reading, fitness, and reflection aren't extras — they're foundations.",
  },
];

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

export default function AboutContent() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <AnimatedSection className="mb-16 md:mb-24">
        <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-foreground mb-4">
          About Shafiul
        </h1>
        <p className="text-muted text-xl md:text-2xl">
          Engineer. Entrepreneur. Investor. Muslim.
        </p>
      </AnimatedSection>

      {/* My Story */}
      <AnimatedSection className="mb-16 md:mb-24">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8">
          My Story
        </h2>
        <div className="prose-custom space-y-5 text-muted text-lg leading-relaxed">
          <p>
            Everything I do is shaped by my faith. Growing up, I saw that the
            conventional financial world wasn&apos;t built for people like me —
            people who wanted to build wealth without compromising their values.
            That tension became my fuel.
          </p>
          <p>
            For over eight years, I&apos;ve been a software engineer at Amazon,
            designing scalable systems and leading cross-team initiatives that
            serve millions of customers. The experience taught me rigour,
            ownership, and the power of long-term thinking. But the corporate
            path was never the destination — it was the training ground.
          </p>
          <p>
            I founded{" "}
            <a
              href="https://carrotsoft.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              Carrot Soft
            </a>{" "}
            to prove that bootstrapped software companies can compete with
            anyone. No VC, no compromise, just building products that solve real
            problems. Alongside that, I&apos;ve been investing in halal food
            businesses and building a rent-to-rent property portfolio —
            generating income streams that are clean, ethical, and scalable.
          </p>
          <p>
            My vision is simple: create enough halal employment that people
            around me can wake up excited about their work. When people
            aren&apos;t stressed about money, they can focus on what truly
            matters — family, faith, and purpose.
          </p>
          <p>
            I&apos;m also building a digital marketing agency to help small
            businesses compete in the attention economy. Great products deserve
            great reach.
          </p>
          <p>
            Every day, I try to be a slightly better version of who I was
            yesterday. Not perfect — just better. That&apos;s the only metric I
            track consistently.
          </p>
        </div>
      </AnimatedSection>

      {/* What Drives Me */}
      <AnimatedSection className="mb-16 md:mb-24">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8">
          What Drives Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <div
              key={i}
              className="rounded-2xl border border-black/10 bg-background p-7 flex flex-col gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="font-heading font-bold text-accent text-xs">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground">
                {value.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Beyond Work */}
      <AnimatedSection className="mb-16 md:mb-24">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">
          Beyond Work
        </h2>
        <div className="text-muted text-lg leading-relaxed space-y-4">
          <p>
            I&apos;ve been a Manchester United fan for as long as I can
            remember. I still play five-a-side whenever I can, though I&apos;m
            considerably slower than I used to be and significantly better at
            excuses.
          </p>
          <p>
            Non-fiction is my thing — biographies, business, psychology, and the
            occasional philosophy deep dive. If you want a book recommendation,
            I probably have three.
          </p>
          <p>
            I try to cook, though time doesn&apos;t always cooperate. When I do,
            it&apos;s almost always something my grandmother would recognise.
          </p>
          <p>
            Nothing clears my head like being near the sea, or up a mountain, or
            both. Hiking trips are on the calendar wherever possible. The gym is
            non-negotiable — it&apos;s where I think through most of my best
            ideas.
          </p>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection>
        <div className="rounded-2xl bg-accent/5 border border-accent/20 p-10 text-center">
          <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
            Want to work together?
          </h2>
          <p className="text-muted mb-8 max-w-md mx-auto">
            Whether it&apos;s a project, an investment, or just a conversation —
            I&apos;m always open to connecting with the right people.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-accent text-white font-heading font-semibold text-sm tracking-wide hover:bg-accent/90 transition-colors duration-200"
          >
            Get In Touch
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
}
