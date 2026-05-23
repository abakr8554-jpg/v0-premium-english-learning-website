"use client"

import { useState } from "react"
import { Menu, X, Globe, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple flex items-center justify-center relative">
              <span className="text-white font-bold text-lg">e</span>
              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-yellow rounded-full" />
            </div>
            <span className="text-xl font-bold text-purple">Language Treats</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-purple transition-colors font-medium">
              Home
            </a>
            <a href="#courses" className="text-foreground hover:text-purple transition-colors font-medium">
              Courses
            </a>
            <a href="#tutors" className="text-foreground hover:text-purple transition-colors font-medium">
              Meet Tutors
            </a>
            <a href="#portfolio" className="text-foreground hover:text-purple transition-colors font-medium">
              Success Stories
            </a>
            <a href="#blog" className="text-foreground hover:text-purple transition-colors font-medium">
              Blog
            </a>
            <a href="#contact" className="text-foreground hover:text-purple transition-colors font-medium">
              Contact
            </a>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <Globe className="w-4 h-4" />
                <span>EN</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {langOpen && (
                <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-xl shadow-lg py-2 min-w-[100px]">
                  <button className="w-full px-4 py-2 text-left text-sm hover:bg-secondary transition-colors">English</button>
                  <button className="w-full px-4 py-2 text-left text-sm hover:bg-secondary transition-colors">Español</button>
                  <button className="w-full px-4 py-2 text-left text-sm hover:bg-secondary transition-colors">中文</button>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Button className="bg-yellow text-indigo hover:bg-yellow/90 rounded-full px-6 font-semibold transition-all border-2 border-yellow hover:border-yellow/80">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-foreground hover:text-purple transition-colors font-medium px-2 py-1" onClick={() => setIsOpen(false)}>
                Home
              </a>
              <a href="#courses" className="text-foreground hover:text-purple transition-colors font-medium px-2 py-1" onClick={() => setIsOpen(false)}>
                Courses
              </a>
              <a href="#tutors" className="text-foreground hover:text-purple transition-colors font-medium px-2 py-1" onClick={() => setIsOpen(false)}>
                Meet Tutors
              </a>
              <a href="#portfolio" className="text-foreground hover:text-purple transition-colors font-medium px-2 py-1" onClick={() => setIsOpen(false)}>
                Success Stories
              </a>
              <a href="#blog" className="text-foreground hover:text-purple transition-colors font-medium px-2 py-1" onClick={() => setIsOpen(false)}>
                Blog
              </a>
              <a href="#contact" className="text-foreground hover:text-purple transition-colors font-medium px-2 py-1" onClick={() => setIsOpen(false)}>
                Contact
              </a>
              <Button className="bg-yellow text-indigo hover:bg-yellow/90 rounded-full px-6 font-semibold w-full mt-2 border-2 border-yellow">
                Start Free Trial
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
