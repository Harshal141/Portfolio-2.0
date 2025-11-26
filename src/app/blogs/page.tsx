"use client";
import Link from "next/link";
import { blogs } from "@/lib/ResumeData";
import { BlogCard } from "@/components/Cards";
import { FiArrowLeft } from "react-icons/fi";

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-[#121212] p-4 md:p-10">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors cursor-pointer mb-6"
        >
          <FiArrowLeft size={16} />
          Back to Home
        </Link>

        <h1 className="text-2xl md:text-3xl font-normal text-neutral-100 mb-6">
          All Blogs
        </h1>

        <div className="flex flex-wrap justify-between">
          {blogs.map((b) => (
            <BlogCard
              key={b.title}
              title={b.title}
              link={b.link}
              image={b.image}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
