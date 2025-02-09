"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

const solutions = [
  "Custom AI Solutions",
  "Leads & CRM Automation",
  "AI Agents",
  "Marketing Automation",
  "SEO Enhancement",
  "Lead Generation",
  "CRM Integration",
  "Sales Call Enhancement",
  "Onboarding Automation",
]

export default function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    solution: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prevState) => ({ ...prevState, solution: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://hook.eu2.make.com/fno7nttwtgxevqi4jho25ofxmu2rg4hk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      toast({
        title: "Success!",
        description: "Your message has been sent successfully. We'll be in touch soon.",
        duration: 5000,
      })

      setFormData({ name: "", email: "", solution: "", message: "" })
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-black relative">
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
      <div className="relative z-10 flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white">Contact Us</h2>
            <p className="mt-4 text-sm text-gray-300">Take the next step to elevating your business.</p>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="rounded-lg backdrop-blur-lg bg-white/10 p-8 shadow-xl">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-white">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder-gray-400"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder-gray-400"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <Label htmlFor="solution" className="text-white">
                    Interested Solution
                  </Label>
                  <Select onValueChange={handleSelectChange} value={formData.solution} disabled={isSubmitting}>
                    <SelectTrigger className="bg-gray-800/50 backdrop-blur-sm border-white/10 text-white">
                      <SelectValue placeholder="Select a solution" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800/80 backdrop-blur-sm border-white/10 text-white">
                      {solutions.map((solution) => (
                        <SelectItem key={solution} value={solution} className="focus:bg-blue-500/20">
                          {solution}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message" className="text-white">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder-gray-400"
                    placeholder="Tell us more about your needs..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className="mt-6">
                <Button type="submit" className="w-full btn-glassy" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
} 