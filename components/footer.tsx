"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Send, MapPin, Mail, Phone, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Meet Tutors", href: "#tutors" },
  { label: "Success Stories", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
]

const resources = [
  { label: "Free Resources", href: "#" },
  { label: "Placement Test", href: "#" },
  { label: "Study Guides", href: "#" },
  { label: "FAQ", href: "#" },
]

const corporate = [
  { label: "Corporate Solutions", href: "#" },
  { label: "Partnerships", href: "#" },
  { label: "Group Training", href: "#" },
  { label: "Enterprise Plans", href: "#" },
]

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
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
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
            className="col-span-2 md:col-span-3 lg:col-span-2"
            variants={itemVariants}
          >
            <motion.div 
              className="flex items-center gap-3 mb-4"
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
              Crafting your English success story, treat by treat. Premium learning experiences with certified native tutors.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {[
                { icon: MapPin, text: "123 Learning Lane, Education District, London EC1A 1BB" },
                { icon: Mail, text: "hello@languagetreats.com" },
                { icon: Phone, text: "+44 (0) 20 1234 5678" },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3 text-white/70 text-sm"
                  whileHover={{ x: 5, color: "rgba(253, 197, 0, 1)" }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon className="w-4 h-4 text-yellow flex-shrink-0" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-3">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
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
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-yellow">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-yellow transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <motion.span 
                      className="w-0 h-0.5 bg-yellow group-hover:w-3 transition-all"
                    />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-yellow">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-yellow transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <motion.span 
                      className="w-0 h-0.5 bg-yellow group-hover:w-3 transition-all"
                    />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Corporate */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-yellow">Corporate</h4>
            <ul className="space-y-3">
              {corporate.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-yellow transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <motion.span 
                      className="w-0 h-0.5 bg-yellow group-hover:w-3 transition-all"
                    />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            className="col-span-2 md:col-span-3 lg:col-span-1"
            variants={itemVariants}
          >
            <h4 className="font-semibold mb-4 text-yellow flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Newsletter
            </h4>
            <p className="text-white/70 text-sm mb-4">
              Get tips, resources, and exclusive offers.
            </p>
            <div className="flex flex-col gap-3">
              <motion.div whileHover={{ scale: 1.02 }}>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full h-11 focus:border-yellow focus:ring-yellow/30"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="bg-yellow text-indigo hover:bg-yellow/90 rounded-full font-semibold w-full shadow-lg hover:shadow-yellow/30"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Subscribe
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Language Treats. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((text, index) => (
              <motion.a 
                key={index}
                href="#" 
                className="text-white/50 hover:text-yellow text-sm transition-colors"
                whileHover={{ y: -2 }}
              >
                {text}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
