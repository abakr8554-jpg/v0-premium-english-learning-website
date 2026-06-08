"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Users, Globe, BarChart3, MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 80,
    rotateX: -15,
    scale: 0.85
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  })
}

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t, isRTL } = useLanguage()

  const features = [
    {
      icon: Users,
      title: t("features.nativeTutors"),
      description: t("features.nativeTutorsDesc"),
      accent: isRTL ? "مدرسين من 15+ دولة" : "Tutors from 15+ countries",
    },
    {
      icon: Globe,
      title: t("features.curriculum"),
      description: t("features.curriculumDesc"),
      accent: isRTL ? "محتوى متوافق مع معايير Cambridge" : "Cambridge-aligned content",
    },
    {
      icon: BarChart3,
      title: t("features.progress"),
      description: t("features.progressDesc"),
      accent: isRTL ? "رؤى ذكية لتطورك اللغوي" : "AI-powered insights",
    },
    {
      icon: MessageCircle,
      title: t("features.support"),
      description: t("features.supportDesc"),
      accent: isRTL ? "متوسط الرد: 5 دقائق" : "Average response: 5 minutes",
    },
  ]

  return (
    <section className="bg-secondary py-16 md:py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-32 -right-32 w-96 h-96 bg-purple/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-yellow/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-purple/10 text-purple rounded-full text-sm font-semibold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            {isRTL ? "ليه تختارنا؟" : "Why Choose Us"}
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple text-balance">
            {t("features.title")} <span className="text-yellow">{t("features.titleHighlight")}</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("features.subtitle")}
          </p>
        </motion.div>

        {/* Features Grid with 3D perspective */}
        <div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          style={{ perspective: "1500px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ 
                y: -20,
                rotateY: index % 2 === 0 ? 10 : -10,
                rotateX: 5,
                scale: 1.05,
                boxShadow: "0 30px 60px -15px rgba(67, 37, 119, 0.25)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`bg-card rounded-3xl p-6 md:p-8 shadow-sm border border-border cursor-pointer group relative overflow-hidden ${isRTL ? "text-right" : "text-left"}`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple/0 to-yellow/0 group-hover:from-purple/5 group-hover:to-yellow/5 transition-all duration-500" />
              
              {/* Icon with 3D effect */}
              <motion.div 
                className="w-14 h-14 rounded-2xl bg-purple/10 flex items-center justify-center mb-6 group-hover:bg-purple transition-all duration-300 relative"
                whileHover={{ rotateY: 180, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                style={{ transform: "translateZ(30px)" }}
              >
                <feature.icon className="w-7 h-7 text-purple group-hover:text-white transition-colors" />
              </motion.div>
              
              {/* Content with Z depth */}
              <div style={{ transform: "translateZ(20px)" }}>
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-purple transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                  {feature.description}
                </p>
              </div>
              
              {/* Accent Badge */}
              <motion.span 
                className="inline-block text-xs font-medium text-purple bg-purple/10 px-3 py-1 rounded-full relative"
                whileHover={{ scale: 1.05 }}
                style={{ transform: "translateZ(25px)" }}
              >
                {feature.accent}
              </motion.span>

              {/* Bottom glow line */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple via-yellow to-purple rounded-b-3xl"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
