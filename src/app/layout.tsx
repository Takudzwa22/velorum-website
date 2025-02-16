// This is a Server Component by default - no "use client" needed
import { Analytics } from "@vercel/analytics/react"
import './globals.css'
import { Inter } from "next/font/google"
import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"
import { NewsletterPopup } from "@/components/ui/NewsletterPopup"
import { Toaster } from "@/components/ui/toaster"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Velorum AI",
  description: "Innovative artificial intelligence solutions",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/favicon.ico" },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
        <NewsletterPopup />
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}

