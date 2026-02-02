import BlogList from "@/component/Blogs";
import Hero from "@/component/Hero";
import NewsLetterSub from "@/component/NewsLetterSub";
import RecentBlog from "@/component/RecentBlog";
import ReviewSection from "@/component/Review";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <RecentBlog />
        <BlogList />
        <ReviewSection />
        <NewsLetterSub />
      </main>
    </>
  );
}
