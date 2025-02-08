import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Us | Velorum AI",
  description:
    "Learn about Velorum AI's mission, story, and approach to transforming businesses through practical AI solutions and genuine innovation.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero section */}
      <div className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">About Us</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Transforming businesses through practical AI solutions and genuine innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
          {/* Founder section */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center mb-20">
            <div className="relative aspect-[4/3] lg:aspect-[3/4]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BA7CD682-A9F5-4D08-9390-13FE8381A26F-fUIeurEBYLG0NUSyGHsuiOHNPtfDQF.jpeg"
                alt="Taku Mambwere, Founder of Velorum AI"
                fill
                className="object-cover rounded-2xl"
                priority
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>
            <div className="relative">
              <div className="rounded-2xl bg-black border border-white/10 p-8">
                <h2 className="text-3xl font-bold tracking-tight text-white mb-6">Our Story</h2>
                <p className="text-gray-300 mb-6">
                  Founded by Taku Mambwere, a young and ambitious AI enthusiast, Velorum AI has spent the last two years
                  consulting with numerous businesses, empowering them to save time, reduce costs, and unlock hidden
                  opportunities. By studying your unique challenges and turning them into strategic advantages, we
                  ensure that every solution we develop is tailored precisely to your needs.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Get in touch <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Mission section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="rounded-2xl bg-black border border-white/10 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300">
                Our mission is straightforward: create cutting-edge, accessible AI tools that help you work smarter, not
                harder. Whether you're looking to automate repetitive tasks, gain deeper insights from your data, or
                craft a future-ready strategy, Velorum AI is here to guide you through every step. We measure our
                success by your success—if our technology doesn't make a noticeable impact on your bottom line, we won't
                rest until it does.
              </p>
            </div>
            <div className="rounded-2xl bg-black border border-white/10 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Our Approach</h3>
              <p className="text-gray-300">
                At Velorum AI, our passion is helping you harness the power of artificial intelligence to streamline
                operations, spark growth, and stay ahead of the competition. We don't believe in endless tech jargon or
                hollow promises. Instead, we focus on tangible results that drive your business forward—because you
                deserve AI solutions that actually work.
              </p>
            </div>
          </div>

          {/* Call to action */}
          <div className="rounded-2xl bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-transparent border border-blue-500/10 p-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-6">Let's Build Your AI-Powered Future</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We want to equip you with the AI strategies and resources that will transform your business into a lean,
              intelligent, and unstoppable force. That's the Velorum AI promise: practical, forward-thinking solutions
              delivered by people who genuinely care about making your work easier.
            </p>
            <a
              href="https://calendly.com/taku-velorumai/ai-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glassy inline-block px-6 py-3 text-base font-medium shadow-sm hover:shadow-lg rounded-lg transition-all duration-300"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

