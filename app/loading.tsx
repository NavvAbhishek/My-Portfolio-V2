'use client'

import { motion } from 'framer-motion'

/**
 * Loading - Animated loading screen
 * Displays while the page is loading
 */
export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black">
      <div className="relative">
        {/* Animated logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <span className="font-clash text-6xl font-bold text-gradient">
            A<span className="text-amber">.</span>
          </span>
        </motion.div>

        {/* Loading ring */}
        <motion.div
          className="absolute -inset-8 border-2 border-amber/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />

        {/* Loading bar */}
        <motion.div
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-32 h-1 bg-navy rounded-full overflow-hidden"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-amber to-orange rounded-full"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </div>
  )
}
