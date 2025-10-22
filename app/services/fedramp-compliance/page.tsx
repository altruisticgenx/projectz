import { Shield, ArrowRight, CheckCircle2, FileCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function FedRAMPCompliancePage() {
  const phases = [
    {
      title: "Phase 1: Readiness Assessment",
      duration: "2-4 weeks",
      items: [
        "Review current security posture",
        "Gap analysis against FedRAMP requirements",
        "Identify control deficiencies",
        "Develop remediation roadmap"
      ]
    },
    {
      title: "Phase 2: Documentation",
      duration: "8-12 weeks",
      items: [
        "System Security Plan (SSP) development",
        "Policies and procedures documentation",
        "Control implementation statements",
        "Architecture and dataflow diagrams"
      ]
    },
    {
      title: "Phase 3: Implementation",
      duration: "12-16 weeks",
      items: [
        "Security control implementation",
        "Continuous monitoring setup",
        "Vulnerability scanning deployment",
        "Access control configuration"
      ]
    },
    {
      title: "Phase 4: Assessment",
      duration: "4-8 weeks",
      items: [
        "Independent 3PAO assessment",
        "Security control testing",
        "Penetration testing",
        "Remediation of findings"
      ]
    },
    {
      title: "Phase 5: Authorization",
      duration: "8-12 weeks",
      items: [
        "Security assessment report review",
        "Agency authorization process",
        "Continuous monitoring plan",
        "Authority to Operate (ATO) issuance"
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-12 h-12 text-quantum-blue" />
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                FedRAMP Compliance
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Navigate the FedRAMP authorization process with expert guidance, documentation 
              support, and our secure sandbox testing environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Start Authorization Process <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/fedramp-sandbox">
                  Explore Sandbox
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Authorization Levels */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            FedRAMP Authorization Levels
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-900">Low Impact</CardTitle>
                <CardDescription className="text-green-700">
                  125 Security Controls
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-4">
                  For systems with low impact on confidentiality, integrity, and availability.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Public information systems</li>
                  <li>• Non-sensitive data</li>
                  <li>• Lower compliance burden</li>
                  <li>• Faster authorization timeline</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-yellow-900">Moderate Impact</CardTitle>
                <CardDescription className="text-yellow-700">
                  325 Security Controls
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-4">
                  Most common baseline for federal cloud services.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Sensitive unclassified data</li>
                  <li>• Business critical systems</li>
                  <li>• Most agency requirements</li>
                  <li>• 6-12 month timeline</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-900">High Impact</CardTitle>
                <CardDescription className="text-red-700">
                  421 Security Controls
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-4">
                  For systems processing highly sensitive information.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Law enforcement data</li>
                  <li>• Health records</li>
                  <li>• Financial information</li>
                  <li>• 12-18 month timeline</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Authorization Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Authorization Process
          </h2>

          <div className="space-y-6">
            {phases.map((phase, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{phase.title}</CardTitle>
                      <CardDescription>Duration: {phase.duration}</CardDescription>
                    </div>
                    <span className="px-3 py-1 bg-quantum-purple/10 text-quantum-purple rounded-full text-sm font-medium">
                      Phase {index + 1}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How We Help
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <FileCheck className="w-10 h-10 text-quantum-blue mb-4" />
                <CardTitle>Documentation Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Expert assistance with SSP development, policy documentation, and control 
                  implementation statements that meet FedRAMP requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="w-10 h-10 text-quantum-purple mb-4" />
                <CardTitle>Gap Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Comprehensive evaluation of your current security posture against FedRAMP 
                  baseline controls with detailed remediation roadmap.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle2 className="w-10 h-10 text-green-600 mb-4" />
                <CardTitle>Implementation Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Technical support for implementing security controls, continuous monitoring, 
                  and meeting specific compliance requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileCheck className="w-10 h-10 text-cyan-600 mb-4" />
                <CardTitle>3PAO Coordination</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Liaison with Third Party Assessment Organizations, preparation for security 
                  assessments, and remediation support.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="w-10 h-10 text-orange-600 mb-4" />
                <CardTitle>Sandbox Environment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Access to our secure testing environment for validation, compliance testing, 
                  and security control verification.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle2 className="w-10 h-10 text-pink-600 mb-4" />
                <CardTitle>Ongoing Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Continuous monitoring support, annual assessment preparation, and 
                  maintaining your Authority to Operate (ATO).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-quantum-blue to-quantum-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Achieve FedRAMP Authorization?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let our experts guide you through the process
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">
              Get Started Today <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
