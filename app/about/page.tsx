"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Tutors } from "@/components/tutors"
import { Testimonials } from "@/components/testimonials"
import { ScrollToTop, FloatingParticles } from "@/components/creative-elements"
import { useLanguage } from "@/lib/language-context"
import { Target, Eye, Heart, Users, Award, Globe } from "lucide-react"

export default function AboutPage() {
  const { t, isRTL } = useLanguage()

  const values = [
    { icon: Heart, titleKey: "Excellence", arTitle: "التميز", descKey: "We strive for the highest quality in everything we do.", arDesc: "نسعى للجودة الأعلى في كل ما نقوم به.", color: "bg-red-500" },
    { icon: Users, titleKey: "Community", arTitle: "المجتمع", descKey: "Building a supportive global learning community.", arDesc: "نبني مجتمع تعلم عالمي داعم.", color: "bg-blue-500" },
    { icon: Award, titleKey: "Innovation", arTitle: "الابتكار", descKey: "Embracing new methods and technologies.", arDesc: "نتبنى أساليب وتقنيات جديدة.", color: "bg-yellow" },
    { icon: Globe, titleKey: "Inclusivity", arTitle: "الشمولية", descKey: "Education accessible to everyone, everywhere.", arDesc: "تعليم متاح للجميع، في كل مكان.", color: "bg-green-500" },
  ]

  return (
    <main className="min-h-screen overflow-x-hidden bg-secondary">
      <FloatingParticles />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-purple via-indigo to-purple overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: -30 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 ${isRTL ? "font-arabic" : ""}`}>
              {t("about.title")} <span className="text-yellow">{t("about.titleHighlight")}</span>
            </h1>
            <p className={`text-lg md:text-xl text-white/80 max-w-2xl mx-auto ${isRTL ? "font-arabic" : ""}`}>
              {t("about.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Target, titleKey: "about.missionTitle", descKey: "about.missionDesc", color: "bg-yellow" },
              { icon: Eye, titleKey: "about.visionTitle", descKey: "about.visionDesc", color: "bg-purple" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, rotateY: i === 0 ? -15 : 15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ y: -10, rotateY: i === 0 ? 5 : -5, scale: 1.02 }}
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <item.icon className={`w-8 h-8 ${item.color === "bg-yellow" ? "text-purple" : "text-white"}`} />
                </div>
                <h2 className={`text-2xl md:text-3xl font-bold text-purple mb-4 ${isRTL ? "font-arabic" : ""}`}>
                  {t(item.titleKey)}
                </h2>
                <p className={`text-gray-600 leading-relaxed ${isRTL ? "font-arabic" : ""}`}>{t(item.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-gradient-to-b from-secondary to-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-5xl font-bold text-purple mb-4 ${isRTL ? "font-arabic" : ""}`}>
              {t("about.valuesTitle")} <span className="text-yellow-dark">{t("about.valuesHighlight")}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10, rotateY: 10, scale: 1.05 }}
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-2xl transition-shadow"
              >
                <div className={`w-14 h-14 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className={`font-bold text-purple mb-2 ${isRTL ? "font-arabic" : ""}`}>
                  {isRTL ? value.arTitle : value.titleKey}
                </h3>
                <p className={`text-sm text-gray-600 ${isRTL ? "font-arabic" : ""}`}>
                  {isRTL ? value.arDesc : value.descKey}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Tutors />
      <Testimonials />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
