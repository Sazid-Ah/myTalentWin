"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Shield, Eye, Lock, Database, Users, Mail, Airplay, Milestone, Columns } from "lucide-react"

export default function PrivacyPolicyPage() {
  const privacySections = [
    {
      id: "introduction",
      title: "Introduction",
      icon: Airplay,
      content: `• Viraag ("we," "us," or "our") is committed to protecting your privacy. This
    Privacy Policy outlines how we collect, use, and safeguard your personal data
    when you use our mobile app and website. Viraag offers dating services,
    subscription plans, This Privacy Policy applies to websites, apps, events and other
    services we operate under the viraag brand By using our services, you agree to this
    policy`
    },    
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: Database,
      content: `We collect the following types of information to provide and improve our services:
    
    • Personal Information: When you register or subscribe, we collect your name, email address, phone number, gender, live location, payment details, and profile information (e.g., interests, preferences). We may also collect data from third-party platforms (e.g., Facebook, Google, or Apple) when you sign in through them.  
    
    • Subscription Information: Data related to your subscription status, including start/end dates, and the services available to you (e.g., posting photos, chat, call, video call features).  
    
    • Usage Data: Information on how you interact with the app, such as profiles viewed, chats initiated, and features used.  
    
    • Location Data: With your consent, we collect location information to enhance your dating experience by matching you with nearby users.  
    
    • Device Information: Includes IP address, device type, and operating system details to improve performance and ensure security.  
    
    • Marketing, Survey, and Research Data: Information collected from your participation in surveys, feedback, or promotional activities to help us improve and personalize our services.`
    },    
    {
      id: "information-use",
      title: "How We Use Your Information",
      icon: Users,
      content: `We use the information we collect to:

• Dating and Matchmaking: We use your profile information and
preferences to help you find the best matches. Subscription-based
features such as chatting, calling, and video calls are unlocked for users
who subscribe to premium plans.

• Communication: We may use your email or phone number to communicate
about your account, subscription, or contest participation.

• Security and Improvement: We use data to enhance security, prevent fraud,
and improve the overall experience on Viraag.`,
    },
    {
      id: "information-sharing",
      title: "Information Sharing and Disclosure",
      icon: Eye,
      content: `We may share your information in the following circumstances:

• Third-Party Service Providers: We share your data with payment
processors, customer support services, and other necessary vendors

•  Legal Compliance: If required by law, we may disclose your
information to comply with legal obligations or to protect our rights
and safety.`,
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: Lock,
      content: `We take data security seriously and implement various measures to protect your information:

• We implement industry-standard security measures, including
encryption, to protect your personal information. However, no system
is completely secure, and we cannot guarantee the full security of your
data.`,
    },
    {
      id: "subscriptions-and-payments",
      title: "Subscriptions and Payments",
      icon: Shield,
      content: `• Subscription payments are processed through secure payment
gateways. Once a subscription fee is paid, it is non-refundable.
Subscription unlocks advanced features, such as profile visibility, chat,
call, and video call functionalities`,
    },
    {
      id: "user-rights",
      title: "Your Rights",
      icon: Milestone,
      content: `• Access and Update: You can access or update your personal information
      at any time in the app or website settings

      • Delete Account: You may request the deletion of your account and data.
      Some information may be retained for legal reasons
      `,
    },
    {
      id: "changes-to-this-policy",
      title: "Changes to This Policy",
      icon: Columns,
      content: `• We reserve the right to modify this Privacy Policy as needed. Any
      updates will be posted on our app and website.`,
    },
    {
      id: "contact-info",
      title: "Contact Information",
      icon: Mail,
      content: `If you have questions about this Privacy Policy or our data practices, please contact us:

      If you have any questions or concerns about our Privacy Policy, please
      contact us at Email : support@viraag.com`,
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-12 animate-slide-in-up">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium">
            Legal Information
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal
            information on Viraag.
          </p>
          <div className="text-sm text-muted-foreground">Last updated: August 17, 2025</div>
        </div>

        {/* Privacy Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Data Protection</h3>
              <p className="text-muted-foreground text-sm">
                We use industry-standard security measures to protect your personal information.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Transparency</h3>
              <p className="text-muted-foreground text-sm">We're clear about what data we collect and how we use it.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">User Control</h3>
              <p className="text-muted-foreground text-sm">
                You have full control over your data and privacy settings.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Privacy Policy Content */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Privacy Policy Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {privacySections.map((section) => (
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
          <h2 className="text-2xl font-bold text-foreground">Questions About Privacy?</h2>
          <p className="text-muted-foreground">
            Our privacy team is here to help. Contact us at{" "}
            <a href="mailto:support@viraag.com" className="text-primary hover:underline">
            support@viraag.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
