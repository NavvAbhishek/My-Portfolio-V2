'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/app/lib/utils'

/**
 * SectionWrapper - A wrapper component for consistent section styling
 * Provides scroll-triggered animations and consistent padding
 */

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  animate?: boolean
  delay?: number
}

export default function SectionWrapper({
  children,
  className,
  id,
  animate = true,
  delay = 0,
}: SectionWrapperProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      initial={animate ? { opacity: 0, y: 50 } : {}}
      animate={animate && isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'relative py-20 md:py-32 overflow-hidden',
        className
      )}
    >
      {children}
    </motion.section>
  )
}
