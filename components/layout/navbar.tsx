"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-quantum-purple to-quantum-blue rounded-lg" />
              <span className="text-xl font-bold bg-gradient-to-r from-quantum-purple to-quantum-blue bg-clip-text text-transparent">
                AltruisticXAI
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-quantum-purple transition-colors">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  <Link href="/services/ai-readiness" className="block px-4 py-2 text-gray-700 hover:bg-quantum-purple/10 rounded-md">
                    AI Readiness Assessment
                  </Link>
                  <Link href="/services/quantum-security" className="block px-4 py-2 text-gray-700 hover:bg-quantum-purple/10 rounded-md">
                    Quantum Security
                  </Link>
                  <Link href="/services/policy-intelligence" className="block px-4 py-2 text-gray-700 hover:bg-quantum-purple/10 rounded-md">
                    Policy Intelligence
                  </Link>
                  <Link href="/services/fedramp-compliance" className="block px-4 py-2 text-gray-700 hover:bg-quantum-purple/10 rounded-md">
                    FedRAMP Compliance
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/industries" className="text-gray-700 hover:text-quantum-purple transition-colors">
              Industries
            </Link>
            <Link href="/case-studies" className="text-gray-700 hover:text-quantum-purple transition-colors">
              Case Studies
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-quantum-purple transition-colors">
              Blog
            </Link>
            <Link href="/policy-dashboard" className="text-gray-700 hover:text-quantum-purple transition-colors">
              Policy Dashboard
            </Link>
            
            <Button asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-quantum-purple"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/services/ai-readiness" className="block px-3 py-2 text-gray-700 hover:bg-quantum-purple/10 rounded-md">
              AI Readiness Assessment
            </Link>
            <Link href="/services/quantum-security" className="block px-3 py-2 text-gray-700 hover:bg-quantum-purple/10 rounded-md">
              Quantum Security
            </Link>
            <Link href="/services/policy-intelligence" className="block px-3 py-2 text-gray-700 hover:bg-quantum-purple/10 rounded-md">
              Policy Intelligence
            </Link>
            <Link href="/services/fedramp-compliance" className="block px-3 py-2 text-gray-700 hover:bg-quantum-purple/10 rounded-md">
              FedRAMP Compliance
            </Link>
            <Link href="/industries" className="block px-3 py-2 text-gray-700 hover:bg-quantum-purple/10 rounded-md">
              Industries
            </Link>
            <Link href="/case-studies" className="block px-3 py-2 text-gray-700 hover:bg-quantum-purple/10 rounded-md">
              Case Studies
            </Link>
            <Link href="/blog" className="block px-3 py-2 text-gray-700 hover:bg-quantum-purple/10 rounded-md">
              Blog
            </Link>
            <Link href="/policy-dashboard" className="block px-3 py-2 text-gray-700 hover:bg-quantum-purple/10 rounded-md">
              Policy Dashboard
            </Link>
            <div className="px-3 py-2">
              <Button asChild className="w-full">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
