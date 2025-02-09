"use client"
import Image from "next/image"

interface Metric {
  label: string
  value: string
}

interface Case {
  title: string
  description: string
  image: string
  category: string
  metrics: Metric[]
}

export default function UseCasesContent({ cases }: { cases: Case[] }) {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">Success Stories</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Discover how businesses are transforming their operations and achieving remarkable results with our AI
              solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Case studies */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="space-y-20">
          {cases.map((case_study, index) => (
            <div
              key={case_study.title}
              className={`flex flex-col gap-12 lg:flex-row ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div
                className={`relative w-full lg:w-1/2 flex items-center justify-center bg-black/30 rounded-2xl ${
                  case_study.title === "Automated Onboarding" ? "h-[400px]" : "h-[300px]"
                }`}
              >
                <Image
                  src={case_study.image}
                  alt={case_study.title}
                  width={case_study.title === "Automated Onboarding" ? 700 : 500}
                  height={case_study.title === "Automated Onboarding" ? 400 : 300}
                  className={`rounded-2xl object-contain ${
                    case_study.title === "Automated Onboarding" ? "h-[400px] w-full" : "h-[300px]"
                  }`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/placeholder.png";
                  }}
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
              </div>
              <div className="w-full lg:w-1/2 lg:pt-8">
                <div className="lg:max-w-lg">
                  <span className="text-blue-400 text-sm font-semibold">{case_study.category}</span>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">{case_study.title}</h2>
                  <p className="mt-6 text-lg leading-8 text-gray-300">{case_study.description}</p>
                  <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3">
                    {case_study.metrics.map((metric) => (
                      <div key={metric.label}>
                        <dt className="text-sm font-semibold leading-6 text-gray-300">{metric.label}</dt>
                        <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-blue-400">
                          {metric.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 