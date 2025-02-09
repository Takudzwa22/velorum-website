"use client"
import { useEffect } from 'react'
import UseCasesContent from "@/components/ui/UseCasesContent"

const cases = [
  {
    title: "CRM & Sales Lead Management",
    description:
      "How we automated an online school's entire lead and CRM integrations. Introducinng automated follow-ups and AI based personalization. Saving them hours and increasing the efficicny of their funnel, leading to increased sales.",
    image: "/images/use-cases/crm.png",
    category: "E-learning",
    metrics: [
      { label: "Monthly Hours Saved", value: "100h" },
      { label: "Sales", value: "+35%" },
      { label: "Lead engagement", value: "+70%" },
    ],
  },
  {
    title: "Customer Service Automation",
    description: "Reduced response time by 80% with our AI chatbot solution.",
    image: "/images/use-cases/customer-service-automation.png",
    category: "Customer Service",
    metrics: [
      { label: "Response Time", value: "-80%" },
      { label: "Customer Satisfaction", value: "+40%" },
      { label: "Cost Reduction", value: "65%" },
    ],
  },
  {
    title: "AI Automated Onboarding",
    description:
      "How we streamlined an employee and client onboarding process for a software company. Eliminating the need for virtual agents and replacing them with AI Agents.",
    image: "/images/use-cases/onboarding.png",
    category: "Software",
    metrics: [
      { label: "Cost Reduction", value: "-65%" },
      { label: "Customer Satisfaction", value: "+75%" },
      { label: "Onboarding Efficency", value: "+100%" },
    ],
  },
]

export default function UseCasesPage() {
  useEffect(() => {
    // Put any browser API calls here
  }, [])
  return <UseCasesContent cases={cases} />
}

