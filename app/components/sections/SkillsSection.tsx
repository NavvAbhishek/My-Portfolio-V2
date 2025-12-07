"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Code2,
  Server,
  Database,
  Palette,
  Cloud,
  Terminal,
  Boxes,
  Layers,
  Cpu,
  Globe,
  Smartphone,
  GitBranch,
} from "lucide-react";
import { getTechIcon } from "./tech-icons";

/**
 * SkillsSection - Interactive skill cards with hover effects and animations
 * Features categorized skills with smooth reveal animations
 */

// Skill categories with their respective technologies
const skillCategories = [
  {
    id: "frontend",
    title: "Frontend & UI/UX",
    icon: Palette,
    color: "amber",
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Figma"
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    color: "orange",
    technologies: [
      "Node.js",
      "Java",
      "Spring Boot",
      "Python",
      "Express",
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: Database,
    color: "teal",
    technologies: ["My SQL", "MongoDB", "PostgreSQL", "Prisma","Firestore"],
  },
  {
    id: "devops",
    title: "DevOps & Other Tools",
    icon: Cloud,
    color: "cyan",
    technologies: ["Docker","Git","Github","Firebase", "Photoshop","Illustrator"],
  },
];

// Individual technology icons/logos for the floating display
const techIcons = [
  { icon: Code2, name: "React", color: "#61DAFB" },
  { icon: Layers, name: "Next.js", color: "#ffffff" },
  { icon: Terminal, name: "Node.js", color: "#339933" },
  { icon: Database, name: "MongoDB", color: "#47A248" },
  { icon: Cloud, name: "AWS", color: "#FF9900" },
  { icon: Boxes, name: "Docker", color: "#2496ED" },
  { icon: GitBranch, name: "Git", color: "#F05032" },
  { icon: Globe, name: "Web", color: "#ffb703" },
  { icon: Smartphone, name: "Mobile", color: "#3DDC84" },
  { icon: Cpu, name: "Systems", color: "#8ecae6" },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  // Get color class based on category
  const getColorClasses = (color: string) => {
    const colors: Record<
      string,
      { bg: string; border: string; text: string; glow: string }
    > = {
      amber: {
        bg: "bg-amber/10",
        border: "border-amber/30 hover:border-amber",
        text: "text-amber",
        glow: "shadow-glow-amber",
      },
      orange: {
        bg: "bg-orange/10",
        border: "border-orange/30 hover:border-orange",
        text: "text-orange",
        glow: "shadow-glow-orange",
      },
      teal: {
        bg: "bg-accent-teal/10",
        border: "border-accent-teal/30 hover:border-accent-teal",
        text: "text-accent-teal",
        glow: "shadow-glow-cyan",
      },
      cyan: {
        bg: "bg-accent-cyan/10",
        border: "border-accent-cyan/30 hover:border-accent-cyan",
        text: "text-accent-cyan",
        glow: "shadow-glow-cyan",
      },
    };
    return colors[color] || colors.amber;
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-navy-dark/30 to-black" />

      {/* Floating tech icons in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {techIcons.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="absolute opacity-10"
            style={{
              left: `${10 + (index % 5) * 20}%`,
              top: `${10 + Math.floor(index / 5) * 40}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
              delay: index * 0.5,
            }}
          >
            <tech.icon className="w-12 h-12" style={{ color: tech.color }} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-amber text-sm tracking-wider">
            02 // SKILLS
          </span>
          <h2 className="font-clash text-4xl md:text-6xl font-bold mt-4 text-accent-cream">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="mt-6 font-outfit text-lg text-accent-cream/60 max-w-2xl mx-auto">
            A collection of technologies I've worked with and continue to
            explore. Always learning, always building.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color);
            const Icon = category.icon;
            const isActive = activeCategory === category.id;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
                onMouseEnter={() => setActiveCategory(category.id)}
                onMouseLeave={() => setActiveCategory(null)}
                className={`
                  group relative p-8 rounded-3xl border transition-all duration-500
                  ${colorClasses.border}
                  ${isActive ? colorClasses.glow : ""}
                  bg-gradient-to-br from-navy/40 to-navy-dark/60 backdrop-blur-sm
                `}
              >
                {/* Category header */}
                <div className="flex items-center gap-4 mb-8">
                  <motion.div
                    animate={
                      isActive
                        ? { scale: 1.1, rotate: 5 }
                        : { scale: 1, rotate: 0 }
                    }
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`p-4 rounded-2xl ${colorClasses.bg}`}
                  >
                    <Icon className={`w-7 h-7 ${colorClasses.text}`} />
                  </motion.div>
                  <div>
                    <h3 className="font-clash text-2xl font-bold text-accent-cream">
                      {category.title}
                    </h3>
                    <p className="font-mono text-xs text-accent-cream/50">
                      {category.technologies.length} technologies
                    </p>
                  </div>
                </div>

                {/* Technology icons grid */}
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mt-6">
                  {category.technologies.map((tech, techIndex) => {
                    const isHovered = hoveredTech === `${category.id}-${tech}`;

                    return (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          delay: categoryIndex * 0.15 + techIndex * 0.08,
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                        }}
                        onMouseEnter={() =>
                          setHoveredTech(`${category.id}-${tech}`)
                        }
                        onMouseLeave={() => setHoveredTech(null)}
                        className="group/tech relative"
                      >
                        <motion.div
                          whileHover={{ y: -8, scale: 1.05 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 15,
                          }}
                          className={`
                            relative aspect-square rounded-2xl overflow-hidden
                            bg-gradient-to-br from-navy-dark/60 to-navy/40
                            border-2 transition-all duration-300
                            ${
                              isHovered
                                ? `${colorClasses.border.split(" ")[1]} ${
                                    colorClasses.glow
                                  }`
                                : "border-accent-cream/10"
                            }
                          `}
                        >
                          {/* Icon background glow */}
                          <div
                            className={`
                              absolute inset-0 opacity-0 group-hover/tech:opacity-20
                              transition-opacity duration-300 blur-xl
                              ${colorClasses.bg}
                            `}
                          />

                          {/* Tech icon */}
                          <div className="relative w-full h-full p-3 flex items-center justify-center">
                            <Image
                              src={getTechIcon(tech)}
                              alt={tech}
                              width={64}
                              height={64}
                              className="object-contain w-full h-full filter brightness-90 group-hover/tech:brightness-110 transition-all duration-300"
                            />
                          </div>

                          {/* Shimmer effect on hover */}
                          <AnimatePresence>
                            {isHovered && (
                              <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "200%" }}
                                exit={{ opacity: 0 }}
                                transition={{
                                  duration: 0.6,
                                  ease: "easeInOut",
                                }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                              />
                            )}
                          </AnimatePresence>
                        </motion.div>

                        {/* Tooltip on hover */}
                        <AnimatePresence>
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              className={`
                                absolute -bottom-8 left-1/2 -translate-x-1/2
                                px-3 py-1 rounded-lg whitespace-nowrap
                                bg-navy-dark/90 backdrop-blur-sm border ${
                                  colorClasses.border.split(" ")[1]
                                }
                                font-outfit text-xs text-accent-cream z-10
                              `}
                            >
                              {tech}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Decorative corner */}
                <div
                  className={`absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 ${colorClasses.text.replace(
                    "text-",
                    "border-"
                  )}/20 rounded-tr-xl`}
                />
                <div
                  className={`absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 ${colorClasses.text.replace(
                    "text-",
                    "border-"
                  )}/20 rounded-bl-xl`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Additional skills tags */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="font-mono text-sm text-accent-cream/40 mb-6">
            Also familiar with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Redux",
              "Jest",
              "Cypress",
              "Figma",
              "Vercel",
              "Netlify",
              "Three.js",
              "WebGL",
              "Rust",
              "Go",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-4 py-2 rounded-full border border-accent-cream/10 text-accent-cream/60 font-outfit text-sm hover:border-amber/30 hover:text-amber transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
