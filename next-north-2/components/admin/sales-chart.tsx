"use client"

import { useEffect, useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Mock data for the chart
const generateData = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const currentMonth = new Date().getMonth()

  return months.map((month, index) => {
    // Generate realistic sales data with a seasonal pattern
    const baseSales = 5000 + Math.random() * 3000
    // Add seasonality - higher in Nov-Dec, lower in Jan-Feb
    const seasonality = index === 10 || index === 11 ? 1.5 : index === 0 || index === 1 ? 0.7 : 1
    // Add a growth trend
    const trend = 1 + index / 24
    // Add some randomness
    const randomFactor = 0.8 + Math.random() * 0.4

    const sales = Math.round(baseSales * seasonality * trend * randomFactor)

    // Mark current month and previous months differently
    const status = index === currentMonth ? "current" : index < currentMonth ? "past" : "future"

    return {
      name: month,
      sales,
      status,
    }
  })
}

export function SalesChart() {
  const [data, setData] = useState<any[]>([])
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setData(generateData())
    setWindowWidth(window.innerWidth)

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Determine how many ticks to show based on screen width
  const getTickInterval = () => {
    if (windowWidth < 640) return 3 // Mobile: show every 3rd month
    if (windowWidth < 1024) return 2 // Tablet: show every 2nd month
    return 1 // Desktop: show every month
  }

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} interval={getTickInterval()} />
          <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `$${value / 1000}k`} />
          <Tooltip
            formatter={(value) => [`$${value}`, "Sales"]}
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e2e8f0",
              borderRadius: "0.375rem",
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
            }}
          />
          <Bar dataKey="sales" fill="#3b82f6" radius={[4, 4, 0, 0]} fillOpacity={0.8} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
