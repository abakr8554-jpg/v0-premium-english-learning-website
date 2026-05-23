"use client"

import { Star, Award, TrendingUp, Building2, Quote } from "lucide-react"

const corporateClients = [
  {
    name: "Quantum Corp",
    result: "Company-wide English proficiency increased by 30%",
    employees: "500+ employees trained",
  },
  {
    name: "Global Innovators",
    result: "International communication efficiency improved by 45%",
    employees: "200+ executives certified",
  },
]

const individualSuccess = [
  {
    name: "David Chen",
    title: "IELTS Success",
    before: "6.0",
    after: "8.0",
    quote: "The structured approach and personalized feedback helped me exceed my target score. Now studying at Oxford!",
    badge: "Band 8.0 Certified",
  },
  {
    name: "Sofia Martinez",
    title: "Career Transformation",
    achievement: "Landed corporate job in London",
    quote: "The Business English course gave me the confidence and skills to ace my interviews. My dream job is now my reality.",
    badge: "Executive Level",
  },
]

export function Testimonials() {
  return (
    <section id="portfolio" className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple">
            Portfolio of Success
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Verified achievements from our corporate and individual learners
          </p>
        </div>

        {/* Corporate Clients */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {corporateClients.map((client, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple/5 to-indigo/5 rounded-3xl p-8 border border-purple/10 hover:border-yellow hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-purple/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-8 h-8 text-purple" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">{client.name}</h3>
                  <p className="text-purple font-semibold mb-2">{client.result}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                    <TrendingUp className="w-4 h-4 text-yellow" />
                    {client.employees}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Individual Success Stories */}
        <div className="grid md:grid-cols-2 gap-6">
          {individualSuccess.map((story, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 border border-border hover:border-yellow hover:shadow-xl transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow to-yellow/70 flex items-center justify-center">
                    <span className="text-indigo font-bold text-xl">{story.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">{story.name}</h3>
                    <p className="text-purple text-sm font-medium">{story.title}</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow text-yellow" />
                  ))}
                </div>
              </div>

              {/* Score Improvement or Achievement */}
              {"before" in story ? (
                <div className="flex items-center gap-4 mb-6 p-4 bg-secondary rounded-2xl">
                  <div className="text-center">
                    <span className="text-muted-foreground text-xs block mb-1">Before</span>
                    <span className="text-2xl font-bold text-muted-foreground">{story.before}</span>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="h-0.5 flex-1 bg-gradient-to-r from-muted-foreground/30 via-yellow to-purple" />
                    <TrendingUp className="w-6 h-6 text-yellow mx-2" />
                    <div className="h-0.5 flex-1 bg-gradient-to-r from-purple via-yellow to-muted-foreground/30" />
                  </div>
                  <div className="text-center">
                    <span className="text-purple text-xs block mb-1">After</span>
                    <span className="text-2xl font-bold text-purple">{story.after}</span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3 mb-6 p-4 bg-secondary rounded-2xl">
                  <Award className="w-6 h-6 text-yellow" />
                  <span className="font-semibold text-foreground">{story.achievement}</span>
                </div>
              )}

              {/* Quote */}
              <div className="relative">
                <Quote className="w-8 h-8 text-purple/20 absolute -top-2 -left-2" />
                <p className="text-muted-foreground leading-relaxed pl-6">
                  {`"${story.quote}"`}
                </p>
              </div>

              {/* Badge */}
              <div className="mt-6 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-purple bg-purple/10 px-4 py-2 rounded-full">
                  <Award className="w-4 h-4" />
                  {story.badge}
                </span>
                <span className="text-xs text-muted-foreground">Verified Achievement</span>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Logos Marquee */}
        <div className="mt-12 relative overflow-hidden py-8 bg-secondary rounded-3xl">
          <div className="text-center mb-6">
            <p className="text-muted-foreground font-medium">
              Trusted by employees from leading global companies
            </p>
          </div>
          <div className="flex animate-marquee">
            {["Quantum Corp", "Global Innovators", "TechVenture", "InnovateLabs", "FutureScale", "DataDriven Co", "Quantum Corp", "Global Innovators", "TechVenture", "InnovateLabs", "FutureScale", "DataDriven Co"].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 md:mx-12"
              >
                <span className="text-xl md:text-2xl font-bold text-muted-foreground/40 hover:text-purple transition-colors whitespace-nowrap">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
