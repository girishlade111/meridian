"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12, delayChildren: 0.2 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              variants={fadeUp}
              className="text-xs font-semibold tracking-[0.15em] uppercase text-[#5D5D5D]"
            >
              About Meridian
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-[#1A1A1A]"
            >
              A small firm with an outsized impact
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-base md:text-lg text-[#5D5D5D] leading-relaxed"
            >
              Meridian was founded on a simple belief: that operational clarity
              is the single biggest lever available to growing companies. We
              don&apos;t manage dozens of clients at once. We embed deeply,
              work closely and deliver results that hold.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium border border-[#1A1A1A] rounded-full px-6 py-3 hover:bg-[#1A1A1A] hover:text-white transition-colors"
              >
                Read the story <ArrowRight size={14} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#F6F3EB]">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80"
                alt="Professional working on tablet"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
