import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <Image
          src="/placeholder.svg?height=1200&width=2000"
          alt="Fashion hero image"
          width={2000}
          height={1200}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-8 md:p-16">
          <h1 className="text-white text-4xl md:text-5xl font-bold max-w-md mb-4">START YOUR NEW STYLE JOURNEY</h1>
          <p className="text-white/90 text-lg max-w-md mb-8">
            Discover the latest trends and express your unique style with our premium collection
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-white/90">
              SHOP NOW
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              LEARN MORE
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <h2 className="text-2xl font-bold mb-8">Discover Our Collection</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Men", "Women", "Accessories", "Footwear"].map((category) => (
            <Link
              href={`/category/${category.toLowerCase()}`}
              key={category}
              className="group relative h-64 overflow-hidden rounded-md"
            >
              <Image
                src={`/placeholder.svg?height=500&width=400&text=${category}`}
                alt={category}
                width={400}
                height={500}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                <span className="text-white font-medium text-lg">{category}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Top Sellers */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto w-full bg-gray-50">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Top Sellers</h2>
          <Link href="/products" className="text-sm font-medium flex items-center gap-1 hover:underline">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Classic White Tee", price: "$29.99" },
            { name: "Slim Fit Jeans", price: "$59.99" },
            { name: "Casual Jacket", price: "$89.99" },
            { name: "Summer Dress", price: "$49.99" },
          ].map((product, index) => (
            <Link href={`/product/${index + 1}`} key={index} className="group">
              <div className="relative h-80 mb-3 overflow-hidden rounded-md">
                <Image
                  src={`/placeholder.svg?height=600&width=500&text=Product ${index + 1}`}
                  alt={product.name}
                  width={500}
                  height={600}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Add to cart
                </Button>
              </div>
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-sm text-gray-700">{product.price}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-6">
        <div className="relative h-64 overflow-hidden rounded-md">
          <Image
            src="/placeholder.svg?height=500&width=800&text=STYLE OF WEEK"
            alt="Style of the week"
            width={800}
            height={500}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-center p-8">
            <h3 className="text-white text-2xl font-bold mb-2">STYLE OF WEEK</h3>
            <p className="text-white/90 mb-4">Discover our curated selection</p>
            <Button className="w-fit" variant="outline">
              SHOP NOW
            </Button>
          </div>
        </div>
        <div className="relative h-64 overflow-hidden rounded-md">
          <Image
            src="/placeholder.svg?height=500&width=800&text=BUY 1 GET 1 FREE"
            alt="Special offer"
            width={800}
            height={500}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-center p-8">
            <h3 className="text-white text-2xl font-bold mb-2">BUY 1 GET 1 FREE</h3>
            <p className="text-white/90 mb-4">Limited time offer</p>
            <Button className="w-fit" variant="outline">
              SHOP NOW
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <Link href={`/product/${index + 5}`} key={index} className="group">
              <div className="relative h-80 mb-3 overflow-hidden rounded-md">
                <Image
                  src={`/placeholder.svg?height=600&width=500&text=Product ${index + 5}`}
                  alt={`Featured product ${index + 1}`}
                  width={500}
                  height={600}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium">Product Name {index + 5}</h3>
              <p className="text-sm text-gray-700">${(Math.random() * 50 + 20).toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
