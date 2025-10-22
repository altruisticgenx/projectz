"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function TrendChart() {
  const categories = [
    { name: "AI Regulation", count: 45, change: "+12%" },
    { name: "Quantum Security", count: 28, change: "+8%" },
    { name: "Data Privacy", count: 62, change: "+5%" },
    { name: "Cloud Compliance", count: 38, change: "+15%" }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Policy Trend Analysis</CardTitle>
        <CardDescription>30-day activity across key categories</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {categories.map((category, index) => {
            const maxCount = Math.max(...categories.map(c => c.count))
            const widthPercent = (category.count / maxCount) * 100
            
            return (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{category.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">{category.count} policies</span>
                    <span className="text-xs text-green-600 font-medium">{category.change}</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-quantum-purple to-quantum-blue h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${widthPercent}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
