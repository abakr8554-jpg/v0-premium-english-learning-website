"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

const sections = {
  en: [
    { title: "What Are Cookies?", body: "Cookies are small text files placed on your device when you visit a website. They help the site remember your preferences and improve your experience." },
    { title: "Essential Cookies", body: "These cookies are necessary for the site to function. They enable login, secure checkout, and language preferences. They cannot be disabled." },
    { title: "Performance Cookies", body: "We use analytics cookies to understand how visitors use our site so we can improve it. All data is aggregated and anonymized." },
    { title: "Marketing Cookies", body: "These help us deliver relevant content and offers. You can opt out at any time from your account settings." },
    { title: "Managing Cookies", body: "You can control cookies through your browser settings. Disabling certain cookies may impact site functionality." },
    { title: "Third-Party Cookies", body: "Some cookies are set by trusted partners (e.g., payment processors, analytics providers). We only work with partners who comply with strict data standards." },
    { title: "Updates", body: "We may update this Cookie Policy. Please check back periodically for the most current version." },
  ],
  ar: [
    { title: "ما هي ملفات تعريف الارتباط؟", body: "ملفات تعريف الارتباط هي ملفات نصية صغيرة توضع على جهازك عند زيارة موقع ويب. تساعد الموقع على تذكر تفضيلاتك وتحسين تجربتك." },
    { title: "ملفات تعريف الارتباط الأساسية", body: "هذه الملفات ضرورية لعمل الموقع. تتيح تسجيل الدخول والدفع الآمن وتفضيلات اللغة. لا يمكن تعطيلها." },
    { title: "ملفات تعريف الارتباط للأداء", body: "نستخدم ملفات تعريف الارتباط الخاصة بالتحليلات لفهم كيف يستخدم الزوار موقعنا حتى نتمكن من تحسينه. جميع البيانات مجمعة ومجهولة المصدر." },
    { title: "ملفات تعريف الارتباط التسويقية", body: "تساعدنا في تقديم محتوى وعروض ذات صلة. يمكنك إلغاء الاشتراك في أي وقت من إعدادات حسابك." },
    { title: "إدارة ملفات تعريف الارتباط", body: "يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات المتصفح. قد يؤثر تعطيل بعض الملفات على وظائف الموقع." },
    { title: "ملفات تعريف الارتباط الخارجية", body: "يتم تعيين بعض الملفات بواسطة شركاء موثوقين (مثل معالجي الدفع ومقدمي التحليلات). نعمل فقط مع شركاء يلتزمون بمعايير البيانات الصارمة." },
    { title: "التحديثات", body: "قد نقوم بتحديث سياسة ملفات تعريف الارتباط هذه. يرجى التحقق دوريًا من النسخة الأحدث." },
  ],
}

export default function CookiesPage() {
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
            {isRTL ? "سياسة ملفات تعريف الارتباط" : "Cookie Policy"}
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
