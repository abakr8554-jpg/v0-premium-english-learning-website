"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop, FloatingParticles } from "@/components/creative-elements"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Loader2 } from "lucide-react"

export default function ContactPage() {
  const { t, isRTL } = useLanguage()
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
        setTimeout(() => setStatus("idle"), 5000)
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  const contactInfo = [
    { icon: MapPin, titleKey: "contact.address", valueKey: "contact.addressValue", color: "bg-yellow" },
    { icon: Phone, titleKey: "contact.callUs", value: "+20 100 000 0000", color: "bg-purple" },
    { icon: Mail, titleKey: "contact.emailUs", value: "hello@languagetreats.com", color: "bg-indigo" },
    { icon: Clock, titleKey: "contact.workingHours", valueKey: "contact.workingHoursValue", color: "bg-yellow-dark" },
  ]

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
              {t("contact.title")} <span className="text-yellow">{t("contact.titleHighlight")}</span>
            </h1>
            <p className={`text-lg md:text-xl text-white/80 max-w-2xl mx-auto ${isRTL ? "font-arabic" : ""}`}>
              {t("contact.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 -mt-8 relative z-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, rotateY: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, rotateY: 10, scale: 1.05 }}
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                className="bg-white rounded-2xl p-5 text-center shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <info.icon className={`w-6 h-6 ${info.color === "bg-yellow" ? "text-purple" : "text-white"}`} />
                </div>
                <h3 className={`text-sm font-bold text-purple mb-1 ${isRTL ? "font-arabic" : ""}`}>
                  {t(info.titleKey)}
                </h3>
                <p className={`text-xs text-gray-600 ${isRTL ? "font-arabic" : ""}`}>
                  {info.valueKey ? t(info.valueKey) : info.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 50, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="name" className={`text-purple ${isRTL ? "font-arabic" : ""}`}>
                  {t("contact.name")} *
                </Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-2 border-purple/20 focus:border-purple"
                />
              </div>
              <div>
                <Label htmlFor="email" className={`text-purple ${isRTL ? "font-arabic" : ""}`}>
                  {t("contact.email")} *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-2 border-purple/20 focus:border-purple"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="phone" className={`text-purple ${isRTL ? "font-arabic" : ""}`}>
                  {t("contact.phone")}
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-2 border-purple/20 focus:border-purple"
                />
              </div>
              <div>
                <Label htmlFor="subject" className={`text-purple ${isRTL ? "font-arabic" : ""}`}>
                  {t("contact.subject")} *
                </Label>
                <Input
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="mt-2 border-purple/20 focus:border-purple"
                />
              </div>
            </div>

            <div className="mb-6">
              <Label htmlFor="message" className={`text-purple ${isRTL ? "font-arabic" : ""}`}>
                {t("contact.message")} *
              </Label>
              <Textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-2 border-purple/20 focus:border-purple resize-none"
              />
            </div>

            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-4 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <div>
                  <p className={`font-bold text-green-900 ${isRTL ? "font-arabic" : ""}`}>{t("contact.successTitle")}</p>
                  <p className={`text-sm text-green-700 ${isRTL ? "font-arabic" : ""}`}>{t("contact.successDesc")}</p>
                </div>
              </motion.div>
            )}

            <Button
              type="submit"
              disabled={status === "loading"}
              size="lg"
              className={`w-full bg-yellow hover:bg-yellow-dark text-purple font-bold gap-2 ${isRTL ? "font-arabic" : ""}`}
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  {t("contact.sending")}
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  {t("contact.send")}
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}
