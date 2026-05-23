"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Award, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    rotateX: -10,
    scale: 0.9
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  })
}

export function Tutors() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t, isRTL } = useLanguage()

  const tutors = [
    {
      name: isRTL ? "سارة ج." : "Sarah J.",
      credential: isRTL ? "ماجستير لغويات تطبيقية" : "M.A. Applied Linguistics",
      location: isRTL ? "المملكة المتحدة" : "United Kingdom",
      specialty: isRTL ? "الكتابة الأكاديمية و IELTS" : "Academic Writing & IELTS",
      experience: isRTL ? "12+ سنة خبرة" : "12+ years teaching",
      rating: 4.9,
      reviews: 847,
      bio: isRTL 
        ? "متخصصة في مساعدة الطلاب لتحقيق باند 7.5+ في كتابة IELTS بمنهجيات مثبتة."
        : "Specialized in helping students achieve band 7.5+ in IELTS writing with proven methodologies.",
    },
    {
      name: isRTL ? "مايكل ب." : "Michael B.",
      credential: isRTL ? "بكالوريوس تعليم، ممتحن IELTS" : "B.S. Education, IELTS Examiner",
      location: isRTL ? "الولايات المتحدة" : "United States",
      specialty: isRTL ? "إنجليزي الأعمال والعروض" : "Business English & Presentations",
      experience: isRTL ? "8+ سنوات خبرة" : "8+ years teaching",
      rating: 4.95,
      reviews: 623,
      bio: isRTL
        ? "مدرب شركات سابق في شركات Fortune 500. خبير في مهارات التواصل التنفيذي."
        : "Former corporate trainer at Fortune 500 companies. Expert in executive communication skills.",
    },
    {
      name: isRTL ? "آنيا ر." : "Anya R.",
      credential: isRTL ? "أخصائية إعداد TOEFL معتمدة" : "Certified TOEFL Prep Specialist",
      location: isRTL ? "أستراليا" : "Australia",
      specialty: isRTL ? "TOEFL والإعداد الجامعي" : "TOEFL & University Prep",
      experience: isRTL ? "10+ سنوات خبرة" : "10+ years teaching",
      rating: 4.88,
      reviews: 512,
      bio: isRTL
        ? "ساعدت 500+ طالب في القبول بأفضل الجامعات بدرجات TOEFL محسنة."
        : "Helped 500+ students gain admission to top universities with improved TOEFL scores.",
    },
    {
      name: isRTL ? "جيمس ك." : "James K.",
      credential: isRTL ? "معتمد CELTA و DELTA" : "CELTA & DELTA Certified",
      location: isRTL ? "كندا" : "Canada",
      specialty: isRTL ? "الإنجليزية المحادثية" : "Conversational English",
      experience: isRTL ? "15+ سنة خبرة" : "15+ years teaching",
      rating: 4.92,
      reviews: 934,
      bio: isRTL
        ? "متخصص في جعل الإنجليزية ممتعة وسهلة. يركز على بناء الثقة في المحادثة."
        : "Master of making English fun and accessible. Specializes in building confidence in speaking.",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % tutors.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + tutors.length) % tutors.length)
  }

  return (
    <section id="tutors" className="bg-background py-20 md:py-28 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 right-1/4 w-72 h-72 bg-purple/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1],
            x: [0, 40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-64 h-64 bg-yellow/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
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
            {isRTL ? "فريقنا" : "Our Team"}
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            {t("tutors.title")} <span className="text-purple">{t("tutors.titleHighlight")}</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("tutors.subtitle")}
          </p>
        </motion.div>

        {/* Desktop 3D Grid */}
        <div 
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{ perspective: "1500px" }}
        >
          {tutors.map((tutor, index) => (
            <motion.div
              key={tutor.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ 
                y: -20,
                rotateY: index % 2 === 0 ? 10 : -10,
                rotateX: 5,
                scale: 1.05,
                boxShadow: "0 30px 60px -15px rgba(253, 197, 0, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`bg-card rounded-3xl p-6 border border-border cursor-pointer group overflow-hidden relative ${isRTL ? "text-right" : "text-left"}`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow/0 to-purple/0 group-hover:from-yellow/5 group-hover:to-purple/5 transition-all duration-500" />
              
              {/* Avatar */}
              <motion.div 
                className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-purple via-purple to-indigo flex items-center justify-center mb-4 relative"
                whileHover={{ scale: 1.15, rotateZ: 5 }}
                style={{ transform: "translateZ(40px)" }}
              >
                <span className="text-white font-bold text-2xl">{tutor.name.charAt(0)}</span>
                <motion.div 
                  className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow rounded-full flex items-center justify-center"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Star className="w-3 h-3 text-indigo fill-indigo" />
                </motion.div>
              </motion.div>

              {/* Content */}
              <div className="text-center relative" style={{ transform: "translateZ(25px)" }}>
                <h3 className="text-xl font-bold text-foreground group-hover:text-purple transition-colors">{tutor.name}</h3>
                <p className="text-sm text-purple font-medium mt-1">{tutor.credential}</p>
                <div className="flex items-center justify-center gap-1 text-muted-foreground text-sm mt-2">
                  <MapPin className="w-3 h-3" />
                  <span>{tutor.location}</span>
                </div>
              </div>

              {/* Rating */}
              <motion.div 
                className="flex items-center justify-center gap-2 my-4"
                style={{ transform: "translateZ(20px)" }}
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <Star className="w-4 h-4 fill-yellow text-yellow" />
                    </motion.div>
                  ))}
                </div>
                <span className="font-semibold text-foreground">{tutor.rating}</span>
              </motion.div>

              {/* Specialty */}
              <div className="flex items-center justify-center gap-2 mb-4" style={{ transform: "translateZ(15px)" }}>
                <Award className="w-4 h-4 text-yellow" />
                <span className="text-sm font-medium text-foreground">{tutor.specialty}</span>
              </div>

              {/* Bio */}
              <p className="text-muted-foreground text-sm text-center leading-relaxed mb-4" style={{ transform: "translateZ(10px)" }}>
                {tutor.bio}
              </p>

              {/* Experience Badge */}
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                style={{ transform: "translateZ(30px)" }}
              >
                <span className="inline-block text-xs font-medium text-purple bg-purple/10 px-4 py-1.5 rounded-full">
                  {tutor.experience}
                </span>
              </motion.div>

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

        {/* Mobile 3D Carousel */}
        <div className="md:hidden">
          <div className="relative" style={{ perspective: "1000px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, rotateY: isRTL ? -90 : 90, scale: 0.8 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                exit={{ opacity: 0, rotateY: isRTL ? 90 : -90, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`bg-card rounded-3xl p-6 border border-border ${isRTL ? "text-right" : "text-left"}`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Avatar */}
                <motion.div 
                  className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-purple to-indigo flex items-center justify-center mb-4 shadow-lg shadow-purple/30"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-white font-bold text-3xl">{tutors[currentIndex].name.charAt(0)}</span>
                </motion.div>

                {/* Content */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-foreground">{tutors[currentIndex].name}</h3>
                  <p className="text-sm text-purple font-medium mt-1">{tutors[currentIndex].credential}</p>
                  <div className="flex items-center justify-center gap-1 text-muted-foreground text-sm mt-2">
                    <MapPin className="w-3 h-3" />
                    <span>{tutors[currentIndex].location}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow text-yellow" />
                    ))}
                  </div>
                  <span className="font-semibold text-foreground">{tutors[currentIndex].rating}</span>
                </div>

                {/* Specialty */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Award className="w-4 h-4 text-purple" />
                  <span className="text-sm font-medium text-foreground">{tutors[currentIndex].specialty}</span>
                </div>

                {/* Bio */}
                <p className="text-muted-foreground text-sm text-center leading-relaxed mb-4">
                  {tutors[currentIndex].bio}
                </p>

                {/* Experience Badge */}
                <div className="text-center">
                  <span className="inline-block text-xs font-medium text-purple bg-purple/10 px-3 py-1 rounded-full">
                    {tutors[currentIndex].experience}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className={`flex justify-center gap-4 mt-6 ${isRTL ? "flex-row-reverse" : ""}`}>
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full border-purple/30 hover:bg-purple hover:text-white"
              >
                <ChevronLeft className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} />
              </Button>
              <div className="flex items-center gap-2">
                {tutors.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex ? "bg-purple w-8" : "bg-purple/30 w-2"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full border-purple/30 hover:bg-purple hover:text-white"
              >
                <ChevronRight className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
