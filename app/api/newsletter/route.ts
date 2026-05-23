import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // In production, integrate with email service (Resend, Mailchimp, etc.)
    console.log("[v0] Newsletter subscription:", email)

    return NextResponse.json({ success: true, message: "Subscribed successfully" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Newsletter error:", error)
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 })
  }
}
