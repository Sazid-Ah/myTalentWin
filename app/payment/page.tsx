"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Shield, RefreshCw, HelpCircle, DollarSign, Calendar } from "lucide-react"

export default function PaymentPolicyPage() {
  const paymentSections = [
    {
      id: "payment-methods",
      title: "Payment Methods",
      icon: DollarSign,
      content: `Multiple Payment Options:Viraag supports various:

**payment methods:**
• credit/debit cards
• UPI

**payment gateways:**
• Razorpay
• PayPal
• PhonePe`,
    },
    {
      id: "subscription-services",
      title: "Subscription Services",
      icon: CreditCard,
      content: `Viraag offers subscription-based services for features such as profile matching, chatting, voice and video calls. After subscribing, users gain access to exclusive features such as chatting with potential matches and participating in contests`,
    },
    {
      id: "security-of-payments",
      title: "Security of Payments",
      icon: Calendar,
      content: `All payment information is handled securely using industry-standard encryption technologies. Viraag ensures that transactions are processed safely to protect user data from unauthorized access.`,
    },
    {
      id: "Refunds",
      title: "Refunds",
      icon: RefreshCw,
      content: `No Refunds:Fees paid for joining contests, participating in matchmaking services, or any other feature are non-refundable. Users are encouraged to read the terms before making payments.`,
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-12 animate-slide-in-up">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium">
            Billing Information
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground">Payment Policy</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transparent information about our subscription plans, billing practices, and payment security measures.
          </p>
          <div className="text-sm text-muted-foreground">Last updated: August 17, 2025</div>
        </div>

        {/* Payment Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Secure Payments</h3>
              <p className="text-muted-foreground text-sm">All transactions are encrypted and PCI DSS compliant.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <RefreshCw className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Flexible Billing</h3>
              <p className="text-muted-foreground text-sm">Cancel anytime with transparent refund policies.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <HelpCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">24/7 Support</h3>
              <p className="text-muted-foreground text-sm">Our billing support team is always here to help.</p>
            </CardContent>
          </Card>
        </div>

        {/* Payment Policy Content */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Payment Policy Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {paymentSections.map((section) => (
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
          <h2 className="text-2xl font-bold text-foreground">Need Billing Help?</h2>
          <p className="text-muted-foreground">
            Our billing support team is available 24/7 at{" "}
            <a href="mailto:billing@Viraag.com" className="text-primary hover:underline">
              billing@Viraag.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
