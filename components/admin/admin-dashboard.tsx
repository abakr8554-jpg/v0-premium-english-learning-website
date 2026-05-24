"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Mail, Users, Bell, GraduationCap, LogOut } from "lucide-react"

type ContactMessage = {
  id: string
  first_name: string
  last_name: string | null
  email: string
  phone: string | null
  subject: string | null
  message: string
  status: string
  created_at: string
}
type Subscriber = { id: string; email: string; source: string | null; subscribed_at: string }
type Notification = {
  id: string
  email: string
  name: string | null
  phone: string | null
  course_slug: string
  course_name: string | null
  created_at: string
}
type Enrollment = {
  id: string
  full_name: string
  email: string
  phone: string
  course_slug: string
  course_name: string | null
  level: string | null
  notes: string | null
  status: string
  created_at: string
}

type Props = {
  contacts: ContactMessage[]
  subscribers: Subscriber[]
  notifications: Notification[]
  enrollments: Enrollment[]
}

const TABS = [
  { id: "enrollments", label: "Enrollments", icon: GraduationCap },
  { id: "contacts", label: "Contact Messages", icon: Mail },
  { id: "notifications", label: "Course Interests", icon: Bell },
  { id: "subscribers", label: "Newsletter", icon: Users },
] as const

export function AdminDashboard({ contacts, subscribers, notifications, enrollments }: Props) {
  const [activeTab, setActiveTab] = useState<typeof TABS[number]["id"]>("enrollments")
  const router = useRouter()

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" })
    router.refresh()
  }

  const counts = {
    enrollments: enrollments.length,
    contacts: contacts.length,
    notifications: notifications.length,
    subscribers: subscribers.length,
  }

  const formatDate = (date: string) =>
    new Date(date).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-purple text-white py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">English Treats Admin</h1>
            <p className="text-xs md:text-sm text-white/70">Manage submissions and inquiries</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            size="sm"
            className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`bg-white rounded-2xl p-4 md:p-5 text-left transition-all ${
                activeTab === tab.id
                  ? "ring-2 ring-purple shadow-lg"
                  : "hover:shadow-md"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <tab.icon className="w-5 h-5 text-purple" />
                <span className="text-2xl md:text-3xl font-bold text-purple">
                  {counts[tab.id]}
                </span>
              </div>
              <p className="text-xs md:text-sm text-gray-600">{tab.label}</p>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-4 md:p-6 border-b border-gray-100">
            <h2 className="text-lg md:text-xl font-bold text-purple">
              {TABS.find((t) => t.id === activeTab)?.label}
            </h2>
          </div>

          <div className="overflow-x-auto">
            {activeTab === "enrollments" && (
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-600 text-xs uppercase">
                  <tr>
                    <th className="text-left px-4 py-3">Name</th>
                    <th className="text-left px-4 py-3">Email</th>
                    <th className="text-left px-4 py-3">Phone</th>
                    <th className="text-left px-4 py-3">Course</th>
                    <th className="text-left px-4 py-3">Status</th>
                    <th className="text-left px-4 py-3">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {enrollments.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="text-center py-12 text-gray-400">
                        No enrollments yet
                      </td>
                    </tr>
                  ) : (
                    enrollments.map((e) => (
                      <tr key={e.id} className="border-t border-gray-100 hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium">{e.full_name}</td>
                        <td className="px-4 py-3">
                          <a href={`mailto:${e.email}`} className="text-purple hover:underline">
                            {e.email}
                          </a>
                        </td>
                        <td className="px-4 py-3">
                          <a href={`tel:${e.phone}`} className="text-purple hover:underline">
                            {e.phone}
                          </a>
                        </td>
                        <td className="px-4 py-3">{e.course_name || e.course_slug}</td>
                        <td className="px-4 py-3">
                          <span className="inline-block px-2 py-1 bg-yellow/20 text-purple rounded text-xs font-medium">
                            {e.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-500 text-xs whitespace-nowrap">
                          {formatDate(e.created_at)}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            )}

            {activeTab === "contacts" && (
              <div className="divide-y divide-gray-100">
                {contacts.length === 0 ? (
                  <p className="text-center py-12 text-gray-400">No messages yet</p>
                ) : (
                  contacts.map((c) => (
                    <div key={c.id} className="p-4 md:p-6 hover:bg-gray-50">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="font-bold text-purple">
                            {c.first_name} {c.last_name || ""}
                          </h3>
                          <div className="flex flex-wrap gap-3 text-xs text-gray-600 mt-1">
                            <a href={`mailto:${c.email}`} className="hover:text-purple">
                              {c.email}
                            </a>
                            {c.phone && (
                              <a href={`tel:${c.phone}`} className="hover:text-purple">
                                {c.phone}
                              </a>
                            )}
                          </div>
                        </div>
                        <span className="text-xs text-gray-400">{formatDate(c.created_at)}</span>
                      </div>
                      {c.subject && (
                        <p className="text-sm font-semibold text-gray-700 mb-1">
                          Re: {c.subject}
                        </p>
                      )}
                      <p className="text-sm text-gray-600 whitespace-pre-wrap">{c.message}</p>
                    </div>
                  ))
                )}
              </div>
            )}

            {activeTab === "notifications" && (
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-600 text-xs uppercase">
                  <tr>
                    <th className="text-left px-4 py-3">Name</th>
                    <th className="text-left px-4 py-3">Email</th>
                    <th className="text-left px-4 py-3">Phone</th>
                    <th className="text-left px-4 py-3">Course</th>
                    <th className="text-left px-4 py-3">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {notifications.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="text-center py-12 text-gray-400">
                        No notification requests yet
                      </td>
                    </tr>
                  ) : (
                    notifications.map((n) => (
                      <tr key={n.id} className="border-t border-gray-100 hover:bg-gray-50">
                        <td className="px-4 py-3">{n.name || "-"}</td>
                        <td className="px-4 py-3">
                          <a href={`mailto:${n.email}`} className="text-purple hover:underline">
                            {n.email}
                          </a>
                        </td>
                        <td className="px-4 py-3">{n.phone || "-"}</td>
                        <td className="px-4 py-3 font-medium">
                          {n.course_name || n.course_slug}
                        </td>
                        <td className="px-4 py-3 text-gray-500 text-xs whitespace-nowrap">
                          {formatDate(n.created_at)}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            )}

            {activeTab === "subscribers" && (
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-600 text-xs uppercase">
                  <tr>
                    <th className="text-left px-4 py-3">Email</th>
                    <th className="text-left px-4 py-3">Source</th>
                    <th className="text-left px-4 py-3">Subscribed</th>
                  </tr>
                </thead>
                <tbody>
                  {subscribers.length === 0 ? (
                    <tr>
                      <td colSpan={3} className="text-center py-12 text-gray-400">
                        No subscribers yet
                      </td>
                    </tr>
                  ) : (
                    subscribers.map((s) => (
                      <tr key={s.id} className="border-t border-gray-100 hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <a href={`mailto:${s.email}`} className="text-purple hover:underline">
                            {s.email}
                          </a>
                        </td>
                        <td className="px-4 py-3 text-gray-600">{s.source || "-"}</td>
                        <td className="px-4 py-3 text-gray-500 text-xs whitespace-nowrap">
                          {formatDate(s.subscribed_at)}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
