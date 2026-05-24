import { NextResponse } from "next/server"
import { createServiceClient } from "@/lib/supabase/server"
import { sendAdminNotification, sendUserConfirmation, emailLayout } from "@/lib/email"

export async function POST(request: Request) {
  try {
    const { fullName, email, phone, courseSlug, courseName, level, notes } = await request.json()

    if (!fullName || !email || !phone || !courseSlug) {
      return NextResponse.json(
        { error: "Full name, email, phone, and course are required" },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    const supabase = createServiceClient()
    const { error: dbError } = await supabase.from("enrollments").insert({
      full_name: fullName,
      email,
      phone,
      course_slug: courseSlug,
      course_name: courseName || null,
      level: level || null,
      notes: notes || null,
    })

    if (dbError) {
      console.log("[v0] Enroll DB error:", dbError)
      return NextResponse.json({ error: "Failed to enroll" }, { status: 500 })
    }

    // Notify admin
    const adminBody = `
      <p>A new student wants to enroll in <strong>${courseName || courseSlug}</strong>.</p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr><td style="padding: 8px;"><strong>Name:</strong></td><td style="padding: 8px;">${fullName}</td></tr>
        <tr><td style="padding: 8px;"><strong>Email:</strong></td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding: 8px;"><strong>Phone:</strong></td><td style="padding: 8px;">${phone}</td></tr>
        <tr><td style="padding: 8px;"><strong>Course:</strong></td><td style="padding: 8px;">${courseName || courseSlug}</td></tr>
        ${level ? `<tr><td style="padding: 8px;"><strong>Level:</strong></td><td style="padding: 8px;">${level}</td></tr>` : ""}
      </table>
      ${notes ? `<div style="margin-top: 16px; padding: 16px; background: #f9f9f9; border-radius: 8px;"><strong>Notes:</strong><p style="margin: 8px 0 0 0; white-space: pre-wrap;">${notes}</p></div>` : ""}
    `
    await sendAdminNotification(
      `New enrollment: ${courseName || courseSlug} - ${fullName}`,
      emailLayout("New Course Enrollment Request", adminBody)
    )

    // Confirm to user
    const userBody = `
      <p>Hi ${fullName},</p>
      <p>Thank you for your interest in <strong>${courseName || courseSlug}</strong>!</p>
      <p>Our team will contact you within 24 hours to confirm your enrollment, discuss schedules, and answer any questions you may have.</p>
      <p style="margin-top: 24px;">Best regards,<br/>The English Treats Team</p>
    `
    await sendUserConfirmation(
      email,
      `Enrollment request received - ${courseName || courseSlug}`,
      emailLayout("Enrollment Request Received!", userBody)
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    console.log("[v0] Enroll route error:", error)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
