'use client'

import { forwardRef } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/app/lib/utils'

/**
 * Button - A versatile button component with multiple variants
 * Supports primary, secondary, outline, and ghost styles
 */

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      isLoading = false,
      leftIcon,
      rightIcon,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseStyles = `
      relative inline-flex items-center justify-center gap-2
      font-outfit font-semibold rounded-full
      transition-all duration-300
      disabled:opacity-50 disabled:cursor-not-allowed
      overflow-hidden
    `

    // Variant styles
    const variants = {
      primary: `
        bg-gradient-to-r from-amber to-orange text-black
        hover:shadow-glow-amber
        active:scale-95
      `,
      secondary: `
        bg-navy border border-amber/30 text-amber
        hover:bg-amber/10 hover:border-amber
        active:scale-95
      `,
      outline: `
        bg-transparent border-2 border-amber/30 text-amber
        hover:border-amber hover:bg-amber/10
        active:scale-95
      `,
      ghost: `
        bg-transparent text-accent-cream/70
        hover:text-amber hover:bg-white/5
        active:scale-95
      `,
    }

    // Size styles
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {/* Loading spinner */}
        {isLoading && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
          />
        )}

        {/* Left icon */}
        {!isLoading && leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}

        {/* Button text */}
        <span>{children}</span>

        {/* Right icon */}
        {!isLoading && rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}

        {/* Shine effect for primary variant */}
        {variant === 'primary' && (
          <motion.div
            className="absolute inset-0 -translate-x-full"
            animate={{ x: ['-100%', '200%'] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: 'easeInOut',
            }}
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
            }}
          />
        )}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export default Button
