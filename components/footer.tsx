"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Facebook, Instagram, Send, MapPin, Mail, Phone, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/lib/language-context"

// TikTok icon (not available in lucide-react)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
  </svg>
)

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/EngliMoneimSanadationalCenter", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/english__treats?igsh=dTJnM2ExbHZ6NHJw", label: "Instagram" },
  { icon: TikTokIcon, href: "https://www.tiktok.com/@english_treats?_r=1&_t=ZS-96bNqmfNzJi", label: "TikTok" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export function Footer() {
  const [email, setEmail] = useState("")
  const [subscribing, setSubscribing] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t, isRTL } = useLanguage()

  const quickLinks = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.courses"), href: "/courses" },
    { label: t("footer.ourTutors"), href: "/about" },
    { label: t("footer.testimonials"), href: "/about" },
    { label: t("nav.blog"), href: "/blog" },
    { label: t("nav.contact"), href: "/contact" },
  ]

  const resources = [
    { label: t("footer.ebooks"), href: "/blog" },
    { label: t("footer.placement"), href: "/contact" },
    { label: t("footer.studyGuides"), href: "/blog" },
    { label: t("footer.faq"), href: "/contact" },
  ]

  const corporate = [
    { label: t("footer.forBusiness"), href: "/courses" },
    { label: t("footer.partnerships"), href: "/contact" },
    { label: t("footer.careers"), href: "/about" },
    { label: t("footer.affiliates"), href: "/contact" },
  ]

  return (
    <footer id="contact" className="bg-indigo text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-32 -left-32 w-96 h-96 bg-purple/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-32 -right-32 w-80 h-80 bg-yellow/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow/30 rounded-full"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10" ref={ref}>
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Brand */}
          <motion.div 
            className={`col-span-2 md:col-span-3 lg:col-span-2 ${isRTL ? "text-right" : "text-left"}`}
            variants={itemVariants}
          >
            <motion.div 
              className={`flex items-center gap-3 mb-4 ${isRTL ? "flex-row-reverse justify-end" : ""}`}
              whileHover={{ scale: 1.02 }}
            >
              <motion.img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile-cover-PJMN1FpcIL7o4NjWk9qNTwg6DWbQTV.jpg"
                alt="Language Treats Logo"
                className="w-12 h-12 rounded-full object-cover"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <span className="text-xl font-bold">Language Treats</span>
            </motion.div>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-xs">
              {t("footer.description")}
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {[
                { icon: MapPin, text: isRTL ? "مباني البترول، 14 شارع عبد المنعم سند، الدور الخامس، شقة 5" : "Petroleum Buildings, 14 Abdel Moneim Sanad Street, 5th Floor, Apt 5", href: "https://www.google.com/maps/search/?api=1&query=Petroleum+Buildings+14+Abdel+Moneim+Sanad+Street" },
                { icon: Mail, text: "hello@languagetreats.com", href: "mailto:hello@languagetreats.com" },
                { icon: Phone, text: "+44 (0) 20 1234 5678", href: "tel:+442012345678" },
              ].map((item, index) => (
                <motion.a 
                  key={index}
                  href={item.href}
                  target={item.icon === MapPin ? "_blank" : undefined}
                  rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-3 text-white/70 text-sm hover:text-yellow transition-colors ${isRTL ? "flex-row-reverse" : ""}`}
                  whileHover={{ x: isRTL ? -5 : 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon className="w-4 h-4 text-yellow flex-shrink-0" />
                  <span>{item.text}</span>
                </motion.a>
              ))}
            </div>

            <div className={`flex gap-3 ${isRTL ? "justify-end" : ""}`}>
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow hover:text-indigo transition-all"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 10,
                    boxShadow: "0 0 20px rgba(253, 197, 0, 0.5)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className={isRTL ? "text-right" : "text-left"}>
            <h4 className="font-semibold mb-4 text-yellow">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: isRTL ? -8 : 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className={`text-white/70 hover:text-yellow transition-colors text-sm inline-flex items-center gap-2 group ${isRTL ? "flex-row-reverse" : ""}`}
                  >
                    <motion.span 
                      className="w-0 h-0.5 bg-yellow group-hover:w-3 transition-all"
                    />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants} className={isRTL ? "text-right" : "text-left"}>
            <h4 className="font-semibold mb-4 text-yellow">{t("footer.resources")}</h4>
            <ul className="space-y-3">
              {resources.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: isRTL ? -8 : 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className={`text-white/70 hover:text-yellow transition-colors text-sm inline-flex items-center gap-2 group ${isRTL ? "flex-row-reverse" : ""}`}
                  >
                    <motion.span 
                      className="w-0 h-0.5 bg-yellow group-hover:w-3 transition-all"
                    />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Corporate */}
          <motion.div variants={itemVariants} className={isRTL ? "text-right" : "text-left"}>
            <h4 className="font-semibold mb-4 text-yellow">{t("footer.corporate")}</h4>
            <ul className="space-y-3">
              {corporate.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: isRTL ? -8 : 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className={`text-white/70 hover:text-yellow transition-colors text-sm inline-flex items-center gap-2 group ${isRTL ? "flex-row-reverse" : ""}`}
                  >
                    <motion.span 
                      className="w-0 h-0.5 bg-yellow group-hover:w-3 transition-all"
                    />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            className={`col-span-2 md:col-span-3 lg:col-span-1 ${isRTL ? "text-right" : "text-left"}`}
            variants={itemVariants}
          >
            <h4 className={`font-semibold mb-4 text-yellow flex items-center gap-2 ${isRTL ? "flex-row-reverse justify-end" : ""}`}>
              <Sparkles className="w-4 h-4" />
              {t("footer.newsletter")}
            </h4>
            <p className="text-white/70 text-sm mb-4">
              {t("footer.newsletterDesc")}
            </p>
            <div className="flex flex-col gap-3">
              <motion.div whileHover={{ scale: 1.02 }}>
                <Input
                  type="email"
                  placeholder={t("footer.emailPlaceholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full h-11 focus:border-yellow focus:ring-yellow/30 ${isRTL ? "text-right" : ""}`}
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={async () => {
                    if (!email || subscribing) return
                    setSubscribing(true)
                    try {
                      const res = await fetch("/api/newsletter", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email }),
                      })
                      if (res.ok) {
                        setSubscribed(true)
                        setEmail("")
                        setTimeout(() => setSubscribed(false), 3000)
                      }
                    } catch (err) {
                      console.error("[v0] Newsletter error:", err)
                    } finally {
                      setSubscribing(false)
                    }
                  }}
                  disabled={subscribing || !email}
                  className={`bg-yellow text-indigo hover:bg-yellow/90 rounded-full font-semibold w-full shadow-lg hover:shadow-yellow/30 ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <Send className={`w-4 h-4 ${isRTL ? "ml-2 rotate-180" : "mr-2"}`} />
                  {subscribed ? t("footer.subscribed") : t("footer.subscribe")}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className={`mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 ${isRTL ? "md:flex-row-reverse" : ""}`}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Language Treats. {t("footer.rights")}
          </p>
          <div className={`flex gap-6 ${isRTL ? "flex-row-reverse" : ""}`}>
            {[
              { text: t("footer.privacy"), href: "/privacy" },
              { text: t("footer.terms"), href: "/terms" },
              { text: t("footer.cookies"), href: "/cookies" },
            ].map((item, index) => (
              <motion.div key={index} whileHover={{ y: -2 }}>
                <Link 
                  href={item.href} 
                  className="text-white/50 hover:text-yellow text-sm transition-colors"
                >
                  {item.text}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
