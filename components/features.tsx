import { Video, Users, Calendar, FileText } from "lucide-react"

const features = [
  {
    icon: Video,
    title: "Live Classes",
    description: "Interactive sessions with real-time feedback and personalized attention from expert tutors.",
  },
  {
    icon: Users,
    title: "Native Speakers",
    description: "Learn authentic pronunciation and cultural nuances from certified native English teachers.",
  },
  {
    icon: Calendar,
    title: "Flexible Schedules",
    description: "Book lessons that fit your lifestyle. Available 24/7 across all time zones worldwide.",
  },
  {
    icon: FileText,
    title: "Exam Prep",
    description: "Comprehensive preparation for IELTS, TOEFL, Cambridge, and other major certifications.",
  },
]

export function Features() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to achieve fluency and confidence in English
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple/10 flex items-center justify-center mb-6 group-hover:bg-purple group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-purple group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
