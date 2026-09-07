"use client";

import { motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const links = ["Services", "Case Studies", "About", "Blog"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-xl font-semibold tracking-tight">
          Meridian
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className="text-sm font-medium text-[#1A1A1A] hover:opacity-60 transition-opacity"
            >
              {l}
            </a>
          ))}
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium border border-[#1A1A1A] rounded-full px-5 py-2.5 hover:bg-[#1A1A1A] hover:text-white transition-colors"
          >
            Book a consultation <ArrowRight size={14} />
          </a>
        </nav>

        <button
          className="md:hidden p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t px-6 pb-6 pt-4 flex flex-col gap-4"
        >
          {links.map((l) => (
            <a key={l} href="#" className="text-sm font-medium">
              {l}
            </a>
          ))}
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 text-sm font-medium border border-[#1A1A1A] rounded-full px-5 py-2.5"
          >
            Book a consultation <ArrowRight size={14} />
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
