'use client'

import { useRef } from 'react'
import { motion, useInView, Variants } from 'framer-motion'
import { cn } from '@/app/lib/utils'

/**
 * AnimatedText - Text component with various reveal animations
 * Supports word-by-word, character-by-character, and line-by-line animations
 */

type AnimationType = 'words' | 'chars' | 'lines' | 'fade'

interface AnimatedTextProps {
  text: string
  className?: string
  animation?: AnimationType
  delay?: number
  duration?: number
  staggerDelay?: number
  once?: boolean
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
}

export default function AnimatedText({
  text,
  className,
  animation = 'words',
  delay = 0,
  duration = 0.5,
  staggerDelay = 0.05,
  once = true,
  as: Component = 'p',
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once, margin: '-50px' })

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const fadeVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  // Split text based on animation type
  const getElements = () => {
    switch (animation) {
      case 'chars':
        return text.split('').map((char, i) => (
          <motion.span
            key={i}
            variants={itemVariants}
            className="inline-block"
            style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
          >
            {char}
          </motion.span>
        ))
      case 'words':
        return text.split(' ').map((word, i) => (
          <motion.span
            key={i}
            variants={itemVariants}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))
      case 'lines':
        return text.split('\n').map((line, i) => (
          <motion.span
            key={i}
            variants={itemVariants}
            className="block"
          >
            {line}
          </motion.span>
        ))
      default:
        return text
    }
  }

  if (animation === 'fade') {
    return (
      <motion.div ref={containerRef}>
        <Component className={className}>
          <motion.span
            variants={fadeVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {text}
          </motion.span>
        </Component>
      </motion.div>
    )
  }

  return (
    <motion.div ref={containerRef}>
      <Component className={className}>
        <motion.span
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="inline-block"
          style={{ perspective: 1000 }}
        >
          {getElements()}
        </motion.span>
      </Component>
    </motion.div>
  )
}
