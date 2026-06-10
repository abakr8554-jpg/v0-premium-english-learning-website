import { NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

export async function GET() {
  try {
    const logsDir = path.join(process.cwd(), ".logs")
    const files = await fs.readdir(logsDir)
    const emailFiles = files.filter((f) => f.startsWith("email-") && f.endsWith(".json"))

    if (emailFiles.length === 0) {
      return NextResponse.json({ message: "No emails logged yet", count: 0 })
    }

    const emails = []
    for (const file of emailFiles.sort().reverse().slice(0, 10)) {
      const content = await fs.readFile(path.join(logsDir, file), "utf-8")
      emails.push(JSON.parse(content))
    }

    return NextResponse.json({
      message: "Recent logged emails",
      count: emails.length,
      emails,
    })
  } catch (error) {
    console.log("[v0] Test endpoint error:", error)
    return NextResponse.json(
      { error: "Failed to read logs", message: String(error) },
      { status: 500 }
    )
  }
}
