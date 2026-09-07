"use client";

import { motion } from "framer-motion";
import FloatingCta from "./floating-cta";

export default function Testimonial() {
  return (
    <section className="relative bg-[#F6F3EB] py-24 lg:py-32">
      <FloatingCta />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <blockquote className="text-xl md:text-2xl leading-relaxed text-[#1A1A1A] font-medium italic">
            &ldquo;We&apos;d been struggling with the same operational
            bottlenecks for years before Meridian. They helped us identify key
            problems in our operations. By the end of the 90 days, we had a
            playbook our entire leadership team could work from. It&apos;s the
            clearest our business has ever felt.&rdquo;
          </blockquote>

          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#E5E0D5] flex items-center justify-center text-sm font-semibold text-[#1A1A1A]">
              JW
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-[#1A1A1A]">
                James Whitfield
              </div>
              <div className="text-xs text-[#5D5D5D]">
                CEO, Hartwell Distribution
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
