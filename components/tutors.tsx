"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, Award, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const tutors = [
  {
    name: "Sarah J.",
    credential: "M.A. Applied Linguistics",
    location: "United Kingdom",
    specialty: "Academic Writing & IELTS",
    experience: "12+ years teaching",
    rating: 4.9,
    reviews: 847,
    bio: "Specialized in helping students achieve band 7.5+ in IELTS writing with proven methodologies.",
  },
  {
    name: "Michael B.",
    credential: "B.S. Education, IELTS Examiner",
    location: "United States",
    specialty: "Business English & Presentations",
    experience: "8+ years teaching",
    rating: 4.95,
    reviews: 623,
    bio: "Former corporate trainer at Fortune 500 companies. Expert in executive communication skills.",
  },
  {
    name: "Anya R.",
    credential: "Certified TOEFL Prep Specialist",
    location: "Australia",
    specialty: "TOEFL & University Prep",
    experience: "10+ years teaching",
    rating: 4.88,
    reviews: 512,
    bio: "Helped 500+ students gain admission to top universities with improved TOEFL scores.",
  },
  {
    name: "James K.",
    credential: "CELTA & DELTA Certified",
    location: "Canada",
    specialty: "Conversational English",
    experience: "15+ years teaching",
    rating: 4.92,
    reviews: 934,
    bio: "Master of making English fun and accessible. Specializes in building confidence in speaking.",
  },
]

export function Tutors() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % tutors.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + tutors.length) % tutors.length)
  }

  return (
    <section id="tutors" className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple">
            Meet Our Expert Tutors
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Learn from certified professionals with proven track records
          </p>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tutors.map((tutor, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-6 border border-border hover:border-yellow hover:shadow-xl transition-all duration-300 group"
            >
              {/* Avatar */}
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-purple to-indigo flex items-center justify-center mb-4">
                <span className="text-white font-bold text-2xl">{tutor.name.charAt(0)}</span>
              </div>

              {/* Name & Credentials */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-foreground">{tutor.name}</h3>
                <p className="text-sm text-purple font-medium mt-1">{tutor.credential}</p>
                <div className="flex items-center justify-center gap-1 text-muted-foreground text-sm mt-2">
                  <MapPin className="w-3 h-3" />
                  <span>{tutor.location}</span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow text-yellow" />
                  <span className="font-semibold text-foreground">{tutor.rating}</span>
                </div>
                <span className="text-muted-foreground text-sm">({tutor.reviews} reviews)</span>
              </div>

              {/* Specialty */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <Award className="w-4 h-4 text-purple" />
                <span className="text-sm font-medium text-foreground">{tutor.specialty}</span>
              </div>

              {/* Bio */}
              <p className="text-muted-foreground text-sm text-center leading-relaxed mb-4">
                {tutor.bio}
              </p>

              {/* Experience Badge */}
              <div className="text-center">
                <span className="inline-block text-xs font-medium text-purple bg-purple/10 px-3 py-1 rounded-full">
                  {tutor.experience}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {tutors.map((tutor, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <div className="bg-card rounded-3xl p-6 border border-border">
                      {/* Avatar */}
                      <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-purple to-indigo flex items-center justify-center mb-4">
                        <span className="text-white font-bold text-2xl">{tutor.name.charAt(0)}</span>
                      </div>

                      {/* Name & Credentials */}
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-bold text-foreground">{tutor.name}</h3>
                        <p className="text-sm text-purple font-medium mt-1">{tutor.credential}</p>
                        <div className="flex items-center justify-center gap-1 text-muted-foreground text-sm mt-2">
                          <MapPin className="w-3 h-3" />
                          <span>{tutor.location}</span>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow text-yellow" />
                          <span className="font-semibold text-foreground">{tutor.rating}</span>
                        </div>
                        <span className="text-muted-foreground text-sm">({tutor.reviews} reviews)</span>
                      </div>

                      {/* Specialty */}
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <Award className="w-4 h-4 text-purple" />
                        <span className="text-sm font-medium text-foreground">{tutor.specialty}</span>
                      </div>

                      {/* Bio */}
                      <p className="text-muted-foreground text-sm text-center leading-relaxed mb-4">
                        {tutor.bio}
                      </p>

                      {/* Experience Badge */}
                      <div className="text-center">
                        <span className="inline-block text-xs font-medium text-purple bg-purple/10 px-3 py-1 rounded-full">
                          {tutor.experience}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full border-purple/30 hover:bg-purple hover:text-white"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center gap-2">
                {tutors.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? "bg-purple w-6" : "bg-purple/30"
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full border-purple/30 hover:bg-purple hover:text-white"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
