import { useState } from 'react'
import Head from 'next/head'
import { motion, AnimatePresence } from 'framer-motion'

interface SolutionStep {
  step_number: number
  mathematical_step: string
  explanation: string
  concept?: string
}

interface SolutionResponse {
  original_question: string
  steps: SolutionStep[]
  final_answer: string
}

export default function Home() {
  const [question, setQuestion] = useState('')
  const [solution, setSolution] = useState<SolutionResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const exampleProblems = [
    '2*x + 3*x',
    'x**2 - 5*x + 6',
    '(x + 2)*(x - 3)',
    'Eq(2*x + 1, 5)',
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim()) return

    setLoading(true)
    setError('')
    setSolution(null)

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
      const response = await fetch(`${apiUrl}/solve`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: question.trim() }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.detail || 'Failed to solve problem')
      }

      const data: SolutionResponse = await response.json()
      setSolution(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const loadExample = (example: string) => {
    setQuestion(example)
    setSolution(null)
    setError('')
  }

  return (
    <>
      <Head>
        <title>Transparent AI Tutoring Assistant</title>
        <meta name="description" content="AI-powered math tutoring with step-by-step explanations" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              🧮 Transparent AI Tutor
            </h1>
            <p className="text-xl text-gray-600">
              See every step. Understand the why. Learn with confidence.
            </p>
          </motion.div>

          {/* Input Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl shadow-xl p-8 mb-8"
          >
            <form onSubmit={handleSubmit}>
              <label htmlFor="question" className="block text-lg font-semibold text-gray-700 mb-3">
                Enter a math problem:
              </label>
              <div className="flex gap-3">
                <input
                  id="question"
                  type="text"
                  className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-lg"
                  placeholder="e.g., 2*x + 3*x or x**2 - 5*x + 6"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading || !question.trim()}
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Solving...
                    </span>
                  ) : (
                    'Solve'
                  )}
                </button>
              </div>
            </form>

            {/* Example Problems */}
            <div className="mt-6">
              <p className="text-sm text-gray-600 mb-2">Try these examples:</p>
              <div className="flex flex-wrap gap-2">
                {exampleProblems.map((example, idx) => (
                  <button
                    key={idx}
                    onClick={() => loadExample(example)}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors"
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Error Message */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-8"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚠️</span>
                  <div>
                    <h3 className="font-semibold text-red-800 mb-1">Error</h3>
                    <p className="text-red-700">{error}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Solution Display */}
          <AnimatePresence>
            {solution && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                {/* Original Question */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                    Problem
                  </h2>
                  <p className="text-2xl font-mono text-gray-900">
                    {solution.original_question}
                  </p>
                </div>

                {/* Steps */}
                <div className="space-y-4">
                  {solution.steps.map((step, index) => (
                    <motion.div
                      key={step.step_number}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 }}
                      className="bg-white rounded-xl shadow-lg p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                          {step.step_number}
                        </div>
                        <div className="flex-1">
                          {step.concept && (
                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-3">
                              {step.concept}
                            </span>
                          )}
                          <div className="bg-gray-50 rounded-lg p-4 mb-4">
                            <p className="text-lg font-mono text-gray-900">
                              {step.mathematical_step}
                            </p>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-xl">💡</span>
                            <p className="text-gray-700 leading-relaxed">
                              {step.explanation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Final Answer */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: solution.steps.length * 0.15 }}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-xl p-8 text-white"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">✓</span>
                    <h2 className="text-2xl font-bold">Final Answer</h2>
                  </div>
                  <p className="text-3xl font-mono font-bold">
                    {solution.final_answer}
                  </p>
                </motion.div>

                {/* Feedback Section */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: solution.steps.length * 0.15 + 0.2 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <p className="text-center text-gray-600 mb-4">
                    Did this explanation help you understand?
                  </p>
                  <div className="flex justify-center gap-4">
                    <button className="px-6 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors font-semibold">
                      👍 Yes, it helped!
                    </button>
                    <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-semibold">
                      👎 Could be better
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center text-gray-600"
          >
            <p className="text-sm">
              Built with transparency in mind • Powered by AI & SymPy
            </p>
          </motion.div>
        </div>
      </main>
    </>
  )
}
