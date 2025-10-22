import { Download, CheckSquare, AlertCircle, FileText, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function PQCMigrationPage() {
  const checklistItems = [
    {
      phase: "Phase 1: Discovery & Assessment",
      items: [
        "Inventory all cryptographic systems and dependencies",
        "Identify quantum-vulnerable algorithms (RSA, ECC, DH)",
        "Map data flows and encryption touchpoints",
        "Assess system criticality and data sensitivity",
        "Document current security architecture"
      ]
    },
    {
      phase: "Phase 2: Planning",
      items: [
        "Select NIST-approved PQC algorithms (CRYSTALS-Kyber, CRYSTALS-Dilithium, SPHINCS+)",
        "Develop migration roadmap with timeline and milestones",
        "Identify dependencies and integration challenges",
        "Plan for hybrid classical/quantum-safe solutions",
        "Allocate resources and budget"
      ]
    },
    {
      phase: "Phase 3: Testing",
      items: [
        "Set up isolated testing environment",
        "Implement PQC algorithms in test systems",
        "Conduct performance and compatibility testing",
        "Validate security properties and key exchange",
        "Test interoperability with existing systems"
      ]
    },
    {
      phase: "Phase 4: Implementation",
      items: [
        "Deploy hybrid cryptographic solutions",
        "Migrate high-priority systems first",
        "Implement gradual rollout strategy",
        "Monitor performance and security metrics",
        "Maintain backward compatibility where needed"
      ]
    },
    {
      phase: "Phase 5: Validation & Compliance",
      items: [
        "Conduct security audits and penetration testing",
        "Verify NIST compliance and algorithm implementation",
        "Document migration process and outcomes",
        "Train personnel on new systems",
        "Establish ongoing monitoring and maintenance"
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-quantum-purple/10 to-quantum-blue/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Post-Quantum Cryptography Migration Guide
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive checklist and guidelines for migrating to NIST-approved 
              post-quantum cryptographic algorithms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                <Download className="mr-2 w-5 h-5" />
                Download Full Checklist
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services/quantum-security">
                  Get Expert Assistance
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* NIST Standards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">NIST-Approved Algorithms</h2>
            <p className="text-gray-600 max-w-3xl">
              In 2024, NIST standardized the first post-quantum cryptographic algorithms designed 
              to withstand attacks from quantum computers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-quantum-purple">
              <CardHeader>
                <CardTitle>CRYSTALS-Kyber</CardTitle>
                <CardDescription>Key Encapsulation Mechanism (KEM)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Primary algorithm for general encryption. Fast, efficient, and suitable for most applications.
                </p>
                <div className="text-xs text-gray-500">
                  <div>• NIST FIPS 203</div>
                  <div>• Lattice-based cryptography</div>
                  <div>• Recommended for key exchange</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-quantum-blue">
              <CardHeader>
                <CardTitle>CRYSTALS-Dilithium</CardTitle>
                <CardDescription>Digital Signature Algorithm</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Primary algorithm for digital signatures. Strong security with reasonable signature sizes.
                </p>
                <div className="text-xs text-gray-500">
                  <div>• NIST FIPS 204</div>
                  <div>• Lattice-based cryptography</div>
                  <div>• Recommended for signatures</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-quantum-cyan">
              <CardHeader>
                <CardTitle>SPHINCS+</CardTitle>
                <CardDescription>Stateless Hash-Based Signatures</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Backup signature algorithm. Larger signatures but based on mature hash functions.
                </p>
                <div className="text-xs text-gray-500">
                  <div>• NIST FIPS 205</div>
                  <div>• Hash-based cryptography</div>
                  <div>• Alternative to Dilithium</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Migration Checklist */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Migration Checklist</h2>
            <p className="text-gray-600 max-w-3xl">
              Follow this comprehensive checklist to plan and execute your post-quantum cryptography migration.
            </p>
          </div>

          <div className="space-y-8">
            {checklistItems.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckSquare className="w-6 h-6 mr-3 text-quantum-purple" />
                    {section.phase}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-5 h-5 rounded border-2 border-gray-300 mr-3 flex-shrink-0 mt-0.5" />
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

      {/* Key Considerations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Considerations</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <AlertCircle className="w-8 h-8 text-orange-600 mb-4" />
                <CardTitle>Timeline Urgency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  &quot;Harvest now, decrypt later&quot; attacks are already occurring. Organizations handling 
                  sensitive long-term data should prioritize immediate migration planning.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="w-8 h-8 text-blue-600 mb-4" />
                <CardTitle>Compliance Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Federal agencies and contractors must comply with NSM-10 and OMB guidance on 
                  quantum-resistant cryptography. Commercial sectors should monitor evolving regulations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckSquare className="w-8 h-8 text-green-600 mb-4" />
                <CardTitle>Hybrid Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Implement hybrid solutions combining classical and post-quantum algorithms during 
                  transition period to maintain security while ensuring compatibility.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <AlertCircle className="w-8 h-8 text-purple-600 mb-4" />
                <CardTitle>Performance Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  PQC algorithms generally require larger key sizes and more computational resources. 
                  Performance testing is critical for high-throughput systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-quantum-purple to-quantum-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Help with Your PQC Migration?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our team provides end-to-end support for post-quantum cryptography implementation
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
