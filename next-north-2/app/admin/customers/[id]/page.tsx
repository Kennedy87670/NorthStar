"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { format } from "date-fns"
import { ArrowLeft, Calendar, Edit, Mail, MapPin, Phone, ShoppingBag, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface CustomerOrder {
  id: string
  date: Date
  total: number
  status: "completed" | "processing" | "cancelled"
}

interface Customer {
  id: number
  name: string
  email: string
  phone: string
  address: {
    street: string
    city: string
    state: string
    zip: string
    country: string
  }
  orders: CustomerOrder[]
  totalSpent: number
  createdAt: Date
  status: "active" | "inactive"
}

export default function CustomerDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const customerId = Number.parseInt(params.id)
  const [customer, setCustomer] = useState<Customer | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // In a real app, fetch the customer from an API
    // For this demo, we'll create mock data
    setTimeout(() => {
      setCustomer({
        id: customerId,
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1 (555) 123-4567",
        address: {
          street: "123 Main St",
          city: "New York",
          state: "NY",
          zip: "10001",
          country: "United States",
        },
        orders: [
          {
            id: "ORD-1001",
            date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
            total: 129.99,
            status: "completed",
          },
          {
            id: "ORD-1002",
            date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
            total: 79.99,
            status: "completed",
          },
          {
            id: "ORD-1003",
            date: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
            total: 49.99,
            status: "completed",
          },
        ],
        totalSpent: 259.97,
        createdAt: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000),
        status: "active",
      })
      setIsLoading(false)
    }, 500)
  }, [customerId])

  const getStatusBadge = (status: "completed" | "processing" | "cancelled") => {
    switch (status) {
      case "completed":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Completed
          </Badge>
        )
      case "processing":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            Processing
          </Badge>
        )
      case "cancelled":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            Cancelled
          </Badge>
        )
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  if (!customer) {
    return (
      <div className="flex flex-col items-center justify-center h-[400px]">
        <h2 className="text-2xl font-bold mb-2">Customer Not Found</h2>
        <p className="text-muted-foreground mb-4">The customer you're looking for doesn't exist.</p>
        <Button onClick={() => router.push("/admin/customers")}>Back to Customers</Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => router.push("/admin/customers")}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-bold">{customer.name}</h1>
          <Badge
            variant="outline"
            className={
              customer.status === "active"
                ? "bg-green-50 text-green-700 border-green-200"
                : "bg-gray-50 text-gray-700 border-gray-200"
            }
          >
            {customer.status}
          </Badge>
        </div>
        <Button asChild>
          <Link href={`/admin/customers/${customer.id}/edit`}>
            <Edit className="mr-2 h-4 w-4" />
            Edit Customer
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Customer Information</CardTitle>
            <CardDescription>Customer since {format(customer.createdAt, "MMMM d, yyyy")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>{customer.name}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>{customer.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>{customer.phone}</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-muted-foreground mt-1" />
                <div>
                  <p>{customer.address.street}</p>
                  <p>
                    {customer.address.city}, {customer.address.state} {customer.address.zip}
                  </p>
                  <p>{customer.address.country}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>Joined {format(customer.createdAt, "MMMM d, yyyy")}</span>
              </div>
              <div className="flex items-center">
                <ShoppingBag className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>{customer.orders.length} orders</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Customer Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-sm text-muted-foreground">Total Spent</p>
                <p className="text-2xl font-bold">${customer.totalSpent.toFixed(2)}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-sm text-muted-foreground">Orders</p>
                <p className="text-2xl font-bold">{customer.orders.length}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-sm text-muted-foreground">Average Order</p>
                <p className="text-2xl font-bold">${(customer.totalSpent / customer.orders.length).toFixed(2)}</p>
              </div>
            </div>

            <Tabs defaultValue="orders">
              <TabsList className="mb-4">
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="notes">Notes</TabsTrigger>
              </TabsList>
              <TabsContent value="orders">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Total</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {customer.orders.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-4 text-muted-foreground">
                          No orders found
                        </TableCell>
                      </TableRow>
                    ) : (
                      customer.orders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell className="font-medium">{order.id}</TableCell>
                          <TableCell>{format(order.date, "MMM d, yyyy")}</TableCell>
                          <TableCell>{getStatusBadge(order.status)}</TableCell>
                          <TableCell className="text-right">${order.total.toFixed(2)}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={`/admin/orders/${order.id}`}>View</Link>
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </TabsContent>
              <TabsContent value="activity">
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <p className="text-sm font-medium">Placed order #ORD-1001</p>
                    <p className="text-xs text-muted-foreground">7 days ago</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <p className="text-sm font-medium">Updated shipping address</p>
                    <p className="text-xs text-muted-foreground">14 days ago</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <p className="text-sm font-medium">Placed order #ORD-1002</p>
                    <p className="text-xs text-muted-foreground">30 days ago</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <p className="text-sm font-medium">Placed order #ORD-1003</p>
                    <p className="text-xs text-muted-foreground">60 days ago</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <p className="text-sm font-medium">Created account</p>
                    <p className="text-xs text-muted-foreground">{format(customer.createdAt, "MMMM d, yyyy")}</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="notes">
                <div className="space-y-4">
                  <p className="text-muted-foreground text-center py-4">No notes available</p>
                  <Separator />
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm">
                      Add Note
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
