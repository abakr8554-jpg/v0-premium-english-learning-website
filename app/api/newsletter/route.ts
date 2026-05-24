import { NextResponse } from "next/server"
import { createServiceClient } from "@/lib/supabase/server"
import { sendUserConfirmation, emailLayout } from "@/lib/email"

export async function POST(request: Request) {
  try {
    const { email, source } = await request.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    const supabase = createServiceClient()
    const { error: dbError } = await supabase
      .from("newsletter_subscribers")
      .insert({ email, source: source || "footer" })

    // 23505 = unique violation (already subscribed) - treat as success
    if (dbError && dbError.code !== "23505") {
      console.log("[v0] Newsletter DB error:", dbError)
      return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 })
    }

    if (!dbError) {
      const body = `
        <p>Welcome to the English Treats community!</p>
        <p>You'll now receive:</p>
        <ul>
          <li>Tips to improve your English skills</li>
          <li>Exclusive course offers and discounts</li>
          <li>Updates on new courses and programmes</li>
          <li>Free learning resources</li>
        </ul>
        <p>Stay tuned for our next update!</p>
        <p style="margin-top: 24px;">Best regards,<br/>The English Treats Team</p>
      `
      await sendUserConfirmation(
        email,
        "Welcome to English Treats Newsletter!",
        emailLayout("Welcome aboard!", body)
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.log("[v0] Newsletter route error:", error)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
