"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // const navItems = [
  //   { href: "/", label: "Home" },
  //   { href: "/app-info", label: "App Info" },
  //   { href: "/privacy", label: "Privacy" },
  //   { href: "/terms", label: "Terms" },
  //   { href: "/payment", label: "Payment" },
  //   { href: "/security", label: "Security" },
  // ]

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center  group">
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            <Image src='/logo.png' height={100} width={150} alt="Logo"/>           
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-8">
            {/* {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))} */}
          <Button className="relative cursor-pointer overflow-hidden rounded-full px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
  <span className="absolute inset-0 bg-gradient-to-r from-[#ab110f] via-[#e94b5f] to-[#ab110f] opacity-90 transition-opacity duration-300 group-hover:opacity-100"></span>
  <span className="absolute inset-0 bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
  <span className="relative z-10">✨ Get Started</span>
</Button>

          </div>

          {/* Mobile menu button */}
          {/* <div className="">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div> */}
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card rounded-lg mt-2 border border-border shadow-lg">
              {/* {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))} */}
              <div className="px-3 py-2">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 rounded-full transition-all duration-300">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
