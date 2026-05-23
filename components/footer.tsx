"use client"

import { useState } from "react"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Send, MapPin, Mail, Phone } from "lucide-react"
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

export function Footer() {
  const [email, setEmail] = useState("")

  return (
    <footer id="contact" className="bg-indigo text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-yellow flex items-center justify-center relative">
                <span className="text-indigo font-bold text-lg">e</span>
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-purple rounded-full" />
              </div>
              <span className="text-xl font-bold">Language Treats</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-xs">
              Crafting your English success story, treat by treat. Premium learning experiences with certified native tutors.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4 text-yellow" />
                <span>123 Learning Lane, Education District, London EC1A 1BB</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <Mail className="w-4 h-4 text-yellow" />
                <span>hello@languagetreats.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <Phone className="w-4 h-4 text-yellow" />
                <span>+44 (0) 20 1234 5678</span>
              </div>
            </div>

            <div className="flex gap-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow hover:text-indigo transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-yellow">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-yellow transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-yellow">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-yellow transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate */}
          <div>
            <h4 className="font-semibold mb-4 text-yellow">Corporate</h4>
            <ul className="space-y-3">
              {corporate.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-yellow transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <h4 className="font-semibold mb-4 text-yellow">Newsletter</h4>
            <p className="text-white/70 text-sm mb-4">
              Get tips, resources, and exclusive offers.
            </p>
            <div className="flex flex-col gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full h-11"
              />
              <Button
                className="bg-yellow text-indigo hover:bg-yellow/90 rounded-full font-semibold w-full"
              >
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Language Treats. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/50 hover:text-yellow text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-yellow text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-white/50 hover:text-yellow text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
