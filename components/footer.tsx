import Link from "next/link"
import { Heart, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
            <Image src='/logo.png' height={100} width={150} alt="Logo"/>           
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Connecting hearts and building meaningful relationships in the digital age.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="/app-info"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
              >
                App Info
              </Link>
              <Link
                href="/privacy"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">Legal</h3>
            <div className="space-y-2">
              <Link
                href="/payment"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
              >
                Payment Policy
              </Link>
              <Link
                href="/security"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
              >
                Security
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Mail className="h-4 w-4" />
                <span>hello@MyTalentWin.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Phone className="h-4 w-4" />
                <span>+91 0000000000</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4" />
                <span>Indore, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">© 2025 MyTalentWin. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
              >
                Terms
              </Link>
              <Link
                href="/security"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
              >
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
