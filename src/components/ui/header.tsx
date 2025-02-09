"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Services", href: "/services" },
  { name: "Use Cases", href: "/use-cases" },
  { name: "Resources", href: "/resources" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setIsScrolled(window.scrollY > 0)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-black/40 backdrop-blur-xl border-b border-white/10" 
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="flex w-full items-center justify-between py-6">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="sr-only">Velorum AI</span>
                <svg className="h-8 w-auto text-white mr-3" viewBox="0 0 40 40" fill="currentColor">
                  <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
                </svg>
                <span className="text-white text-xl font-bold">Velorum AI</span>
              </Link>
              <div className="ml-10 hidden space-x-8 lg:block">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-white hover:text-blue-200 transition duration-150 ease-in-out"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="ml-10 space-x-4">
              <a
                href="https://calendly.com/taku-velorumai/ai-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glassy inline-block py-2 px-4 rounded-md text-base font-medium transition duration-150 ease-in-out"
              >
                Book Meeting
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open menu</span>
                {isMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu portal - moved outside header */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm" 
            onClick={() => setIsMenuOpen(false)}
          />
          {/* Menu panel */}
          <div className="fixed inset-y-0 right-0 z-[101] w-full overflow-y-auto bg-black/60 backdrop-blur-xl border-l border-white/10 px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Velorum AI</span>
                <svg className="h-8 w-auto text-white" viewBox="0 0 40 40" fill="currentColor">
                  <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
                </svg>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-blue-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

