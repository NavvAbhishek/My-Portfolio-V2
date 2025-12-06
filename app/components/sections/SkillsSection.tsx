'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
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
  GitBranch
} from 'lucide-react'

/**
 * SkillsSection - Interactive skill cards with hover effects and animations
 * Features categorized skills with smooth reveal animations
 */

// Skill categories with their respective skills
const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: Palette,
    color: 'amber',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Framer Motion', level: 75 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: Server,
    color: 'orange',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Express', level: 85 },
      { name: 'FastAPI', level: 70 },
      { name: 'GraphQL', level: 65 },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    icon: Database,
    color: 'teal',
    skills: [
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 85 },
      { name: 'Redis', level: 70 },
      { name: 'Prisma', level: 75 },
      { name: 'Firebase', level: 75 },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    icon: Cloud,
    color: 'cyan',
    skills: [
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'Git', level: 90 },
      { name: 'Linux', level: 75 },
      { name: 'CI/CD', level: 70 },
    ],
  },
]

// Individual technology icons/logos for the floating display
const techIcons = [
  { icon: Code2, name: 'React', color: '#61DAFB' },
  { icon: Layers, name: 'Next.js', color: '#ffffff' },
  { icon: Terminal, name: 'Node.js', color: '#339933' },
  { icon: Database, name: 'MongoDB', color: '#47A248' },
  { icon: Cloud, name: 'AWS', color: '#FF9900' },
  { icon: Boxes, name: 'Docker', color: '#2496ED' },
  { icon: GitBranch, name: 'Git', color: '#F05032' },
  { icon: Globe, name: 'Web', color: '#ffb703' },
  { icon: Smartphone, name: 'Mobile', color: '#3DDC84' },
  { icon: Cpu, name: 'Systems', color: '#8ecae6' },
]

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  // Get color class based on category
  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; glow: string }> = {
      amber: {
        bg: 'bg-amber/10',
        border: 'border-amber/30 hover:border-amber',
        text: 'text-amber',
        glow: 'shadow-glow-amber',
      },
      orange: {
        bg: 'bg-orange/10',
        border: 'border-orange/30 hover:border-orange',
        text: 'text-orange',
        glow: 'shadow-glow-orange',
      },
      teal: {
        bg: 'bg-accent-teal/10',
        border: 'border-accent-teal/30 hover:border-accent-teal',
        text: 'text-accent-teal',
        glow: 'shadow-glow-cyan',
      },
      cyan: {
        bg: 'bg-accent-cyan/10',
        border: 'border-accent-cyan/30 hover:border-accent-cyan',
        text: 'text-accent-cyan',
        glow: 'shadow-glow-cyan',
      },
    }
    return colors[color] || colors.amber
  }

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
          <span className="font-mono text-amber text-sm tracking-wider">02 // SKILLS</span>
          <h2 className="font-clash text-4xl md:text-6xl font-bold mt-4 text-accent-cream">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="mt-6 font-outfit text-lg text-accent-cream/60 max-w-2xl mx-auto">
            A collection of technologies I've worked with and continue to explore.
            Always learning, always building.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color)
            const Icon = category.icon
            const isActive = activeCategory === category.id

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
                  ${isActive ? colorClasses.glow : ''}
                  bg-gradient-to-br from-navy/40 to-navy-dark/60 backdrop-blur-sm
                `}
              >
                {/* Category header */}
                <div className="flex items-center gap-4 mb-8">
                  <motion.div
                    animate={isActive ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={`p-4 rounded-2xl ${colorClasses.bg}`}
                  >
                    <Icon className={`w-7 h-7 ${colorClasses.text}`} />
                  </motion.div>
                  <div>
                    <h3 className="font-clash text-2xl font-bold text-accent-cream">
                      {category.title}
                    </h3>
                    <p className="font-mono text-xs text-accent-cream/50">
                      {category.skills.length} technologies
                    </p>
                  </div>
                </div>

                {/* Skills list */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: categoryIndex * 0.15 + skillIndex * 0.1 }}
                      onMouseEnter={() => setHoveredSkill(`${category.id}-${skill.name}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="group/skill"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-outfit text-accent-cream/80 group-hover/skill:text-accent-cream transition-colors">
                          {skill.name}
                        </span>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ 
                            opacity: hoveredSkill === `${category.id}-${skill.name}` ? 1 : 0.5 
                          }}
                          className={`font-mono text-sm ${colorClasses.text}`}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      
                      {/* Progress bar */}
                      <div className="relative h-2 rounded-full bg-navy/50 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.15 + skillIndex * 0.1 + 0.3,
                            ease: [0.22, 1, 0.36, 1]
                          }}
                          className={`absolute inset-y-0 left-0 rounded-full ${colorClasses.bg}`}
                          style={{
                            background: `linear-gradient(90deg, 
                              ${category.color === 'amber' ? '#ffb703' : 
                                category.color === 'orange' ? '#fb8500' : 
                                category.color === 'teal' ? '#219ebc' : '#8ecae6'
                              } 0%, 
                              ${category.color === 'amber' ? '#fb8500' : 
                                category.color === 'orange' ? '#ffb703' : 
                                category.color === 'teal' ? '#8ecae6' : '#219ebc'
                              } 100%)`
                          }}
                        />
                        
                        {/* Shimmer effect on hover */}
                        <AnimatePresence>
                          {hoveredSkill === `${category.id}-${skill.name}` && (
                            <motion.div
                              initial={{ x: '-100%' }}
                              animate={{ x: '200%' }}
                              exit={{ x: '200%' }}
                              transition={{ duration: 0.6 }}
                              className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            />
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative corner */}
                <div className={`absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 ${colorClasses.text.replace('text-', 'border-')}/20 rounded-tr-xl`} />
                <div className={`absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 ${colorClasses.text.replace('text-', 'border-')}/20 rounded-bl-xl`} />
              </motion.div>
            )
          })}
        </div>

        {/* Additional skills tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="font-mono text-sm text-accent-cream/40 mb-6">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Redux', 'Jest', 'Cypress', 'Figma', 'Vercel', 'Netlify', 'Three.js', 'WebGL', 'Rust', 'Go'].map(
              (tech, index) => (
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
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
