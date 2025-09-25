"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-b from-background to-slate-950 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold logo-text mb-4">Fynix</h3>
            <p className="text-muted-foreground mb-6 text-sm">
              Transforming brands through innovative digital marketing strategies. We turn your vision into measurable
              success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 glass rounded-full hover:bg-primary/20 transition-colors group">
                <Facebook className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </a>
              <a href="https://www.youtube.com/@FYNIXDIGITA" className="p-2 glass rounded-full hover:bg-primary/20 transition-colors group">
                <Youtube className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </a>
              <a href="https://www.instagram.com/fynix.digitalmedia?igsh=MWZ6ZWZ0bG9oaHUxeQ%3D%3D&utm_source=qr" className="p-2 glass rounded-full hover:bg-primary/20 transition-colors group">
                <Instagram className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </a>
              <a href="#" className="p-2 glass rounded-full hover:bg-primary/20 transition-colors group">
                <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "SEO Optimization",
                "Social Media Marketing",
                "Brand Design",
                "Performance Marketing",
                "Web Development",
                "Mobile Marketing",
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {["About Us", "Our Team", "Careers", "Case Studies", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Get In Touch</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">fynixdigitalsolution@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">+91 8075 935 636</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">San Tirur, CT</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="glass p-4 rounded-lg">
              <h5 className="text-sm font-semibold text-foreground mb-2">Stay Updated</h5>
              <p className="text-xs text-muted-foreground mb-3">
                Get the latest digital marketing insights delivered to your inbox.
              </p>
              <div className="flex gap-2">
                <Input type="email" placeholder="Enter your email" className="bg-input border-border text-sm" />
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-border mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">© 2025 Fynix. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
