"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { GraduationCap, Briefcase, Gamepad2, BookOpen, ArrowRight } from "lucide-react"

const courses = [
  {
    icon: GraduationCap,
    title: "IELTS Masterclass",
    subtitle: "Band 7.5+ Prep",
    description: "Intensive preparation with mock exams, detailed feedback, and proven strategies for achieving your target band score.",
    features: ["Full Mock Exams", "Writing Reviews", "Speaking Practice", "Band Prediction"],
    popular: true,
  },
  {
    icon: Briefcase,
    title: "Business English Executive",
    subtitle: "Corporate Communication",
    description: "Master professional communication for meetings, presentations, negotiations, and international business settings.",
    features: ["Presentation Skills", "Email Mastery", "Negotiation Tactics", "Industry Vocabulary"],
    popular: false,
  },
  {
    icon: Gamepad2,
    title: "Kid's Learning Fun",
    subtitle: "Foundation English",
    description: "Interactive games, storytelling, and engaging activities designed to make learning English exciting for young learners.",
    features: ["Interactive Games", "Story Time", "Songs & Rhymes", "Fun Worksheets"],
    popular: false,
  },
  {
    icon: BookOpen,
    title: "TOEFL Intensive",
    subtitle: "University Admission Prep",
    description: "Focused preparation for academic English with emphasis on university-level reading, writing, and critical thinking.",
    features: ["Academic Writing", "Reading Strategies", "Listening Drills", "Speaking Tasks"],
    popular: false,
  },
]

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

export function Courses() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
            Our Programs
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple text-balance">
            Our Premium Courses
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Structured programs tailored to your specific goals and learning style
          </p>
        </motion.div>

        {/* Courses Grid with 3D perspective */}
        <div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{ perspective: "1500px" }}
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ 
                y: -25,
                rotateY: index % 2 === 0 ? 8 : -8,
                rotateX: 5,
                scale: 1.03,
                boxShadow: course.popular 
                  ? "0 35px 70px -15px rgba(253, 197, 0, 0.35)"
                  : "0 30px 60px -15px rgba(67, 37, 119, 0.25)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`relative bg-card rounded-3xl p-6 border cursor-pointer group overflow-hidden ${
                course.popular
                  ? "border-yellow shadow-lg"
                  : "border-border"
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple/0 to-yellow/0 group-hover:from-purple/5 group-hover:to-yellow/5 transition-all duration-500" />
              
              {/* Popular Badge */}
              {course.popular && (
                <motion.div 
                  className="absolute -top-3 left-1/2 -translate-x-1/2"
                  initial={{ y: -20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.5 }}
                  style={{ transform: "translateZ(40px) translateX(-50%)" }}
                >
                  <span className="bg-yellow text-indigo px-4 py-1 rounded-full text-xs font-semibold whitespace-nowrap shadow-lg">
                    Most Popular
                  </span>
                </motion.div>
              )}

              {/* Icon with 3D effect */}
              <motion.div 
                className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 ${
                  course.popular ? "bg-yellow/20" : "bg-purple/10 group-hover:bg-purple"
                }`}
                whileHover={{ rotateY: 180, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                style={{ transform: "translateZ(30px)" }}
              >
                <course.icon className={`w-6 h-6 transition-colors ${
                  course.popular ? "text-yellow" : "text-purple group-hover:text-white"
                }`} />
              </motion.div>

              {/* Content with Z depth */}
              <div className="mb-4 relative" style={{ transform: "translateZ(20px)" }}>
                <h3 className="text-xl font-bold text-foreground group-hover:text-purple transition-colors">{course.title}</h3>
                <span className="text-sm text-purple font-medium">{course.subtitle}</span>
              </div>

              <p className="text-muted-foreground text-sm mb-5 leading-relaxed relative" style={{ transform: "translateZ(15px)" }}>
                {course.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6 relative" style={{ transform: "translateZ(15px)" }}>
                {course.features.map((feature, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-center gap-2 text-sm text-foreground"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <motion.div 
                      className={`w-1.5 h-1.5 rounded-full ${course.popular ? "bg-yellow" : "bg-purple"}`}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.div
                style={{ transform: "translateZ(25px)" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  className={`w-full rounded-full py-5 font-semibold transition-all group/btn ${
                    course.popular
                      ? "bg-yellow text-indigo hover:bg-yellow/90 shadow-lg hover:shadow-yellow/30"
                      : "bg-purple text-white hover:bg-purple/90"
                  }`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              {/* Bottom glow line */}
              <motion.div 
                className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl ${
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
      </div>
    </section>
  )
}
