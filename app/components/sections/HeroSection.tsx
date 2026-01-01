"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter, Code2, FileText } from "lucide-react";

/**
 * HeroSection - Landing section with animated name reveal and parallax
 * Features dramatic typography and smooth scroll interactions
 */
export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Transform values for parallax elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  // Smooth spring for scroll arrow
  const springY = useSpring(useTransform(scrollYProgress, [0, 0.1], [0, 100]), {
    stiffness: 100,
    damping: 20,
  });

  // Text animation variants
  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const name = "Navindu Abhishek";

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient mesh */}
      <div className="absolute inset-0 mesh-gradient-bg" />

      {/* Animated grid pattern */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 grid-pattern opacity-30"
      />

      {/* Floating geometric shapes */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-20 left-10 w-32 h-32 border border-amber/20 rotate-45"
        animate={{ rotate: [45, 55, 45] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-40 right-20 w-24 h-24 border border-orange/20 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-amber/10 to-transparent rounded-lg"
        animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Main content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        {/* Pre-title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber/30 bg-amber/5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber" />
            </span>
            <span className="font-mono text-sm text-amber/80">
              Available for opportunities
            </span>
          </span>
        </motion.div>

        {/* Main name - Animated letter by letter */}
        <motion.h1
          variants={nameVariants}
          initial="hidden"
          animate="visible"
          className="font-clash text-[clamp(2rem,12vw,5rem)] font-bold leading-[0.85] tracking-tight mb-4"
          style={{ perspective: 1000 }}
        >
          {name.split(" ").map((word, wordIndex) => (
            // Use a fragment to avoid adding extra DOM nodes
            <span key={wordIndex} className="inline-block">
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={`${word}-${letterIndex}`}
                  variants={letterVariants}
                  className="inline-block text-gradient"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
              {/* Add a non-breaking space if it's not the last word */}
              {wordIndex < name.split(" ").length - 1 && (
                <span>&nbsp;&nbsp;</span>
              )}
            </span>
          ))}
        </motion.h1>

        {/* Subtitle with line animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative mb-8"
        >
          <h2 className="font-outfit text-xl md:text-3xl font-light text-accent-cream/80">
            <span className="text-amber">Full Stack</span> Developer with  <span className="text-amber">AI/ML</span>
          </h2>
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-amber to-transparent"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="max-w-2xl mx-auto font-outfit text-lg text-accent-cream/60 mb-12 leading-relaxed"
        >
          I am a passionate undergraduate with a strong interest in building
          practical and scalable solutions to real-world problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          {/* Primary CTA */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber to-orange text-black font-outfit font-semibold rounded-full overflow-hidden"
          >
            <Code2 className="w-5 h-5 transition-transform group-hover:rotate-12" />
            <span>View My Work</span>
            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </motion.a>

          {/* Secondary CTA */}
          <motion.a
            href="/Navindu Abhishek CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-amber/30 text-amber font-outfit font-semibold rounded-full transition-all duration-300 hover:border-amber hover:bg-amber/10"
          >
            <FileText className="w-5 h-5" />
            <span>View My CV</span>
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            {
              icon: Github,
              href: "https://github.com/NavvAbhishek",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/navabhishek/",
              label: "LinkedIn",
            },
            { icon: Twitter, href: "https://x.com/NavAbhishek", label: "X" },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 + index * 0.1 }}
              className="p-3 rounded-full border border-accent-cream/10 text-accent-cream/50 hover:text-amber hover:border-amber/50 transition-colors duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ y: springY, opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-accent-cream/40 tracking-wider">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-amber/60" />
        </motion.div>
      </motion.div>

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-amber/20" />
      <div className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-amber/20" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-amber/20" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-amber/20" />
    </section>
  );
}
