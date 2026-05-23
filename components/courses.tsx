import { Button } from "@/components/ui/button"
import { BookOpen, Briefcase, GraduationCap } from "lucide-react"

const courses = [
  {
    icon: BookOpen,
    title: "Beginner",
    level: "A1 - A2",
    description: "Build a strong foundation with essential vocabulary, grammar, and everyday conversation skills.",
    features: ["Basic Grammar", "Daily Vocabulary", "Pronunciation", "Simple Conversations"],
    popular: false,
  },
  {
    icon: Briefcase,
    title: "Business English",
    level: "B1 - C1",
    description: "Master professional communication for meetings, presentations, and international business.",
    features: ["Email Writing", "Presentations", "Negotiations", "Industry Terms"],
    popular: true,
  },
  {
    icon: GraduationCap,
    title: "IELTS Preparation",
    level: "B2 - C2",
    description: "Comprehensive exam prep with practice tests, strategies, and personalized feedback.",
    features: ["Speaking Practice", "Writing Reviews", "Listening Drills", "Reading Strategies"],
    popular: false,
  },
]

export function Courses() {
  return (
    <section id="courses" className="bg-secondary py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple">
            Our Courses
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Structured programs designed to take you from where you are to where you want to be
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-3xl p-6 md:p-8 border transition-all duration-300 hover:shadow-xl ${
                course.popular ? "border-yellow shadow-lg" : "border-border hover:border-purple/30"
              }`}
            >
              {course.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-yellow text-indigo px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="w-14 h-14 rounded-2xl bg-purple/10 flex items-center justify-center mb-6">
                <course.icon className="w-7 h-7 text-purple" />
              </div>

              <div className="mb-4">
                <h3 className="text-2xl font-bold text-foreground">{course.title}</h3>
                <span className="text-sm text-purple font-medium">{course.level}</span>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {course.description}
              </p>

              <ul className="space-y-3 mb-8">
                {course.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-full py-6 font-semibold transition-all ${
                  course.popular
                    ? "bg-yellow text-indigo hover:bg-yellow/90"
                    : "bg-purple text-white hover:bg-purple/90"
                }`}
              >
                View Details
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
