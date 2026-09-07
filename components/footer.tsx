"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const linkColumns = [
  {
    heading: "Overview",
    links: ["Home", "Services", "Case Studies", "About", "Blog", "Pricing"],
  },
  {
    heading: "Services",
    links: [
      "Operations Audit",
      "Systems Design",
      "Organizational Alignment",
      "The Growth Playbook",
    ],
  },
  {
    heading: "Company",
    links: ["About", "Case Studies", "Contact", "Privacy Policy"],
  },
  {
    heading: "Connect",
    links: ["LinkedIn", "Twitter", "Book a call"],
  },
];

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function Footer() {
  return (
    <footer className="bg-[#181817] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-extrabold leading-tight"
          >
            Ready to build something
            <br />
            that scales?
          </motion.h2>
          <motion.div variants={fadeUp} className="mt-8">
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-[#FABD3F] text-[#1A1A1A] font-semibold text-sm px-7 py-4 rounded-full hover:brightness-95 transition-all"
            >
              Book a consultation <ArrowRight size={16} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16"
        >
          <motion.div variants={fadeUp} className="col-span-2 md:col-span-1">
            <span className="text-lg font-semibold">Meridian</span>
          </motion.div>

          {linkColumns.map((col) => (
            <motion.div key={col.heading} variants={fadeUp}>
              <h4 className="text-xs font-semibold tracking-[0.1em] uppercase text-white/50 mb-4">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <span>&copy; Meridian 2026. All rights reserved.</span>
          <span>
            Built by <a href="#" className="hover:text-white transition-colors">Kevin Dakin</a>. Powered by <a href="#" className="hover:text-white transition-colors">Webflow</a>.
          </span>
        </div>
      </div>
    </footer>
  );
}
