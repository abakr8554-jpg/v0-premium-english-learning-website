"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

const sections = {
  en: [
    { title: "Acceptance of Terms", body: "By accessing or using Language Treats, you agree to be bound by these terms and our Privacy Policy." },
    { title: "Course Enrollment", body: "Enrollment grants you access to the course materials for the duration specified at purchase. Sharing your account is not permitted." },
    { title: "Payments & Refunds", body: "All payments are processed securely. You may request a full refund within 14 days of purchase if you have not completed more than 25% of the course." },
    { title: "User Conduct", body: "You agree not to misuse our platform, harass tutors or other students, or share copyrighted material without permission." },
    { title: "Intellectual Property", body: "All course content, branding, and materials are the property of Language Treats and protected by international copyright law." },
    { title: "Limitation of Liability", body: "Language Treats is not liable for any indirect or consequential damages arising from the use of our services." },
    { title: "Changes to Terms", body: "We may update these terms from time to time. Continued use of the service after changes means you accept the new terms." },
  ],
  ar: [
    { title: "قبول الشروط", body: "بالوصول إلى Language Treats أو استخدامه، فإنك توافق على الالتزام بهذه الشروط وسياسة الخصوصية الخاصة بنا." },
    { title: "التسجيل في الدورات", body: "يمنحك التسجيل حق الوصول إلى مواد الدورة طوال المدة المحددة عند الشراء. لا يُسمح بمشاركة حسابك." },
    { title: "المدفوعات والاسترداد", body: "تتم معالجة جميع المدفوعات بأمان. يمكنك طلب استرداد كامل خلال 14 يوماً من الشراء إذا لم تكمل أكثر من 25٪ من الدورة." },
    { title: "سلوك المستخدم", body: "أنت توافق على عدم إساءة استخدام منصتنا أو مضايقة المعلمين أو الطلاب الآخرين أو مشاركة مواد محمية بحقوق الطبع والنشر بدون إذن." },
    { title: "الملكية الفكرية", body: "جميع محتويات الدورة والعلامة التجارية والمواد هي ملك لـ Language Treats ومحمية بموجب قانون حقوق الطبع والنشر الدولي." },
    { title: "تحديد المسؤولية", body: "Language Treats غير مسؤول عن أي أضرار غير مباشرة أو تبعية تنشأ عن استخدام خدماتنا." },
    { title: "تغييرات الشروط", body: "قد نقوم بتحديث هذه الشروط من وقت لآخر. استمرار استخدام الخدمة بعد التغييرات يعني قبولك للشروط الجديدة." },
  ],
}

export default function TermsPage() {
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
            {isRTL ? "شروط الخدمة" : "Terms of Service"}
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
