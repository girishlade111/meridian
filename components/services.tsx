"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Operations audit",
    body: "Diagnose what's slowing your business down before committing to a fix. We analyze your processes, team structure and systems to identify the highest-leverage areas for improvement.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
  },
  {
    title: "Systems design",
    body: "Build the operational infrastructure your business needs to scale. We design and implement processes that reduce friction, improve visibility and create consistent results across your organization.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
  },
  {
    title: "Organizational alignment",
    body: "Align your teams around a shared operating model. We help structure roles, responsibilities and decision-making so every part of your organization moves in the same direction.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight mb-16"
        >
          The work that drives
          <br />
          everything we deliver
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
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              className="group flex flex-col"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#F6F3EB] mb-6">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A]">{s.title}</h3>
              <p className="mt-3 text-sm text-[#5D5D5D] leading-relaxed flex-1">
                {s.body}
              </p>
              <a
                href="#"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#1A1A1A] hover:opacity-60 transition-opacity"
              >
                View our work <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
