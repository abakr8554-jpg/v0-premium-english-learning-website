"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Bell, CheckCircle2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/lib/language-context"

interface NotifyModalProps {
  isOpen: boolean
  onClose: () => void
  courseSlug: string
  courseName: string
}

export function NotifyModal({ isOpen, onClose, courseSlug, courseName }: NotifyModalProps) {
  const { isRTL } = useLanguage()
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name,
          phone,
          courseSlug,
          courseName,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong")
      }

      setSuccess(true)
      setTimeout(() => {
        onClose()
        setSuccess(false)
        setEmail("")
        setName("")
        setPhone("")
      }, 2500)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to subscribe")
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-indigo/70 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`bg-card rounded-3xl shadow-2xl w-full max-w-md p-6 md:p-8 relative pointer-events-auto ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close"
                className={`absolute top-4 ${isRTL ? "left-4" : "right-4"} w-8 h-8 rounded-full bg-muted hover:bg-muted/70 flex items-center justify-center transition-colors`}
              >
                <X className="w-4 h-4" />
              </button>

              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple mb-2">
                    {isRTL ? "تم بنجاح!" : "You're on the list!"}
                  </h3>
                  <p className="text-muted-foreground">
                    {isRTL
                      ? "هنبعتلك ايميل اول ما الكورس يفتح للتسجيل"
                      : "We'll email you as soon as the course is available"}
                  </p>
                </motion.div>
              ) : (
                <>
                  {/* Header */}
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-yellow/20 flex items-center justify-center mb-4">
                      <Bell className="w-7 h-7 text-yellow" />
                    </div>
                    <h3 className="text-2xl font-bold text-purple mb-2">
                      {isRTL ? "ابلغني عند الاطلاق" : "Notify Me When Available"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {isRTL
                        ? `ابعتلنا بياناتك وهنبلغك أول ما يفتح "${courseName}" للتسجيل`
                        : `Be the first to know when "${courseName}" launches`}
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        {isRTL ? "الاسم" : "Name"}
                      </label>
                      <Input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={isRTL ? "اسمك الكامل" : "Your full name"}
                        className="rounded-xl"
                        dir={isRTL ? "rtl" : "ltr"}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        {isRTL ? "الايميل" : "Email"}
                      </label>
                      <Input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="rounded-xl"
                        dir="ltr"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        {isRTL ? "رقم الموبايل (اختياري)" : "Phone (optional)"}
                      </label>
                      <Input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+20 1XX XXX XXXX"
                        className="rounded-xl"
                        dir="ltr"
                      />
                    </div>

                    {error && (
                      <div className="bg-red-50 text-red-600 text-sm p-3 rounded-xl">
                        {error}
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-full bg-yellow text-indigo hover:bg-yellow/90 font-semibold py-5 shadow-lg"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin mr-2" />
                          {isRTL ? "جاري الارسال..." : "Submitting..."}
                        </>
                      ) : (
                        <>
                          <Bell className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                          {isRTL ? "ابلغني" : "Notify Me"}
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      {isRTL
                        ? "بياناتك في امان معانا. لن نشاركها مع اي طرف ثالث."
                        : "Your info is safe. We never share it with third parties."}
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
