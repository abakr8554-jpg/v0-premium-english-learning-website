import { NextResponse } from "next/server"
import { createServiceClient } from "@/lib/supabase/server"
import { sendAdminNotification, sendUserConfirmation, emailLayout } from "@/lib/email"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, name, email, phone, subject, message } = body

    // Support both new (firstName/lastName) and legacy (name) payloads
    const finalFirstName = firstName || (name ? String(name).split(" ")[0] : "")
    const finalLastName = lastName || (name ? String(name).split(" ").slice(1).join(" ") : "")

    if (!finalFirstName || !email || !message) {
      return NextResponse.json(
        { error: "First name, email, and message are required" },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    const supabase = createServiceClient()
    const { error: dbError } = await supabase.from("contact_messages").insert({
      first_name: finalFirstName,
      last_name: finalLastName || null,
      email,
      phone: phone || null,
      subject: subject || null,
      message,
    })

    if (dbError) {
      console.log("[v0] Contact DB error:", dbError)
      return NextResponse.json({ error: "Failed to save message" }, { status: 500 })
    }

    const adminBody = `
      <p>You have a new contact message from your website.</p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${finalFirstName} ${finalLastName}</td></tr>
        <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
        ${phone ? `<tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${phone}</td></tr>` : ""}
        ${subject ? `<tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Subject:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${subject}</td></tr>` : ""}
      </table>
      <div style="margin-top: 16px; padding: 16px; background: #f9f9f9; border-radius: 8px;">
        <strong>Message:</strong>
        <p style="margin: 8px 0 0 0; white-space: pre-wrap;">${message}</p>
      </div>
    `
    await sendAdminNotification(
      `New Contact Message from ${finalFirstName}`,
      emailLayout("New Contact Message", adminBody)
    )

    const userBody = `
      <p>Hi ${finalFirstName},</p>
      <p>Thank you for reaching out to English Treats! We've received your message and our team will get back to you within 24 hours.</p>
      <div style="margin-top: 16px; padding: 16px; background: #f9f9f9; border-radius: 8px;">
        <strong>Your message:</strong>
        <p style="margin: 8px 0 0 0; white-space: pre-wrap; color: #666;">${message}</p>
      </div>
      <p style="margin-top: 24px;">Best regards,<br/>The English Treats Team</p>
    `
    await sendUserConfirmation(
      email,
      "We received your message - English Treats",
      emailLayout("Thank you for contacting us!", userBody)
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    console.log("[v0] Contact route error:", error)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
