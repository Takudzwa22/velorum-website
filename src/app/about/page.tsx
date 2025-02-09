import type { Metadata } from "next"
import AboutContent from "@/components/ui/AboutContent"

export const metadata: Metadata = {
  title: "About Us | Velorum AI",
  description:
    "Learn about Velorum AI's mission, story, and approach to transforming businesses through practical AI solutions and genuine innovation.",
}

export default function AboutPage() {
  return <AboutContent />
}

