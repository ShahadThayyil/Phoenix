"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter, Mail } from "lucide-react"

interface Employee {
  id: number
  name: string
  role: string
  department: string
  bio: string
  image: string
  skills: string[]
  social: {
    linkedin?: string
    twitter?: string
    email?: string
  }
}

const employees: Employee[] = [
  {
    id: 1,
    name: "Mohammed Hisham",
    role: "CEO & Founder",
    department: "Leadership",
    bio: "Visionary leader with 15+ years in digital marketing. Sarah founded DigitalFlow to revolutionize how brands connect with their audiences through innovative strategies.",
    image: "/placeHolder.jpeg",
    skills: ["Strategic Planning", "Leadership", "Brand Development", "Innovation"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "hisham@phoenix.com",
    },
  },
  {
    id: 2,
    name: "Akshay",
    role: "Co-Founder & CTO",
    department: "Technology",
    bio: "Tech innovator specializing in marketing automation and data analytics. Marcus ensures our campaigns are powered by cutting-edge technology and insights.",
    image: "/placeHolder.jpeg",
    skills: ["Marketing Tech", "Data Analytics", "Automation", "AI/ML"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "akshay@phoenix.com",
    },
  },
  {
    id: 3,
    name: "Dilshad",
    role: "Head of Marketing",
    department: "Marketing",
    bio: "Creative strategist with a passion for storytelling. Emily leads our marketing initiatives and ensures every campaign resonates with target audiences.",
    image: "/placeHolder.jpeg",
    skills: ["Content Strategy", "Brand Storytelling", "Campaign Management", "Creative Direction"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "dilshad@phoenix.com",
    },
  },
  {
    id: 4,
    name: "Hashir",
    role: "Creative Director",
    department: "Design",
    bio: "Award-winning designer who transforms ideas into visual masterpieces. David's creative vision brings brands to life across all digital touchpoints.",
    image: "/placeHolder.jpeg",
    skills: ["Visual Design", "Brand Identity", "UI/UX", "Creative Strategy"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "hashir@phoenix.com",
    },
  },
  // {
  //   id: 5,
  //   name: "Lisa Thompson",
  //   role: "Performance Marketing Lead",
  //   department: "Marketing",
  //   bio: "Data-driven marketer focused on ROI optimization. Lisa's expertise in performance marketing drives measurable results for our clients.",
  //   image: "/professional-woman-performance-marketing-lead-head.jpg",
  //   skills: ["PPC Management", "Analytics", "Conversion Optimization", "ROI Analysis"],
  //   social: {
  //     linkedin: "#",
  //     twitter: "#",
  //     email: "lisa@digitalflow.com",
  //   },
  // },
  // {
  //   id: 6,
  //   name: "Alex Johnson",
  //   role: "Social Media Strategist",
  //   department: "Marketing",
  //   bio: "Social media expert who understands the pulse of digital communities. Alex creates engaging content that builds authentic connections.",
  //   image: "/professional-person-social-media-strategist-headsh.jpg",
  //   skills: ["Social Strategy", "Community Management", "Content Creation", "Influencer Relations"],
  //   social: {
  //     linkedin: "#",
  //     twitter: "#",
  //     email: "alex@digitalflow.com",
  //   },
  // },
]

export function EmployeeSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section
      id="team"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-slate-900/50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-medium text-secondary">Meet Our Team</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-balance mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              The Minds Behind
            </span>
            <br />
            <span className="text-foreground">Your Success</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto text-pretty px-2 sm:px-0">
            Our diverse team of experts brings together creativity, technology, and strategy to deliver exceptional
            results for every client.
          </p>
        </div>

        {/* Employee Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {employees.map((employee, index) => (
            <Card
              key={employee.id}
              className={`glass border-border hover:border-primary/50 transition-all duration-500 group cursor-pointer overflow-hidden ${
                hoveredCard === employee.id ? "scale-105 shadow-2xl shadow-primary/20" : ""
              }`}
              onMouseEnter={() => setHoveredCard(employee.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative">
                {/* Employee Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={employee.image || "/placeholder.svg"}
                    alt={employee.name}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Social Links Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {employee.social.linkedin && (
                      <a
                        href={employee.social.linkedin}
                        className="p-1.5 sm:p-2 glass-strong rounded-full hover:bg-primary/20 transition-colors"
                      >
                        <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                      </a>
                    )}
                    {employee.social.twitter && (
                      <a
                        href={employee.social.twitter}
                        className="p-1.5 sm:p-2 glass-strong rounded-full hover:bg-primary/20 transition-colors"
                      >
                        <Twitter className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                      </a>
                    )}
                    {employee.social.email && (
                      <a
                        href={`mailto:${employee.social.email}`}
                        className="p-1.5 sm:p-2 glass-strong rounded-full hover:bg-primary/20 transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Employee Info */}
                <div className="p-4 sm:p-6">
                  <div className="mb-3">
                    <Badge
                      variant="secondary"
                      className="mb-2 bg-secondary/20 text-secondary border-secondary/30 text-xs"
                    >
                      {employee.department}
                    </Badge>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">{employee.name}</h3>
                    <p className="text-primary font-medium text-sm sm:text-base">{employee.role}</p>
                  </div>

                  <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300 leading-relaxed">
                    {employee.bio}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {employee.skills.slice(0, 3).map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="text-xs bg-card/50 border-border hover:border-primary/50 transition-colors px-2 py-0.5"
                      >
                        {skill}
                      </Badge>
                    ))}
                    {employee.skills.length > 3 && (
                      <Badge
                        variant="outline"
                        className="text-xs bg-card/50 border-border text-muted-foreground px-2 py-0.5"
                      >
                        +{employee.skills.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <div className="text-center p-4 glass rounded-lg">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">1+</div>
            <div className="text-muted-foreground text-xs sm:text-sm">Years Experience</div>
          </div>
          <div className="text-center p-4 glass rounded-lg">
            <div className="text-2xl sm:text-3xl font-bold text-secondary mb-1 sm:mb-2">3+</div>
            <div className="text-muted-foreground text-xs sm:text-sm">Team Members</div>
          </div>
          <div className="text-center p-4 glass rounded-lg">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">3+</div>
            <div className="text-muted-foreground text-xs sm:text-sm">Certifications</div>
          </div>
          <div className="text-center p-4 glass rounded-lg">
            <div className="text-2xl sm:text-3xl font-bold text-secondary mb-1 sm:mb-2">98%</div>
            <div className="text-muted-foreground text-xs sm:text-sm">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}
