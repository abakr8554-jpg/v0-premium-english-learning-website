import { Users, Globe, BarChart3, MessageCircle } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Verified Native Tutors (USA, UK)",
    description: "Learn from certified professionals from native English-speaking countries with verified credentials and teaching experience.",
    accent: "Tutors from 15+ countries",
  },
  {
    icon: Globe,
    title: "Global Curriculum (CEFR & IELTS)",
    description: "Follow internationally recognized standards with our comprehensive curriculum aligned to CEFR levels and major exam requirements.",
    accent: "Cambridge-aligned content",
  },
  {
    icon: BarChart3,
    title: "Real-time Progress Dashboard",
    description: "Track your improvement with detailed analytics, skill assessments, and personalized learning paths updated in real-time.",
    accent: "AI-powered insights",
  },
  {
    icon: MessageCircle,
    title: "24/7 Academic Support",
    description: "Get help whenever you need it with round-the-clock access to our support team and learning resources.",
    accent: "Average response: 5 minutes",
  },
]

export function Features() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple">
            Why Choose Language Treats?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Premium features designed to accelerate your English mastery
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 group border border-border hover:border-purple/20"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple/10 flex items-center justify-center mb-6 group-hover:bg-purple group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-purple group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                {feature.description}
              </p>
              <span className="inline-block text-xs font-medium text-purple bg-purple/10 px-3 py-1 rounded-full">
                {feature.accent}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
