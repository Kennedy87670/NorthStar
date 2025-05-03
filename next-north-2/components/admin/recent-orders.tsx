"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { format } from "date-fns"
import { Check, Clock, X } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type OrderStatus = "completed" | "processing" | "cancelled"

interface Order {
  id: string
  customer: string
  date: Date
  total: number
  status: OrderStatus
}

// Generate mock orders data
const generateOrders = (): Order[] => {
  const statuses: OrderStatus[] = ["completed", "processing", "cancelled"]
  const customers = [
    "John Doe",
    "Jane Smith",
    "Robert Johnson",
    "Emily Davis",
    "Michael Wilson",
    "Sarah Brown",
    "David Miller",
  ]

  return Array.from({ length: 5 }).map((_, i) => {
    // Generate a random date within the last 7 days
    const date = new Date()
    date.setDate(date.getDate() - Math.floor(Math.random() * 7))

    // More completed orders than others for realism
    const statusIndex = Math.random() < 0.6 ? 0 : Math.random() < 0.8 ? 1 : 2

    return {
      id: `ORD-${1000 + i}`,
      customer: customers[Math.floor(Math.random() * customers.length)],
      date,
      total: Math.round((50 + Math.random() * 200) * 100) / 100,
      status: statuses[statusIndex],
    }
  })
}

export function RecentOrders() {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    setOrders(generateOrders())
  }, [])

  const getStatusBadge = (status: OrderStatus) => {
    switch (status) {
      case "completed":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 flex items-center">
            <Check className="mr-1 h-3 w-3" />
            Completed
          </Badge>
        )
      case "processing":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 flex items-center">
            <Clock className="mr-1 h-3 w-3" />
            Processing
          </Badge>
        )
      case "cancelled":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 flex items-center">
            <X className="mr-1 h-3 w-3" />
            Cancelled
          </Badge>
        )
    }
  }

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <div key={order.id} className="flex items-center justify-between border-b pb-4">
          <div>
            <p className="font-medium">{order.customer}</p>
            <div className="flex items-center gap-2">
              <p className="text-sm text-muted-foreground">{order.id}</p>
              <p className="text-sm text-muted-foreground">{format(order.date, "MMM d, yyyy")}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-medium">${order.total.toFixed(2)}</p>
              <div className="mt-1">{getStatusBadge(order.status)}</div>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link href={`/admin/orders/${order.id}`}>View</Link>
            </Button>
          </div>
        </div>
      ))}
      <Button variant="outline" className="w-full" asChild>
        <Link href="/admin/orders">View All Orders</Link>
      </Button>
    </div>
  )
}
