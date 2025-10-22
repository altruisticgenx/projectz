"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Info, Bell } from "lucide-react"

interface Alert {
  id: string
  severity: "high" | "medium" | "low"
  title: string
  description: string
  date: string
}

const mockAlerts: Alert[] = [
  {
    id: "1",
    severity: "high",
    title: "New Compliance Deadline",
    description: "FedRAMP authorization requirements updated - action required within 90 days",
    date: "2 hours ago"
  },
  {
    id: "2",
    severity: "medium",
    title: "Policy Update Available",
    description: "NIST AI Risk Management Framework - new supplemental guidance released",
    date: "1 day ago"
  },
  {
    id: "3",
    severity: "low",
    title: "Industry Advisory",
    description: "Quantum computing developments may impact long-term security planning",
    date: "3 days ago"
  }
]

const severityConfig = {
  high: {
    icon: AlertTriangle,
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    borderColor: "border-red-200"
  },
  medium: {
    icon: Bell,
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-600",
    borderColor: "border-yellow-200"
  },
  low: {
    icon: Info,
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-200"
  }
}

export function AlertsPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Alerts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {mockAlerts.map((alert) => {
            const config = severityConfig[alert.severity]
            const Icon = config.icon
            return (
              <div
                key={alert.id}
                className={`p-4 rounded-lg border ${config.bgColor} ${config.borderColor}`}
              >
                <div className="flex gap-3">
                  <Icon className={`w-5 h-5 flex-shrink-0 ${config.textColor}`} />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold text-gray-900 text-sm">{alert.title}</h4>
                      <span className="text-xs text-gray-500">{alert.date}</span>
                    </div>
                    <p className="text-sm text-gray-600">{alert.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
