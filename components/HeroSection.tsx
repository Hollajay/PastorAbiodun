"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const quotes = [
  "God leads you with your future in mind.",
  "If you can't take shame, you are not ready for the glory.",
  "Whatever has taken away prayers from you, has taken too much.",
  "The best part of your mercy story is between you and God.",
  "The real battle isn't outside, it is within.",
  "As far as your eyes can see.",
  "You can do whatever you set your mind to do.",
  "Your environment will always be stronger than your willpower.",
  "Whatever you find easy to do is where your grace is.",
  "You cannot be a genius if you are an insecure leader.",
  "Your vision will stagnate where you as an individual stagnate.",
  "Greatness will cost you.",
  "Every increase in grace is a call to more work.",
  "You cannot be alive and have a lot of histories.",
];

export default function Page() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className=" text-black  font-sans bg-white ">
      <section className="max-w-7xl px-6 mt-12 mx-auto h-screen flex flex-col md:flex-row items-center justify-between ">
        <div className="flex flex-col items-start justify-center ">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-light tracking-tight max-w-xl leading-tight"
          >
            Raising Lives of Purpose, Power, and Eternal Impact
          </motion.h1>

          <p className="mt-4 text-sm tracking-[0.3em] text-neutral-500">
            TEACHER | AUTHOR | SPEAKER
          </p>

          <p className="mt-6 text-lg text-neutral-600 max-w-xl">
            A life devoted to teaching truth, building people, and awakening
            purpose across generations.
          </p>

          <button className="mt-8 py-3 px-6 border border-black hover:bg-black hover:text-white transition-all duration-300">
            Discover More
          </button>
        </div>
        <div className="overflow-hidden">
          <Image
            width={500}
            height={700}
            className="object-fit gray-scale-50 grayscale transition hover:scale-105"
            src={"/img/abiodun.jpeg"}
            alt="pastor photo"
          />
        </div>
      </section>
    </main>
  );
}
