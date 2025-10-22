import type { Metadata } from "next"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "AltruisticXAI - Quantum-AI Readiness Platform",
  description: "Empowering organizations with Quantum-AI readiness, policy intelligence, and FedRAMP compliance solutions.",
  keywords: "AI readiness, quantum security, policy intelligence, FedRAMP compliance, post-quantum cryptography",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
