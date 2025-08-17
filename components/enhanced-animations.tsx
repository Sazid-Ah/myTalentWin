"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
}

export function AnimatedCounter({ end, duration = 2000, suffix = "", className }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span className={cn("font-bold text-primary", className)}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

interface StaggeredListProps {
  children: React.ReactNode[]
  className?: string
  staggerDelay?: number
}

export function StaggeredList({ children, className, staggerDelay = 100 }: StaggeredListProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <div key={index} className="animate-stagger-in" style={{ animationDelay: `${index * staggerDelay}ms` }}>
          {child}
        </div>
      ))}
    </div>
  )
}

interface FloatingElementProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function FloatingElement({ children, className, delay = 0 }: FloatingElementProps) {
  return (
    <div className={cn("animate-float", className)} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  )
}

interface PulseGlowProps {
  children: React.ReactNode
  className?: string
  intensity?: "low" | "medium" | "high"
}

export function PulseGlow({ children, className, intensity = "medium" }: PulseGlowProps) {
  const intensityClasses = {
    low: "animate-pulse-glow opacity-70",
    medium: "animate-pulse-glow",
    high: "animate-pulse-glow brightness-110",
  }

  return <div className={cn(intensityClasses[intensity], className)}>{children}</div>
}

export function HeartBeat({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("animate-heart-beat", className)}>{children}</div>
}
