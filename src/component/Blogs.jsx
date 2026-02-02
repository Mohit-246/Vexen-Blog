"use client";

import { useState } from "react";
import blogs from "@/data/blog.json";
import { BlogCard } from "@/element/Posts";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const SORT_OPTIONS = ["Latest", "Popular"];

const POPULAR_TAGS = [
  "All",
  "Backend",
  "System Design",
  "Web Dev",
  "Cloud",
  "Security",
];

export default function BlogList() {
  const [sortBy, setSortBy] = useState("Latest");
  const [activeTag, setActiveTag] = useState("All");

  /* -------------------- FILTER LOGIC -------------------- */
  const tagFilteredBlogs =
    activeTag === "All"
      ? blogs
      : blogs.filter((post) => post.tags?.includes(activeTag));

  /* -------------------- SORT LOGIC -------------------- */
  const filteredBlogs = [...tagFilteredBlogs].sort((a, b) => {
    if (sortBy === "Latest") {
      return new Date(b.date) - new Date(a.date);
    }

    if (sortBy === "Popular") {
      return (b.views ?? 0) - (a.views ?? 0);
    }

    return 0;
  });

  return (
    <section className="mx-auto max-w-6xl px-4">
      {/* Top Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        {/* Tags Bar */}
        <ul className="flex gap-3 overflow-x-auto text-sm">
          {POPULAR_TAGS.map((tag) => (
            <li
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`cursor-pointer whitespace-nowrap px-3 py-1 rounded-full border transition
                ${
                  activeTag === tag
                    ? "bg-amber-500 text-white border-vexen-primary"
                    : "bg-neutral-50 text-neutral-600 hover:bg-neutral-100"
                }`}
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* Sort Dropdown */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-sm border border-neutral-300 rounded-md px-3 py-2 bg-white focus:outline-none"
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option} value={option}>
              Sort by {option}
            </option>
          ))}
        </select>
      </div>

      {/* Blog Grid */}
      <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2">
        {filteredBlogs.slice(0, 3).map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      <div className="flex items-center justify-end mr-10">
        <Link href={"/blog"} className="flex items-center gap-4 mt-8 text-sm text-white font-medium bg-amber-500 px-6 py-2 justify-center text-center rounded-2xl hover:scale-105 hover:bg-black transform duration-200">
          More Blogs
          <ArrowRight />
        </Link >
      </div>
    </section>
  );
}
