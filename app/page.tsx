import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import VenturesPreview from "@/components/sections/VenturesPreview";
import BlogPreview from "@/components/sections/BlogPreview";
import CTASection from "@/components/sections/CTASection";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <Hero />
      <AboutPreview />
      <VenturesPreview />
      <BlogPreview posts={recentPosts} />
      <CTASection />
    </>
  );
}
