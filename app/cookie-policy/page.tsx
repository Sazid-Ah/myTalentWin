"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Cookie } from "lucide-react"

export default function TermsPage() {
  const termsSections = [
    {
      id: "What-is-cookies",
      title: "What is Cookies?",
      icon: Cookie,
      content: `Cookies are defined as small files, which are sent to-from the web browsers via memory of your device.
      Cookie might have name of domain, from where the cookie might have been originated, the lifetime of the
      cookie (i.e when it will expire), and it will generate one random unique or similar identifier. A Cookie might
      have some information about the device you are using, like browsing history, user settings and some activities
      conducted while using our services.`,
    },
    {
      id: "types",
      title: "What are the different types and forms of Cookies",
      icon: Cookie,
      content: `• There are first and third party cookies. The first party ones are placed on the device, directly from our part. For
      ex, these first party cookies are used to adapt to language preferences of the browser or to better understand
      your usage of the website. On the other hand, we have third party cookies, placed on devices by service
      providers and our partners. The third party cookies are mainly used for measuring user numbers on our website
      or just to enable you to share content with others across multiple social media platforms. We have Persistent
      and Session cookies, for you. Session cookies till you close the browser. It is also used for many reasons, such
      as to learn about user session and also helping you to use the website in more efficient manner. The Persistent
      ones will have longer lifespan and wont delete whenever closing browser. Such cookies are mostly used for
      helping you to sign right in and for analytical purposes.

• Other web beacons and tracking technologies as used:
Web beacons (called pixels or gifs), tracking URLs or SDKs are mainly used for same purposes. Web beacons
are mainly tiny graphic files having unique identifiers to recognize someone who has visited our services we
offer or has opened any email that we sent them. On the other hand, there are tracking URLs, noted mostly
as customized generated links that help us understand the flow of traffic that our website gets. SDKs, on the
other hand, are smaller code pieces added in apps, working more like web beacons and cookies

For simplicity we consider these technologies as “cookies” in the cookie policy.`,
    },
    {
      id: "reason",
      title: "Cookies Using Reason",
      icon: Cookie,
      content: `Just like any other online services, cookies are used for securing, and providing the services we offer. It will include
      remembering preferences, recognizing user while visiting website after first time and personalizing and tailoring ads
      matching up to your needs. For getting hands on these services, we might link info from other cookies with personal
      info about you.

        • Whenever you use our website or apps, there might be some or other cookies presented to your device
        • Essential web cookies, analytics cookies, cookies for advertisements, cookies for social networking.`,
    },
    {
      id: "manage-cookies",
      title: "How to Manage Cookies?",
      icon: Cookie,
      content: `? Cookies can be managed in several ways. Please note that the changes you
      make to cookie preferences may make browsing our website a less satisfying experience. In some instances,
      you may be able to use all parts of the website.
      
      Devices manage and browser:
      Some browsers offer you with settings to control or even reject cookies or might alert you whenever any
      cookie is placed on your device. These cookie management processes are a bit different for every internet
      browser. Make sure to find the steps in the selected browser help menu.
      You can also reset device identifiers by just switching from your mobile settings. This process is a bit
      different for every device and you can find the steps in settings menu for more details.

      INTERNET RELATED AD TOOLS:
      You can opt out of seeing interest based advertising from participating through Interactive Digital
      Advertising Alliance, Appchoices (apps only) or Digital Advertising Alliance.

      Opting out will not mean that you won’t see the ads. It means you won’t get personalized ads from companies,
      participating in such programs. If you delete cookies, you have to opt out again.
      `,
    },
    {
      id: "Social-related-cookies",
      title: "Social related cookies",
      icon: Cookie,
      content: `To share content on social media, some website features might use social media based plugins. Based on the
      account settings, we will receive info automatically from social media platforms while using corresponding
      button on site. You can refer to the respective social media’s privacy and cookie policies for more details.`,
    },
    {
      id: "Cookies-from-Google",
      title: "Cookies from Google",
      icon: Cookie,
      content: `We use Google Analytics, which is a Google services which uses cookies and other
      data collecting technologies to collect information use of the website and services in order to share usage
      trends.`,
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-12 animate-slide-in-up">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium">
            All About Cookies
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground">Cookie Policy</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Viraag, believe in being clear and open about how we collect and process data about you. This
page is designed to inform you about our practices regarding cookies and explain to you how you
can manage them. <br />
This policy is all about cookies, the types available on the device you will be using while visiting this site and
how our team uses them.

          </p>
          <div className="text-sm text-muted-foreground">Last updated: August 17, 2025</div>
        </div>

        {/* Terms Content */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Cookie Policy Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {termsSections.map((section) => (
                <AccordionItem key={section.id} value={section.id} className="border-border">
                  <AccordionTrigger className="text-left hover:text-primary transition-colors duration-300">
                    <div className="flex items-center space-x-3">
                      <section.icon className="h-5 w-5 text-primary" />
                      <span className="font-semibold">{section.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed whitespace-pre-line pt-4">
                    {section.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <div className="mt-12 text-center space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Questions About Our Terms?</h2>
          <p className="text-muted-foreground">
            Contact our legal team at{" "}
            <a href="mailto:support@theviraag.com" className="text-primary hover:underline">
                support@theviraag.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
