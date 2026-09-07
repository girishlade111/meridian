"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "$2.4B", label: "Total revenue generated for clients" },
  { value: "90-day", label: "Average timeline to first measurable outcomes" },
  { value: "94%", label: "Client satisfaction rate across all engagements" },
];

export default function Stats() {
  return (
    <section className="bg-[#F6F3EB] pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-12"
        >
          Results that speak for themselves
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative"
            >
              <div className="text-5xl md:text-6xl font-extrabold text-[#1A1A1A] leading-none">
                {s.value}
              </div>
              <div className="mt-3 text-sm text-[#5D5D5D] leading-relaxed">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
