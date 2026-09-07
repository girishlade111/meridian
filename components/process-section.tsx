"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FloatingCta from "./floating-cta";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ProcessSection() {
  return (
    <section className="relative bg-white py-24 lg:py-32">
      <FloatingCta />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#F6F3EB]">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Professional working on laptop"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

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
              Our Process
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-[#1A1A1A]"
            >
              Growth without systems is just organized chaos
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-base md:text-lg text-[#5D5D5D] leading-relaxed"
            >
              Most mid-market companies don&apos;t have an execution problem.
              They have a systems problem. As revenue grows, the processes that
              worked at $10M start breaking down at $50M. Meridian exists to
              fix that — with a structured approach and embedded expertise.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium border border-[#1A1A1A] rounded-full px-6 py-3 hover:bg-[#1A1A1A] hover:text-white transition-colors"
              >
                Explore services <ArrowRight size={14} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
