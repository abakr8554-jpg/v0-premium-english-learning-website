"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"

export function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10,
    color: i % 3 === 0 ? "#FDC500" : i % 3 === 1 ? "#432577" : "#2B215A"
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor: particle.color,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 500)
    }
    window.addEventListener("scroll", toggleVisible)
    return () => window.removeEventListener("scroll", toggleVisible)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-yellow to-purple text-white shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
          <span className="absolute inset-0 rounded-full border-2 border-yellow animate-ping opacity-30" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-gradient-to-br from-purple via-indigo to-purple flex items-center justify-center"
        >
          <div className="relative">
            {/* Logo */}
            <motion.img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile-cover-PJMN1FpcIL7o4NjWk9qNTwg6DWbQTV.jpg"
              alt="Loading"
              className="w-24 h-24 rounded-full object-cover"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Spinning Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-transparent border-t-yellow border-r-yellow"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ margin: "-8px" }}
            />
            {/* Outer Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-transparent border-b-white/30 border-l-white/30"
              animate={{ rotate: -360 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ margin: "-16px" }}
            />
          </div>
          {/* Loading Text */}
          <motion.p
            className="absolute bottom-1/3 text-white font-medium text-lg tracking-wider"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function SectionDivider({ variant = "wave" }: { variant?: "wave" | "tilt" | "curve" }) {
  if (variant === "wave") {
    return (
      <div className="relative h-16 md:h-24 -mt-1">
        <svg
          viewBox="0 0 1440 100"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50 L1440,100 L0,100 Z"
            fill="currentColor"
            className="text-secondary"
            initial={{ d: "M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50 L1440,100 L0,100 Z" }}
            animate={{ 
              d: [
                "M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50 L1440,100 L0,100 Z",
                "M0,70 C240,20 480,80 720,30 C960,80 1200,20 1440,70 L1440,100 L0,100 Z",
                "M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50 L1440,100 L0,100 Z"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>
    )
  }

  if (variant === "tilt") {
    return (
      <div className="relative h-16 md:h-24 -mt-1">
        <svg
          viewBox="0 0 1440 100"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" className="text-secondary" points="0,100 1440,0 1440,100" />
        </svg>
      </div>
    )
  }

  return (
    <div className="relative h-16 md:h-24 -mt-1">
      <svg
        viewBox="0 0 1440 100"
        className="absolute bottom-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <ellipse cx="720" cy="100" rx="900" ry="60" fill="currentColor" className="text-secondary" />
      </svg>
    </div>
  )
}

export function ScrollIndicator() {
  return (
    <motion.div 
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
    >
      <span className="text-white/60 text-sm font-medium">Scroll to explore</span>
      <motion.div
        className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <motion.div
          className="w-1.5 h-3 bg-yellow rounded-full"
          animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  )
}
