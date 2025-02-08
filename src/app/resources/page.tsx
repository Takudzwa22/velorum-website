import Link from "next/link"
import { Book } from "lucide-react"

const resources = [
  {
    title: "Learning Center",
    description: "Educational resources to help you master our AI tools and technologies.",
    icon: Book,
    items: [
      { name: "AI Fundamentals", type: "Course" },
      { name: "Implementation Strategies", type: "Workshop" },
      { name: "Case Studies", type: "Article" },
      { name: "Expert Insights", type: "Webinar" },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">Resources</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Explore our learning center to master our AI solutions. From fundamentals to expert insights, we've got
              you covered.
            </p>
          </div>
        </div>
      </div>

      {/* Resources grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 gap-8">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="relative overflow-hidden rounded-2xl bg-black/50 backdrop-blur-sm border border-white/10 transition-colors hover:border-blue-500/50"
            >
              <div className="p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500">
                    <resource.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold leading-8 text-white">{resource.title}</h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-300">{resource.description}</p>
                <ul className="mt-6 divide-y divide-white/5">
                  {resource.items.map((item) => (
                    <li key={item.name} className="py-4 first:pt-0 last:pb-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <p className="text-sm font-medium leading-6 text-white">{item.name}</p>
                          <span className="ml-4 inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/20">
                            {item.type}
                          </span>
                        </div>
                        <Link
                          href="#"
                          className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          View <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

