"use client"

import { useEffect, Suspense } from 'react'
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { services } from './constants'

// Separate the content that uses useSearchParams
function ServicesContent() {
  const searchParams = useSearchParams()

  useEffect(() => {
    // Get the hash from the URL
    const hash = window.location.hash
    if (hash) {
      // Remove the # symbol
      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        // Smooth scroll to the element
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [searchParams])

  return (
    <div className="min-h-screen bg-black">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">AI-Powered Services</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Transform your business with our comprehensive suite of AI automation services. From marketing to customer
              service, we provide cutting-edge solutions that drive efficiency and growth.
            </p>
          </div>
        </div>
      </div>

      {/* Services grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.name}
              id={service.id}
              className="relative overflow-hidden rounded-2xl bg-black/50 backdrop-blur-sm border border-white/10 transition-colors hover:border-blue-500/50"
            >
              <div className="p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold leading-8 text-white">{service.name}</h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-300">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3 text-gray-300">
                      <svg className="h-6 w-5 flex-none text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Loading fallback component
function ServicesLoading() {
  return <div className="min-h-screen bg-black animate-pulse"></div>
}

// Main page component with Suspense
export default function ServicesPage() {
  return (
    <Suspense fallback={<ServicesLoading />}>
      <ServicesContent />
    </Suspense>
  )
}

