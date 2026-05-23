"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, Compass } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple via-indigo to-purple flex items-center justify-center px-4 overflow-hidden relative">
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-yellow rounded-full opacity-40"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{ y: [0, -50, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 3 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
        />
      ))}

      <div className="text-center relative z-10 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.h1
            className="text-[150px] md:text-[200px] font-bold text-yellow leading-none"
            animate={{ rotateX: [0, 10, 0], rotateY: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              textShadow: "0 0 60px rgba(253, 197, 0, 0.5)",
              transformStyle: "preserve-3d",
            }}
          >
            404
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-white/70 text-lg mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved to a different treat.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" className="bg-yellow hover:bg-yellow-dark text-purple font-bold gap-2 w-full sm:w-auto">
                <Home className="w-5 h-5" />
                Back to Home
              </Button>
            </Link>
            <Link href="/courses">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-purple font-bold gap-2 w-full sm:w-auto bg-transparent"
              >
                <Compass className="w-5 h-5" />
                Browse Courses
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Decorative Animated Element */}
        <motion.div
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-yellow/10 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>
    </main>
  )
}
