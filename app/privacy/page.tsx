"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Shield, Eye, Lock, Database, Users, Mail } from "lucide-react"

export default function PrivacyPolicyPage() {
  const privacySections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: Database,
      content: `We collect information you provide directly to us, such as when you create an account, update your profile, or communicate with other users. This includes:

• Personal information (name, email, phone number, date of birth)
• Profile information (photos, bio, interests, preferences)
• Location data (with your permission)
• Communication data (messages, video calls)
• Usage data (app interactions, features used)

We also collect information automatically through your use of our services, including device information, log data, and cookies.`,
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      icon: Users,
      content: `We use the information we collect to:

• Provide and maintain our dating services
• Match you with compatible users based on preferences
• Facilitate communication between users
• Improve our algorithms and user experience
• Send you notifications and updates
• Ensure safety and security on our platform
• Comply with legal obligations
• Prevent fraud and abuse

We never sell your personal information to third parties for marketing purposes.`,
    },
    {
      id: "information-sharing",
      title: "Information Sharing and Disclosure",
      icon: Eye,
      content: `We may share your information in the following circumstances:

• With other users as part of the dating service (profile information)
• With service providers who help us operate our platform
• For legal compliance or to protect rights and safety
• In connection with a business transaction (merger, acquisition)
• With your explicit consent

We implement strict controls to ensure your information is only shared when necessary and appropriate.`,
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: Lock,
      content: `We take data security seriously and implement various measures to protect your information:

• Encryption of data in transit and at rest
• Regular security audits and assessments
• Access controls and authentication systems
• Secure data centers and infrastructure
• Employee training on data protection
• Incident response procedures

While we strive to protect your information, no method of transmission over the internet is 100% secure.`,
    },
    {
      id: "user-rights",
      title: "Your Rights and Choices",
      icon: Shield,
      content: `You have several rights regarding your personal information:

• Access: Request a copy of your personal data
• Correction: Update or correct inaccurate information
• Deletion: Request deletion of your account and data
• Portability: Receive your data in a portable format
• Objection: Object to certain processing activities
• Restriction: Request limitation of processing

You can exercise these rights through your account settings or by contacting our support team.`,
    },
    {
      id: "contact-info",
      title: "Contact Information",
      icon: Mail,
      content: `If you have questions about this Privacy Policy or our data practices, please contact us:

Email: privacy@MyTalentWin.com
Address: Indore, 452012
Phone: +91 0000000000

Our Data Protection Officer is available to address any concerns about your privacy rights.`,
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
            information on MyTalentWin.
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
            <a href="mailto:privacy@MyTalentWin.com" className="text-primary hover:underline">
              privacy@MyTalentWin.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
