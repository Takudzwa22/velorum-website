"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"

interface CaseStudy {
  id: number
  title: string
  company: string
  challenges: string
  solution: string
  results: string[]
  category: "voice" | "crm" | "custom"
  logo: string
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Growth Through Automation",
    company: "IVA Global Online School",
    challenges: "IVA Global Online School struggled with fragmented lead management, overwhelming support tickets, and limited bandwidth for timely responses.",
    solution: "We implemented Leads & CRM Automation alongside an AI chatbot for customer support, taking over 90% of support tickets and streamlining follow-ups. Staff gained back hours previously lost to repetitive tasks, enabling more targeted student engagement.",
    results: [
      "$36,000 in additional revenue within one calendar year",
      "80% faster support response times with the AI chatbot",
      "15 hours saved weekly on CRM lead management",
    ],
    category: "custom",
    logo: "/images/use-cases/iva-global.png",
  },
  {
    id: 2,
    title: "AI-Powered Transformation",
    company: "Redwood Realty",
    challenges: "Redwood Realty faced inconsistent lead follow-ups and time-intensive appointment scheduling in a competitive market.",
    solution: "Implemented AI Voice Agents for automated lead qualification, multilingual support, and seamless CRM integration.",
    results: [
      "25% boost in lead conversion",
      "40% faster response times",
      "15 hours saved per week on administrative tasks",
    ],
    category: "voice",
    logo: "/images/use-cases/redwood-realty.png",
  },
  {
    id: 3,
    title: "CRM Overhaul",
    company: "Horizon Fitness",
    challenges: "Horizon Fitness struggled with irregular lead management and missed follow-ups, causing stalled conversions.",
    solution: "Leveraged Leads & CRM Automation for automated lead capture, intelligent qualification, real-time analytics, and multi-channel communication.",
    results: [
      "30% increase in conversions",
      "35% reduction in missed leads",
      "20% faster follow-up times",
    ],
    category: "crm",
    logo: "/images/use-cases/horizon-fitness.png",
  },
]

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="backdrop-blur-xl bg-white/10 rounded-xl p-6 border border-white/20 shadow-xl 
        hover:bg-white/20 transition-all duration-300"
    >
      <div className="space-y-6">
        {/* Header with logo */}
        <div className="flex items-center space-x-4">
          <div className="relative flex-shrink-0 w-[140px] h-[70px] bg-white/10 rounded-lg 
            backdrop-blur-sm border border-white/10 flex items-center justify-center p-0.5">
            <Image
              src={study.logo}
              alt={`${study.company} logo`}
              width={135}
              height={65}
              className="object-contain w-full h-full"
              priority
            />
          </div>

          <div className="flex-grow pl-2">
            <h3 className="text-xl font-semibold text-white leading-tight">{study.company}</h3>
            <p className="text-blue-400 font-medium text-sm">{study.title}</p>
          </div>
        </div>

        <div className="space-y-4 pt-2">
          <div>
            <h4 className="text-white font-medium mb-2">Challenges</h4>
            <p className="text-gray-300">{study.challenges}</p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-2">Solution</h4>
            <p className="text-gray-300">{study.solution}</p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-2">Results</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {study.results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </div>

          <Link
            href="/contact"
            className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md text-white rounded-full 
              hover:bg-white/20 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 
              active:scale-95 transition-all duration-300 border border-white/20 mt-4"
          >
            Get Similar Results
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

function UseCasesContent() {
  return (
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
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Case Studies</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Discover how our AI solutions have transformed businesses across different industries.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </div>
  )
}

// Loading fallback
function UseCasesLoading() {
  return <div className="min-h-screen bg-black animate-pulse"></div>
}

export default function UseCases() {
  return (
    <Suspense fallback={<UseCasesLoading />}>
      <UseCasesContent />
    </Suspense>
  )
}

