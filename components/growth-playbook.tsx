"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FloatingCta from "./floating-cta";

export default function GrowthPlaybook() {
  return (
    <section className="relative py-24 lg:py-32">
      <FloatingCta />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row rounded-2xl overflow-hidden"
        >
          <div className="lg:w-[40%] relative">
            <div className="absolute inset-0 bg-[#FABD3F]/20 z-10 mix-blend-multiply pointer-events-none" />
            <img
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80"
              alt="Architecture"
              className="w-full h-full object-cover min-h-[300px]"
            />
          </div>

          <div className="lg:w-[60%] bg-[#181817] text-white px-10 py-14 lg:px-16 lg:py-20 flex flex-col justify-center">
            <h3 className="text-3xl md:text-5xl font-extrabold leading-tight">
              The Growth Playbook
            </h3>
            <p className="mt-6 text-base md:text-lg text-white/70 leading-relaxed max-w-xl">
              A 90-day engagement package that delivers a complete operational
              blueprint for your business. Every system documented. Every
              bottleneck resolved. Every team aligned.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-[#FABD3F] text-[#1A1A1A] font-semibold text-sm px-7 py-4 rounded-full hover:brightness-95 transition-all"
              >
                View the Playbook <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
