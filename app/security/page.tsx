"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  Lock,
  Eye,
  Camera,
  AlertTriangle,
  Users,
  CheckCircle,
  Phone,
  MessageSquare,
  UserCheck,
  FileText,
  Clock,
} from "lucide-react"

export default function SecurityPage() {
  const [activeFeature, setActiveFeature] = useState(0)

  const securityFeatures = [
    {
      icon: Camera,
      title: "Photo Verification",
      description: "AI-powered photo verification ensures profiles are authentic and reduces fake accounts.",
      details:
        "Our advanced AI technology analyzes profile photos to detect fake or manipulated images, ensuring you're connecting with real people.",
      status: "Active",
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All messages and calls are encrypted to protect your private conversations.",
      details:
        "We use military-grade encryption to secure all communications, ensuring only you and your match can read your messages.",
      status: "Active",
    },
    {
      icon: UserCheck,
      title: "Identity Verification",
      description: "Optional identity verification adds an extra layer of trust to your profile.",
      details:
        "Verify your identity with government-issued ID to earn a verification badge and increase trust with potential matches.",
      status: "Optional",
    },
    {
      icon: Eye,
      title: "Profile Screening",
      description: "All profiles are reviewed by our safety team before going live.",
      details:
        "Our human moderators review every profile to ensure compliance with community guidelines and safety standards.",
      status: "Automatic",
    },
  ]

  const safetyTools = [
    {
      icon: AlertTriangle,
      title: "Report & Block",
      description: "Instantly report inappropriate behavior and block unwanted users.",
    },
    {
      icon: Phone,
      title: "Video Call Verification",
      description: "Verify matches through in-app video calls before meeting in person.",
    },
    {
      icon: MessageSquare,
      title: "Safe Messaging",
      description: "Communicate safely within the app without sharing personal contact information.",
    },
    {
      icon: Users,
      title: "Community Guidelines",
      description: "Clear guidelines ensure a respectful and safe environment for everyone.",
    },
  ]

  const safetyTips = [
    {
      category: "Profile Safety",
      tips: [
        "Use recent, authentic photos of yourself",
        "Don't include personal information like your address or workplace",
        "Be honest about your intentions and what you're looking for",
        "Report any suspicious or fake profiles you encounter",
      ],
    },
    {
      category: "Communication Safety",
      tips: [
        "Keep conversations within the app initially",
        "Don't share personal contact information too quickly",
        "Trust your instincts if something feels off",
        "Report any inappropriate or harassing messages",
      ],
    },
    {
      category: "Meeting Safety",
      tips: [
        "Meet in public places for first dates",
        "Tell a friend or family member about your plans",
        "Arrange your own transportation to and from the date",
        "Consider a video call before meeting in person",
      ],
    },
  ]

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Verified User",
      content:
        "The photo verification gave me confidence that I was talking to real people. I felt much safer using MyTalentWincompared to other apps.",
      rating: 5,
    },
    {
      name: "Michael R.",
      role: "Premium Member",
      content:
        "The safety features are impressive. The ability to video chat within the app before meeting was a game-changer for me.",
      rating: 5,
    },
    {
      name: "Jessica L.",
      role: "Verified User",
      content:
        "I reported an inappropriate user and the response was immediate. The safety team really cares about protecting users.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-slide-in-up">
            <div className="space-y-4">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium">
                Safety & Security
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                Your Safety is
                <span className="text-primary block">Our Priority</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Advanced security measures, verification systems, and safety tools designed to protect you while you
                find meaningful connections.
              </p>
            </div>

            <div className="flex items-center justify-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Verified Profiles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Safety Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Less than 1 minute</div>
                <div className="text-sm text-muted-foreground">Report Response</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Advanced Security Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Multi-layered protection systems working around the clock to keep you safe.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {securityFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    activeFeature === index ? "border-primary shadow-lg" : "hover:border-primary/50"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                          <Badge variant={feature.status === "Active" ? "default" : "secondary"} className="text-xs">
                            {feature.status}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="relative">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    {(() => {
                      const IconComponent = securityFeatures[activeFeature].icon
                      return <IconComponent className="h-6 w-6 text-primary" />
                    })()}
                    <span>{securityFeatures[activeFeature].title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{securityFeatures[activeFeature].details}</p>
                  <div className="flex items-center space-x-2 text-sm text-primary">
                    <CheckCircle className="h-4 w-4" />
                    <span>Status: {securityFeatures[activeFeature].status}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Tools Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Safety Tools at Your Fingertips</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful tools to help you stay safe and in control of your dating experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyTools.map((tool, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                    {tool.icon && (
                      <tool.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{tool.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Tips Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Safety Tips & Guidelines</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Essential safety tips to help you navigate online dating confidently and securely.
            </p>
          </div>

          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="profile">Profile Safety</TabsTrigger>
              <TabsTrigger value="communication">Communication</TabsTrigger>
              <TabsTrigger value="meeting">Meeting Safety</TabsTrigger>
            </TabsList>

            {safetyTips.map((category, categoryIndex) => (
              <TabsContent
                key={categoryIndex}
                value={category.category.toLowerCase().replace(" ", "")}
                className="space-y-6"
              >
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.tips.map((tip, tipIndex) => (
                        <div key={tipIndex} className="flex items-start space-x-3 p-4 bg-accent/20 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <p className="text-muted-foreground leading-relaxed">{tip}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">What Our Users Say</h2>
            <p className="text-xl text-muted-foreground">Real feedback about our safety and security measures</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-primary">{testimonial.role}</span>
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-foreground">- {testimonial.name}</div>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Safety Team Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">24/7 Trust & Safety Team</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Our dedicated safety experts work around the clock to monitor the platform and respond to reports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <Clock className="h-12 w-12 mx-auto opacity-90" />
              <div className="text-2xl font-bold">24/7</div>
              <div className="opacity-75">Monitoring</div>
            </div>
            <div className="space-y-2">
              <Users className="h-12 w-12 mx-auto opacity-90" />
              <div className="text-2xl font-bold">50+</div>
              <div className="opacity-75">Safety Experts</div>
            </div>
            <div className="space-y-2">
              <FileText className="h-12 w-12 mx-auto opacity-90" />
              <div className="text-2xl font-bold">Less than 1 minute</div>
              <div className="opacity-75">Response Time</div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-lg opacity-90">Need to report something or have safety concerns?</p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              Contact Safety Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
