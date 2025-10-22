import { Shield, Lock, FileCheck, Activity, UserCheck, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function FedRAMPSandboxPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-12 h-12 text-quantum-blue" />
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                FedRAMP Sandbox
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Isolated compliance testing environment with role-based access control, 
              event auditing, and comprehensive security monitoring.
            </p>
            <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 mb-6">
              <p className="text-blue-900 font-medium">
                🔒 This is a secure environment. All actions are logged and monitored.
              </p>
            </div>
            <Button asChild size="lg">
              <Link href="/contact">
                Request Sandbox Access
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Sandbox Capabilities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Lock className="w-10 h-10 text-quantum-blue mb-4" />
                <CardTitle>Isolated Environment</CardTitle>
                <CardDescription>
                  Completely segregated testing environment that mirrors production
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Network isolation</li>
                  <li>• Data separation</li>
                  <li>• Independent infrastructure</li>
                  <li>• No production impact</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <UserCheck className="w-10 h-10 text-quantum-purple mb-4" />
                <CardTitle>Role-Based Access</CardTitle>
                <CardDescription>
                  Granular permissions and access control management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• User role management</li>
                  <li>• Permission templates</li>
                  <li>• Multi-factor authentication</li>
                  <li>• Session management</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Activity className="w-10 h-10 text-quantum-cyan mb-4" />
                <CardTitle>Event Audit Logs</CardTitle>
                <CardDescription>
                  Comprehensive logging of all system activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Real-time event capture</li>
                  <li>• Tamper-proof logs</li>
                  <li>• Searchable history</li>
                  <li>• Compliance reports</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileCheck className="w-10 h-10 text-quantum-pink mb-4" />
                <CardTitle>Compliance Testing</CardTitle>
                <CardDescription>
                  Validate FedRAMP controls and requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Control validation</li>
                  <li>• Security assessments</li>
                  <li>• Gap analysis</li>
                  <li>• Remediation tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Database className="w-10 h-10 text-green-600 mb-4" />
                <CardTitle>Data Management</CardTitle>
                <CardDescription>
                  Secure data handling and lifecycle management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Data classification</li>
                  <li>• Encryption at rest/transit</li>
                  <li>• Backup & recovery</li>
                  <li>• Retention policies</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="w-10 h-10 text-orange-600 mb-4" />
                <CardTitle>Security Monitoring</CardTitle>
                <CardDescription>
                  Continuous security assessment and threat detection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Intrusion detection</li>
                  <li>• Vulnerability scanning</li>
                  <li>• Anomaly detection</li>
                  <li>• Incident response</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Status Dashboard */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Environment Status</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>System Health</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">API Services</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      Operational
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Database</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      Operational
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Authentication</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      Operational
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Audit Logging</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      Operational
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Active Users</span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tests Executed (24h)</span>
                    <span className="font-medium">47</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Audit Events (24h)</span>
                    <span className="font-medium">1,284</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Security Scans</span>
                    <span className="font-medium">8</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Test Your FedRAMP Compliance?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get access to our sandbox environment and validate your security controls
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Request Access</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
