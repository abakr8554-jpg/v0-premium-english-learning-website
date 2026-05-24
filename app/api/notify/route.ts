import { NextResponse } from "next/server"
import { createServiceClient } from "@/lib/supabase/server"
import { sendAdminNotification, sendUserConfirmation, emailLayout } from "@/lib/email"

export async function POST(request: Request) {
  try {
    const { email, name, phone, courseSlug, courseName } = await request.json()

    if (!email || !courseSlug) {
      return NextResponse.json({ error: "Email and course are required" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    const supabase = createServiceClient()
    const { error: dbError } = await supabase.from("course_notifications").insert({
      email,
      name: name || null,
      phone: phone || null,
      course_slug: courseSlug,
      course_name: courseName || null,
    })

    if (dbError && dbError.code !== "23505") {
      console.log("[v0] Notify DB error:", dbError)
      return NextResponse.json({ error: "Failed to register" }, { status: 500 })
    }

    if (!dbError) {
      // Notify admin
      const adminBody = `
        <p>A new student wants to be notified when <strong>${courseName || courseSlug}</strong> launches.</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          ${name ? `<tr><td style="padding: 8px;"><strong>Name:</strong></td><td style="padding: 8px;">${name}</td></tr>` : ""}
          <tr><td style="padding: 8px;"><strong>Email:</strong></td><td style="padding: 8px;">${email}</td></tr>
          ${phone ? `<tr><td style="padding: 8px;"><strong>Phone:</strong></td><td style="padding: 8px;">${phone}</td></tr>` : ""}
          <tr><td style="padding: 8px;"><strong>Course:</strong></td><td style="padding: 8px;">${courseName || courseSlug}</td></tr>
        </table>
      `
      await sendAdminNotification(
        `New course interest: ${courseName || courseSlug}`,
        emailLayout("New Course Notification Request", adminBody)
      )

      // Confirm to user
      const userBody = `
        <p>Hi${name ? ` ${name}` : ""},</p>
        <p>Thank you for your interest in <strong>${courseName || courseSlug}</strong>!</p>
        <p>We'll send you an email as soon as the course is available for enrollment.</p>
        <p style="margin-top: 24px;">Best regards,<br/>The English Treats Team</p>
      `
      await sendUserConfirmation(
        email,
        `You're on the list for ${courseName || courseSlug}!`,
        emailLayout("You're on the list!", userBody)
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.log("[v0] Notify route error:", error)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
