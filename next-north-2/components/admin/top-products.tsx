"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

interface Product {
  id: number
  name: string
  image: string
  price: number
  sold: number
  stock: number
}

// Generate mock products data
const generateProducts = (): Product[] => {
  const products = [
    { name: "Classic White Tee", price: 29.99 },
    { name: "Slim Fit Jeans", price: 59.99 },
    { name: "Casual Jacket", price: 89.99 },
    { name: "Summer Dress", price: 49.99 },
    { name: "Leather Boots", price: 129.99 },
  ]

  return products.map((product, index) => ({
    id: index + 1,
    name: product.name,
    image: `/placeholder.svg?height=600&width=500&text=Product ${index + 1}`,
    price: product.price,
    sold: Math.floor(Math.random() * 100) + 20,
    stock: Math.floor(Math.random() * 50) + 5,
  }))
}

export function TopProducts() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    setProducts(generateProducts().sort((a, b) => b.sold - a.sold))
  }, [])

  return (
    <div className="space-y-4">
      {products.map((product) => (
        <div key={product.id} className="flex items-center gap-4 border-b pb-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-md">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>
          <div className="flex-1">
            <p className="font-medium">{product.name}</p>
            <p className="text-sm text-muted-foreground">${product.price.toFixed(2)}</p>
          </div>
          <div className="text-right">
            <p className="font-medium">{product.sold} sold</p>
            <p className="text-sm text-muted-foreground">{product.stock} in stock</p>
          </div>
        </div>
      ))}
      <Button variant="outline" className="w-full" asChild>
        <Link href="/admin/products">View All Products</Link>
      </Button>
    </div>
  )
}
