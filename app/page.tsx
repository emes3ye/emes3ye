import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import VenturesPreview from "@/components/sections/VenturesPreview";
import BlogPreview from "@/components/sections/BlogPreview";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <VenturesPreview />
      <BlogPreview />
      <CTASection />
    </>
  );
}
