'use client'

import { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * SmoothScrollProvider - Wraps the app with smooth scroll context
 * Provides page transition animations
 */

interface Props {
  children: ReactNode
}

export default function SmoothScrollProvider({ children }: Props) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
