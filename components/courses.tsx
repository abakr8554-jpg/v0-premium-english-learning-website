"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { GraduationCap, MessageCircle, Zap, Heart, Award, ArrowRight, Clock } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { NotifyModal } from "@/components/notify-modal"

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    rotateX: -15,
    scale: 0.85,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
}

export function Courses() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t, isRTL } = useLanguage()
  const [notifyOpen, setNotifyOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState<{ slug: string; name: string }>({ slug: "", name: "" })

  const openNotifyModal = (slug: string, name: string) => {
    setSelectedCourse({ slug, name })
    setNotifyOpen(true)
  }

  const activeCourses = [
    {
      icon: GraduationCap,
      title: t("courses.general"),
      subtitle: t("courses.generalSubtitle"),
      description: t("courses.generalDesc"),
      features: isRTL
        ? [
            "تطوير مهارات التحدث والاستماع والقراءة والكتابة",
            "بناء المفردات وقواعد اللغة",
            "تطوير نطق وطلاقة أوضح",
            "ممارسة التواصل في الحياة الواقعية",
            "دروس تفاعلية تركز على الطالب",
            "مناسب لمتعلمي المستوى المبتدئ (A2)",
          ]
        : [
            "Improve speaking, listening, reading, and writing",
            "Build vocabulary and grammar skills",
            "Develop clearer pronunciation and fluency",
            "Practice real-life communication",
            "Interactive and student-centered lessons",
            "Suitable for elementary-level learners (A2)",
          ],
      popular: true,
    },
    {
      icon: MessageCircle,
      title: t("courses.speaking"),
      subtitle: t("courses.speakingSubtitle"),
      description: t("courses.speakingDesc"),
      features: isRTL
        ? [
            "إطالة المحادثات بشكل طبيعي حتى 20 دقيقة",
            "تحسين النطق من خلال تقنيات المحاكاة",
            "بناء مفردات متقدمة وطلاقة في التحدث",
            "تطوير مهارات الاستماع من خلال أنشطة الانغماس",
          ]
        : [
            "Extend conversations naturally for up to 20 minutes",
            "Improve pronunciation through shadowing techniques",
            "Build advanced vocabulary and speaking fluency",
            "Develop listening skills through immersion activities",
          ],
      popular: false,
    },
  ]

  const comingSoonCourses = [
    {
      slug: "speakflex",
      icon: Zap,
      title: t("courses.speakFlex"),
      subtitle: t("courses.speakFlexSubtitle"),
      description: t("courses.speakFlexDesc"),
    },
    {
      slug: "mom-en-to",
      icon: Heart,
      title: t("courses.momEnTo"),
      subtitle: t("courses.momEnToSubtitle"),
      description: t("courses.momEnToDesc"),
    },
    {
      slug: "ielts-prep",
      icon: Award,
      title: t("courses.ielts"),
      subtitle: t("courses.ieltsSubtitle"),
      description: t("courses.ieltsDesc"),
    },
  ]

  return (
    <section id="courses" className="bg-secondary py-16 md:py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -right-20 w-80 h-80 bg-yellow/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            y: [0, 50, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-20 w-72 h-72 bg-purple/5 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            y: [0, -40, 0],
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
            {isRTL ? "برامجنا" : "Our Programs"}
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple text-balance">
            {t("courses.title")} <span className="text-yellow">{t("courses.titleHighlight")}</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t("courses.subtitle")}</p>
        </motion.div>

        {/* Active Courses Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16 max-w-5xl mx-auto" style={{ perspective: "1500px" }}>
          {activeCourses.map((course, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{
                y: -15,
                rotateY: index % 2 === 0 ? 4 : -4,
                rotateX: 2,
                scale: 1.02,
                boxShadow: course.popular
                  ? "0 35px 70px -15px rgba(253, 197, 0, 0.35)"
                  : "0 30px 60px -15px rgba(67, 37, 119, 0.25)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`relative bg-card rounded-3xl p-6 md:p-8 border cursor-pointer group ${isRTL ? "text-right" : "text-left"} ${
                course.popular ? "border-yellow shadow-lg mt-4" : "border-border"
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Gradient Overlay - clipped to card */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-purple/0 to-yellow/0 group-hover:from-purple/5 group-hover:to-yellow/5 transition-all duration-500" />
              </div>

              {/* Popular Badge */}
              {course.popular && (
                <motion.div
                  className="absolute -top-3 left-1/2 z-20"
                  initial={{ y: -20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.5 }}
                  style={{ transform: "translateZ(40px) translateX(-50%)" }}
                >
                  <span className="bg-yellow text-indigo px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap shadow-lg block">
                    {t("courses.mostPopular")}
                  </span>
                </motion.div>
              )}

              {/* Icon */}
              <motion.div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 ${
                  course.popular ? "bg-yellow/20" : "bg-purple/10 group-hover:bg-purple"
                }`}
                whileHover={{ rotateY: 180, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                style={{ transform: "translateZ(30px)" }}
              >
                <course.icon
                  className={`w-7 h-7 transition-colors ${
                    course.popular ? "text-yellow" : "text-purple group-hover:text-white"
                  }`}
                />
              </motion.div>

              {/* Content */}
              <div className="mb-4 relative" style={{ transform: "translateZ(20px)" }}>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-purple transition-colors">
                  {course.title}
                </h3>
                <span className="text-sm text-purple font-medium">{course.subtitle}</span>
              </div>

              <p
                className="text-muted-foreground text-sm md:text-base mb-5 leading-relaxed relative"
                style={{ transform: "translateZ(15px)" }}
              >
                {course.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2.5 mb-6 relative" style={{ transform: "translateZ(15px)" }}>
                {course.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    className={`flex items-start gap-2.5 text-sm text-foreground ${isRTL ? "flex-row-reverse" : ""}`}
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.08 }}
                  >
                    <motion.div
                      className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${course.popular ? "bg-yellow" : "bg-purple"}`}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    />
                    <span className="leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.div
                style={{ transform: "translateZ(25px)" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/contact">
                  <Button
                    className={`w-full rounded-full py-5 font-semibold transition-all group/btn ${
                      course.popular
                        ? "bg-yellow text-indigo hover:bg-yellow/90 shadow-lg hover:shadow-yellow/30"
                        : "bg-purple text-white hover:bg-purple/90"
                    }`}
                  >
                    <span>{t("courses.enrollNow")}</span>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${isRTL ? "mr-2 group-hover/btn:-translate-x-1 rotate-180" : "ml-2 group-hover/btn:translate-x-1"}`}
                    />
                  </Button>
                </Link>
              </motion.div>

              {/* Bottom glow line */}
              <motion.div
                className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl overflow-hidden ${
                  course.popular
                    ? "bg-gradient-to-r from-yellow via-purple to-yellow"
                    : "bg-gradient-to-r from-purple via-yellow to-purple"
                }`}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-purple/10 text-purple rounded-full text-sm font-semibold mb-4 ${isRTL ? "flex-row-reverse" : ""}`}>
            <Clock className="w-4 h-4" />
            <span>{t("courses.comingSoon")}</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-purple">
            {isRTL ? "كورسات قادمة" : "Upcoming Courses"}
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {comingSoonCourses.map((course, index) => (
            <motion.div
              key={index}
              custom={index + 2}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`relative bg-card/60 backdrop-blur-sm rounded-3xl p-6 border border-border/50 group overflow-hidden ${isRTL ? "text-right" : "text-left"}`}
            >
              {/* Coming Soon Badge */}
              <div className={`absolute top-4 ${isRTL ? "left-4" : "right-4"}`}>
                <span className="bg-purple/10 text-purple px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                  {t("courses.comingSoon")}
                </span>
              </div>

              {/* Icon */}
              <motion.div
                className="w-12 h-12 rounded-2xl bg-purple/10 flex items-center justify-center mb-5 group-hover:bg-purple group-hover:text-white transition-all"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <course.icon className="w-6 h-6 text-purple group-hover:text-white transition-colors" />
              </motion.div>

              {/* Content */}
              <h4 className="text-xl font-bold text-foreground mb-1 group-hover:text-purple transition-colors">
                {course.title}
              </h4>
              <span className="text-xs text-purple font-medium block mb-3">{course.subtitle}</span>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{course.description}</p>

              {/* Notify Button */}
              <Button
                onClick={() => openNotifyModal(course.slug, course.title)}
                variant="outline"
                className="w-full rounded-full border-2 border-purple/30 text-purple hover:bg-purple hover:text-white hover:border-purple transition-all bg-transparent"
              >
                <span>{t("courses.notifyMe")}</span>
                <ArrowRight
                  className={`w-4 h-4 transition-transform ${isRTL ? "mr-2 rotate-180" : "ml-2"}`}
                />
              </Button>

              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple/0 to-yellow/0 group-hover:from-purple/5 group-hover:to-yellow/5 transition-all duration-500 pointer-events-none rounded-3xl" />
            </motion.div>
          ))}
        </div>
      </div>

      <NotifyModal
        isOpen={notifyOpen}
        onClose={() => setNotifyOpen(false)}
        courseSlug={selectedCourse.slug}
        courseName={selectedCourse.name}
      />
    </section>
  )
}
