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
  "nav.about": { en: "About", ar: "من نحن" },
  "nav.blog": { en: "Blog", ar: "المدونة" },
  "nav.contact": { en: "Contact", ar: "تواصل معنا" },
  "nav.startTrial": { en: "Start Free Trial", ar: "ابدأ تجربة مجانية" },

  // Hero
  "hero.badge": { en: "Premium English Learning Platform", ar: "منصة تعلم الإنجليزية المتميزة" },
  "hero.title1": { en: "Language Treats -", ar: "لانجويج تريتس -" },
  "hero.title2": { en: "Crafting Your English Success Story,", ar: "نصنع قصة نجاحك في الإنجليزية،" },
  "hero.title3": { en: "Treat by Treat.", ar: "خطوة بخطوة." },
  "hero.description": {
    en: "Experience personalized learning with certified native-like tutors, flexible hours, and a global curriculum designed for your success.",
    ar: "استمتع بتجربة تعلم شخصية مع مدرسين أصليين معتمدين، ساعات مرنة، ومنهج عالمي مصمم لنجاحك.",
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
    ar: "نجمع بين أفضل المدرسين والتكنولوجيا المبتكرة لتقديم تجربة تعلم لا مثيل لها.",
  },
  "features.nativeTutors": { en: "Certified Native-like Tutors", ar: "مدرسون شبه أصليين معتمدون" },
  "features.nativeTutorsDesc": {
    en: "Learn from native-like speakers certified by Global Teaching Organizations: Cambridge and London Teacher Training College.",
    ar: "تعلم من متحدثين شبه أصليين معتمدين من منظمات التدريس العالمية: كامبريدج وكلية لندن لتدريب المعلمين.",
  },
  "features.curriculum": { en: "Global Curriculum", ar: "منهج عالمي" },
  "features.curriculumDesc": {
    en: "CEFR-aligned, IELTS-focused, and CELTA-based curriculum designed by education experts.",
    ar: "منهج متوافق مع CEFR، يركز على IELTS، ومبني على CELTA، مصمم من خبراء التعليم.",
  },
  "features.progress": { en: "Real-time Progress", ar: "متابعة مباشرة" },
  "features.progressDesc": {
    en: "Track your improvement with detailed analytics and personalized feedback.",
    ar: "تابع تحسنك مع تحليلات مفصلة وملاحظات شخصية.",
  },
  "features.support": { en: "24/7 Support", ar: "دعم على مدار الساعة" },
  "features.supportDesc": {
    en: "Get help anytime with our dedicated academic support team.",
    ar: "احصل على المساعدة في أي وقت مع فريق الدعم الأكاديمي المتخصص.",
  },

  // Courses
  "courses.title": { en: "Our Premium", ar: "كورساتنا" },
  "courses.titleHighlight": { en: "Courses", ar: "المميزة" },
  "courses.subtitle": {
    en: "Choose from our carefully crafted courses designed to meet your specific learning goals.",
    ar: "اختر من كورساتنا المصممة بعناية لتلبية أهدافك التعليمية.",
  },
  "courses.mostPopular": { en: "Most Popular", ar: "الأكثر شعبية" },
  "courses.comingSoon": { en: "Coming Soon", ar: "قريباً" },
  "courses.enrollNow": { en: "Enroll Now", ar: "سجل الآن" },
  "courses.notifyMe": { en: "Notify Me", ar: "أبلغني" },
  "courses.perMonth": { en: "/month", ar: "/شهر" },
  "courses.viewAll": { en: "View All Courses", ar: "عرض كل الكورسات" },

  // General Course
  "courses.general": { en: "General Course", ar: "الكورس العام" },
  "courses.generalSubtitle": { en: "6-Month Foundation (A2)", ar: "أساسيات 6 شهور (A2)" },
  "courses.generalDesc": {
    en: "A 6-month English course designed to help learners communicate confidently in everyday situations. Students develop the four skills while improving their vocabulary, grammar, and pronunciation through interactive lessons.",
    ar: "كورس إنجليزي مدته 6 شهور مصمم لمساعدة المتعلمين على التواصل بثقة في المواقف اليومية. يطور الطلاب المهارات الأربع مع تحسين المفردات والقواعد والنطق من خلال دروس تفاعلية.",
  },

  // Speaking Programme
  "courses.speaking": { en: "Speaking Programme", ar: "برنامج المحادثة" },
  "courses.speakingSubtitle": { en: "Intermediate Fluency (6 Months)", ar: "طلاقة المستوى المتوسط (6 شهور)" },
  "courses.speakingDesc": {
    en: "A 6-month course for intermediate learners focused on building fluency and confidence in spoken English. Students improve their speaking, listening, pronunciation, and advanced vocabulary through immersive and interactive practice.",
    ar: "كورس مدته 6 شهور لمتعلمي المستوى المتوسط يركز على بناء الطلاقة والثقة في التحدث بالإنجليزية. يحسن الطلاب مهاراتهم في التحدث والاستماع والنطق والمفردات المتقدمة من خلال ممارسة تفاعلية وغامرة.",
  },

  // Coming Soon Courses
  "courses.speakFlex": { en: "SpeakFlex", ar: "سبيك فليكس" },
  "courses.speakFlexSubtitle": { en: "Flexible Speaking Practice", ar: "ممارسة محادثة مرنة" },
  "courses.speakFlexDesc": {
    en: "Flexible speaking sessions designed to fit your schedule. Practice English conversation anytime with personalized feedback.",
    ar: "جلسات محادثة مرنة مصممة لتناسب جدولك. مارس المحادثة الإنجليزية في أي وقت مع ملاحظات شخصية.",
  },
  "courses.momEnTo": { en: "Mom-en-to", ar: "موم-إن-تو" },
  "courses.momEnToSubtitle": { en: "English for Mothers", ar: "إنجليزي للأمهات" },
  "courses.momEnToDesc": {
    en: "A specialized programme designed for mothers to learn English alongside their daily routine with supportive community.",
    ar: "برنامج متخصص مصمم للأمهات لتعلم الإنجليزية جنباً إلى جنب مع روتينهن اليومي مع مجتمع داعم.",
  },
  "courses.ielts": { en: "IELTS Preparation", ar: "إعداد IELTS" },
  "courses.ieltsSubtitle": { en: "Band 7.5+ Preparation", ar: "إعداد للباند 7.5+" },
  "courses.ieltsDesc": {
    en: "Comprehensive preparation for all IELTS modules with practice tests and expert feedback to achieve your target band score.",
    ar: "إعداد شامل لجميع أقسام IELTS مع اختبارات تجريبية وملاحظات خبراء لتحقيق درجة الباند المستهدفة.",
  },

  // Tutors
  "tutors.title": { en: "Meet Our Expert", ar: "تعرف على" },
  "tutors.titleHighlight": { en: "Tutors", ar: "مدرسينا الخبراء" },
  "tutors.subtitle": {
    en: "Learn from the best - our tutors are certified professionals with years of experience.",
    ar: "تعلم من الأفضل - مدرسونا محترفون معتمدون بسنوات من الخبرة.",
  },
  "tutors.viewProfile": { en: "View Profile", ar: "عرض الملف" },

  // Testimonials
  "testimonials.title": { en: "Success", ar: "قصص" },
  "testimonials.titleHighlight": { en: "Stories", ar: "النجاح" },
  "testimonials.subtitle": {
    en: "Join thousands of satisfied learners who achieved their English goals with us.",
    ar: "انضم لآلاف المتعلمين الراضين الذين حققوا أهدافهم في الإنجليزية معنا.",
  },
  "testimonials.verified": { en: "Verified Student", ar: "طالب موثق" },

  // Contact Page
  "contact.title": { en: "Get In", ar: "تواصل" },
  "contact.titleHighlight": { en: "Touch", ar: "معنا" },
  "contact.subtitle": {
    en: "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    ar: "لديك أسئلة؟ نود سماع ذلك. أرسل لنا رسالة وسنرد في أقرب وقت ممكن.",
  },
  "contact.name": { en: "Your Name", ar: "اسمك" },
  "contact.email": { en: "Email Address", ar: "البريد الإلكتروني" },
  "contact.phone": { en: "Phone Number", ar: "رقم الهاتف" },
  "contact.subject": { en: "Subject", ar: "الموضوع" },
  "contact.message": { en: "Your Message", ar: "رسالتك" },
  "contact.send": { en: "Send Message", ar: "إرسال الرسالة" },
  "contact.sending": { en: "Sending...", ar: "جاري الإرسال..." },
  "contact.successTitle": { en: "Message Sent!", ar: "تم إرسال الرسالة!" },
  "contact.successDesc": {
    en: "We'll get back to you within 24 hours.",
    ar: "سنرد عليك خلال 24 ساعة.",
  },
  "contact.address": { en: "Address", ar: "العنوان" },
  "contact.addressValue": { 
    en: "Petroleum Buildings, 14 Abdel Moneim Sanad Street, 5th Floor, Apt 5", 
    ar: "مباني البترول، 14 شارع عبد المنعم سند، الدور الخامس، شقة 5" 
  },
  "contact.callUs": { en: "Call Us", ar: "اتصل بنا" },
  "contact.emailUs": { en: "Email Us", ar: "راسلنا" },
  "contact.workingHours": { en: "Working Hours", ar: "ساعات العمل" },
  "contact.workingHoursValue": { en: "24/7 Online Support", ar: "دعم على مدار الساعة" },

  // About Page
  "about.title": { en: "About", ar: "عن" },
  "about.titleHighlight": { en: "Language Treats", ar: "لانجويج تريتس" },
  "about.subtitle": {
    en: "We're on a mission to make premium English education accessible to everyone, everywhere.",
    ar: "مهمتنا هي جعل التعليم الإنجليزي المتميز متاحًا للجميع، في كل مكان.",
  },
  "about.missionTitle": { en: "Our Mission", ar: "مهمتنا" },
  "about.missionDesc": {
    en: "To empower learners worldwide by providing personalized, high-quality English education that opens doors to global opportunities.",
    ar: "تمكين المتعلمين حول العالم من خلال توفير تعليم إنجليزي شخصي عالي الجودة يفتح أبواب الفرص العالمية.",
  },
  "about.visionTitle": { en: "Our Vision", ar: "رؤيتنا" },
  "about.visionDesc": {
    en: "To become the world's most trusted platform for English learning, transforming lives one conversation at a time.",
    ar: "أن نصبح المنصة الأكثر ثقة في العالم لتعلم الإنجليزية، نغير الحياة محادثة واحدة في كل مرة.",
  },
  "about.valuesTitle": { en: "Our Core", ar: "قيمنا" },
  "about.valuesHighlight": { en: "Values", ar: "الأساسية" },

  // Blog Page
  "blog.title": { en: "Latest", ar: "آخر" },
  "blog.titleHighlight": { en: "Articles", ar: "المقالات" },
  "blog.subtitle": {
    en: "Tips, insights, and stories to help you on your English learning journey.",
    ar: "نصائح ورؤى وقصص لمساعدتك في رحلة تعلم الإنجليزية.",
  },
  "blog.readMore": { en: "Read More", ar: "اقرأ المزيد" },
  "blog.minRead": { en: "min read", ar: "دقيقة قراءة" },

  // Common
  "common.learnMore": { en: "Learn More", ar: "اعرف المزيد" },
  "common.getStarted": { en: "Get Started", ar: "ابدأ الآن" },
  "common.required": { en: "This field is required", ar: "هذا الحقل مطلوب" },
  "common.invalidEmail": { en: "Invalid email address", ar: "بريد إلكتروني غير صحيح" },

  // Footer
  "footer.description": {
    en: "Empowering learners worldwide with premium English education. Join our community of successful speakers.",
    ar: "نمكّن المتعلمين حول العالم بتعليم إنجليزي متميز. انضم لمجتمعنا من المتحدثين الناجحين.",
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
    ar: "احصل على نصائح وتحديثات وعروض حصرية في بريدك.",
  },
  "footer.emailPlaceholder": { en: "Enter your email", ar: "أدخل بريدك الإلكتروني" },
  "footer.subscribe": { en: "Subscribe", ar: "اشترك" },
  "footer.subscribed": { en: "Subscribed!", ar: "تم الاشتراك!" },
  "footer.rights": { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  "footer.privacy": { en: "Privacy Policy", ar: "سياسة الخصوصية" },
  "footer.terms": { en: "Terms of Service", ar: "شروط الخدمة" },
  "footer.cookies": { en: "Cookie Policy", ar: "سياسة ملفات تعريف الارتباط" },

  // Errors
  "error.title": { en: "Something went wrong", ar: "حدث خطأ ما" },
  "error.description": {
    en: "We apologize for the inconvenience. Please try again.",
    ar: "نعتذر عن الإزعاج. الرجاء المحاولة مرة أخرى.",
  },
  "error.tryAgain": { en: "Try Again", ar: "حاول مرة أخرى" },
  "error.goHome": { en: "Go Home", ar: "العودة للرئيسية" },
  "notFound.title": { en: "Page Not Found", ar: "الصفحة غير موجودة" },
  "notFound.description": {
    en: "The page you're looking for doesn't exist or has been moved.",
    ar: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  const isRTL = language === "ar"

  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("language") as Language | null) : null
    if (saved === "en" || saved === "ar") {
      setLanguageState(saved)
    }
  }, [])

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language
      document.documentElement.dir = isRTL ? "rtl" : "ltr"
    }
  }, [language, isRTL])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang)
    }
  }

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
