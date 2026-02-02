"use client";

import { useEffect, useState } from "react";
import blogs from "@/data/blog.json";
import { BlogCard } from "@/element/Posts";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SORT_OPTIONS = ["Latest", "Popular"];

const POPULAR_TAGS = [
  "All",
  "Backend",
  "System Design",
  "Web Dev",
  "Cloud",
  "Security",
];

const POSTS_PER_PAGE = 6;

export default function BlogList() {
  const [sortBy, setSortBy] = useState("Latest");
  const [activeTag, setActiveTag] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  /* -------------------- FILTER -------------------- */
  const tagFilteredBlogs =
    activeTag === "All"
      ? blogs
      : blogs.filter((post) => post.tags?.includes(activeTag));

  /* -------------------- SORT -------------------- */
  const filteredBlogs = [...tagFilteredBlogs].sort((a, b) => {
    if (sortBy === "Latest") {
      return new Date(b.date) - new Date(a.date);
    }
    if (sortBy === "Popular") {
      return (b.views ?? 0) - (a.views ?? 0);
    }
    return 0;
  });

  /* -------------------- PAGINATION -------------------- */
  const totalPages = Math.ceil(filteredBlogs.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE,
  );

  /* Reset page on filter/sort change */
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTag, sortBy]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      {/* Controls */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        {/* Tags */}
        <ul className="flex gap-3 overflow-x-auto text-sm">
          {POPULAR_TAGS.map((tag) => (
            <li
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`cursor-pointer whitespace-nowrap rounded-full border px-3 py-1 transition
                ${
                  activeTag === tag
                    ? "bg-amber-500 text-white"
                    : "bg-neutral-50 text-neutral-600 hover:bg-neutral-100"
                }`}
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm focus:outline-none"
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option} value={option}>
              Sort by {option}
            </option>
          ))}
        </select>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {paginatedBlogs.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-2 text-sm">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="flex items-center gap-1 rounded-md border border-gray-500 px-3 py-2 hover:text-white hover:border-white hover:bg-amber-500 disabled:opacity-40"
          >
            <ArrowLeft size={16} />
            Prev
          </button>

          {Array.from({ length: totalPages }).map((_, i) => {
            const page = i + 1;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`rounded-md px-3 py-2
                  ${
                    currentPage === page
                      ? "bg-amber-500 text-white"
                      : "bg-gray-400 hover:bg-gray-700 text-white"
                  }`}
              >
                {page}
              </button>
            );
          })}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="flex items-center gap-1 rounded-md border border-gray-500 px-3 py-2 hover:text-white hover:border-white hover:bg-amber-500 disabled:opacity-40"
          >
            Next
            <ArrowRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
