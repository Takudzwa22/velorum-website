import Link from "next/link"
import { LinkedinIcon as LinkedIn, Instagram } from "lucide-react"
import { NewsletterForm } from "./NewsletterForm"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          <div className="space-y-4">
            <svg className="h-10 w-auto text-blue-500" viewBox="0 0 40 40" fill="currentColor">
              <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
            </svg>
            <p className="text-sm text-gray-400">
              Velorum AI: Innovative artificial intelligence solutions for the future.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/101914368/"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <LinkedIn size={24} />
              </a>
              <a
                href="https://www.instagram.com/velorumai/"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <Instagram size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                  Custom AI Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                  Leads & CRM Automation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                  AI Agents
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe to our newsletter for the latest AI insights and updates.
            </p>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
              <NewsletterForm />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 py-8">
          <p className="text-center text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Velorum AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

