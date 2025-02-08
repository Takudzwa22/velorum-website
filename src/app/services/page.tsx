import Link from "next/link"
import { Bot, Globe, Users, Phone, Rocket, BarChartIcon as ChartBar } from "lucide-react"

const services = [
  {
    id: "marketing-automation",
    name: "Marketing Automation",
    description:
      "AI-powered marketing campaigns that adapt and optimize in real-time, delivering personalized content and maximizing engagement across all channels.",
    icon: ChartBar,
    features: [
      "Content generation and optimization",
      "Campaign performance analysis",
      "Automated A/B testing",
      "Customer journey mapping",
    ],
  },
  {
    id: "seo-enhancement",
    name: "SEO Enhancement",
    description:
      "Advanced AI algorithms that analyze search patterns, optimize content, and improve your website's visibility across search engines.",
    icon: Globe,
    features: [
      "Keyword optimization",
      "Content strategy recommendations",
      "Technical SEO automation",
      "Competitor analysis",
    ],
  },
  {
    id: "lead-generation",
    name: "Lead Generation",
    description:
      "Intelligent lead generation systems that identify, qualify, and nurture potential customers through automated workflows.",
    icon: Users,
    features: [
      "Lead scoring and qualification",
      "Automated follow-up sequences",
      "Behavior tracking and analysis",
      "Personalized engagement",
    ],
  },
  {
    id: "crm-integration",
    name: "CRM Integration",
    description:
      "Seamless AI integration with your CRM system to automate customer data analysis, segmentation, and relationship management.",
    icon: Bot,
    features: [
      "Customer data enrichment",
      "Automated segmentation",
      "Predictive analytics",
      "Integration with existing systems",
    ],
  },
  {
    id: "sales-enhancement",
    name: "Sales Call Enhancement",
    description:
      "AI-powered tools to optimize sales calls, provide real-time insights, and automate follow-up processes.",
    icon: Phone,
    features: [
      "Call transcription and analysis",
      "Sentiment analysis",
      "Real-time coaching suggestions",
      "Automated meeting scheduling",
    ],
  },
  {
    id: "onboarding-automation",
    name: "Onboarding Automation",
    description:
      "Streamlined onboarding processes powered by AI to ensure consistent, efficient, and personalized customer experiences.",
    icon: Rocket,
    features: ["Automated workflow creation", "Document processing", "Progress tracking", "Personalized guidance"],
  },
]

export default function ServicesPage() {
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

