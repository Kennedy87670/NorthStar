import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">NORTHSTAR</h3>
            <p className="text-gray-600 text-sm">
              Premium clothing for the modern individual. Quality, style, and sustainability in every piece.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/category/men" className="text-gray-600 hover:text-gray-900 text-sm">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/category/women" className="text-gray-600 hover:text-gray-900 text-sm">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/category/accessories" className="text-gray-600 hover:text-gray-900 text-sm">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/category/new-arrivals" className="text-gray-600 hover:text-gray-900 text-sm">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/category/sale" className="text-gray-600 hover:text-gray-900 text-sm">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-gray-900 text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900 text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-gray-600 hover:text-gray-900 text-sm">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-600 mr-2 mt-0.5" />
                <span className="text-gray-600 text-sm">123 Fashion Street, Design District, City, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-600 mr-2" />
                <span className="text-gray-600 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gray-600 mr-2" />
                <span className="text-gray-600 text-sm">contact@northstar.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="font-semibold">Subscribe to our newsletter</h3>
              <div className="flex gap-2">
                <Input placeholder="Your email address" className="max-w-xs" />
                <Button>Subscribe</Button>
              </div>
            </div>

            <div className="text-sm text-gray-600 md:text-right">
              <p>© {new Date().getFullYear()} Northstar. All rights reserved.</p>
              <div className="flex gap-4 mt-2 md:justify-end">
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="hover:underline">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
