import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-quantum-purple to-quantum-blue rounded-lg" />
              <span className="text-xl font-bold text-white">AltruisticXAI</span>
            </div>
            <p className="text-sm text-gray-400">
              Empowering organizations with Quantum-AI readiness and policy intelligence.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/altruisticgenx" target="_blank" rel="noopener noreferrer" className="hover:text-quantum-purple transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/inga-kaltak" target="_blank" rel="noopener noreferrer" className="hover:text-quantum-purple transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-quantum-purple transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/ai-readiness" className="hover:text-quantum-purple transition-colors">AI Readiness</Link></li>
              <li><Link href="/services/quantum-security" className="hover:text-quantum-purple transition-colors">Quantum Security</Link></li>
              <li><Link href="/services/policy-intelligence" className="hover:text-quantum-purple transition-colors">Policy Intelligence</Link></li>
              <li><Link href="/services/fedramp-compliance" className="hover:text-quantum-purple transition-colors">FedRAMP Compliance</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-quantum-purple transition-colors">About Us</Link></li>
              <li><Link href="/case-studies" className="hover:text-quantum-purple transition-colors">Case Studies</Link></li>
              <li><Link href="/blog" className="hover:text-quantum-purple transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-quantum-purple transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/policy-dashboard" className="hover:text-quantum-purple transition-colors">Policy Dashboard</Link></li>
              <li><Link href="/fedramp-sandbox" className="hover:text-quantum-purple transition-colors">FedRAMP Sandbox</Link></li>
              <li><Link href="/pqc-migration" className="hover:text-quantum-purple transition-colors">PQC Migration</Link></li>
              <li><Link href="/contact" className="hover:text-quantum-purple transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400 text-center">
          <p>&copy; {new Date().getFullYear()} AltruisticXAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
