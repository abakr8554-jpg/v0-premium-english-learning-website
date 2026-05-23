"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Courses } from "@/components/courses"
import { ScrollToTop, FloatingParticles } from "@/components/creative-elements"
import { useLanguage } from "@/lib/language-context"
import { Sparkles } from "lucide-react"

export default function CoursesPage() {
  const { t, isRTL } = useLanguage()

  return (
    <main className="min-h-screen overflow-x-hidden bg-secondary">
      <FloatingParticles />
      <Navbar />

      <section className="relative pt-32 pb-16 px-4 bg-gradient-to-br from-purple via-indigo to-purple overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: -30 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="inline-flex items-center gap-2 bg-yellow/20 border border-yellow/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-yellow" />
              <span className="text-yellow text-sm font-semibold">{t("hero.badge")}</span>
            </div>
            <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 ${isRTL ? "font-arabic" : ""}`}>
              {t("courses.title")} <span className="text-yellow">{t("courses.titleHighlight")}</span>
            </h1>
            <p className={`text-lg md:text-xl text-white/80 max-w-2xl mx-auto ${isRTL ? "font-arabic" : ""}`}>
              {t("courses.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      <Courses />

      <Footer />
      <ScrollToTop />
    </main>
  )
}
