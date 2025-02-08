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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <NewsletterPopup />
        <Toaster />
      </body>
    </html>
  )
}

