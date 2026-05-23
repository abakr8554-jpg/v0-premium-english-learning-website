"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

const sections = {
  en: [
    { title: "Information We Collect", body: "We collect information you provide directly such as your name, email, payment details, and learning preferences when you sign up, enroll in a course, or contact us." },
    { title: "How We Use Your Data", body: "Your data is used to deliver our courses, personalize your experience, process payments, send important notifications, and improve our services." },
    { title: "Data Sharing", body: "We never sell your personal data. We share data only with trusted partners (payment processors, analytics) under strict confidentiality agreements." },
    { title: "Cookies & Tracking", body: "We use cookies and similar technologies to keep you signed in, remember preferences, and measure how our site performs." },
    { title: "Your Rights", body: "You can access, update, export, or delete your data at any time. Contact privacy@languagetreats.com to exercise these rights." },
    { title: "Security", body: "We implement industry-standard encryption (HTTPS/TLS), secure storage, and regular audits to keep your information safe." },
    { title: "Contact Us", body: "Questions about privacy? Reach us at privacy@languagetreats.com or write to us at 123 Learning Lane, London EC1A 1BB." },
  ],
  ar: [
    { title: "المعلومات التي نجمعها", body: "نجمع المعلومات التي تقدمها مباشرة مثل اسمك وبريدك الإلكتروني وتفاصيل الدفع وتفضيلات التعلم عند التسجيل أو الالتحاق بدورة أو الاتصال بنا." },
    { title: "كيف نستخدم بياناتك", body: "نستخدم بياناتك لتقديم الدورات وتخصيص تجربتك ومعالجة المدفوعات وإرسال الإشعارات المهمة وتحسين خدماتنا." },
    { title: "مشاركة البيانات", body: "نحن لا نبيع بياناتك الشخصية أبداً. نشاركها فقط مع شركاء موثوقين (معالجو الدفع، التحليلات) بموجب اتفاقيات سرية صارمة." },
    { title: "ملفات تعريف الارتباط", body: "نستخدم ملفات تعريف الارتباط والتقنيات المماثلة لإبقائك مسجلاً وتذكر تفضيلاتك وقياس أداء موقعنا." },
    { title: "حقوقك", body: "يمكنك الوصول إلى بياناتك أو تحديثها أو تصديرها أو حذفها في أي وقت. اتصل بنا على privacy@languagetreats.com لممارسة هذه الحقوق." },
    { title: "الأمان", body: "نطبق معايير التشفير الصناعية (HTTPS/TLS) والتخزين الآمن وعمليات التدقيق المنتظمة للحفاظ على أمان معلوماتك." },
    { title: "اتصل بنا", body: "أسئلة حول الخصوصية؟ تواصل معنا على privacy@languagetreats.com أو اكتب إلينا على 123 شارع التعلم، لندن EC1A 1BB." },
  ],
}

export default function PrivacyPage() {
  const { isRTL, language } = useLanguage()
  const data = sections[language]

  return (
    <main>
      <Navbar />
      <section className="bg-gradient-to-br from-purple via-purple to-indigo py-20 md:py-28 relative overflow-hidden">
        <motion.div className="absolute inset-0 opacity-20"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-yellow blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-yellow/50 blur-3xl" />
        </motion.div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance ${isRTL ? "text-right" : "text-left"}`}
          >
            {isRTL ? "سياسة الخصوصية" : "Privacy Policy"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`mt-4 text-white/80 ${isRTL ? "text-right" : "text-left"}`}
          >
            {isRTL ? "آخر تحديث: 1 يناير 2025" : "Last updated: January 1, 2025"}
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`bg-card border border-border rounded-2xl p-6 md:p-8 hover:shadow-lg hover:border-purple/30 transition-all ${isRTL ? "text-right" : "text-left"}`}
              whileHover={{ y: -4 }}
            >
              <h2 className="text-xl md:text-2xl font-bold text-purple mb-3">{item.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
