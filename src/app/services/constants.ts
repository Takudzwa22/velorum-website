import { Bot, Globe, Users, Phone, Rocket, BarChartIcon as ChartBar } from "lucide-react"

export const services = [
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