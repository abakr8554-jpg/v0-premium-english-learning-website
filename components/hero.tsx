"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Sparkles, Loader2 } from "lucide-react"

const Hero3DScene = dynamic(
  () => import("./hero-3d-scene").then((mod) => mod.Hero3DScene),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-yellow animate-spin" />
      </div>
    )
  }
)

export function Hero() {
  const trustLogos = ["BBC Learning", "Educational Trust", "Cambridge Partner", "IELTS Official"]

  return (
    <section id="home" className="bg-gradient-to-br from-purple via-purple to-indigo relative overflow-hidden min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-yellow blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-yellow blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple/50 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-yellow" />
              <span className="text-white/90 text-sm font-medium">Premium English Learning Platform</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight text-balance">
              Language Treats -{" "}
              <span className="text-yellow">Crafting Your English Success Story,</span>{" "}
              Treat by Treat.
            </h1>
            <p className="mt-6 text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Experience personalized learning with certified native tutors, flexible hours, and a global curriculum designed for your success.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-yellow text-indigo hover:bg-yellow/90 rounded-full px-6 md:px-8 py-5 md:py-6 text-base md:text-lg font-semibold transition-all shadow-lg hover:shadow-xl border-2 border-yellow">
                Explore Premium Courses
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 rounded-full px-6 md:px-8 py-5 md:py-6 text-base md:text-lg font-semibold transition-all bg-transparent"
              >
                Book a Consultation
              </Button>
            </div>
          </div>

          {/* 3D Scene */}
          <div className="relative order-1 lg:order-2 h-[350px] md:h-[450px] lg:h-[500px]">
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <Loader2 className="w-12 h-12 text-yellow animate-spin" />
              </div>
            }>
              <Hero3DScene />
            </Suspense>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-white/5 backdrop-blur-sm border-t border-white/10 absolute bottom-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8">
            <span className="text-white/60 text-sm font-medium">As featured on:</span>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10">
              {trustLogos.map((logo, index) => (
                <span key={index} className="text-white/50 font-semibold text-xs md:text-base hover:text-yellow transition-colors">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
