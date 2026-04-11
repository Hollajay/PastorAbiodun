"use client";

import { motion } from "framer-motion";
import { blogs } from "@/data/blog";
import Link from "next/link";

export default function BlogPage() {
  const featured = blogs[0]; // first post as featured
  const others = blogs.slice(1);

  return (
    <main className="bg-white text-black min-h-screen">

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-28 pb-20 text-center">
        <p className="text-[11px] tracking-[0.4em] text-neutral-500 mb-6">
          BLOG
        </p>

        <h1 className="text-3xl md:text-5xl font-light leading-tight">
          Thoughts, Teachings & Insights
        </h1>

        <p className="mt-6 text-neutral-600 max-w-xl mx-auto">
          Words designed to challenge your thinking, deepen your faith, and awaken purpose.
        </p>
      </section>

      {/* FEATURED POST */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <Link href={`/blog/${featured.slug}`}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="group cursor-pointer"
          >
            <p className="text-[11px] tracking-[0.4em] text-neutral-500 mb-6">
              FEATURED
            </p>

            <h2 className="text-2xl md:text-3xl font-light mb-4 group-hover:text-yellow-600 transition">
              {featured.title}
            </h2>

            <p className="text-neutral-500 text-sm mb-6">
              {featured.date} • {featured.readTime}
            </p>

            <div className="text-[17px] leading-[1.9] text-neutral-800 space-y-6">
              {featured.content.slice(0, 3).map((para, i) => (
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
            </div>

            <span className="block mt-6 text-sm text-neutral-500 group-hover:text-black transition">
              Read Full →
            </span>
          </motion.div>
        </Link>
      </section>

      {/* OTHER POSTS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-12">
          {others.map((post: any, i: number) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group border-b border-neutral-200 pb-8 cursor-pointer"
              >
                <h3 className="text-xl font-light mb-4 group-hover:text-yellow-600 transition">
                  {post.title}
                </h3>

                <p className="text-neutral-600 leading-relaxed">
                  {post.excerpt}
                </p>

                <span className="block mt-4 text-sm text-neutral-500 group-hover:text-black transition">
                  Read More →
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}