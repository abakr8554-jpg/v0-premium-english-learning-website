import { Resend } from "resend"

const resendApiKey = process.env.RESEND_API_KEY
const contactEmail = process.env.CONTACT_EMAIL

const resend = resendApiKey ? new Resend(resendApiKey) : null

const FROM_EMAIL = "English Treats <onboarding@resend.dev>"

export async function sendAdminNotification(subject: string, html: string) {
  if (!resend || !contactEmail) {
    console.log("[v0] Email skipped - RESEND_API_KEY or CONTACT_EMAIL missing")
    return { skipped: true }
  }

  try {
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: contactEmail,
      subject,
      html,
    })
    return { success: true, result }
  } catch (error) {
    console.log("[v0] Admin email error:", error)
    return { error }
  }
}

export async function sendUserConfirmation(to: string, subject: string, html: string) {
  if (!resend) {
    console.log("[v0] User email skipped - RESEND_API_KEY missing")
    return { skipped: true }
  }

  try {
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to,
      subject,
      html,
    })
    return { success: true, result }
  } catch (error) {
    console.log("[v0] User email error:", error)
    return { error }
  }
}

export function emailLayout(title: string, body: string) {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
      <div style="background: linear-gradient(135deg, #2D1B69 0%, #4A2FBD 100%); padding: 32px 24px; text-align: center;">
        <h1 style="color: #FDC500; margin: 0; font-size: 24px; font-weight: bold;">English Treats</h1>
      </div>
      <div style="padding: 32px 24px; color: #1a1a1a; line-height: 1.6;">
        <h2 style="color: #2D1B69; margin-top: 0;">${title}</h2>
        ${body}
      </div>
      <div style="background: #f5f5f5; padding: 16px 24px; text-align: center; color: #666; font-size: 12px;">
        Petroleum Buildings, 14 Abdel Moneim Sanad Street, 5th Floor, Apt 5
      </div>
    </div>
  `
}
