import Image from "next/image"
import Link from "next/link"
import CarouselWrapper from "@/components/ui/CarouselWrapper"

const clients = [
  {
    name: "IVA Global School",
    logo: "/images/clients/iva-global.png",
    industry: "Education",
  },
  {
    name: "Borcelle",
    logo: "/images/clients/borcelle.png",
    industry: "Ed-Tech",
  },
  {
    name: "Elevate",
    logo: "/images/clients/elevate.png",
    industry: "Coaching",
  },
  {
    name: "Direct",
    logo: "/images/clients/direct.png",
    industry: "Professional Services",
  },
  {
    name: "Hanover",
    logo: "/images/clients/hanover.png",
    industry: "Online Education",
  },
  {
    name: "Bright",
    logo: "/images/clients/bright.png",
    industry: "Real Estate",
  },
  {
    name: "Grid",
    logo: "/images/clients/grid.png",
    industry: "Cosmetics",
  },
  {
    name: "Vanguard",
    logo: "/images/clients/vanguard.png",
    industry: "Financial Services",
  },
  {
    name: "Worldly",
    logo: "/images/clients/worldly.png",
    industry: "Travel",
  },
  {
    name: "Ingoude Company",
    logo: "/images/clients/ingoude.png",
    industry: "Resource Mangement",
  },
  {
    name: "Salford",
    logo: "/images/clients/salford.png",
    industry: "Development",
  },
]

export default function Home() {
  return (
    <div className="bg-black">
      {/* Hero section */}
      <div className="relative min-h-screen">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/background.jpeg"
            alt="Abstract curves in blue and purple"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          {/* Subtle gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8 lg:py-56">
          <div className="max-w-2xl">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl [text-shadow:_0_1px_12px_rgb(0_0_0_/_20%)]">
              Innovative AI Solutions for the Future
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200 [text-shadow:_0_1px_8px_rgb(0_0_0_/_20%)]">
              Velorum AI is at the forefront of artificial intelligence, delivering cutting-edge solutions that
              transform businesses and drive innovation.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="https://calendly.com/taku-velorumai/ai-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glassy px-6 py-3 rounded-lg text-sm font-medium shadow-sm hover:shadow-lg"
              >
                Get started
              </a>
              <Link
                href="/services"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-200 transition-colors [text-shadow:_0_1px_8px_rgb(0_0_0_/_20%)]"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services section - Updated with new color scheme */}
      <div className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-400">Advanced AI Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything you need to implement AI in your business
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Our comprehensive suite of AI services is designed to meet the diverse needs of modern businesses, from
              startups to enterprises.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  name: "Custom AI Solutions",
                  description:
                    "Automate complex workflows with tailored AI solutions, enhancing efficiency and productivity across your business processes.",
                  icon: (
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  ),
                  link: "/services#marketing-automation",
                },
                {
                  name: "Leads & CRM Automation",
                  description:
                    "Streamline your lead generation and customer relationship management with AI-powered automation, enhancing data analysis and sequence optimization.",
                  icon: (
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                  ),
                  link: "/services#lead-generation",
                },
                {
                  name: "AI Agents",
                  description:
                    "Deploy versatile AI agents capable of performing multiple actions, equivalent to five employees in one, dramatically increasing your operational capacity and efficiency.",
                  icon: (
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  ),
                  link: "/services#sales-enhancement",
                },
              ].map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-500">
                      {feature.icon}
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <Link
                        href={feature.link}
                        className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Clients section - Updated with carousel */}
      <div className="bg-black/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-6">Trusted by industry leaders</h2>
            <p className="text-lg leading-8 text-gray-300 mb-12">
              We've had the privilege of working with some of the most innovative companies across various industries.
            </p>
          </div>
          <CarouselWrapper clients={clients} />
          <div className="mt-10 flex justify-center">
            <Link 
              href="/use-cases" 
              className="btn-glassy px-6 py-3 rounded-lg text-sm font-medium shadow-sm hover:shadow-lg"
            >
              View case studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

