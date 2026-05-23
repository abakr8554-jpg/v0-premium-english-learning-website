import { Button } from "@/components/ui/button"
import { BookOpen, Globe, Mic, Quote, Sparkles } from "lucide-react"

export function Hero() {
  const trustLogos = ["BBC Learning", "Educational Trust", "Cambridge Partner", "IELTS Official"]

  return (
    <section id="home" className="bg-gradient-to-br from-purple via-purple to-indigo relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-yellow blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-yellow blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple/50 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-yellow" />
              <span className="text-white/90 text-sm font-medium">Premium English Learning Platform</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
              Language Treats -{" "}
              <span className="text-yellow">Crafting Your English Success Story,</span>{" "}
              Treat by Treat.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Experience personalized learning with certified native tutors, flexible hours, and a global curriculum designed for your success.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-yellow text-indigo hover:bg-yellow/90 rounded-full px-8 py-6 text-lg font-semibold transition-all shadow-lg hover:shadow-xl border-2 border-yellow">
                Explore Premium Courses
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold transition-all bg-transparent"
              >
                Book a Consultation
              </Button>
            </div>
          </div>

          {/* 3D Abstract Illustration Placeholder */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Main 3D Container */}
              <div className="relative aspect-square">
                {/* Central Logo Bubble */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm flex items-center justify-center shadow-2xl border border-white/20">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-yellow flex items-center justify-center relative">
                      <span className="text-indigo font-bold text-5xl md:text-6xl">e</span>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-purple rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Orbiting Elements */}
                <div className="absolute top-4 left-8 w-12 h-12 rounded-xl bg-yellow/90 flex items-center justify-center shadow-lg transform rotate-12 animate-pulse">
                  <span className="text-indigo font-bold text-xl">A</span>
                </div>
                <div className="absolute top-8 right-4 w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg transform -rotate-6 border border-white/30">
                  <span className="text-white font-bold text-2xl">B</span>
                </div>
                <div className="absolute bottom-16 left-4 w-10 h-10 rounded-xl bg-purple/80 flex items-center justify-center shadow-lg transform rotate-6">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/20">
                  <Quote className="w-5 h-5 text-yellow" />
                </div>

                {/* Icon Elements */}
                <div className="absolute top-1/4 right-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow/30 to-yellow/10 backdrop-blur-sm flex items-center justify-center shadow-lg border border-yellow/30">
                  <BookOpen className="w-6 h-6 text-yellow" />
                </div>
                <div className="absolute bottom-1/4 left-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/20">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div className="absolute bottom-4 left-1/3 w-10 h-10 rounded-xl bg-yellow/20 backdrop-blur-sm flex items-center justify-center shadow-lg border border-yellow/30">
                  <Mic className="w-4 h-4 text-yellow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <span className="text-white/60 text-sm font-medium">As featured on:</span>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {trustLogos.map((logo, index) => (
                <span key={index} className="text-white/50 font-semibold text-sm md:text-base hover:text-yellow transition-colors">
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
