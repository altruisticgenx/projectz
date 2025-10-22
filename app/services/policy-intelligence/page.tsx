import { TrendingUp, ArrowRight, Bell, Database, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function PolicyIntelligencePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-quantum-cyan/10 to-quantum-blue/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Policy Intelligence Platform
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Stay ahead of regulatory changes with real-time monitoring, AI-powered analysis, 
              and actionable insights on AI, quantum, and cybersecurity policy developments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/policy-dashboard">
                  Explore Dashboard <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">
                  Request Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Comprehensive Policy Intelligence
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Bell className="w-10 h-10 text-quantum-cyan mb-4" />
                <CardTitle>Real-Time Monitoring</CardTitle>
                <CardDescription>
                  Automated tracking of federal registers, agency announcements, and legislative updates
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-600">
                <div>• Federal Register tracking</div>
                <div>• Agency RSS feeds</div>
                <div>• Congressional activity</div>
                <div>• International developments</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Database className="w-10 h-10 text-quantum-blue mb-4" />
                <CardTitle>Data Aggregation</CardTitle>
                <CardDescription>
                  Centralized repository of policy documents, regulations, and guidance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-600">
                <div>• Document repository</div>
                <div>• Version tracking</div>
                <div>• Cross-referencing</div>
                <div>• Historical analysis</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="w-10 h-10 text-quantum-purple mb-4" />
                <CardTitle>AI-Powered Analysis</CardTitle>
                <CardDescription>
                  Machine learning for sentiment analysis, entity extraction, and impact assessment
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-600">
                <div>• Sentiment analysis</div>
                <div>• Entity recognition</div>
                <div>• Topic clustering</div>
                <div>• Trend forecasting</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="w-10 h-10 text-green-600 mb-4" />
                <CardTitle>Trend Analysis</CardTitle>
                <CardDescription>
                  Identify emerging patterns and predict future regulatory directions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-600">
                <div>• Topic frequency</div>
                <div>• Agency activity</div>
                <div>• Regulatory cycles</div>
                <div>• Impact scoring</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Bell className="w-10 h-10 text-orange-600 mb-4" />
                <CardTitle>Custom Alerts</CardTitle>
                <CardDescription>
                  Configurable notifications for topics and agencies that matter to you
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-600">
                <div>• Keyword tracking</div>
                <div>• Agency filters</div>
                <div>• Deadline reminders</div>
                <div>• Daily digests</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="w-10 h-10 text-pink-600 mb-4" />
                <CardTitle>Impact Reports</CardTitle>
                <CardDescription>
                  Detailed analysis of how policies affect your organization
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-600">
                <div>• Compliance implications</div>
                <div>• Business impact</div>
                <div>• Action recommendations</div>
                <div>• Executive summaries</div>
              </CardContent>
            </Card>
          </div>

          {/* Use Cases */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50">
                <CardHeader>
                  <CardTitle>Federal Contractors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Stay compliant with evolving FedRAMP, CMMC, and agency-specific requirements. 
                    Receive alerts on relevant RFPs and policy changes.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Contract compliance monitoring</li>
                    <li>✓ RFP opportunity alerts</li>
                    <li>✓ Agency preference tracking</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-pink-50">
                <CardHeader>
                  <CardTitle>Technology Companies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Monitor AI safety regulations, quantum computing guidance, and emerging 
                    technology standards affecting your products.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Product compliance tracking</li>
                    <li>✓ Standards development</li>
                    <li>✓ Market access requirements</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-teal-50">
                <CardHeader>
                  <CardTitle>Financial Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Track cybersecurity regulations, data privacy requirements, and quantum 
                    cryptography mandates from financial regulators.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Regulatory compliance</li>
                    <li>✓ Risk assessment</li>
                    <li>✓ Audit preparation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-red-50">
                <CardHeader>
                  <CardTitle>Healthcare Organizations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Monitor HIPAA updates, AI in healthcare regulations, and data security 
                    requirements for medical devices and patient data.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ HIPAA compliance</li>
                    <li>✓ Medical AI regulations</li>
                    <li>✓ Data protection</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-quantum-cyan to-quantum-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Stay Ahead of Policy Changes?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get instant access to our Policy Intelligence Dashboard
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">
              Request Demo <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
