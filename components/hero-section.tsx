"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles, Zap, Target } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/abstract-digital-network.png')] opacity-10 bg-cover bg-center" />

        <div className="absolute top-16 left-4 sm:top-20 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-32 right-4 sm:top-40 sm:right-20 w-20 h-20 sm:w-32 sm:h-32 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute bottom-16 left-1/4 sm:bottom-20 w-16 h-16 sm:w-24 sm:h-24 bg-primary/30 rounded-full blur-xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 sm:pt-0">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 glass px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-6 sm:mb-8">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
            <span className="text-xs sm:text-sm font-medium text-foreground">#1 Digital Marketing Agency 2024</span>
          </div> */}

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
              Transform Your Brand
            </span>
            <br />
            <span className="text-foreground">Into Digital Excellence</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 text-pretty px-2 sm:px-0">
            We craft innovative digital marketing strategies that drive real results. From brand identity to performance
            marketing, we turn your vision into measurable success.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4 sm:px-0">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group w-full sm:w-auto">
              Start Your Journey
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass border-border hover:bg-card group bg-transparent w-full sm:w-auto"
            >
              <Play className="mr-2 w-4 h-4" />
              Watch Our Story
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4 sm:px-0">
            <div
              className={`glass p-4 sm:p-6 rounded-xl transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-primary/20 rounded-full">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1 sm:mb-2">1+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Successful Campaigns</div>
            </div>

            <div
              className={`glass p-4 sm:p-6 rounded-xl transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-secondary/20 rounded-full">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1 sm:mb-2">300%</div>
              <div className="text-sm sm:text-base text-muted-foreground">Average ROI Increase</div>
            </div>

            <div
              className={`glass p-4 sm:p-6 rounded-xl transition-all duration-700 delay-700 sm:col-span-2 md:col-span-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-primary/20 rounded-full">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1 sm:mb-2">5+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Industry Awards</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-primary rounded-full mt-1.5 sm:mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
