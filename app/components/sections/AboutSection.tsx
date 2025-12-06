"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { MapPin, Calendar, GraduationCap, Sparkles } from "lucide-react";

/**
 * AboutSection - Split screen layout with morphing cards and scroll animations
 * Features unique diagonal sections and smooth fade-in effects
 */
export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Scroll-based parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const infoCards = [
    { icon: MapPin, label: "Location", value: "Colombo, Sri Lanka" },
    { icon: Calendar, label: "Experience", value: "2+ Years Coding" },
    {
      icon: GraduationCap,
      label: "Education",
      value: "B.Sc in Software Engineering",
    },
    {
      icon: Sparkles,
      label: "Focus",
      value: "Full-Stack Developmen with AI/ML",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-16 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-navy-dark/20 to-black" />

      {/* Diagonal accent */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div
          className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-amber/5 to-transparent"
          style={{ clipPath: "polygon(0 0, 100% 0, 70% 100%, 0 100%)" }}
        />
      </div>

      {/* Floating shapes */}
      <motion.div
        style={{ y: imageY }}
        className="absolute top-40 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-amber/10 to-orange/5 blur-3xl"
      />
      <motion.div
        style={{ y: textY }}
        className="absolute bottom-40 left-10 w-48 h-48 rounded-full bg-gradient-to-br from-teal/10 to-cyan/5 blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-2"
        >
          <span className="font-mono text-amber text-sm tracking-wider">
            01 // ABOUT ME
          </span>
          <h2 className="font-clash text-4xl md:text-6xl font-bold mt-4 text-accent-cream">
            Crafting Interfaces With
            <br />
            <span className="text-gradient">Purpose</span>
          </h2>
        </motion.div>

        {/* Main content - Split layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image and floating cards */}
          <motion.div style={{ y: imageY }} className="relative">
            {/* Main image placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden"
            >
              {/* Placeholder gradient - Replace with actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-black" />

              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Placeholder text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  {/* <div className="w-32 h-32 mx-auto mb-4 rounded-full border-2 border-dashed border-amber/30 flex items-center justify-center">
                    <span className="text-4xl">👨‍💻</span>
                  </div> */}
                  <p className="font-mono text-sm text-amber/60">
                     <img src="/gem.png" /> 
                  </p>
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-amber/40" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-amber/40" />
            </motion.div>

            {/* Floating info cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -right-8 top-1/4 bg-gradient-to-br from-amber/20 to-orange/10 backdrop-blur-xl rounded-2xl p-6 border border-amber/20 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-amber">2+</span>
                </div>
                <div>
                  <p className="font-outfit text-accent-cream font-medium">
                    Years
                  </p>
                  <p className="font-mono text-xs text-accent-cream/60">
                    of Coding
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -left-8 bottom-1/4 bg-gradient-to-br from-teal/20 to-cyan/10 backdrop-blur-xl rounded-2xl p-6 border border-teal/20 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent-cyan">
                    10+
                  </span>
                </div>
                <div>
                  <p className="font-outfit text-accent-cream font-medium">
                    Projects
                  </p>
                  <p className="font-mono text-xs text-accent-cream/60">
                    Completed
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Bio content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Bio text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="font-outfit text-xl text-accent-cream leading-relaxed">
                Hey there! I'm{" "}
                <span className="text-amber font-semibold">Abhishek</span>, a
                passionate software engineering student who loves turning ideas
                into clean and modern solutions.
              </p>
              <p className="font-outfit text-lg text-accent-cream/70 leading-relaxed">
                My journey in tech started with curiosity and has evolved into a
                deep passion for creating elegant solutions to complex problems.
                I work with MERN stack, Next.js, and Spring Boot to build
                scalable and efficient solutions. I'm always eager to learn and
                grow, constantly exploring new technologies and better ways to
                solve problems.
              </p>
              <p className="font-outfit text-lg text-accent-cream/70 leading-relaxed">
                I enjoy the challenge of building things that matter. With a
                mindset of "If I don't know something, I'll figure it out," I
                approach every project with confidence, curiosity, and the
                determination to get things done.
              </p>
            </motion.div>

            {/* Info cards grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {infoCards.map((card, index) => (
                <motion.div
                  key={card.label}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group p-5 rounded-2xl bg-navy/30 border border-amber/10 hover:border-amber/30 transition-all duration-300"
                >
                  <card.icon className="w-6 h-6 text-amber mb-3 group-hover:scale-110 transition-transform" />
                  <p className="font-mono text-xs text-accent-cream/50 mb-1">
                    {card.label}
                  </p>
                  <p className="font-outfit font-medium text-accent-cream">
                    {card.value}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Signature/Quote */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-amber/10"
            >
              <blockquote className="relative">
                <span className="absolute -top-4 -left-2 text-6xl font-clash text-amber/20">
                  "
                </span>
                <p className="font-outfit text-lg italic text-accent-cream/60 pl-6">
                  Code is poetry, and I'm here to write beautiful verses.
                </p>
              </blockquote>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber/10 to-orange/10 border border-amber/30 rounded-full text-amber font-outfit font-medium hover:border-amber transition-colors duration-300"
              >
                <span>Let's Connect</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
