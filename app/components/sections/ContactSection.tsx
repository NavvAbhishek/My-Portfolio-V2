'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { 
  Send, 
  Mail, 
  MapPin, 
  Phone, 
  Github, 
  Linkedin, 
  Twitter, 
  ArrowUpRight,
  CheckCircle,
  Sparkles
} from 'lucide-react'

/**
 * ContactSection - Elegant contact form with animated submit button
 * Features social links with hover glow effects
 */

// Social links data
const socialLinks = [
  { 
    icon: Github, 
    label: 'GitHub', 
    href: 'https://github.com/NavvAbhishek',
    color: '#ffffff',
    hoverBg: 'hover:bg-white/10'
  },
  { 
    icon: Linkedin, 
    label: 'LinkedIn', 
    href: 'https://www.linkedin.com/in/navabhishek/',
    color: '#0A66C2',
    hoverBg: 'hover:bg-[#0A66C2]/10'
  },
  { 
    icon: Twitter, 
    label: 'Twitter', 
    href: 'https://x.com/NavAbhishek',
    color: '#1DA1F2',
    hoverBg: 'hover:bg-[#1DA1F2]/10'
  },
  { 
    icon: Mail, 
    label: 'Email', 
    href: 'mailto:abi2000navi@gmail.com',
    color: '#ffb703',
    hoverBg: 'hover:bg-amber/10'
  },
]

// Contact info
const contactInfo = [
  { icon: Mail, label: 'Email', value: 'abi2000navi@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Colombo, Sri Lanka' },
  { icon: Phone, label: 'Phone', value: '+(94)71-1604788' },
]

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  // Input field component
  const InputField = ({ 
    name, 
    label, 
    type = 'text',
  }: { 
    name: string
    label: string
    type?: string
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <input
        type={type}
        name={name}
        id={name}
        value={formData[name as keyof typeof formData]}
        onChange={handleChange}
        onFocus={() => setFocusedField(name)}
        onBlur={() => setFocusedField(null)}
        required
        className={`
          peer w-full px-5 py-4 rounded-2xl
          bg-navy/30 border-2 transition-all duration-300
          font-outfit text-accent-cream placeholder-transparent
          focus:outline-none
          ${focusedField === name || formData[name as keyof typeof formData] 
            ? 'border-amber/50 shadow-glow-amber' 
            : 'border-accent-cream/10 hover:border-accent-cream/20'
          }
        `}
        placeholder={label}
      />
      <label
        htmlFor={name}
        className={`
          absolute left-5 transition-all duration-300 pointer-events-none font-outfit
          ${focusedField === name || formData[name as keyof typeof formData]
            ? '-top-2.5 text-xs text-amber bg-black px-2'
            : 'top-4 text-accent-cream/50'
          }
        `}
      >
        {label}
      </label>
      
      {/* Focus glow effect */}
      <AnimatePresence>
        {focusedField === name && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute inset-0 rounded-2xl bg-amber/5 -z-10"
          />
        )}
      </AnimatePresence>
    </motion.div>
  )

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-navy-dark/30 to-black" />
      
      {/* Floating gradient blobs */}
      <motion.div
        animate={{
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-amber/10 to-transparent blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-amber text-sm tracking-wider">04 // CONTACT</span>
          <h2 className="font-clash text-4xl md:text-6xl font-bold mt-4 text-accent-cream">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="mt-6 font-outfit text-lg text-accent-cream/60 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out.
            I'm always excited to discuss new opportunities and ideas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-navy/20 border border-accent-cream/5 hover:border-amber/20 transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-amber/10 text-amber group-hover:bg-amber group-hover:text-black transition-all duration-300">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-accent-cream/40">{info.label}</p>
                    <p className="font-outfit text-accent-cream">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="pt-8 border-t border-accent-cream/5">
              <p className="font-mono text-sm text-accent-cream/40 mb-6">Find me on</p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      group relative p-4 rounded-2xl border border-accent-cream/10
                      transition-all duration-300
                      ${social.hoverBg}
                      hover:border-opacity-50
                    `}
                    style={{ '--hover-color': social.color } as React.CSSProperties}
                  >
                    <social.icon 
                      className="w-6 h-6 text-accent-cream/60 group-hover:text-accent-cream transition-colors" 
                    />
                    {/* Glow effect */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"
                      style={{ backgroundColor: `${social.color}20` }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Decorative quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="pt-8"
            >
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-amber/5 to-transparent border border-amber/10">
                <Sparkles className="w-5 h-5 text-amber mb-3" />
                <p className="font-outfit text-accent-cream/60 italic leading-relaxed">
                  "Great things happen when we collaborate. Let's build something amazing together."
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email row */}
              <div className="grid md:grid-cols-2 gap-6">
                <InputField name="name" label="Your Name" />
                <InputField name="email" label="Your Email" type="email" />
              </div>

              {/* Subject */}
              <InputField name="subject" label="Subject" />

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`
                    peer w-full px-5 py-4 rounded-2xl resize-none
                    bg-navy/30 border-2 transition-all duration-300
                    font-outfit text-accent-cream placeholder-transparent
                    focus:outline-none
                    ${focusedField === 'message' || formData.message 
                      ? 'border-amber/50 shadow-glow-amber' 
                      : 'border-accent-cream/10 hover:border-accent-cream/20'
                    }
                  `}
                  placeholder="Your Message"
                />
                <label
                  htmlFor="message"
                  className={`
                    absolute left-5 transition-all duration-300 pointer-events-none font-outfit
                    ${focusedField === 'message' || formData.message
                      ? '-top-2.5 text-xs text-amber bg-black px-2'
                      : 'top-4 text-accent-cream/50'
                    }
                  `}
                >
                  Your Message
                </label>
              </motion.div>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
                className={`
                  relative w-full py-5 rounded-2xl font-outfit font-semibold text-lg
                  overflow-hidden transition-all duration-500
                  ${isSubmitted 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gradient-to-r from-amber to-orange text-black'
                  }
                `}
              >
                {/* Button content */}
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </motion.span>
                  ) : isSubmitting ? (
                    <motion.span
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                      />
                      Sending...
                    </motion.span>
                  ) : (
                    <motion.span
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                      <ArrowUpRight className="w-5 h-5" />
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Shine effect */}
                {!isSubmitting && !isSubmitted && (
                  <motion.div
                    className="absolute inset-0 -translate-x-full"
                    animate={{ translateX: ['100%', '-100%'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  </motion.div>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
