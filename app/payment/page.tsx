"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Shield, RefreshCw, HelpCircle, DollarSign, Calendar } from "lucide-react"

export default function PaymentPolicyPage() {
  const paymentSections = [
    {
      id: "subscription-plans",
      title: "Subscription Plans and Pricing",
      icon: DollarSign,
      content: `MyTalentWinoffers several subscription options to enhance your dating experience:

**Free Plan:**
• Basic profile creation and browsing
• Limited daily likes and matches
• Basic messaging features

**Premium Plan ($19.99/month):**
• Unlimited likes and super likes
• See who liked your profile
• Advanced filters and preferences
• Priority customer support

**Premium Plus ($29.99/month):**
• All Premium features
• Boost your profile visibility
• Read receipts for messages
• Video calling features
• Incognito mode

All prices are in USD and may vary by region. Subscription fees are charged monthly unless you choose an annual plan.`,
    },
    {
      id: "payment-methods",
      title: "Accepted Payment Methods",
      icon: CreditCard,
      content: `We accept the following payment methods for your convenience:

• Credit Cards (Visa, Mastercard, American Express, Discover)
• Debit Cards with Visa or Mastercard logos
• PayPal
• Apple Pay (iOS devices)
• Google Pay (Android devices)
• Bank transfers (select regions)

All payments are processed securely through our certified payment partners. We do not store your complete payment information on our servers.

Payment information is encrypted and processed in compliance with PCI DSS standards.`,
    },
    {
      id: "billing-renewal",
      title: "Billing and Auto-Renewal",
      icon: Calendar,
      content: `Important information about billing and renewals:

• Subscriptions automatically renew at the end of each billing period
• You will be charged the current subscription rate at renewal
• Renewal charges occur 24 hours before the subscription expires
• You can cancel auto-renewal at any time in your account settings
• Cancellation takes effect at the end of the current billing period
• No partial refunds for unused portions of subscription periods

You will receive email notifications before each renewal charge. Make sure to keep your payment information up to date to avoid service interruption.`,
    },
    {
      id: "refund-policy",
      title: "Refund and Cancellation Policy",
      icon: RefreshCw,
      content: `Our refund policy is designed to be fair and transparent:

**Refund Eligibility:**
• Technical issues preventing service use
• Unauthorized charges (report within 30 days)
• Accidental purchases (request within 48 hours)

**Non-Refundable Situations:**
• Change of mind after using premium features
• Inability to find matches (dating success not guaranteed)
• Violation of terms leading to account suspension

**Refund Process:**
• Contact support with your refund request
• Provide order details and reason for refund
• Refunds processed within 5-10 business days
• Refunds issued to original payment method

To cancel your subscription, go to Account Settings > Subscription Management.`,
    },
    {
      id: "security-fraud",
      title: "Payment Security and Fraud Protection",
      icon: Shield,
      content: `We take payment security seriously and implement multiple protection measures:

**Security Measures:**
• SSL encryption for all payment transactions
• PCI DSS compliant payment processing
• Fraud detection and monitoring systems
• Secure tokenization of payment data
• Regular security audits and updates

**Fraud Protection:**
• Real-time transaction monitoring
• Suspicious activity alerts
• Account verification requirements
• Chargeback protection for merchants

**If You Suspect Fraud:**
• Contact us immediately at billing@MyTalentWin.com
• Change your account password
• Review your payment statements
• Report unauthorized charges to your bank

We will investigate all fraud reports promptly and take appropriate action.`,
    },
    {
      id: "billing-support",
      title: "Billing Support and FAQ",
      icon: HelpCircle,
      content: `Common billing questions and how to get help:

**Frequently Asked Questions:**

Q: Why was I charged after canceling?
A: Cancellations take effect at the end of the current billing period.

Q: Can I get a refund if I don't find matches?
A: We cannot guarantee dating success, so this is not grounds for a refund.

Q: How do I update my payment information?
A: Go to Account Settings > Payment Methods to update your details.

Q: What happens if my payment fails?
A: We'll retry the payment and send you notifications to update your payment method.

**Contact Billing Support:**
• Email: billing@MyTalentWin.com
• Phone: +1 (555) 123-4567
• Live Chat: Available 24/7 in the app
• Response time: Within 24 hours

Our billing support team is here to help with any payment-related questions or issues.`,
    },
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
            <a href="mailto:billing@MyTalentWin.com" className="text-primary hover:underline">
              billing@MyTalentWin.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
