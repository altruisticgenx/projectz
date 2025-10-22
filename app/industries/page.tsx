import { Building2, Heart, Landmark, Cpu, Factory, GraduationCap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function IndustriesPage() {
  const industries = [
    {
      icon: Landmark,
      title: "Financial Services",
      description: "Navigate complex regulatory requirements and quantum threats to financial data",
      challenges: [
        "Post-quantum cryptography for transactions",
        "Regulatory compliance (SEC, FinCEN, FDIC)",
        "AI risk management frameworks",
        "Real-time fraud detection"
      ],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Protect patient data and ensure compliance with evolving health IT regulations",
      challenges: [
        "HIPAA compliance and data security",
        "Medical AI regulations and validation",
        "Quantum-safe patient record encryption",
        "Interoperability standards"
      ],
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Building2,
      title: "Federal & Defense",
      description: "Meet stringent security requirements for government and defense contractors",
      challenges: [
        "FedRAMP and CMMC certification",
        "NIST compliance frameworks",
        "Supply chain security",
        "Classified data protection"
      ],
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Cpu,
      title: "Technology",
      description: "Stay competitive with cutting-edge AI safety and quantum readiness",
      challenges: [
        "AI safety and ethics frameworks",
        "Quantum computing integration",
        "Product security standards",
        "International market compliance"
      ],
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Secure industrial IoT and prepare for Industry 4.0 transformation",
      challenges: [
        "IIoT security and encryption",
        "Supply chain visibility",
        "Predictive maintenance AI",
        "Operational technology security"
      ],
      color: "from-orange-500 to-amber-600"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Protect student data and leverage AI for enhanced learning outcomes",
      challenges: [
        "FERPA compliance",
        "Educational AI deployment",
        "Research data security",
        "Campus cybersecurity"
      ],
      color: "from-cyan-500 to-teal-600"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-quantum-purple/10 to-quantum-blue/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Industry Expertise
            </h1>
            <p className="text-xl text-gray-600">
              Tailored quantum-AI readiness solutions for highly regulated industries facing 
              unique compliance and security challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${industry.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle>{industry.title}</CardTitle>
                    <CardDescription>{industry.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-sm text-gray-900 mb-3">Key Challenges:</h4>
                    <ul className="space-y-2">
                      {industry.challenges.map((challenge, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start">
                          <span className="text-quantum-purple mr-2">•</span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Cross-Industry Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Cross-Industry Capabilities
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Regulatory Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Deep understanding of industry-specific regulations and compliance frameworks:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• FedRAMP, CMMC, FISMA, NIST frameworks</li>
                  <li>• HIPAA, HITECH, FDA guidance</li>
                  <li>• SOC 2, ISO 27001, PCI DSS</li>
                  <li>• GDPR, CCPA, state privacy laws</li>
                  <li>• Industry-specific AI regulations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Technical Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Proven implementation experience across diverse technology stacks:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Cloud security (AWS, Azure, GCP)</li>
                  <li>• Zero trust architecture</li>
                  <li>• Post-quantum cryptography</li>
                  <li>• AI/ML security frameworks</li>
                  <li>• Continuous monitoring systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Risk Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive approach to identifying and mitigating sector-specific risks:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Threat modeling and assessment</li>
                  <li>• Business impact analysis</li>
                  <li>• Incident response planning</li>
                  <li>• Supply chain risk management</li>
                  <li>• Third-party vendor assessment</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Strategic Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Long-term roadmaps aligned with business objectives and regulatory timelines:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Multi-year technology roadmaps</li>
                  <li>• Budget and resource planning</li>
                  <li>• Change management strategies</li>
                  <li>• Executive stakeholder engagement</li>
                  <li>• Board-level reporting</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Discuss Your Industry-Specific Needs
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Every industry faces unique challenges. Let&apos;s build a solution tailored to yours.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
