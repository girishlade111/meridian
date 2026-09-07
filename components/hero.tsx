"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import FloatingCta from "./floating-cta";

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative bg-[#F6F3EB] min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 stripe-pattern pointer-events-none" />

      <FloatingCta />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.h1
            variants={fadeUp}
            className="text-[3.5rem] md:text-[4.5rem] font-extrabold leading-[1.05] tracking-tight text-[#1A1A1A]"
          >
            Built to scale.
            <br />
            Ready to perform.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 text-lg md:text-xl text-[#5D5D5D] max-w-2xl leading-relaxed"
          >
            Meridian crafts the operating systems that fast-growing companies
            and institutions rely on to perform at scale. We solve operations
            problems with strategic design.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10">
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-[#FABD3F] text-[#1A1A1A] font-semibold text-sm px-7 py-4 rounded-full hover:brightness-95 transition-all"
            >
              Book a consultation <ArrowRight size={16} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
