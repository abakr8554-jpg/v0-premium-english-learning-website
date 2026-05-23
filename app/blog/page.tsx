"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingParticles } from "@/components/creative-elements"
import { useLanguage } from "@/lib/language-context"
import { Calendar, Clock, ArrowRight, ArrowLeft } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: { en: "10 Tips to Master IELTS Speaking", ar: "10 نصائح لإتقان محادثة IELTS" },
    excerpt: {
      en: "Discover proven strategies to boost your IELTS speaking score and gain confidence in your responses.",
      ar: "اكتشف استراتيجيات مثبتة لرفع درجتك في محادثة IELTS واكتساب الثقة في إجاباتك.",
    },
    category: { en: "IELTS", ar: "آيلتس" },
    date: "Mar 15, 2026",
    readTime: 5,
    gradient: "from-yellow to-orange-500",
  },
  {
    id: 2,
    title: { en: "Building English Vocabulary Fast", ar: "بناء مفردات الإنجليزية بسرعة" },
    excerpt: {
      en: "Learn effective techniques to expand your vocabulary and remember new words for the long term.",
      ar: "تعلم تقنيات فعالة لتوسيع مفرداتك وتذكر الكلمات الجديدة على المدى البعيد.",
    },
    category: { en: "Vocabulary", ar: "مفردات" },
    date: "Mar 12, 2026",
    readTime: 7,
    gradient: "from-purple to-indigo",
  },
  {
    id: 3,
    title: { en: "Business English Essentials", ar: "أساسيات إنجليزية الأعمال" },
    excerpt: {
      en: "Master the language of business with practical phrases and communication skills for the workplace.",
      ar: "أتقن لغة الأعمال مع عبارات عملية ومهارات تواصل لمكان العمل.",
    },
    category: { en: "Business", ar: "أعمال" },
    date: "Mar 10, 2026",
    readTime: 6,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 4,
    title: { en: "Common Grammar Mistakes to Avoid", ar: "أخطاء قواعد شائعة يجب تجنبها" },
    excerpt: {
      en: "Identify and correct the most common English grammar mistakes that learners make.",
      ar: "حدد وصحح أكثر الأخطاء النحوية الإنجليزية شيوعًا التي يرتكبها المتعلمون.",
    },
    category: { en: "Grammar", ar: "قواعد" },
    date: "Mar 8, 2026",
    readTime: 8,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    title: { en: "Improve Your English Pronunciation", ar: "حسّن نطقك الإنجليزي" },
    excerpt: {
      en: "Tips and exercises to help you sound more like a native English speaker.",
      ar: "نصائح وتمارين لمساعدتك على التحدث مثل المتحدث الأصلي للإنجليزية.",
    },
    category: { en: "Speaking", ar: "محادثة" },
    date: "Mar 5, 2026",
    readTime: 4,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 6,
    title: { en: "How to Write Better Essays", ar: "كيف تكتب مقالات أفضل" },
    excerpt: {
      en: "Step-by-step guide to crafting compelling essays in English with proper structure.",
      ar: "دليل خطوة بخطوة لصياغة مقالات إنجليزية مقنعة بهيكل صحيح.",
    },
    category: { en: "Writing", ar: "كتابة" },
    date: "Mar 1, 2026",
    readTime: 9,
    gradient: "from-purple to-pink-500",
  },
]

export default function BlogPage() {
  const { t, language, isRTL } = useLanguage()

  return (
    <main className="min-h-screen overflow-x-hidden bg-secondary">
      <FloatingParticles />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 bg-gradient-to-br from-purple via-indigo to-purple overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: -30 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 ${isRTL ? "font-arabic" : ""}`}>
              {t("blog.title")} <span className="text-yellow">{t("blog.titleHighlight")}</span>
            </h1>
            <p className={`text-lg md:text-xl text-white/80 max-w-2xl mx-auto ${isRTL ? "font-arabic" : ""}`}>
              {t("blog.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -10, rotateY: 5, scale: 1.02 }}
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow group"
              >
                <div className={`h-48 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className={`text-xs font-bold text-purple ${isRTL ? "font-arabic" : ""}`}>
                      {post.category[language]}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span className={isRTL ? "font-arabic" : ""}>
                        {post.readTime} {t("blog.minRead")}
                      </span>
                    </div>
                  </div>
                  <h3
                    className={`text-xl font-bold text-purple mb-3 group-hover:text-yellow-dark transition-colors ${isRTL ? "font-arabic" : ""}`}
                  >
                    {post.title[language]}
                  </h3>
                  <p className={`text-gray-600 text-sm mb-4 leading-relaxed ${isRTL ? "font-arabic" : ""}`}>
                    {post.excerpt[language]}
                  </p>
                  <Link
                    href={`/blog/${post.id}`}
                    className={`inline-flex items-center gap-2 text-yellow-dark font-semibold hover:gap-3 transition-all ${isRTL ? "font-arabic" : ""}`}
                  >
                    {t("blog.readMore")}
                    {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
