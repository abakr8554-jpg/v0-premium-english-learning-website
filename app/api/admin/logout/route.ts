import { NextResponse } from "next/server"
import { cookies } from "next/headers"
export const dynamic = "force-static";
export async function POST() {
  const cookieStore = await cookies()
  cookieStore.delete("admin_auth")
  return NextResponse.json({ success: true })
}
