"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, FileText, Shield, TrendingUp } from "lucide-react"

interface PolicyEvent {
  id: string
  date: string
  title: string
  category: "regulation" | "legislation" | "guideline" | "announcement"
  description: string
  source: string
}

const mockEvents: PolicyEvent[] = [
  {
    id: "1",
    date: "2024-10-15",
    title: "NIST Releases PQC Standards Update",
    category: "guideline",
    description: "Updated implementation guidelines for post-quantum cryptography algorithms",
    source: "NIST"
  },
  {
    id: "2",
    date: "2024-10-10",
    title: "AI Executive Order Implementation",
    category: "regulation",
    description: "Federal agencies begin implementing AI safety requirements",
    source: "White House"
  },
  {
    id: "3",
    date: "2024-10-05",
    title: "FedRAMP 2.0 Pilot Program",
    category: "announcement",
    description: "New pilot program for accelerated cloud authorization",
    source: "FedRAMP PMO"
  },
  {
    id: "4",
    date: "2024-09-28",
    title: "DOD Quantum Strategy Released",
    category: "guideline",
    description: "Department of Defense publishes quantum technology roadmap",
    source: "DOD"
  }
]

const categoryIcons = {
  regulation: Shield,
  legislation: FileText,
  guideline: TrendingUp,
  announcement: Clock
}

const categoryColors = {
  regulation: "text-red-600 bg-red-50",
  legislation: "text-blue-600 bg-blue-50",
  guideline: "text-green-600 bg-green-50",
  announcement: "text-purple-600 bg-purple-50"
}

export function PolicyTimeline() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Policy Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockEvents.map((event) => {
            const Icon = categoryIcons[event.category]
            return (
              <div key={event.id} className="flex gap-4 pb-4 border-b last:border-0">
                <div className={`p-2 rounded-lg h-fit ${categoryColors[event.category]}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-semibold text-gray-900">{event.title}</h4>
                    <span className="text-sm text-gray-500">{event.date}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{event.description}</p>
                  <span className="text-xs text-gray-500">Source: {event.source}</span>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
