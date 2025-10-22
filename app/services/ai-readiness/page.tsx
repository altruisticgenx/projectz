import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function AIReadinessPage() {
  const benefits = [
    "Comprehensive AI maturity assessment",
    "Custom AI integration roadmap",
    "Risk and compliance evaluation",
    "Technology stack recommendations",
    "Change management strategy",
    "ROI and impact analysis",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-quantum-purple/10 to-quantum-blue/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              AI Readiness Assessment
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Evaluate your organization&apos;s AI capabilities and develop a strategic roadmap 
              for successful AI integration and deployment.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Request Assessment <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Comprehensive AI Evaluation
              </h2>
              <p className="text-gray-600 mb-6">
                Our AI readiness assessment provides a 360-degree view of your organization&apos;s 
                preparedness for AI adoption. We evaluate technical infrastructure, data 
                governance, talent capabilities, and organizational culture.
              </p>
              <p className="text-gray-600 mb-6">
                Using industry-leading frameworks and methodologies, we identify gaps, 
                opportunities, and risks to create a tailored implementation strategy.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-quantum-purple mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Assessment Process</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">1. Discovery Phase</h3>
                    <p className="text-gray-600 text-sm">
                      Initial consultation to understand your business objectives and current state
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">2. Assessment</h3>
                    <p className="text-gray-600 text-sm">
                      In-depth evaluation of infrastructure, data, processes, and capabilities
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">3. Analysis</h3>
                    <p className="text-gray-600 text-sm">
                      Gap analysis and opportunity identification with risk assessment
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">4. Roadmap</h3>
                    <p className="text-gray-600 text-sm">
                      Detailed implementation plan with timeline, resources, and milestones
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-quantum-purple/10 to-quantum-blue/10 border-quantum-purple">
                <CardHeader>
                  <CardTitle>Why Choose Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Our team brings deep expertise from federal consulting, defense intelligence, 
                    and cutting-edge AI implementation. We understand both the technical and 
                    strategic challenges of AI adoption.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
