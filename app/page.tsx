import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Tutors } from "@/components/tutors"
import { Courses } from "@/components/courses"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Tutors />
      <Courses />
      <Testimonials />
      <Footer />
    </main>
  )
}
