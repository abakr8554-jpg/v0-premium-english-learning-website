import { Button } from "@/components/ui/button"
import { GraduationCap, Briefcase, Gamepad2, BookOpen, ArrowRight } from "lucide-react"

const courses = [
  {
    icon: GraduationCap,
    title: "IELTS Masterclass",
    subtitle: "Band 7.5+ Prep",
    description: "Intensive preparation with mock exams, detailed feedback, and proven strategies for achieving your target band score.",
    features: ["Full Mock Exams", "Writing Reviews", "Speaking Practice", "Band Prediction"],
    popular: true,
  },
  {
    icon: Briefcase,
    title: "Business English Executive",
    subtitle: "Corporate Communication",
    description: "Master professional communication for meetings, presentations, negotiations, and international business settings.",
    features: ["Presentation Skills", "Email Mastery", "Negotiation Tactics", "Industry Vocabulary"],
    popular: false,
  },
  {
    icon: Gamepad2,
    title: "Kid&apos;s Learning Fun",
    subtitle: "Foundation English",
    description: "Interactive games, storytelling, and engaging activities designed to make learning English exciting for young learners.",
    features: ["Interactive Games", "Story Time", "Songs & Rhymes", "Fun Worksheets"],
    popular: false,
  },
  {
    icon: BookOpen,
    title: "TOEFL Intensive",
    subtitle: "University Admission Prep",
    description: "Focused preparation for academic English with emphasis on university-level reading, writing, and critical thinking.",
    features: ["Academic Writing", "Reading Strategies", "Listening Drills", "Speaking Tasks"],
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
            Our Premium Courses
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Structured programs tailored to your specific goals and learning style
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-3xl p-6 border transition-all duration-300 group ${
                course.popular
                  ? "border-yellow shadow-lg hover:shadow-xl"
                  : "border-border hover:border-purple/30 hover:shadow-lg"
              }`}
            >
              {course.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-yellow text-indigo px-4 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 ${
                course.popular ? "bg-yellow/20" : "bg-purple/10 group-hover:bg-purple group-hover:scale-105"
              }`}>
                <course.icon className={`w-6 h-6 transition-colors ${
                  course.popular ? "text-yellow" : "text-purple group-hover:text-white"
                }`} />
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground">{course.title}</h3>
                <span className="text-sm text-purple font-medium">{course.subtitle}</span>
              </div>

              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {course.description}
              </p>

              <ul className="space-y-2 mb-6">
                {course.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <div className={`w-1.5 h-1.5 rounded-full ${course.popular ? "bg-yellow" : "bg-purple"}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-full py-5 font-semibold transition-all group/btn ${
                  course.popular
                    ? "bg-yellow text-indigo hover:bg-yellow/90"
                    : "bg-purple text-white hover:bg-purple/90"
                }`}
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
