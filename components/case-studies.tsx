"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FloatingCta from "./floating-cta";

const cases = [
  {
    tag: "Distribution",
    title: "Scaling from $30M to $80M without adding headcount",
    body: "How we helped a distribution company double revenue with the same team through operational redesign.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  },
  {
    tag: "Healthcare",
    title: "Building a scalable onboarding process for a growing healthcare company",
    body: "Standardizing training and client intake for a healthcare provider expanding across new markets.",
    img: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80",
  },
  {
    tag: "Logistics",
    title: "Reducing operational costs by 28% without cutting staff",
    body: "Process optimization that eliminated waste while preserving headcount and improving service levels.",
    img: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=600&q=80",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function CaseStudies() {
  return (
    <section className="relative bg-white py-24 lg:py-32">
      <FloatingCta />

      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight mb-16"
        >
          Operational clarity,
          <br />
          measurable outcomes
        </motion.h2>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        >
          {cases.map((c) => (
            <motion.a
              key={c.tag}
              href="#"
              variants={fadeUp}
              className="group block rounded-xl border border-[#E5E0D5] overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#F6F3EB]">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold tracking-[0.1em] uppercase text-[#5D5D5D]">
                  {c.tag}
                </span>
                <h3 className="mt-2 text-lg font-bold text-[#1A1A1A] leading-snug">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-[#5D5D5D] leading-relaxed">
                  {c.body}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#1A1A1A] group-hover:opacity-60 transition-opacity">
                  Read case study <ArrowRight size={14} />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
