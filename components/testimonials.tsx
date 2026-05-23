"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Maria Santos",
    role: "Business Professional",
    content: "I improved my IELTS score from 5.5 to 7.5 in just 3 months. The tutors are incredibly supportive!",
    rating: 5,
    improvement: "IELTS 5.5 → 7.5",
  },
  {
    name: "Kenji Tanaka",
    role: "Software Engineer",
    content: "The business English course helped me ace interviews at international tech companies.",
    rating: 5,
    improvement: "Landed dream job",
  },
  {
    name: "Anna Mueller",
    role: "University Student",
    content: "Flexible scheduling made it easy to balance my studies. My confidence has skyrocketed!",
    rating: 5,
    improvement: "C1 Certified",
  },
  {
    name: "Carlos Rivera",
    role: "Entrepreneur",
    content: "The native speakers helped me understand cultural nuances that textbooks never teach.",
    rating: 5,
    improvement: "Fluent in 8 months",
  },
]

const clients = [
  "Google",
  "Microsoft",
  "Amazon",
  "Meta",
  "Apple",
  "Netflix",
]

export function Testimonials() {
  return (
    <section id="portfolio" className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple">
            Success Stories
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of learners who transformed their English skills
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-6 md:p-8 border border-border hover:border-yellow hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow text-yellow" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 text-lg">
                {`"${testimonial.content}"`}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
                <div className="bg-purple/10 text-purple px-4 py-2 rounded-full text-sm font-medium">
                  {testimonial.improvement}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Clients Marquee */}
        <div className="relative overflow-hidden py-8 bg-secondary rounded-3xl">
          <div className="text-center mb-6">
            <p className="text-muted-foreground font-medium">
              Trusted by employees from leading companies
            </p>
          </div>
          <div className="flex animate-marquee">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 md:mx-12"
              >
                <span className="text-2xl md:text-3xl font-bold text-muted-foreground/50 hover:text-purple transition-colors">
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
