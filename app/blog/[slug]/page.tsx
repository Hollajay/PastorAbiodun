"use client";

import { useParams } from "next/navigation";
import { blogs } from "@/data/blog";
import { motion } from "framer-motion";

export default function BlogDetail() {
  const { slug } = useParams();

  const index = blogs.findIndex((b) => b.slug === slug);
  const blog = blogs[index];

  const prev = blogs[index - 1];
  const next = blogs[index + 1];

  if (!blog) return <div className="p-10">Post not found</div>;

  return (
    <main className="bg-white text-black min-h-screen">

      {/* HEADER */}
      <section className="max-w-3xl mx-auto px-6 pt-28 pb-16 text-center">
        <p className="text-[11px] tracking-[0.4em] text-neutral-500 mb-6">
          BLOG
        </p>

        <h1 className="text-3xl md:text-5xl font-light">
          {blog.title}
        </h1>

        <p className="mt-6 text-neutral-500 text-sm">
          {blog.date} • {blog.readTime}
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[17px] leading-[1.9] text-neutral-800 space-y-8"
        >
          {blog.content.map((para, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "first-letter:text-6xl first-letter:float-left first-letter:mr-3"
                  : ""
              }
            >
              {para}
            </p>
          ))}
        </motion.article>

        {/* NAV */}
        <div className="mt-16 flex justify-between text-sm">
          {prev ? (
            <a href={`/blog/${prev.slug}`}>
              ← {prev.title}
            </a>
          ) : <div />}

          {next && (
            <a href={`/blog/${next.slug}`}>
              {next.title} →
            </a>
          )}
        </div>
      </section>
    </main>
  );
}