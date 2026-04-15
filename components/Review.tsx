"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { reviews } from "@/data/review";
import { motion } from "framer-motion";

export default function ReviewsSection() {
  return (
    <section className="relative text-black py-28 bg-white">

 
  <div className="hidden md:block absolute inset-0">
    <div className="grid grid-cols-2 h-full">
      <div className="bg-white" />
      <div className="bg-[#f0f1f4]" />
    </div>
  </div>

  {/* MOBILE BACKGROUND */}
  <div className="absolute inset-0 bg-white md:hidden" />

 
  <div className="relative max-w-7xl mx-auto px-6">
     
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* HEADER */}
        <p className="text-[11px] tracking-[0.4em] text-neutral-500 mb-6">
          TESTIMONIES
        </p>

        <h2 className="text-3xl md:text-4xl font-light mb-16">
          Lives Transformed Through These Writings
        </h2>

        {/* SWIPER */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
          loop
        >

          {reviews.map((review, i) => (
            <SwiperSlide key={i}>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="space-y-10"
              >

                {/* QUOTE */}
                <p className="text-xl md:text-2xl font-light leading-relaxed text-neutral-800">
                  “{review.text}”
                </p>

                {/* AUTHOR */}
                <div className="flex flex-col items-center">
                  <span className="w-10 h-[1px] bg-yellow-500 mb-4" />
                  <p className="text-sm tracking-wide text-neutral-600">
                    {review.author}
                  </p>
                </div>

              </motion.div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>
  </div>
    </section>
  );
}