"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Minus, Plus, Share2, ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState("black")
  const [selectedSize, setSelectedSize] = useState("m")

  const productId = params.id
  const product = {
    name: "Plain T-Shirt",
    price: 29.99,
    description:
      "A comfortable and versatile plain t-shirt made from 100% organic cotton. Perfect for everyday wear and easy to style with any outfit.",
    colors: ["black", "white", "gray", "navy"],
    sizes: ["xs", "s", "m", "l", "xl"],
    rating: 4.5,
    reviews: 128,
    images: Array.from({ length: 5 }).map((_, i) => `/placeholder.svg?height=800&width=600&text=Image ${i + 1}`),
  }

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
              <Image
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-5 gap-2">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-md cursor-pointer border hover:border-gray-400"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
            </div>
            <p className="text-2xl font-semibold mb-6">${product.price.toFixed(2)}</p>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="font-medium mb-3">Color</h3>
                <RadioGroup value={selectedColor} onValueChange={setSelectedColor} className="flex gap-3">
                  {product.colors.map((color) => (
                    <div key={color} className="flex items-center space-x-2">
                      <RadioGroupItem value={color} id={`color-${color}`} className="peer sr-only" />
                      <Label
                        htmlFor={`color-${color}`}
                        className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <span className="capitalize">{color}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <h3 className="font-medium mb-3">Size</h3>
                <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="flex gap-3">
                  {product.sizes.map((size) => (
                    <div key={size} className="flex items-center space-x-2">
                      <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only" />
                      <Label
                        htmlFor={`size-${size}`}
                        className="flex h-10 w-10 flex-col items-center justify-center rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <span className="uppercase">{size}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <h3 className="font-medium mb-3">Quantity</h3>
                <div className="flex items-center">
                  <Button variant="outline" size="icon" onClick={decrementQuantity} disabled={quantity <= 1}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button variant="outline" size="icon" onClick={incrementQuantity}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="flex-1" size="lg">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="mr-2 h-5 w-5" />
                Add to Wishlist
              </Button>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700">{product.description}</p>

              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="py-6">
            <div className="space-y-4">
              <p>
                Our Plain T-Shirt is a wardrobe essential, crafted with care from 100% organic cotton for maximum
                comfort and durability. The classic fit and clean design make it versatile for any occasion, whether
                you're dressing up or keeping it casual.
              </p>
              <p>
                The breathable fabric ensures all-day comfort, while the reinforced stitching guarantees longevity.
                Available in a range of colors and sizes, this t-shirt is designed to suit every style preference.
              </p>
              <p>
                Ethically manufactured using sustainable practices, this t-shirt not only looks good but also helps
                reduce environmental impact. Each purchase supports our commitment to responsible fashion.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="details" className="py-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Materials</h3>
                  <p className="text-gray-700">100% Organic Cotton</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Fit</h3>
                  <p className="text-gray-700">Regular fit</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Care</h3>
                  <p className="text-gray-700">Machine wash cold, tumble dry low</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Country of Origin</h3>
                  <p className="text-gray-700">Ethically manufactured</p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="py-6">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-lg font-medium">{product.rating} out of 5</span>
              </div>

              <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="border-b pb-4">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-medium">Customer Name {i + 1}</h4>
                      <span className="text-gray-500 text-sm">
                        {new Date(Date.now() - i * 86400000 * 7).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex mb-2">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star
                          key={j}
                          className={`h-4 w-4 ${j < 5 - i ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700">
                      {i === 0
                        ? "Great quality t-shirt! The fabric is soft and comfortable, and the fit is perfect. Highly recommend!"
                        : i === 1
                          ? "Good t-shirt for the price. The color is exactly as shown in the pictures. I ordered a size up based on the size chart and it fits well."
                          : "Nice basic tee. The material is a bit thinner than I expected, but overall it's a good purchase. Fast shipping too!"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto w-full bg-gray-50">
        <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <Link href={`/product/${Number.parseInt(productId) + index + 1}`} key={index} className="group">
              <div className="relative h-80 mb-3 overflow-hidden rounded-md">
                <Image
                  src={`/placeholder.svg?height=600&width=500&text=Related ${index + 1}`}
                  alt={`Related product ${index + 1}`}
                  width={500}
                  height={600}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium">Related Product {index + 1}</h3>
              <p className="text-sm text-gray-700">${(Math.random() * 30 + 20).toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
