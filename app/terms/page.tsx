"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { FileText, Users, Shield, AlertTriangle, Scale, Gavel } from "lucide-react"

export default function TermsPage() {
  const termsSections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: FileText,
      content: `By accessing or using MyTalentWin, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our service.

These terms constitute a legally binding agreement between you and MyTalentWin. We may update these terms from time to time, and your continued use of the service constitutes acceptance of any changes.

You must be at least 18 years old to use our service. By using MyTalentWin, you represent and warrant that you meet this age requirement.`,
    },
    {
      id: "user-conduct",
      title: "User Conduct and Responsibilities",
      icon: Users,
      content: `As a user of MyTalentWin, you agree to:

• Provide accurate and truthful information in your profile
• Use the service only for its intended purpose of meeting people
• Respect other users and communicate in a civil manner
• Not engage in harassment, abuse, or inappropriate behavior
• Not share explicit or inappropriate content
• Not use the service for commercial purposes
• Not create fake profiles or impersonate others
• Report any violations of these terms

Violation of these conduct rules may result in suspension or termination of your account.`,
    },
    {
      id: "privacy-safety",
      title: "Privacy and Safety",
      icon: Shield,
      content: `Your safety and privacy are our top priorities:

• We implement photo verification and profile screening
• We provide tools to block and report inappropriate users
• We use encryption to protect your communications
• We never share your personal information without consent
• We provide safety tips and guidelines for meeting in person
• We have a dedicated safety team to address concerns

Please review our Privacy Policy for detailed information about how we handle your personal data.`,
    },
    {
      id: "prohibited-activities",
      title: "Prohibited Activities",
      icon: AlertTriangle,
      content: `The following activities are strictly prohibited on MyTalentWin:

• Creating fake or misleading profiles
• Harassment, bullying, or threatening behavior
• Sharing explicit, inappropriate, or illegal content
• Soliciting money or engaging in commercial activities
• Spamming or sending unsolicited messages
• Using automated tools or bots
• Attempting to hack or compromise the platform
• Violating any applicable laws or regulations

Engaging in prohibited activities may result in immediate account termination and legal action.`,
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property Rights",
      icon: Scale,
      content: `MyTalentWinand its content are protected by intellectual property laws:

• The MyTalentWinapp, website, and all related content are owned by us
• You retain ownership of content you upload (photos, messages, etc.)
• By uploading content, you grant us a license to use it for service operation
• You may not copy, modify, or distribute our proprietary content
• Respect the intellectual property rights of other users
• Report any copyright infringement to our legal team

We respect intellectual property rights and expect our users to do the same.`,
    },
    {
      id: "limitation-liability",
      title: "Limitation of Liability",
      icon: Gavel,
      content: `MyTalentWinprovides the platform "as is" and makes no warranties:

• We do not guarantee that you will find a match or relationship
• We are not responsible for the actions of other users
• We cannot guarantee the accuracy of user-provided information
• We are not liable for any damages arising from use of the service
• Our liability is limited to the amount you paid for the service
• Some jurisdictions may not allow these limitations

You use the service at your own risk and agree to hold us harmless from claims arising from your use of the platform.`,
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-12 animate-slide-in-up">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium">
            Legal Agreement
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground">Terms & Conditions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before using MyTalentWin. They govern your use of our dating platform and
            services.
          </p>
          <div className="text-sm text-muted-foreground">Last updated: August 17, 2025</div>
        </div>

        {/* Key Points Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">User Responsibilities</h3>
              <p className="text-muted-foreground text-sm">
                Be respectful, honest, and follow our community guidelines.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Safety First</h3>
              <p className="text-muted-foreground text-sm">
                We prioritize your safety with verification and reporting tools.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Scale className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Fair Usage</h3>
              <p className="text-muted-foreground text-sm">Use our platform responsibly and respect others' rights.</p>
            </CardContent>
          </Card>
        </div>

        {/* Terms Content */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Terms and Conditions Details</CardTitle>
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
            <a href="mailto:legal@MyTalentWin.com" className="text-primary hover:underline">
              legal@MyTalentWin.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
