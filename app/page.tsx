"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Tutors } from "@/components/tutors"
import { Courses } from "@/components/courses"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { 
  FloatingParticles, 
  ScrollToTop, 
  Preloader,
} from "@/components/creative-elements"

export default function Home() {
  return (
    <>
      <Preloader />
      <FloatingParticles />
      <main className="min-h-screen relative">
        <Navbar />
        <Hero />
        <Features />
        <Tutors />
        <Courses />
        <Testimonials />
        <Footer />
      </main>
      <ScrollToTop />
    </>
  )
}
