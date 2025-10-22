import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Shield, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: "federal-agency-fedramp",
      title: "Federal Agency Achieves FedRAMP Moderate Authorization",
      client: "Large Federal Agency",
      industry: "Government",
      challenge: "Needed to migrate legacy systems to cloud while meeting FedRAMP Moderate requirements",
      solution: "End-to-end FedRAMP compliance support including gap assessment, SSP development, and 3PAO coordination",
      results: [
        "Achieved FedRAMP Moderate ATO in 8 months",
        "Zero critical findings during assessment",
        "Reduced infrastructure costs by 40%",
        "Improved system availability to 99.9%"
      ],
      icon: Shield,
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: "financial-pqc-migration",
      title: "Major Bank Implements Post-Quantum Cryptography",
      client: "Top 10 U.S. Bank",
      industry: "Financial Services",
      challenge: "Protect long-term financial data from future quantum computer threats",
      solution: "Comprehensive PQC migration strategy with hybrid cryptographic implementation",
      results: [
        "Migrated 85% of critical systems to PQC",
        "Maintained 100% transaction processing uptime",
        "Achieved NIST PQC compliance ahead of mandate",
        "Zero security incidents during migration"
      ],
      icon: TrendingUp,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: "healthcare-ai-compliance",
      title: "Healthcare System Deploys AI with HIPAA Compliance",
      client: "Regional Healthcare Network",
      industry: "Healthcare",
      challenge: "Implement AI-powered diagnostics while ensuring HIPAA compliance and patient data protection",
      solution: "AI readiness assessment, security architecture design, and compliance framework implementation",
      results: [
        "Deployed 5 AI models in clinical settings",
        "Maintained HIPAA compliance throughout",
        "Improved diagnostic accuracy by 25%",
        "Reduced false positives by 40%"
      ],
      icon: Building2,
      color: "from-red-500 to-pink-600"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-quantum-purple/10 to-quantum-blue/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600">
              Real-world success stories of organizations that have transformed their 
              security posture and achieved compliance with our guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study, index) => {
              const Icon = study.icon
              return (
                <Card key={study.id} className="overflow-hidden">
                  <div className="grid lg:grid-cols-3">
                    <div className={`p-8 bg-gradient-to-br ${study.color} text-white flex flex-col justify-between`}>
                      <div>
                        <Icon className="w-12 h-12 mb-4 opacity-90" />
                        <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                        <div className="space-y-1 text-white/90">
                          <p className="text-sm">Client: {study.client}</p>
                          <p className="text-sm">Industry: {study.industry}</p>
                        </div>
                      </div>
                      <Button 
                        variant="secondary" 
                        className="mt-6 w-fit"
                        asChild
                      >
                        <Link href={`/case-studies/${study.id}`}>
                          Read Full Story <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                    
                    <div className="lg:col-span-2 p-8">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                          <p className="text-gray-600">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                          <p className="text-gray-600">{study.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {study.results.map((result, i) => (
                              <div key={i} className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                                <span className="text-gray-700 text-sm">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Impact
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-4xl text-quantum-purple">50+</CardTitle>
                <CardDescription>Organizations Served</CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-4xl text-quantum-blue">95%</CardTitle>
                <CardDescription>Client Satisfaction Rate</CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-4xl text-quantum-cyan">$50M+</CardTitle>
                <CardDescription>Risk Mitigated</CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-4xl text-quantum-pink">100%</CardTitle>
                <CardDescription>Compliance Success Rate</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the organizations that have transformed their security and compliance posture
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
