import { RecentPost } from "@/element/Posts";
import blogs from "@/data/blog.json";

export default function RecentBlog() {
  const recentPost = [...blogs].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  )[0];
  return (
    <>
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20">
        <h2 className="text-3xl md:text-3xl font-semibold mb-10">Latest Blog</h2>
        <RecentPost post={recentPost} />
      </div>
    </>
  );
}
