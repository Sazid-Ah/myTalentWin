"use client"

import BannerSlider from "@/components/BannerSlider"
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
        <div className="absolute inset-0 bg-[url('/abstract-heart-pattern.png')] bg-no-repeat bg-cover opacity-20"></div>
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
                  className="bg-primary cursor-pointer hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl animate-pulse-glow"
                >
                  Start Dating Now
                </Button>
               <Link href='/app-info'> <Button
                  variant="outline"
                  size="lg"
                  className="border-primary cursor-pointer text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  Learn More
                </Button></Link>
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

{/* <BannerSlider /> */}

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

<section className="relative py-24 overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Decorative Heart Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 opacity-30 animate-pulse">
        <Image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23f43f5e'%3E%3Cpath d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/%3E%3C/svg%3E" alt="heart" width={80} height={80} />
      </div>
      <div className="absolute bottom-10 right-10 w-16 h-16 opacity-30 animate-pulse delay-500">
        <Image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a78bfa'%3E%3Cpath d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/%3E%3C/svg%3E" alt="heart" width={64} height={64} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-primary tracking-tight drop-shadow-md">
          Find Love with Viraag: Start with Video Tutorials
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Get started with the Viraag Dating & Matrimony App and unlock a world of meaningful connections. Follow our simple guide to spark your love story!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Content Section (Steps) */}
          <div className="space-y-8">
            <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-2xl font-semibold text-rose-600 mb-4">Craft Your Perfect Profile</h3>
              <p className="text-gray-600 leading-relaxed">
                Sign up in seconds with your email or phone. Add vibrant photos and share your passions to attract the right match.
              </p>
            </div>
            <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">Discover Your Match</h3>
              <p className="text-gray-600 leading-relaxed">
                Explore profiles with our smart filters. Swipe, like, and start chatting with potential partners who share your vibe.
              </p>
            </div>
            <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-2xl font-semibold text-pink-600 mb-4">Connect & Fall in Love</h3>
              <p className="text-gray-600 leading-relaxed">
                Chat securely, plan romantic dates, and build lasting connections with our trusted platform.
              </p>
            </div>
          </div>

          {/* Video Embed Section */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl lg:sticky lg:top-20">
            <div className="absolute inset-0 border-4 border-dashed border-rose-300/50 z-10"></div>
            <iframe
              className="w-full h-64 md:h-80 lg:h-[500px]"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual Viraag guide video URL
              title="Viraag App Guide Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-rose-500/20 to-transparent"></div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="#download"
            className="inline-block bg-[#ab110f] text-white font-semibold px-8 py-4 rounded-full hover:bg-rose-700 hover:scale-105 transition-all duration-300 shadow-md"
          >
            Download App Now
          </a>
        </div>
      </div>
    </section>

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
          <Link href='\app-info'>
          <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
            >
              <Link href="/app-info">Learn More</Link>
            </Button></Link>
          </div>
        </div>
      </section>
    </div>
  )
}
