"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Users,
  MessageCircle,
  Camera,
  Heart,
  Zap,
  Globe,
  Lock,
  Star,
  Smartphone,
  Download,
  Play,
} from "lucide-react"

export default function AppInfoPage() {
  const features = [
 
    {
      icon: Users,
      title: "Profile Matching",
      description: "Our intelligent algorithms help match users based on compatibility, making it easier to find people who align with your preferences and lifestyle.",
      color: "text-blue-500",
    },
    {
      icon: Lock,
      title: "Subscription Services",
      description: "Viraag offers premium features for users who want to enhance their dating experience. Premium members can unlock more detailed profiles, priority match suggestions, and additional communication tools.",
      color: "text-gray-500",
    },
    {
      icon: MessageCircle,
      title: "Meaningful Conversations",
      description: "Conversation starters, icebreakers, and guided prompts for deeper connections.",
      color: "text-purple-500",
    },
    {
      icon: Camera,
      title: "Video Dating",
      description: "Safe video calls within the app before meeting in person.",
      color: "text-red-500",
    },
    {
      icon: Heart,
      title: "Relationship Goals",
      description: "Filter matches based on what you're looking for - casual, serious, or marriage.",
      color: "text-pink-500",
    },
    {
      icon: Zap,
      title: "Instant Notifications",
      description: "Real-time alerts for matches, messages, and profile views.",
      color: "text-yellow-500",
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Connect with people worldwide or find matches in your local area.",
      color: "text-indigo-500",
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Photo verification, background checks, and secure messaging to keep you safe.",
      color: "text-green-500",
    },
   
  ]

  const howItWorks = [
    {
      step: "1",
      title: "Create Your Profile",
      description: "Add photos, write about yourself, and set your preferences.",
      icon: Users,
    },
    {
      step: "2",
      title: "Get Matched",
      description: "Our AI finds compatible people based on your interests and values.",
      icon: Heart,
    },
    {
      step: "3",
      title: "Start Chatting",
      description: "Break the ice with conversation starters and meaningful questions.",
      icon: MessageCircle,
    },
    {
      step: "4",
      title: "Meet Safely",
      description: "Video chat first, then meet in public places when you're ready.",
      icon: Camera,
    },
  ]

  const stats = [
    { number: "500k+", label: "Active Users" },
    { number: "100K+", label: "Successful Matches" },
    { number: "4.9", label: "App Store Rating" },
    { number: "15+", label: "Countries" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-slide-in-up">
            <div className="space-y-4">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium">
                Dating App Information
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                Meet the
                <span className="text-primary block">ViraagApp</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Viraag is a dedicated platform designed to help users find love and create lasting relationships through meaningful matchmaking. The app provides a range of features that enable users to connect, communicate, and build relationships based on shared values and interests.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <Download className="mr-2 h-5 w-5" />
                Download for iOS
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Get on Android
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-primary">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for a safe, enjoyable, and successful dating experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/20 cursor-pointer"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300`}
                    >
                      <feature.icon
                        className={`h-6 w-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}
                      />
                    </div>
                    <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four simple steps to finding your perfect match on Viraag.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative group">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <step.icon className="h-4 w-4 text-accent-foreground" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Screenshots Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">App Interface</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Take a look at our beautiful, intuitive interface designed for the best user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Profile Creation",
                description: "Easy setup with photo verification and detailed preferences.",
                image: "/app-screenshot-profile.png",
              },
              {
                title: "Smart Matching",
                description: "Swipe through carefully curated matches based on compatibility.",
                image: "/app-screenshot-matching.png",
              },
              {
                title: "Secure Messaging",
                description: "Safe, encrypted conversations with built-in video calling.",
                image: "/app-screenshot-chat.png",
              },
            ].map((screenshot, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={screenshot.image || "/placeholder.svg"}
                    alt={screenshot.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{screenshot.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{screenshot.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Start Your Journey?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Download Viraagday and join millions of singles finding meaningful relationships.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Smartphone className="mr-2 h-5 w-5" />
              Download for iOS
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
            >
              <Play className="mr-2 h-5 w-5" />
              Get on Android
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-4 pt-4">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-300 fill-current" />
              ))}
            </div>
            <span className="text-lg font-medium">4.9/5 Rating</span>
            <span className="text-sm opacity-75">Based on 50K+ reviews</span>
          </div>
        </div>
      </section>
    </div>
  )
}
