"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type Language = "en" | "ar"

interface Translations {
  [key: string]: {
    en: string
    ar: string
  }
}

export const translations: Translations = {
  // Navbar
  "nav.home": { en: "Home", ar: "الرئيسية" },
  "nav.courses": { en: "Courses", ar: "الكورسات" },
  "nav.blog": { en: "Blog", ar: "المدونة" },
  "nav.contact": { en: "Contact", ar: "تواصل معنا" },
  "nav.startTrial": { en: "Start Free Trial", ar: "ابدأ تجربة مجانية" },
  
  // Hero
  "hero.badge": { en: "Premium English Learning Platform", ar: "منصة تعلم الإنجليزية المتميزة" },
  "hero.title1": { en: "Language Treats -", ar: "لانجويج تريتس -" },
  "hero.title2": { en: "Crafting Your English Success Story,", ar: "نصنع قصة نجاحك في الإنجليزية،" },
  "hero.title3": { en: "Treat by Treat.", ar: "خطوة بخطوة." },
  "hero.description": { 
    en: "Experience personalized learning with certified native tutors, flexible hours, and a global curriculum designed for your success.", 
    ar: "استمتع بتجربة تعلم شخصية مع مدرسين أصليين معتمدين، ساعات مرنة، ومنهج عالمي مصمم لنجاحك." 
  },
  "hero.exploreCourses": { en: "Explore Premium Courses", ar: "استكشف الكورسات المميزة" },
  "hero.bookConsultation": { en: "Book a Consultation", ar: "احجز استشارة" },
  "hero.students": { en: "Students", ar: "طالب" },
  "hero.tutors": { en: "Tutors", ar: "مدرس" },
  "hero.success": { en: "Success", ar: "نسبة النجاح" },
  "hero.featuredOn": { en: "As featured on:", ar: "كما ظهرنا في:" },
  
  // Features
  "features.title": { en: "Why Choose", ar: "لماذا تختار" },
  "features.titleHighlight": { en: "Language Treats?", ar: "لانجويج تريتس؟" },
  "features.subtitle": { 
    en: "We combine world-class tutors with innovative technology to deliver an unmatched learning experience.", 
    ar: "نجمع بين أفضل المدرسين والتكنولوجيا المبتكرة لتقديم تجربة تعلم لا مثيل لها." 
  },
  "features.nativeTutors": { en: "Verified Native Tutors", ar: "مدرسون أصليون معتمدون" },
  "features.nativeTutorsDesc": { 
    en: "Learn from certified native speakers from the USA & UK with years of teaching experience.", 
    ar: "تعلم من متحدثين أصليين معتمدين من أمريكا وبريطانيا بخبرة سنوات في التدريس." 
  },
  "features.curriculum": { en: "Global Curriculum", ar: "منهج عالمي" },
  "features.curriculumDesc": { 
    en: "CEFR-aligned and IELTS-focused curriculum designed by education experts.", 
    ar: "منهج متوافق مع CEFR ومركز على IELTS مصمم من خبراء التعليم." 
  },
  "features.progress": { en: "Real-time Progress", ar: "متابعة مباشرة" },
  "features.progressDesc": { 
    en: "Track your improvement with detailed analytics and personalized feedback.", 
    ar: "تابع تحسنك مع تحليلات مفصلة وملاحظات شخصية." 
  },
  "features.support": { en: "24/7 Support", ar: "دعم على مدار الساعة" },
  "features.supportDesc": { 
    en: "Get help anytime with our dedicated academic support team.", 
    ar: "احصل على المساعدة في أي وقت مع فريق الدعم الأكاديمي المتخصص." 
  },
  
  // Courses
  "courses.title": { en: "Our Premium", ar: "كورساتنا" },
  "courses.titleHighlight": { en: "Courses", ar: "المميزة" },
  "courses.subtitle": { 
    en: "Choose from our carefully crafted courses designed to meet your specific learning goals.", 
    ar: "اختر من كورساتنا المصممة بعناية لتلبية أهدافك التعليمية." 
  },
  "courses.mostPopular": { en: "Most Popular", ar: "الأكثر شعبية" },
  "courses.enrollNow": { en: "Enroll Now", ar: "سجل الآن" },
  "courses.perMonth": { en: "/month", ar: "/شهر" },
  "courses.ielts": { en: "IELTS Masterclass", ar: "دورة IELTS المتقدمة" },
  "courses.ieltsDesc": { 
    en: "Comprehensive preparation for all IELTS modules with practice tests and expert feedback.", 
    ar: "إعداد شامل لجميع أقسام IELTS مع اختبارات تجريبية وملاحظات خبراء." 
  },
  "courses.business": { en: "Business English Executive", ar: "إنجليزي الأعمال التنفيذي" },
  "courses.businessDesc": { 
    en: "Master professional communication, presentations, and business writing skills.", 
    ar: "أتقن التواصل المهني والعروض التقديمية ومهارات الكتابة التجارية." 
  },
  "courses.kids": { en: "Kids Learning Fun", ar: "تعلم ممتع للأطفال" },
  "courses.kidsDesc": { 
    en: "Interactive and engaging lessons designed specifically for young learners.", 
    ar: "دروس تفاعلية وممتعة مصممة خصيصًا للمتعلمين الصغار." 
  },
  "courses.toefl": { en: "TOEFL Intensive", ar: "دورة TOEFL المكثفة" },
  "courses.toeflDesc": { 
    en: "Focused preparation for TOEFL iBT with strategies and full-length practice tests.", 
    ar: "إعداد مركز لـ TOEFL iBT مع استراتيجيات واختبارات تجريبية كاملة." 
  },
  
  // Tutors
  "tutors.title": { en: "Meet Our Expert", ar: "تعرف على" },
  "tutors.titleHighlight": { en: "Tutors", ar: "مدرسينا الخبراء" },
  "tutors.subtitle": { 
    en: "Learn from the best - our tutors are certified professionals with years of experience.", 
    ar: "تعلم من الأفضل - مدرسونا محترفون معتمدون بسنوات من الخبرة." 
  },
  "tutors.viewProfile": { en: "View Profile", ar: "عرض الملف" },
  
  // Testimonials
  "testimonials.title": { en: "Success", ar: "قصص" },
  "testimonials.titleHighlight": { en: "Stories", ar: "النجاح" },
  "testimonials.subtitle": { 
    en: "Join thousands of satisfied learners who achieved their English goals with us.", 
    ar: "انضم لآلاف المتعلمين الراضين الذين حققوا أهدافهم في الإنجليزية معنا." 
  },
  "testimonials.verified": { en: "Verified Student", ar: "طالب موثق" },
  
  // Footer
  "footer.description": { 
    en: "Empowering learners worldwide with premium English education. Join our community of successful speakers.", 
    ar: "نمكّن المتعلمين حول العالم بتعليم إنجليزي متميز. انضم لمجتمعنا من المتحدثين الناجحين." 
  },
  "footer.quickLinks": { en: "Quick Links", ar: "روابط سريعة" },
  "footer.resources": { en: "Resources", ar: "الموارد" },
  "footer.corporate": { en: "Corporate", ar: "للشركات" },
  "footer.aboutUs": { en: "About Us", ar: "من نحن" },
  "footer.ourTutors": { en: "Our Tutors", ar: "مدرسونا" },
  "footer.pricing": { en: "Pricing", ar: "الأسعار" },
  "footer.testimonials": { en: "Testimonials", ar: "آراء العملاء" },
  "footer.faq": { en: "FAQ", ar: "الأسئلة الشائعة" },
  "footer.blog": { en: "Blog", ar: "المدونة" },
  "footer.ebooks": { en: "Free E-books", ar: "كتب مجانية" },
  "footer.webinars": { en: "Webinars", ar: "ندوات إلكترونية" },
  "footer.placement": { en: "Placement Test", ar: "اختبار تحديد المستوى" },
  "footer.studyGuides": { en: "Study Guides", ar: "أدلة الدراسة" },
  "footer.forBusiness": { en: "For Business", ar: "للأعمال" },
  "footer.partnerships": { en: "Partnerships", ar: "الشراكات" },
  "footer.careers": { en: "Careers", ar: "الوظائف" },
  "footer.affiliates": { en: "Affiliates", ar: "التسويق بالعمولة" },
  "footer.newsletter": { en: "Subscribe to Newsletter", ar: "اشترك في النشرة الإخبارية" },
  "footer.newsletterDesc": { 
    en: "Get tips, updates, and exclusive offers delivered to your inbox.", 
    ar: "احصل على نصائح وتحديثات وعروض حصرية في بريدك." 
  },
  "footer.emailPlaceholder": { en: "Enter your email", ar: "أدخل بريدك الإلكتروني" },
  "footer.subscribe": { en: "Subscribe", ar: "اشترك" },
  "footer.rights": { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  "footer.privacy": { en: "Privacy Policy", ar: "سياسة الخصوصية" },
  "footer.terms": { en: "Terms of Service", ar: "شروط الخدمة" },
  "footer.cookies": { en: "Cookie Policy", ar: "سياسة ملفات تعريف الارتباط" },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  
  const isRTL = language === "ar"

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = isRTL ? "rtl" : "ltr"
  }, [language, isRTL])

  const t = (key: string): string => {
    const translation = translations[key]
    if (!translation) return key
    return translation[language] || translation.en || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
