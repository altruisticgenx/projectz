import { Shield, ArrowRight, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function QuantumSecurityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-quantum-blue/10 to-quantum-cyan/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-12 h-12 text-quantum-blue" />
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Quantum Security
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Prepare your organization for the quantum threat with post-quantum cryptography 
              migration and advanced security architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Start Security Assessment <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/pqc-migration">
                  View PQC Migration Guide
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Threat Alert */}
      <section className="py-12 bg-orange-50 border-y border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                The Quantum Threat is Real
              </h3>
              <p className="text-gray-700">
                NIST estimates that quantum computers capable of breaking current encryption could 
                emerge within the next decade. Organizations must act now to protect sensitive data 
                from &quot;harvest now, decrypt later&quot; attacks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Quantum Security Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Cryptographic Inventory</CardTitle>
                <CardDescription>
                  Comprehensive audit of all cryptographic systems and dependencies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• System-wide crypto discovery</li>
                  <li>• Vulnerability assessment</li>
                  <li>• Priority ranking</li>
                  <li>• Dependency mapping</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>PQC Migration Planning</CardTitle>
                <CardDescription>
                  Strategic roadmap for post-quantum cryptography adoption
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• NIST-compliant algorithms</li>
                  <li>• Phased migration strategy</li>
                  <li>• Testing protocols</li>
                  <li>• Risk mitigation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Implementation Support</CardTitle>
                <CardDescription>
                  Hands-on assistance with quantum-safe deployment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Architecture design</li>
                  <li>• Integration guidance</li>
                  <li>• Performance optimization</li>
                  <li>• Security validation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quantum Key Distribution</CardTitle>
                <CardDescription>
                  Advanced quantum communication security infrastructure
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• QKD network design</li>
                  <li>• Hardware selection</li>
                  <li>• Protocol implementation</li>
                  <li>• Operational procedures</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hybrid Solutions</CardTitle>
                <CardDescription>
                  Transition strategies combining classical and quantum-safe crypto
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Dual-layer protection</li>
                  <li>• Backward compatibility</li>
                  <li>• Gradual migration</li>
                  <li>• Continuous monitoring</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Compliance & Certification</CardTitle>
                <CardDescription>
                  Regulatory alignment and security certifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• NIST guidelines</li>
                  <li>• FedRAMP requirements</li>
                  <li>• Industry standards</li>
                  <li>• Audit preparation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-quantum-blue to-quantum-cyan">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Don&apos;t Wait Until It&apos;s Too Late
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start your quantum security journey today with a comprehensive assessment
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">
              Schedule Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
