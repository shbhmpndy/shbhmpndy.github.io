import Blogs from "@/components/Blogs";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/ProjectSection";
import PublicationsSection from "@/components/PublicationsSection";
import LeadershipSection from "@/components/LeadershipSection";
import NewsSection from "@/components/NewsSection";
import siteConfig from "@/config/siteConfig";
import { getAllBlogs } from "@/lib/blog/getAllBlogs";

export default async function Home() {
  const blogs = await getAllBlogs();
  const showBlogs = siteConfig.blogs.include && blogs.length > 0;
  
  return (
    <main className="relative z-10">
      <Hero />
      <LeadershipSection />
      <ProjectSection />
      <PublicationsSection />
      {showBlogs && <Blogs blogs={blogs} />}
      <NewsSection />
    </main>
  );
}