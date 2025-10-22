import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Terminal from "@/components/ui/retro/Terminal";
import WebScraperTerminal from "@/components/explore/WebScraperTerminal";
import Navbar from "@/components/ui/layout/Navbar";
import Footer from "@/components/ui/layout/Footer";
import {
  ArrowRight,
  Database,
  LineChart,
  Users,
  Zap,
  Target,
  Bot,
  BarChart3,
  Puzzle,
  Shield,
  Building2,
  ChevronDown,
} from "lucide-react";
import PlaybookCard from "@/components/playbook/PlaybookCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const terminalLines = [
  "Initializing Quantum/AI Consultancy Platform...",
  "Loading quantum computing frameworks...",
  "Connecting to research partnerships...",
  "Scanning public sector implementation protocols...",
  "Analyzing organizational readiness for quantum technologies...",
  "Establishing quantum-safe cryptography protocols...",
  "Syncing with institutional databases...",
  "System ready. Empowering practical quantum/AI adoption.",
];

const features = [
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Policy Workflow Tools",
    description:
      "Help legislative teams draft policies faster with AI assistance, track changes automatically, and manage stakeholder input more efficiently.",
    tag: "<PolicyEngine />",
  },
  {
    icon: <Database className="h-10 w-10 text-primary" />,
    title: "Quantum-Ready Security",
    description:
      "Prepare your data systems for quantum computing threats with security assessments, upgrade plans, and step-by-step migration support.",
    tag: "<QuantumShield />",
  },
  {
    icon: <LineChart className="h-10 w-10 text-primary" />,
    title: "Smart AI Integration",
    description:
      "Add AI capabilities to your organization without disrupting operations—from readiness checks to custom AI assistants that fit your workflow.",
    tag: "<AIConsultant />",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Proposal Assistant",
    description:
      "Speed up bid writing for RFPs and government contracts with AI-powered drafting, competitive analysis, and automated compliance checking.",
    tag: "<PitchOptimizer />",
  },
];

const playbooks = [
  {
    id: "strategy",
    category: "Strategy",
    icon: <Target className="h-6 w-6 text-primary" />,
    title: "AI Strategy & Readiness Audit",
    description:
      "Assess AI maturity, identify automation opportunities, and create strategic roadmaps for enterprise AI adoption.",
    deliverables: 4,
    templates: 8,
    color: "bg-blue-500/10",
    route: "/playbooks/strategy",
  },
  {
    id: "automation",
    category: "Automation",
    icon: <Bot className="h-6 w-6 text-primary" />,
    title: "AI Automation & RPA",
    description: "Design and implement workflow automation using LLMs and RPA tools for operational efficiency.",
    deliverables: 5,
    templates: 12,
    color: "bg-purple-500/10",
    route: "/playbooks/automation",
  },
  {
    id: "analytics",
    category: "Analytics",
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
    title: "Data Analytics & Predictive Modeling",
    description: "Build data pipelines, create predictive models, and deliver actionable insights through dashboards.",
    deliverables: 6,
    templates: 10,
    color: "bg-green-500/10",
    route: "/playbooks/analytics",
  },
  {
    id: "integration",
    category: "Integration",
    icon: <Puzzle className="h-6 w-6 text-primary" />,
    title: "Custom LLM Assistant Integration",
    description: "Deploy tailored AI assistants integrated with client systems using LangChain and OpenAI.",
    deliverables: 4,
    templates: 7,
    color: "bg-orange-500/10",
    route: "/playbooks/integration",
  },
  {
    id: "governance",
    category: "Governance",
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "AI Governance & Compliance",
    description:
      "Establish ethical frameworks, risk management, and compliance standards for responsible AI deployment.",
    deliverables: 5,
    templates: 9,
    color: "bg-red-500/10",
    route: "/playbooks/governance",
  },
  {
    id: "industry",
    category: "Industry",
    icon: <Building2 className="h-6 w-6 text-primary" />,
    title: "Industry AI Modules",
    description:
      "Specialized playbooks for real estate, e-commerce, legal tech, and other industry-specific AI solutions.",
    deliverables: 8,
    templates: 15,
    color: "bg-teal-500/10",
    route: "/playbooks/industry",
  },
];

const Index = () => {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const heroRef = useRef<HTMLDivElement>(null);
  const [showScraper, setShowScraper] = useState(false);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      if (heroRef.current?.contains(e.target as Node) && (e.target as HTMLElement).closest(".terminal-container")) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  const toggleScraperTerminal = () => {
    setShowScraper((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section - Enhanced 3D */}
      <motion.section
        ref={heroRef}
        className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-24 lg:py-32 px-3 sm:px-4 relative overflow-hidden"
        style={{
          opacity: heroOpacity,
          scale: heroScale,
        }}
      >
        {/* 3D Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl"
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl"
            animate={{
              y: [0, 40, 0],
              x: [0, -30, 0],
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/50 pointer-events-none" />

        <motion.div
          className="container mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Status Badge with 3D Effect */}
          <motion.div
            className="inline-block mb-3 sm:mb-4 px-2.5 sm:px-3 py-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full border border-primary/30 shadow-lg shadow-primary/20"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(var(--primary), 0.3)" }}
            style={{ transformStyle: "preserve-3d", transform: "translateZ(20px)" }}
          >
            <span className="text-primary text-xs sm:text-sm font-mono">&lt;Experiment status="active" /&gt;</span>
          </motion.div>

          {/* Hero Title with Enhanced 3D */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 max-w-4xl mx-auto leading-tight px-2"
            style={{
              transformStyle: "preserve-3d",
              textShadow: "0 10px 30px rgba(0,0,0,0.3)",
            }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.span
              className="glitch-logo inline-block"
              data-text="B2B Consultancy"
              style={{ willChange: "text-shadow" }}
              animate={{
                textShadow: [
                  "0 0 20px rgba(var(--primary), 0.5)",
                  "0 0 40px rgba(var(--primary), 0.8)",
                  "0 0 20px rgba(var(--primary), 0.5)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="shimmer-text bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                B2B Consultancy
              </span>
            </motion.span>{" "}
            For The{" "}
            <motion.span
              className="text-accent"
              animate={{
                textShadow: [
                  "0 0 20px rgba(var(--accent), 0.5)",
                  "0 0 40px rgba(var(--accent), 0.8)",
                  "0 0 20px rgba(var(--accent), 0.5)",
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Quantum-AI Era
            </motion.span>
          </motion.h1>

          <div className="max-w-3xl mx-auto mb-6 sm:mb-8 px-3 space-y-3">
            <motion.p
              className="text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed backdrop-blur-sm bg-background/30 p-4 rounded-lg border border-primary/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02, borderColor: "rgba(var(--primary), 0.3)" }}
            >
              <span className="text-primary font-semibold">AltruisticXAI</span> helps organizations adapt to quantum
              computing and AI through practical consulting—think of it as a testbed for emerging technology adoption.
            </motion.p>
            <motion.p
              className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed backdrop-blur-sm bg-background/20 p-3 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              We work with government agencies, legislative bodies, and businesses to streamline workflows, secure
              infrastructure for the quantum era, and deploy AI systems that actually work. Each project helps us refine
              proven, reusable solutions.
            </motion.p>
          </div>

          {/* CTA Buttons with 3D Effects */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 md:mb-16 px-3">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Link
                to="/dashboard"
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-md font-medium hover:shadow-2xl hover:shadow-primary/50 transition-all w-full sm:w-auto text-sm sm:text-base text-center block"
                style={{ transform: "translateZ(10px)" }}
              >
                Explore Dashboard
              </Link>
            </motion.div>
            <motion.button
              onClick={toggleScraperTerminal}
              className="text-foreground hover:text-primary transition-colors w-full sm:w-auto text-sm sm:text-base py-2.5 px-4 rounded-md border border-primary/20 hover:border-primary/50 hover:bg-primary/5"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {showScraper ? "Hide AI Tools" : "Try AI Tools"}
            </motion.button>
          </div>

          <div className="w-full px-2 sm:px-4 terminal-container">
            {showScraper ? (
              <motion.div
                className="max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <WebScraperTerminal />
              </motion.div>
            ) : (
              <motion.div
                className="max-w-xl mx-auto"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Terminal lines={terminalLines} typingSpeed={20} />
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section
        id="features"
        className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 bg-gradient-to-b from-background to-secondary"
      >
        <div className="container mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 px-2">
            <div className="inline-block mb-4 px-3 py-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full border border-primary/30">
              <span className="text-xs sm:text-sm font-mono text-primary">const features = [ ]</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">What We Help With</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Each service is designed to be practical and reusable, tested through real projects and refined for
              reliability.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-none mb-4">
                <AccordionTrigger className="glass-morphism hover:no-underline p-4 sm:p-5 md:p-6 rounded-lg border-2 border-transparent hover:border-primary/30 transition-all duration-300 group [&[data-state=open]]:border-primary/50 [&[data-state=open]]:shadow-lg [&[data-state=open]]:shadow-primary/20 perspective-1000">
                  <div className="flex items-center gap-3 sm:gap-4 w-full text-left transform-style-3d group-hover:translate-z-2">
                    {/* React Component Tag */}
                    <div className="px-2 sm:px-3 py-1 bg-gradient-to-r from-primary to-accent rounded text-[10px] sm:text-xs font-mono text-white shadow-lg whitespace-nowrap">
                      {feature.tag}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold group-hover:text-primary transition-colors truncate">
                        {feature.title}
                      </h3>
                    </div>

                    <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {feature.icon}
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="pt-4 px-4 sm:px-6 pb-2">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="glass-morphism p-4 sm:p-5 rounded-lg bg-gradient-to-br from-primary/5 via-transparent to-accent/5 border border-primary/20"
                  >
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>

                    {/* 3D Corner Accent */}
                    <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-primary/30 to-transparent rounded-tl-full transform translate-x-2 translate-y-2" />
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Playbook Cards Section - Compact 3D */}
      <section className="py-8 sm:py-12 md:py-16 px-3 sm:px-4 bg-gradient-to-b from-secondary to-primary/5">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            className="text-center mb-6 sm:mb-8 px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-3 px-3 py-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full border border-primary/30">
              <span className="text-xs sm:text-sm font-mono text-primary">const playbooks = [ ]</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Core Playbook Modules</h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
              Six comprehensive playbooks covering the full spectrum of AI consultancy services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {playbooks.map((playbook, index) => (
              <PlaybookCard key={playbook.id} {...playbook} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 bg-primary/5">
        <div className="container mx-auto">
          <motion.div
            className="glass-morphism p-6 sm:p-8 md:p-12 lg:p-16 rounded-lg text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2">
              <span className="font-mono text-primary text-lg sm:text-xl">&lt;</span>
              Ready to Get Started?
              <span className="font-mono text-primary text-lg sm:text-xl"> /&gt;</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-3">
              Explore our platform and see how we can help your organization adapt to new technologies without the
              complexity.
            </p>
            <Link
              to="/dashboard"
              className="inline-flex items-center bg-primary text-primary-foreground px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-md font-medium hover:bg-primary/90 transition-colors text-sm sm:text-base"
            >
              Get Started <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
