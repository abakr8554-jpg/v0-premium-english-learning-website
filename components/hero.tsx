import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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

          {/* Hero Illustration - Using Brand Cover Image */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LANG-TREATS-facebook-cover-final%20%281%29-33qI2ooihJu8hxfPOO4GPSjdzR5c4E.jpg"
                alt="Language Treats - Speak, the world is closer"
                className="w-full h-auto rounded-3xl shadow-2xl"
                crossOrigin="anonymous"
              />
              {/* Floating Logo Badge */}
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-xl flex items-center justify-center">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile-cover-PJMN1FpcIL7o4NjWk9qNTwg6DWbQTV.jpg"
                  alt="Language Treats Logo"
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
                  crossOrigin="anonymous"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-white/5 backdrop-blur-sm border-t border-white/10">
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
