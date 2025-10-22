import { Search, Filter, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PolicyTimeline } from "@/components/dashboard/policy-timeline"
import { AlertsPanel } from "@/components/dashboard/alerts-panel"
import { TrendChart } from "@/components/dashboard/trend-chart"
import { EntityTagCloud } from "@/components/dashboard/entity-tag-cloud"

export default function PolicyDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Policy Intelligence Dashboard</h1>
              <p className="text-gray-600">
                Real-time monitoring and analysis of AI, quantum, and cybersecurity policy developments
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search policies, regulations, and guidelines..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-quantum-purple focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Active Policies</CardDescription>
                <CardTitle className="text-3xl">173</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-green-600">+12% this month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription>New This Week</CardDescription>
                <CardTitle className="text-3xl">8</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-blue-600">3 require action</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Tracked Agencies</CardDescription>
                <CardTitle className="text-3xl">24</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Federal & State</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Compliance Score</CardDescription>
                <CardTitle className="text-3xl">92%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-green-600">Excellent</p>
              </CardContent>
            </Card>
          </div>

          {/* Alerts */}
          <div className="mb-8">
            <AlertsPanel />
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <PolicyTimeline />
            <TrendChart />
          </div>

          {/* Entity Tag Cloud */}
          <EntityTagCloud />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Dashboard Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Automated Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  AI-powered tracking of federal registers, agency announcements, and legislative updates
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Impact Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Sentiment analysis and entity extraction to assess policy implications for your organization
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Custom Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Configurable notifications for topics, agencies, and compliance deadlines that matter to you
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
