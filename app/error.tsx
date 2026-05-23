"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AlertTriangle, RefreshCw, Home } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("[v0] Application error:", error)
  }, [error])

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple via-indigo to-purple flex items-center justify-center px-4 overflow-hidden">
      <div className="text-center relative z-10 max-w-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateZ: -180 }}
          animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mx-auto">
            <AlertTriangle className="w-12 h-12 text-red-400" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Something went wrong</h1>
          <p className="text-white/70 text-lg mb-8">
            We apologize for the inconvenience. An unexpected error occurred. Please try again.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={reset}
              size="lg"
              className="bg-yellow hover:bg-yellow-dark text-purple font-bold gap-2"
            >
              <RefreshCw className="w-5 h-5" />
              Try Again
            </Button>
            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-purple font-bold gap-2 w-full sm:w-auto bg-transparent"
              >
                <Home className="w-5 h-5" />
                Go Home
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
