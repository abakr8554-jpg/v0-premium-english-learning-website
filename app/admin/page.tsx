import { cookies } from "next/headers"
import { createServiceClient } from "@/lib/supabase/server"
import { AdminLogin } from "@/components/admin/admin-login"
import { AdminDashboard } from "@/components/admin/admin-dashboard"

export const dynamic = "force-static";

export default async function AdminPage() {
  const cookieStore = await cookies()
  const authCookie = cookieStore.get("admin_auth")?.value
  const adminPassword = process.env.ADMIN_PASSWORD

  if (!authCookie || !adminPassword || authCookie !== adminPassword) {
    return <AdminLogin />
  }

  const supabase = createServiceClient()

  const [contactsRes, subscribersRes, notificationsRes, enrollmentsRes] = await Promise.all([
    supabase.from("contact_messages").select("*").order("created_at", { ascending: false }),
    supabase.from("newsletter_subscribers").select("*").order("subscribed_at", { ascending: false }),
    supabase.from("course_notifications").select("*").order("created_at", { ascending: false }),
    supabase.from("enrollments").select("*").order("created_at", { ascending: false }),
  ])

  return (
    <AdminDashboard
      contacts={contactsRes.data || []}
      subscribers={subscribersRes.data || []}
      notifications={notificationsRes.data || []}
      enrollments={enrollmentsRes.data || []}
    />
  )
}
