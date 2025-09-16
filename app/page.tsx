import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { HeroSection } from "@/components/hero-section"
import { EmployeeSection } from "@/components/employee-section"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <GlassmorphismNav />
      <HeroSection />
      <ServicesSection />
      <EmployeeSection />
      <Footer />
    </main>
  )
}
