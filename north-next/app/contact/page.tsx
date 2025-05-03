"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Message sent! We'll contact you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full h-[300px] overflow-hidden">
        <Image
          src="/placeholder.svg?height=600&width=1200&text=CONTACT US"
          alt="Contact us banner"
          width={1200}
          height={600}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">CONTACT US</h1>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Message sent. We'll contact you soon.</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Your Email</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full md:w-auto">
                SEND
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-gray-700 mb-6">
                We'd love to hear from you! Whether you have a question about our products, need help with an order, or
                want to collaborate, our team is here to help.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-gray-600">123 Fashion Street, Design District, City, 10001</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-gray-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-gray-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">contact@northstar.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Store Hours</h3>
              <div className="grid grid-cols-2 gap-2 text-gray-700">
                <div>Monday - Friday</div>
                <div>9:00 AM - 8:00 PM</div>
                <div>Saturday</div>
                <div>10:00 AM - 6:00 PM</div>
                <div>Sunday</div>
                <div>11:00 AM - 5:00 PM</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto w-full bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">Our Locations</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["New York", "Los Angeles", "Chicago"].map((city) => (
            <div key={city} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-3">{city} Store</h3>
              <p className="text-gray-600 mb-2">123 Fashion Ave, {city}</p>
              <p className="text-gray-600 mb-2">+1 (555) 123-4567</p>
              <p className="text-gray-600">{city.toLowerCase()}@northstar.com</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
