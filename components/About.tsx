"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-20 px-6  bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* TEXT SIDE */}
        <div>
          <p className="text-sm tracking-[0.3em] text-neutral-500 mb-4">
            ABOUT
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-light leading-tight mb-6"
          >
            A Life Committed to Raising Builders
          </motion.h2>

          <div className="space-y-6 text-neutral-600 text-lg leading-relaxed">
            <p>
              Pastor S. A. Abiodun is a builder of people and a visionary voice to his generation. As the Lead Pastor of Phos Global, he is committed to raising individuals grounded in truth, equipped with wisdom, and positioned for kingdom influence.
            </p>

            <p>
              Through years of teaching, mentoring, and leadership, he has guided many to discover purpose, embrace discipline, and walk boldly in the authority of their calling.
            </p>

            <p>
              His writings and teachings continue to challenge minds, shape lives, and inspire a generation to rise beyond limitations and build lives that truly matter.
            </p>
          </div>
        </div>

        {/* IMAGE SIDE */}
        <div className="relative">
          <Image
            src="/img/pastor1.jpg"
            width={500}
            height={600}
            alt="Pastor"
            className="object-cover grayscale"
          />

          {/* subtle gold accent */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-yellow-500" />
        </div>
      </div>
    </section>
  );
};

export default About;