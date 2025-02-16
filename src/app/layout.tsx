// This is a Server Component by default - no "use client" needed
import { Analytics } from "@vercel/analytics/react"
import './globals.css'
import { Inter } from "next/font/google"
import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"
import { NewsletterPopup } from "@/components/ui/NewsletterPopup"
import { Toaster } from "@/components/ui/toaster"
import type React from "react"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Velorum AI",
  description: "Innovative artificial intelligence solutions for the future.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
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

