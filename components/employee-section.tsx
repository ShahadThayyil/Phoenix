"use client"

import { Card } from "@/components/ui/card"
import { Linkedin, Twitter, Mail } from "lucide-react"

interface Employee {
  id: number
  name: string
  role: string
  bio: string
  image: string
  social: {
    linkedin?: string
    twitter?: string
    email?: string
  }
}

const employees: Employee[] = [
  {
    id: 1,
    name: "Hashir",
    role: "CEO & Founder",
    bio: "Visionary leader with 15+ years in digital marketing and business strategy.",
    image: "/Hashir.jpeg",
    social: { linkedin: "#", twitter: "#", email: "anas@dreams.com" },
  },
  {
    id: 2,
    name: "Hisham",
    role: "COO",
    bio: "Operations expert ensuring seamless project delivery and client satisfaction.",
    image: "/Hisham.jpeg",
    social: { linkedin: "#", twitter: "#", email: "abhimanyu@dreams.com" },
  },
  {
    id: 3,
    name: "Dilshad",
    role: "Creative Director",
    bio: "Award-winning designer crafting compelling visual stories for brands.",
    image: "/Dilshad.jpeg",
    social: { linkedin: "#", twitter: "#", email: "swalih@dreams.com" },
  },
  {
    id: 4,
    name: "Akshay",
    role: "Marketing Lead",
    bio: "Data-driven marketer with expertise in campaign strategy and ROI optimization.",
    image: "/Akshay.jpeg",
    social: { linkedin: "#", twitter: "#", email: "rilwan@dreams.com" },
  },
]

export function EmployeeSection() {
  return (
    <section id="team" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-balance mb-3">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            A professional team working together for your success.
          </p>
        </div>

        {/* Employee Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {employees.map((employee) => (
            <Card
              key={employee.id}
              className="flex flex-col items-center text-center p-6 bg-card/60 border border-border rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              {/* Profile Image */}
              <img
                src={employee.image}
                alt={employee.name}
                className="w-28 h-28 rounded-full object-cover mb-4 border border-border shadow-sm"
              />

              {/* Info */}
              <h3 className="text-lg font-semibold text-foreground">{employee.name}</h3>
              <p className="text-primary font-medium text-sm mb-2">{employee.role}</p>
              <p className="text-muted-foreground text-xs sm:text-sm mb-4">{employee.bio}</p>

              {/* Social Icons */}
              <div className="flex gap-3 justify-center">
                {employee.social.linkedin && (
                  <a href={employee.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {employee.social.twitter && (
                  <a href={employee.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
                {employee.social.email && (
                  <a href={`mailto:${employee.social.email}`} className="hover:text-primary">
                    <Mail className="w-4 h-4" />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
