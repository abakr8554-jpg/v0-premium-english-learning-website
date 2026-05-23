"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-purple flex items-center justify-center">
              <span className="text-white font-bold text-lg">e</span>
            </div>
            <span className="text-xl font-bold text-purple">SpeakEasy</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-purple transition-colors font-medium">
              Home
            </a>
            <a href="#courses" className="text-foreground hover:text-purple transition-colors font-medium">
              Courses
            </a>
            <a href="#portfolio" className="text-foreground hover:text-purple transition-colors font-medium">
              Portfolio
            </a>
            <a href="#tutors" className="text-foreground hover:text-purple transition-colors font-medium">
              Tutors
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-yellow text-indigo hover:bg-yellow/90 rounded-full px-6 font-semibold transition-all">
              Start Learning
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a
                href="#home"
                className="text-foreground hover:text-purple transition-colors font-medium px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#courses"
                className="text-foreground hover:text-purple transition-colors font-medium px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </a>
              <a
                href="#portfolio"
                className="text-foreground hover:text-purple transition-colors font-medium px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </a>
              <a
                href="#tutors"
                className="text-foreground hover:text-purple transition-colors font-medium px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Tutors
              </a>
              <Button className="bg-yellow text-indigo hover:bg-yellow/90 rounded-full px-6 font-semibold w-full mt-2">
                Start Learning
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
