"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Entity {
  name: string
  count: number
  category: "agency" | "technology" | "regulation"
}

const mockEntities: Entity[] = [
  { name: "NIST", count: 45, category: "agency" },
  { name: "AI Safety", count: 38, category: "technology" },
  { name: "FedRAMP", count: 32, category: "regulation" },
  { name: "Quantum Computing", count: 28, category: "technology" },
  { name: "DOD", count: 25, category: "agency" },
  { name: "CISA", count: 22, category: "agency" },
  { name: "Zero Trust", count: 20, category: "technology" },
  { name: "CMMC", count: 18, category: "regulation" },
  { name: "Post-Quantum Crypto", count: 15, category: "technology" },
  { name: "Cloud Security", count: 12, category: "technology" }
]

const categoryColors = {
  agency: "bg-blue-100 text-blue-700 hover:bg-blue-200",
  technology: "bg-purple-100 text-purple-700 hover:bg-purple-200",
  regulation: "bg-green-100 text-green-700 hover:bg-green-200"
}

export function EntityTagCloud() {
  const maxCount = Math.max(...mockEntities.map(e => e.count))
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Key Entities & Topics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {mockEntities.map((entity, index) => {
            const fontSize = 0.75 + (entity.count / maxCount) * 0.5
            return (
              <button
                key={index}
                className={`px-3 py-1.5 rounded-full font-medium transition-colors ${categoryColors[entity.category]}`}
                style={{ fontSize: `${fontSize}rem` }}
              >
                {entity.name}
                <span className="ml-1.5 text-xs opacity-70">({entity.count})</span>
              </button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
