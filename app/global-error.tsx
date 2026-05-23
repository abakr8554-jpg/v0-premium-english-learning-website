"use client"

import { useEffect } from "react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("[v0] Global error:", error)
  }, [error])

  return (
    <html lang="en">
      <body>
        <main
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #432577 0%, #2D1B69 100%)",
            color: "white",
            padding: "1rem",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <div style={{ textAlign: "center", maxWidth: "500px" }}>
            <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}>Critical Error</h1>
            <p style={{ marginBottom: "2rem", opacity: 0.8 }}>
              A critical error has occurred. Please refresh the page or contact support if the issue persists.
            </p>
            <button
              onClick={reset}
              style={{
                background: "#FDC500",
                color: "#432577",
                padding: "0.75rem 2rem",
                borderRadius: "9999px",
                fontWeight: "bold",
                border: "none",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              Reload Application
            </button>
          </div>
        </main>
      </body>
    </html>
  )
}
