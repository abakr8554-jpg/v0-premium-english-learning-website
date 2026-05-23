"use client"

import { motion } from "framer-motion"

export default function Loading() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple via-indigo to-purple flex items-center justify-center">
      <div className="relative">
        {/* Outer rotating ring */}
        <motion.div
          className="w-32 h-32 border-4 border-yellow/30 border-t-yellow rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />

        {/* Middle counter-rotating ring */}
        <motion.div
          className="absolute inset-4 border-4 border-white/30 border-b-white rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* Center pulsing dot */}
        <motion.div
          className="absolute inset-0 m-auto w-8 h-8 bg-yellow rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />

        {/* Loading text */}
        <motion.p
          className="absolute top-full left-1/2 -translate-x-1/2 mt-8 text-white font-semibold whitespace-nowrap"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading...
        </motion.p>
      </div>
    </main>
  )
}
