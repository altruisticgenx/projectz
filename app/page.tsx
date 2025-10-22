import Link from "next/link"
import { ArrowRight, Shield, Brain, TrendingUp, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-quantum-purple/10 via-quantum-blue/10 to-quantum-cyan/10 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Navigate the{" "}
              <span className="bg-gradient-to-r from-quantum-purple to-quantum-blue bg-clip-text text-transparent">
                Quantum-AI Era
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Strategic consulting for organizations preparing for quantum computing and advanced AI. 
              Policy intelligence, security readiness, and compliance excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/policy-dashboard">
                  Explore Policy Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end services for quantum-AI readiness and regulatory compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 hover:border-quantum-purple transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-quantum-purple to-quantum-pink rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <CardTitle>AI Readiness</CardTitle>
                <CardDescription>
                  Comprehensive assessment and implementation strategies for AI integration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/services/ai-readiness" className="text-quantum-purple hover:underline flex items-center">
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-quantum-blue transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-quantum-blue to-quantum-cyan rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Quantum Security</CardTitle>
                <CardDescription>
                  Post-quantum cryptography migration and security architecture
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/services/quantum-security" className="text-quantum-blue hover:underline flex items-center">
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-quantum-cyan transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-quantum-cyan to-quantum-blue rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Policy Intelligence</CardTitle>
                <CardDescription>
                  Real-time monitoring and analysis of AI/quantum policy developments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/services/policy-intelligence" className="text-quantum-cyan hover:underline flex items-center">
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-quantum-pink transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-quantum-pink to-quantum-purple rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle>FedRAMP Compliance</CardTitle>
                <CardDescription>
                  Sandbox environment and compliance certification support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/services/fedramp-compliance" className="text-quantum-pink hover:underline flex items-center">
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-quantum-purple to-quantum-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join leading organizations preparing for the quantum-AI future
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">
              Schedule a Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
