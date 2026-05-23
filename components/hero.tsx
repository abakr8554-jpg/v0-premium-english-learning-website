"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { BookOpen, Globe, Mic, Quote, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t, isRTL } = useLanguage()
  const trustLogos = ["BBC Learning", "Educational Trust", "Cambridge Partner", "IELTS Official"]

  return (
    <section id="home" className="bg-gradient-to-br from-purple via-purple to-indigo relative overflow-hidden min-h-screen flex flex-col">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-yellow blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-yellow blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple/50 blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28 relative z-10 flex-1 flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Content */}
          <motion.div 
            className={`text-center lg:text-${isRTL ? "right" : "left"} order-2 lg:order-1`}
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <Sparkles className="w-4 h-4 text-yellow" />
              <span className="text-white/90 text-sm font-medium">{t("hero.badge")}</span>
            </motion.div>

            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {t("hero.title1")}{" "}
              <motion.span 
                className="text-yellow inline-block"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(253, 197, 0, 0.5)",
                    "0 0 40px rgba(253, 197, 0, 0.8)",
                    "0 0 20px rgba(253, 197, 0, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {t("hero.title2")}
              </motion.span>{" "}
              {t("hero.title3")}
            </motion.h1>
            
            <motion.p 
              className={`mt-6 text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0 ${isRTL ? "lg:mr-0" : "lg:ml-0"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {t("hero.description")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className={`mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-${isRTL ? "end" : "start"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/courses">
                  <Button className="bg-yellow text-indigo hover:bg-yellow/90 rounded-full px-6 md:px-8 py-5 md:py-6 text-base md:text-lg font-semibold transition-all shadow-lg hover:shadow-yellow/30 border-2 border-yellow shine-effect w-full sm:w-auto">
                    {t("hero.exploreCourses")}
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 rounded-full px-6 md:px-8 py-5 md:py-6 text-base md:text-lg font-semibold transition-all bg-transparent w-full sm:w-auto"
                  >
                    {t("hero.bookConsultation")}
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {[
                { number: "50K+", label: t("hero.students") },
                { number: "200+", label: t("hero.tutors") },
                { number: "98%", label: t("hero.success") }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + index * 0.1 }}
                >
                  <motion.div 
                    className="text-2xl md:text-3xl font-bold text-yellow"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* 3D Abstract Illustration - CSS Based */}
          <motion.div 
            className={`relative flex justify-center lg:justify-${isRTL ? "start" : "end"} order-1 lg:order-2`}
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md perspective-container">
              {/* Main 3D Container */}
              <div className="relative aspect-square" style={{ transformStyle: 'preserve-3d' }}>
                {/* Central Logo Bubble */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotateY: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm flex items-center justify-center shadow-2xl border border-white/20 animate-pulse-glow">
                    <motion.img 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile-cover-PJMN1FpcIL7o4NjWk9qNTwg6DWbQTV.jpg"
                      alt="Language Treats Logo"
                      className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full object-cover shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </div>
                </motion.div>

                {/* Orbiting Elements */}
                <div className="absolute top-4 left-8 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-yellow/90 flex items-center justify-center shadow-lg animate-float-1 tilt-card">
                  <span className="text-indigo font-bold text-lg md:text-xl">A</span>
                </div>
                <div className="absolute top-8 right-4 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/30 animate-float-2 tilt-card">
                  <span className="text-white font-bold text-xl md:text-2xl">B</span>
                </div>
                <div className="absolute bottom-16 left-4 w-8 h-8 md:w-10 md:h-10 rounded-xl bg-purple/80 flex items-center justify-center shadow-lg animate-float-3 tilt-card">
                  <span className="text-white font-bold text-sm md:text-lg">C</span>
                </div>
                <div className="absolute bottom-8 right-8 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/20 animate-float-4">
                  <Quote className="w-4 h-4 md:w-5 md:h-5 text-yellow" />
                </div>

                {/* Icon Elements */}
                <div className="absolute top-1/4 right-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-yellow/30 to-yellow/10 backdrop-blur-sm flex items-center justify-center shadow-lg border border-yellow/30 animate-float-5">
                  <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-yellow" />
                </div>
                <div className="absolute bottom-1/4 left-0 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/20 animate-float-6">
                  <Globe className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <div className="absolute bottom-4 left-1/3 w-8 h-8 md:w-10 md:h-10 rounded-xl bg-yellow/20 backdrop-blur-sm flex items-center justify-center shadow-lg border border-yellow/30 animate-float-7">
                  <Mic className="w-3 h-3 md:w-4 md:h-4 text-yellow" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Bar */}
      <motion.div 
        className="bg-white/5 backdrop-blur-sm border-t border-white/10 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8">
            <span className="text-white/60 text-sm font-medium">{t("hero.featuredOn")}</span>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10">
              {trustLogos.map((logo, index) => (
                <motion.span 
                  key={index} 
                  className="text-white/50 font-semibold text-xs md:text-base hover:text-yellow transition-colors cursor-pointer"
                  whileHover={{ scale: 1.1, color: "#FDC500" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.7 + index * 0.1 }}
                >
                  {logo}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
