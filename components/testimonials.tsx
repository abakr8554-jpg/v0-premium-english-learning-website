"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Star, Award, TrendingUp, Building2, Quote } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

type SuccessStory = {
  name: string
  title: string
  quote: string
  badge: string
  before: string
  after: string
  achievement: string
}

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
      duration: 0.9,
    }
  })
}

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t, isRTL } = useLanguage()

  const corporateClients = [
    {
      name: "Quantum Corp",
      result: isRTL ? "زادت كفاءة اللغة الإنجليزية في الشركة بنسبة 30%" : "Company-wide English proficiency increased by 30%",
      employees: isRTL ? "500+ موظف تم تدريبهم" : "500+ employees trained",
    },
    {
      name: "Global Innovators",
      result: isRTL ? "تحسنت كفاءة التواصل الدولي بنسبة 45%" : "International communication efficiency improved by 45%",
      employees: isRTL ? "200+ مدير تنفيذي معتمد" : "200+ executives certified",
    },
  ]

  const individualSuccess: SuccessStory[] = [
    {
      name: isRTL ? "شادية ح. حسن" : "Shadia H. Hassan",
      title: isRTL ? "قصة نجاح" : "Success Story",
      quote: isRTL
        ? "هم ممتازين، وعملهم مختلف وفعًّال جدًا. نجحوا في إحداث فرق حقيقي في رحلتي التعليمية. سأستمر معهم بكل تأكيد. ✨"
        : "They are excellent, and their work is really different and special. They truly managed to make a difference. I will definitely continue with you. ✨",
      badge: isRTL ? "مراجعة" : "Review",
      before: "A1",
      after: "B1",
      achievement: isRTL ? "إتقان المحادثة" : "Mastered Speaking",
    },
    {
      name: isRTL ? "سماح أبو السنون" : "Samah Abu Elsnoon",
      title: isRTL ? "قصة نجاح" : "Success Story",
      quote: isRTL
        ? "أكثر من رائع! تجربة لا تُنسى معكم. أنا سعيدة جدًا بكل لحظة قضيتها في التعلم معكم. ❤️"
        : "More than wonderful. I'm happy to be with you ❤️",
      badge: isRTL ? "مراجعة" : "Review",
      before: "B1",
      after: "B2",
      achievement: isRTL ? "شهادة IELTS" : "IELTS Certified",
    },
    {
      name: isRTL ? "شيماء صلاح" : "Shaymaa Salah",
      title: isRTL ? "قصة نجاح" : "Success Story",
      quote: isRTL
        ? "رغم أنها جلستي الأولى فقط، إلا أنني سعيدة جدًا بالنتائج التي فاقت توقعاتي. معلمة احترافية جدًا وملهمة. ❤️"
        : "Still my very first session but I am so happy with the result that was over my expectations. She is very professional ❤️",
      badge: isRTL ? "مراجعة" : "Review",
      before: "A2",
      after: "B1",
      achievement: isRTL ? "تحدثت بثقة" : "Speaking Confidence",
    },
  ]

  return (
    <section id="testimonials" className="bg-background py-20 md:py-28 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-32 left-1/3 w-96 h-96 bg-yellow/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            y: [0, 30, 0],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-32 right-1/3 w-80 h-80 bg-purple/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            y: [0, -40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
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
            {isRTL ? "قصص النجاح" : "Success Stories"}
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            {t("testimonials.title")} <span className="text-purple">{t("testimonials.titleHighlight")}</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>

        {/* Corporate Clients - 3D Cards */}
        <div 
          className="grid md:grid-cols-2 gap-6 mb-8"
          style={{ perspective: "1500px" }}
        >
          {corporateClients.map((client, index) => (
            <motion.div
              key={client.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ 
                y: -15,
                rotateX: 5,
                rotateY: index % 2 === 0 ? 5 : -5,
                scale: 1.02,
                boxShadow: "0 30px 60px -15px rgba(67, 37, 119, 0.2)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`bg-gradient-to-br from-purple/5 to-indigo/5 rounded-3xl p-8 border border-purple/10 cursor-pointer group relative overflow-hidden ${isRTL ? "text-right" : "text-left"}`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow/0 to-purple/0 group-hover:from-yellow/5 group-hover:to-purple/5 transition-all duration-500" />
              
              <div className={`flex items-start gap-4 relative ${isRTL ? "flex-row-reverse" : ""}`}>
                <motion.div 
                  className="w-16 h-16 rounded-2xl bg-purple/10 flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotateY: 180, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  style={{ transform: "translateZ(30px)" }}
                >
                  <Building2 className="w-8 h-8 text-purple" />
                </motion.div>
                <div className="flex-1" style={{ transform: "translateZ(20px)" }}>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-purple transition-colors">{client.name}</h3>
                  <p className="text-purple font-semibold mb-2">{client.result}</p>
                  <span className={`inline-flex items-center gap-1 text-sm text-muted-foreground ${isRTL ? "flex-row-reverse" : ""}`}>
                    <TrendingUp className="w-4 h-4 text-yellow" />
                    {client.employees}
                  </span>
                </div>
              </div>

              {/* Bottom Glow */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple via-yellow to-purple rounded-b-3xl"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Individual Success Stories - 3D Cards */}
        <div 
          className="grid md:grid-cols-2 gap-6"
          style={{ perspective: "1500px" }}
        >
          {individualSuccess.map((story, index) => (
            <motion.div
              key={story.name}
              custom={index + 2}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ 
                y: -20,
                rotateX: 5,
                rotateY: index % 2 === 0 ? -5 : 5,
                scale: 1.02,
                boxShadow: "0 35px 70px -15px rgba(253, 197, 0, 0.25)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`bg-card rounded-3xl p-8 border border-border cursor-pointer group relative overflow-hidden ${isRTL ? "text-right" : "text-left"}`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow/0 to-purple/0 group-hover:from-yellow/5 group-hover:to-purple/5 transition-all duration-500" />
              
              {/* Header */}
              <div className={`flex items-start justify-between mb-6 relative ${isRTL ? "flex-row-reverse" : ""}`} style={{ transform: "translateZ(25px)" }}>
                <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                  {/* Avatar */}
                  <motion.div 
                    className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow to-yellow/70 flex items-center justify-center"
                    whileHover={{ scale: 1.15, rotateZ: 10 }}
                  >
                    <span className="text-indigo font-bold text-xl">{story.name.charAt(0)}</span>
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg group-hover:text-purple transition-colors">{story.name}</h3>
                    <p className="text-purple text-sm font-medium">{story.title}</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.8 + i * 0.1 }}
                    >
                      <Star className="w-4 h-4 fill-yellow text-yellow" />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Score Improvement or Achievement */}
              <div style={{ transform: "translateZ(20px)" }}>
                <motion.div 
                  className="flex items-center gap-4 mb-6 p-4 bg-secondary rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-center">
                    <span className="text-muted-foreground text-xs block mb-1">{isRTL ? "قبل" : "Before"}</span>
                    <span className="text-2xl font-bold text-muted-foreground">{story.before}</span>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="h-0.5 flex-1 bg-gradient-to-r from-muted-foreground/30 via-yellow to-purple" />
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <TrendingUp className="w-6 h-6 text-yellow mx-2" />
                    </motion.div>
                    <div className="h-0.5 flex-1 bg-gradient-to-r from-purple via-yellow to-muted-foreground/30" />
                  </div>
                  <div className="text-center">
                    <span className="text-purple text-xs block mb-1">{isRTL ? "بعد" : "After"}</span>
                    <span className="text-2xl font-bold text-purple">{story.after}</span>
                  </div>
                </motion.div>
                <motion.div 
                  className={`flex items-center gap-3 mt-4 p-4 bg-secondary rounded-2xl ${isRTL ? "flex-row-reverse" : ""}`}
                  whileHover={{ scale: 1.02 }}
                >
                  <Award className="w-6 h-6 text-yellow" />
                  <span className="font-semibold text-foreground">{story.achievement}</span>
                </motion.div>
              </div>

              {/* Quote */}
              <div className="relative" style={{ transform: "translateZ(15px)" }}>
                <Quote className={`w-8 h-8 text-purple/20 absolute -top-2 ${isRTL ? "-right-2" : "-left-2"}`} />
                <p className={`text-muted-foreground leading-relaxed ${isRTL ? "pr-6" : "pl-6"}`}>
                  {`"${story.quote}"`}
                </p>
              </div>

              {/* Badge */}
              <div className={`mt-6 flex items-center justify-between ${isRTL ? "flex-row-reverse" : ""}`} style={{ transform: "translateZ(30px)" }}>
                <motion.span 
                  className={`inline-flex items-center gap-2 text-sm font-medium text-purple bg-purple/10 px-4 py-2 rounded-full ${isRTL ? "flex-row-reverse" : ""}`}
                  whileHover={{ scale: 1.05 }}
                >
                  <Award className="w-4 h-4" />
                  {story.badge}
                </motion.span>
                <span className="text-xs text-muted-foreground">{t("testimonials.verified")}</span>
              </div>

              {/* Bottom Glow */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow via-purple to-yellow rounded-b-3xl"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Corporate Logos Marquee with 3D Effect */}
        <motion.div 
          className="mt-12 relative overflow-hidden py-8 bg-secondary rounded-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className="text-center mb-6">
            <p className="text-muted-foreground font-medium">
              {isRTL ? "موثوق به من موظفي الشركات العالمية الرائدة" : "Trusted by employees from leading global companies"}
            </p>
          </div>
          <div className={`flex ${isRTL ? "animate-marquee-rtl" : "animate-marquee"}`}>
            {["Quantum Corp", "Global Innovators", "TechVenture", "InnovateLabs", "FutureScale", "DataDriven Co", "Quantum Corp", "Global Innovators", "TechVenture", "InnovateLabs", "FutureScale", "DataDriven Co"].map((client, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 mx-8 md:mx-12"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <span className="text-xl md:text-2xl font-bold text-muted-foreground/40 hover:text-purple transition-colors whitespace-nowrap">
                  {client}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
