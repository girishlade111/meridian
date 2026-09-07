"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingCta() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="hidden lg:flex absolute right-0 top-12 -translate-y-1/2 z-10"
    >
      <a
        href="#"
        className="flex items-center gap-2 bg-[#1A1A1A] text-white text-xs font-medium px-4 py-2.5 rounded-lg hover:opacity-85 transition-opacity whitespace-nowrap"
      >
        View our work <ArrowUpRight size={14} />
      </a>
    </motion.div>
  );
}
