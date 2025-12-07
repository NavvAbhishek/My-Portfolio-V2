"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-6 border-t border-accent-cream/5">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <a
              href="#home"
              className="font-clash text-2xl font-bold text-gradient"
            >
              NA<span className="text-amber">.</span>
            </a>
            <p className="mt-2 font-outfit text-sm text-accent-cream/40">
              © {new Date().getFullYear()} Abhishek. All rights reserved.
            </p>
          </motion.div>

          {/* Made with love */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 font-outfit text-md text-accent-cream/40"
          >
            <span>Crafted with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-amber fill-amber" />
            </motion.div>
            <span className="flex items-center gap-1.5">
              and lots of
              <Image
                src="/coffee-cup2.png"
                width={25}
                height={25}
                alt="coffee cup"
                className="inline-block"
              />
            </span>
          </motion.div>

          {/* Back to top button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-accent-cream/10 text-accent-cream/60 hover:border-amber/30 hover:text-amber transition-all duration-300"
          >
            <span className="font-mono text-xs">Back to top</span>
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowUp className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
