"use client"

import TestimonialSlider from "@/components/testimonial"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Star, MessageCircle, Camera } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5 py-20 lg:pb-32">
        <div className="absolute inset-0 bg-[url('/abstract-heart-pattern.png')] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-up">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Find Your
                  <span className="text-primary block animate-float">Perfect Match</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Connect with meaningful relationships in a safe, modern dating environment designed for genuine
                  connections.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl animate-pulse-glow"
                >
                  Start Dating Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  Learn More
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2M+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500K+</div>
                  <div className="text-sm text-muted-foreground">Matches Made</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">4.9★</div>
                  <div className="text-sm text-muted-foreground">App Rating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 animate-float">
                <img
                  src="/modern-dating-app-mockup.png"
                  alt="ViraagApp Interface"
                  className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl transform scale-110"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Why Choose Viraag?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience dating reimagined with cutting-edge features designed for meaningful connections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Safe & Secure",
                description: "Advanced verification and privacy protection for your peace of mind.",
              },
              {
                icon: Users,
                title: "Smart Matching",
                description: "AI-powered algorithm finds your most compatible matches.",
              },
              {
                icon: MessageCircle,
                title: "Meaningful Chats",
                description: "Conversation starters and icebreakers for genuine connections.",
              },
              {
                icon: Camera,
                title: "Video Dating",
                description: "Safe video calls before meeting in person.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/20"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Success Stories</h2>
            <p className="text-xl text-muted-foreground">Real couples who found love through Viraag</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah & Mike",
                story:
                  "We matched on Viraagand had our first video date the same week. Six months later, we're planning our wedding!",
                rating: 5,
              },
              {
                name: "Jessica & David",
                story:
                  "The smart matching really works. We have so much in common and the conversation flows naturally.",
                rating: 5,
              },
              {
                name: "Emma & Chris",
                story:
                  "I felt safe using the app with all the verification features. Found my soulmate within a month!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">"{testimonial.story}"</p>
                  <div className="font-semibold text-foreground">- {testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-16 px-6 bg-white">
  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-6xl mx-auto">
    
    {/* Image Section */}
    <div className="flex justify-center md:justify-start">
      <Image 
        src="/love-stories.png" 
        alt="love-stories" 
        height={300} 
        width={800} 
        className=""
      />
    </div>
    
    {/* Text Section */}
    <div className="space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Real love stories last forever
      </h2>
      <span className="block text-lg text-primary font-medium">
        More than 10,000 stories have started on Viraag**
      </span>
      <span className="block text-lg text-gray-700">
        Our favorite stories to read? Without hesitation, yours!
      </span>
      <p className="text-gray-600 leading-relaxed">
        Each meeting told with your own words is unique, funny, and moving. 
        They are proof that online dating between singles can truly turn into 
        real stories that happen every day on Viraag.
      </p>
      <button className="cursor-pointer px-8 rounded-lg py-2 bg-primary text-white">Start Now</button>

    </div>

  </div>
      </section>

<TestimonialSlider/>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">Ready to Find Your Perfect Match?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join millions of singles who trust Viraag to find meaningful relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              Download App
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
            >
              <Link href="/app-info">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
