"use client"

import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState, Suspense, useEffect } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import VoiceSphere from "@/components/ui/animations/VoiceSphere"
import NetworkNodes from "@/components/ui/animations/NetworkNodes"
import AIBrain from "@/components/ui/animations/AIBrain"

interface ExpandableCardProps {
  title: string
  description: string
  children: React.ReactNode
  features: string[]
  pricing?: string
  ctaText: string
  caseStudyLink: string
}

function ExpandableCard({ 
  title, 
  description, 
  children, 
  features, 
  pricing, 
  ctaText, 
  caseStudyLink 
}: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`backdrop-blur-xl bg-white/10 rounded-xl p-6 border border-white/20 shadow-xl 
          hover:bg-white/20 transition-all duration-300 w-full ${
          isExpanded ? "min-h-0" : "min-h-[400px]"
        } flex flex-col`}
      >
        <div className="flex flex-col items-center mb-6">{children}</div>
        <h3 className="text-xl font-semibold text-white mb-3 text-center">{title}</h3>
        <p className="text-gray-300 text-center mb-4 flex-grow">{description}</p>
        
        {(features.length > 0 || pricing) && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-center w-full text-blue-400 hover:text-blue-300 
              transition-colors duration-300 mt-auto"
          >
            {isExpanded ? (
              <>
                <span className="mr-2">Show less</span>
                <ChevronUp size={20} />
              </>
            ) : (
              <>
                <span className="mr-2">Learn more</span>
                <ChevronDown size={20} />
              </>
            )}
          </button>
        )}

        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 pb-4"
          >
            {features.length > 0 && (
              <>
                <h4 className="text-lg font-semibold text-white mb-2">Key Features:</h4>
                <ul className="list-disc list-inside text-gray-300 mb-4">
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </>
            )}
            {pricing && <p className="text-gray-300">{pricing}</p>}
          </motion.div>
        )}
      </motion.div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
        <Link
          href="/contact"
          className="px-6 py-2 bg-white/10 backdrop-blur-md text-white rounded-full 
            hover:bg-white/20 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 
            active:scale-95 transition-all duration-300 border border-white/20"
        >
          {ctaText}
        </Link>
        <Link 
          href={caseStudyLink} 
          className="text-blue-400 hover:text-blue-300 hover:translate-x-1 
            transition-all duration-300 underline underline-offset-4"
        >
          View Case Studies
        </Link>
      </div>
    </div>
  )
}

function ServicesContent() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [searchParams])

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
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Our Services</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Transform your business with our comprehensive suite of AI automation services. From marketing to customer
            service, we provide cutting-edge solutions that drive efficiency and growth.
          </p>
            </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {/* AI Voice Agent */}
          <ExpandableCard
            title="AI Voice Agent"
            description="Our AI Voice Agents are designed to streamline customer interactions and automate communication for businesses in real estate, education, fitness, dental practices, and other service-based industries."
            features={[
              "Lead Qualification",
              "Customer Support",
              "Appointment Scheduling",
              "CRM Integration",
              "Automated Follow-Ups",
              "Custom AI Voices",
              "Multi-Language Support",
            ]}
            pricing="Our pricing structure includes a one-time setup fee followed by a monthly retainer, ensuring continuous optimization and support."
            ctaText="Get Started"
            caseStudyLink="/use-cases"
          >
            <VoiceSphere />
          </ExpandableCard>

          {/* Leads & CRM Automation */}
          <ExpandableCard
            title="Leads & CRM Automation"
            description="Optimize lead management and customer relationships with our advanced Leads & CRM Automation solutions. Our system ensures no lead is lost and every interaction is tracked efficiently."
            features={[
              "Automated Lead Capture",
              "Intelligent Lead Qualification",
              "CRM Integration",
              "Automated Follow-Ups",
              "Task & Workflow Automation",
              "Real-Time Analytics & Reporting",
              "Multi-Channel Communication",
            ]}
            pricing="Our pricing includes a one-time setup fee and a monthly retainer, ensuring continuous support and optimization."
            ctaText="Automate Now"
            caseStudyLink="/use-cases"
          >
            <NetworkNodes />
          </ExpandableCard>

          {/* Custom AI Solutions */}
          <ExpandableCard
            title="Custom AI Solutions"
            description="Tailored AI solutions designed to meet your specific business needs. Our custom AI solutions are built around your unique workflows, ensuring a perfect fit for your organization."
            features={[
              "Custom Workflow Design",
              "Integration with Existing Systems",
              "Scalable Architecture",
              "24/7 Support",
              "Regular Updates",
              "Performance Monitoring",
            ]}
            pricing="Pricing for our Custom AI Solutions is tailored to your specific requirements and workflow complexity."
            ctaText="Get Quote"
            caseStudyLink="/use-cases"
          >
            <AIBrain />
          </ExpandableCard>
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

