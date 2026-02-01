import BlogList from "@/component/Blogs";
import Hero from "@/component/Hero";
import Navbar from "@/component/Navbar";
import RecentBlog from "@/component/RecentBlog";

export default function Home() {
  return (
    <>
      <div className="flex-col lg:mx-36 md:mx-16 mx-4 my-4 items-center ">
        <Navbar />
        <Hero />
        <RecentBlog />
        <BlogList />
      </div>
    </>
  );
}
