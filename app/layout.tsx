import type { Metadata, Viewport } from "next"
import { Inter, Cairo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LanguageProvider } from "@/lib/language-context"
import { WhatsAppButton } from "@/components/whatsapp-button"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://languagetreats.com"),
  title: {
    default: "Language Treats | Crafting Your English Success Story",
    template: "%s | Language Treats",
  },
  description:
    "Experience personalized English learning with certified native-like tutors, flexible hours, and a global CEFR & IELTS curriculum. Start your free trial today.",
  keywords: [
    "English learning",
    "IELTS preparation",
    "TOEFL preparation",
    "Business English",
    "Native-like English tutors",
    "Online English courses",
    "تعلم الإنجليزية",
    "كورسات إنجليزي",
    "آيلتس",
  ],
  authors: [{ name: "Language Treats" }],
  creator: "Language Treats",
  publisher: "Language Treats",
  generator: "v0.app",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_EG",
    url: "https://languagetreats.com",
    siteName: "Language Treats",
    title: "Language Treats | Crafting Your English Success Story",
    description:
      "Experience personalized English learning with certified native-like tutors, flexible hours, and a global CEFR & IELTS curriculum.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Language Treats - Premium English Learning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Language Treats | Crafting Your English Success Story",
    description: "Experience personalized English learning with certified native-like tutors and global curriculum.",
    images: ["/og-image.jpg"],
    creator: "@languagetreats",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo.png", sizes: "any", type: "image/png" },
    ],
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FDC500" },
    { media: "(prefers-color-scheme: dark)", color: "#432577" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <body className={`${inter.variable} ${cairo.variable} font-sans antialiased`}>
        <Suspense fallback={null}>
          <LanguageProvider>
            {children}
            <WhatsAppButton />
          </LanguageProvider>
        </Suspense>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
