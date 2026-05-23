import { Button } from "@/components/ui/button"
import { GraduationCap, Clock, Award } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="bg-purple relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-yellow blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-yellow blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
              Master English with{" "}
              <span className="text-yellow">Confidence</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Learn from native tutors with flexible schedules and proven methods.
              Join thousands of successful learners achieving their goals.
            </p>

            {/* Features */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-white/90">
                <GraduationCap className="w-5 h-5 text-yellow" />
                <span className="text-sm">Native Tutors</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Clock className="w-5 h-5 text-yellow" />
                <span className="text-sm">Flexible Hours</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Award className="w-5 h-5 text-yellow" />
                <span className="text-sm">Proven Methods</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-yellow text-indigo hover:bg-yellow/90 rounded-full px-8 py-6 text-lg font-semibold transition-all shadow-lg hover:shadow-xl">
                Explore Courses
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold transition-all bg-transparent"
              >
                Placement Test
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="absolute inset-0 bg-yellow/20 rounded-3xl transform rotate-3" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="aspect-square bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto rounded-full bg-yellow/20 flex items-center justify-center mb-4">
                      <span className="text-6xl">👩‍🎓</span>
                    </div>
                    <p className="text-white font-semibold text-lg">Join 50,000+ Learners</p>
                    <p className="text-white/70 text-sm mt-1">Start your journey today</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
