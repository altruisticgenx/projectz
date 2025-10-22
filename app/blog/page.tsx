import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, User } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const blogPosts = [
    {
      slug: "nist-pqc-standards-2024",
      title: "NIST Finalizes Post-Quantum Cryptography Standards: What You Need to Know",
      excerpt: "The National Institute of Standards and Technology has released the first set of post-quantum cryptographic standards. Here's how organizations should respond.",
      author: "Inga Kaltak",
      date: "October 15, 2024",
      category: "Quantum Security",
      readTime: "8 min read"
    },
    {
      slug: "ai-executive-order-implementation",
      title: "Implementing the AI Executive Order: A Practical Guide",
      excerpt: "Federal agencies are beginning to implement AI safety requirements. Learn what this means for contractors and how to prepare.",
      author: "Inga Kaltak",
      date: "October 10, 2024",
      category: "AI Policy",
      readTime: "10 min read"
    },
    {
      slug: "fedramp-20-changes",
      title: "FedRAMP 2.0: Key Changes and What They Mean for Your Authorization",
      excerpt: "The FedRAMP program is evolving. Understand the changes and how they impact your path to cloud authorization.",
      author: "Inga Kaltak",
      date: "October 5, 2024",
      category: "Compliance",
      readTime: "6 min read"
    },
    {
      slug: "zero-trust-architecture-guide",
      title: "Zero Trust Architecture: A Comprehensive Implementation Guide",
      excerpt: "Moving from perimeter-based security to zero trust requires careful planning. This guide covers the essential steps.",
      author: "Inga Kaltak",
      date: "September 28, 2024",
      category: "Cybersecurity",
      readTime: "12 min read"
    }
  ]

  const categories = [
    "All Posts",
    "Quantum Security",
    "AI Policy",
    "Compliance",
    "Cybersecurity",
    "Industry News"
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-quantum-purple/10 to-quantum-blue/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Insights & Analysis
            </h1>
            <p className="text-xl text-gray-600">
              Expert perspectives on quantum security, AI policy, and compliance in the rapidly 
              evolving technology landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button 
                key={category}
                variant={category === "All Posts" ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-quantum-purple/10 text-quantum-purple rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl mb-2 hover:text-quantum-purple transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-base">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-quantum-purple hover:underline flex items-center"
                    >
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-quantum-purple/10 to-quantum-blue/10">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-2">Stay Informed</CardTitle>
              <CardDescription className="text-base">
                Subscribe to our newsletter for weekly insights on quantum security, AI policy, and compliance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="max-w-md mx-auto flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-quantum-purple focus:border-transparent"
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
