"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Megaphone, Palette, BarChart3, Globe, Smartphone, ArrowRight, CheckCircle } from "lucide-react"

interface Service {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  price: string
  popular?: boolean
}

const services: Service[] = [
  {
    id: 1,
    title: "SEO Optimization",
    description: "Boost your search rankings and drive organic traffic with our comprehensive SEO strategies.",
    icon: <Search className="w-8 h-8" />,
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building", "Performance Tracking"],
    price: "From ₹7,500/mo",
  },
  {
    id: 2,
    title: "Social Media Marketing",
    description: "Build your brand presence and engage audiences across all major social platforms.",
    icon: <Megaphone className="w-8 h-8" />,
    features: ["Content Strategy", "Community Management", "Paid Social Ads", "Influencer Partnerships", "Analytics"],
    price: "From ₹6,500/mo",
    popular: true,
  },
  {
    id: 3,
    title: "Brand Design",
    description: "Create a memorable brand identity that resonates with your target audience.",
    icon: <Palette className="w-8 h-8" />,
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Marketing Materials", "Brand Strategy"],
    price: "From ₹9,000",
  },
  {
    id: 4,
    title: "Performance Marketing",
    description: "Drive measurable results with data-driven advertising campaigns across all channels.",
    icon: <BarChart3 className="w-8 h-8" />,
    features: ["PPC Management", "Conversion Optimization", "A/B Testing", "ROI Analysis", "Campaign Strategy"],
    price: "From ₹8,500/mo",
  },
  {
    id: 5,
    title: "Web Development",
    description: "Build fast, responsive websites that convert visitors into customers.",
    icon: <Globe className="w-8 h-8" />,
    features: ["Custom Development", "E-commerce", "CMS Integration", "Performance Optimization", "Maintenance"],
    price: "From ₹9,500",
  },
  {
    id: 6,
    title: "Mobile Marketing",
    description: "Reach customers on-the-go with targeted mobile marketing strategies.",
    icon: <Smartphone className="w-8 h-8" />,
    features: ["App Store Optimization", "Mobile Ads", "Push Notifications", "In-App Marketing", "Mobile Analytics"],
    price: "From ₹6,000/mo",
  },
]


export function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  return (
    <section
      id="services"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/50 to-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-medium text-secondary">Our Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-balance mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Comprehensive Solutions
            </span>
            <br />
            <span className="text-foreground">For Digital Growth</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto text-pretty px-2 sm:px-0">
            From strategy to execution, we provide end-to-end digital marketing services that drive real business
            results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className={`glass border-border hover:border-primary/50 transition-all duration-500 group cursor-pointer relative overflow-hidden ${
                hoveredService === service.id ? "scale-105 shadow-2xl shadow-primary/20" : ""
              }`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {service.popular && (
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                  <Badge className="bg-secondary text-secondary-foreground text-xs">Most Popular</Badge>
                </div>
              )}

              <div className="p-4 sm:p-6">
                {/* Service Icon */}
                <div className="flex items-center justify-center mb-4 sm:mb-6">
                  <div className="p-3 sm:p-4 bg-primary/20 rounded-full text-primary group-hover:bg-primary/30 transition-colors">
                    {service.icon}
                  </div>
                </div>

                {/* Service Info */}
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3 sm:mb-4 leading-relaxed">{service.description}</p>
                  <div className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">{service.price}</div>
                </div>

                {/* Features */}
                <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group text-sm sm:text-base py-2 sm:py-3">
                  Get Started
                  <ArrowRight className="ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">Our Proven Process</h3>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-12 px-2 sm:px-0">
            We follow a systematic approach to ensure every project delivers exceptional results.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We analyze your business, audience, and competition to create a tailored strategy.",
              },
              {
                step: "02",
                title: "Strategy",
                description: "Develop comprehensive plans with clear objectives and measurable KPIs.",
              },
              {
                step: "03",
                title: "Execution",
                description: "Implement campaigns with precision using cutting-edge tools and techniques.",
              },
              {
                step: "04",
                title: "Optimization",
                description: "Continuously monitor and refine performance to maximize ROI.",
              },
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="glass p-4 sm:p-6 rounded-xl text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-3 sm:mb-4">{process.step}</div>
                  <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">{process.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass p-6 sm:p-8 md:p-12 rounded-2xl text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">
            Ready to Transform Your Digital Presence?
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-0">
            Let's discuss how our expertise can help you achieve your business goals and drive measurable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
              Start Your Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass border-border hover:bg-card bg-transparent w-full sm:w-auto"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
