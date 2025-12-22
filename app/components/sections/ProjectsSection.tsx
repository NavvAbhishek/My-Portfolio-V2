"use client";

import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Fridge Chef",
    description:
      "FridgeChef is an AI-powered app Helping home cooks, helping reduce food waste by turning existing ingredients into delicious recipes with sustainability tracking.",
    image: "/projects/FridgeChef.png",
    tags: ["React", "Express Js", "MongoDB", "Gemini/Groq API", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/NavvAbhishek/FridgeChef",
    featured: true,
    color: "amber",
  },
  {
    id: 2,
    title: "BookSwap",
    description:
      "A community-driven web app that enables users to list books for exchange along with their location. Nearby users can discover and request listed books.",
    image: "/projects/bookswap.png",
    tags: [
      "SpringBoot",
      "React",
      "PostgreSQL",
      "GoogleMap API",
      "Tailwind CSS",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/NavvAbhishek/bookswap",
    featured: true,
    color: "orange",
  },
  {
    id: 3,
    title: "Gift Muse",
    description:
      "Gift Muse helps anyone find personalized gifts by using AI to analyze descriptions and recommend real products for loved ones online.",
    image: "/projects/GiftMuse.png",
    tags: [
      "React Js",
      "Express Js",
      "MongoDB",
      "Gemini/Groq/Unsplash API",
      "Tailwind CSS",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/NavvAbhishek/Gift-Muse",
    featured: false,
    color: "teal",
  },
  {
    id: 4,
    title: "Mood Sync",
    description:
      "Uers can easily track their daily moods with simple note. A beautiful, eye-catching user interface with a modern and intuitive design to enhance user engagement.",
    image: "/projects/MoodSync.png",
    tags: ["Next js", "Firebase", "TailwindCSS",],
    liveUrl: "#",
    githubUrl: "https://github.com/NavvAbhishek/MoodSync",
    featured: false,
    color: "cyan",
  },
];

// Individual Project Card Component with 3D tilt effect
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position for 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animations
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  // Color mappings
  const colors: Record<
    string,
    { gradient: string; shadow: string; accent: string }
  > = {
    amber: {
      gradient: "from-amber/20 via-amber/5 to-transparent",
      shadow: "shadow-glow-amber",
      accent: "text-amber border-amber/30",
    },
    orange: {
      gradient: "from-orange/20 via-orange/5 to-transparent",
      shadow: "shadow-glow-orange",
      accent: "text-orange border-orange/30",
    },
    teal: {
      gradient: "from-accent-teal/20 via-accent-teal/5 to-transparent",
      shadow: "shadow-glow-cyan",
      accent: "text-accent-teal border-accent-teal/30",
    },
    cyan: {
      gradient: "from-accent-cyan/20 via-accent-cyan/5 to-transparent",
      shadow: "shadow-glow-cyan",
      accent: "text-accent-cyan border-accent-cyan/30",
    },
  };

  const colorScheme = colors[project.color] || colors.amber;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className={`
        group relative rounded-3xl overflow-hidden
        bg-gradient-to-br from-navy/60 to-navy-dark/80
        border border-accent-cream/5 hover:border-amber/20
        transition-all duration-500
        ${isHovered ? colorScheme.shadow : ""}
      `}
    >
      {/* Image placeholder area */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover overlay with gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
        />

        {/* Featured badge */}
        {project.featured && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber/90 text-black"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="font-mono text-xs font-semibold">Featured</span>
          </motion.div>
        )}

        {/* Hover action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-4 left-4 right-4 flex items-center gap-3"
        >
          <motion.a
            href={project.liveUrl}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber text-black font-outfit font-medium text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </motion.a>
          <motion.a
            href={project.githubUrl}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cream/10 text-accent-cream font-outfit font-medium text-sm backdrop-blur-sm"
          >
            <Github className="w-4 h-4" />
            Code
          </motion.a>
        </motion.div>
      </div>

      {/* Card content */}
      <div className="p-6 space-y-4">
        {/* Title with arrow */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-clash text-xl font-bold text-accent-cream group-hover:text-amber transition-colors">
            {project.title}
          </h3>
          <motion.div
            animate={{ x: isHovered ? 5 : 0, y: isHovered ? -5 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight
              className={`w-5 h-5 ${
                colorScheme.accent.split(" ")[0]
              } opacity-50 group-hover:opacity-100 transition-opacity`}
            />
          </motion.div>
        </div>

        {/* Description */}
        <p className="font-outfit text-sm text-accent-cream/60 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag, tagIndex) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
              className={`px-3 py-1 rounded-full border font-mono text-xs ${colorScheme.accent} bg-navy/30`}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Decorative gradient line at bottom */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colorScheme.gradient
          .replace("from-", "from-")
          .replace("/20", "")} opacity-50`}
      />
    </motion.div>
  );
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-navy-dark/20 to-black" />

      {/* Floating decoration */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-40 right-10 w-72 h-72 rounded-full bg-gradient-to-br from-amber/5 to-orange/5 blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        className="absolute bottom-40 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-teal/5 to-cyan/5 blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-amber text-sm tracking-wider">
            03 // PROJECTS
          </span>
          <h2 className="font-clash text-4xl md:text-6xl font-bold mt-4 text-accent-cream">
            Selected <span className="text-gradient">Work</span>
          </h2>
          <p className="mt-6 font-outfit text-lg text-accent-cream/60 max-w-2xl mx-auto">
            A showcase of projects I've built, from concept to deployment. Each
            one represents a unique challenge and learning experience.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View more CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://github.com/NavvAbhishek"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-amber/30 text-amber font-outfit font-semibold rounded-full transition-all duration-300 hover:border-amber hover:bg-amber/10"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
            <ArrowUpRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
