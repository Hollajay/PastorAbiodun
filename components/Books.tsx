"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { books } from "@/data/books";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BooksSection() {
  return (
    <section className="bg-black text-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-[11px] tracking-[0.4em] text-neutral-500 mb-4">
            BOOKS
          </p>
          <h2 className="text-3xl md:text-4xl font-light">
            Writings That Shape Minds
          </h2>
        </div>
        <Swiper
          modules={[Autoplay, Navigation]}
          loop
          spaceBetween={50}
          autoplay={{ delay: 5000 }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          slidesPerView={1}
        >
          {books.map((book, i) => (
            <SwiperSlide key={i}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="relative"
                >
                  <Image
                    src={book.image}
                    width={500}
                    height={650}
                    alt={book.title}
                    className="object-cover grayscale"
                  />

                  <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-yellow-500" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <p className="text-sm text-neutral-400 mb-3">{book.date}</p>

                  <h3 className="text-2xl md:text-3xl font-light mb-6">
                    {book.title}
                  </h3>

                  <p className="text-neutral-400 leading-relaxed mb-8">
                    {book.summary}
                  </p>
                  <a
                    href={book.link}
                    target="_blank"
                    className="inline-block border border-white px-6 py-3 hover:bg-white hover:text-black transition"
                  >
                    Purchase Book
                  </a>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
