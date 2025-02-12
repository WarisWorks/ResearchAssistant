"use client"

import { motion } from "framer-motion"
import { FileText, Cpu, PenTool, Presentation } from "lucide-react"

const steps = [
  {
    icon: FileText,
    title: "Upload Research",
    description: "Simply upload your research paper or document to our platform.",
  },
  {
    icon: Cpu,
    title: "AI Analysis",
    description: "Our advanced AI analyzes and extracts key information from your paper.",
  },
  {
    icon: PenTool,
    title: "Content Generation",
    description: "The AI generates various content formats based on your research.",
  },
  {
    icon: Presentation,
    title: "Review & Publish",
    description: "Review the generated content and publish with a single click.",
  },
]

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-20 bg-black/[0.96]">
      {/* Subtle background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />
      
      {/* Ambient glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full filter blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full filter blur-[128px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
        >
          How It <span className="text-blue-400">Works</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card background with subtle hover effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-400/0 to-blue-400/0 group-hover:from-blue-400/5 group-hover:to-transparent rounded-xl transition-all duration-300" />
              
              {/* Main card content */}
              <div className="relative bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 h-full transition-all duration-300 group-hover:border-white/20">
                <div className="flex flex-col items-center text-center">
                  {/* Icon container with subtle glow */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-md transform group-hover:scale-110 transition-transform duration-300" />
                    <div className="relative flex items-center justify-center w-16 h-16 bg-black/40 rounded-full border border-white/10 group-hover:border-white/20 transition-colors">
                      <step.icon className="w-8 h-8 text-blue-400" />
                    </div>
                  </div>
                  
                  {/* Text content */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {/* Number indicator */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-400/10 rounded-full flex items-center justify-center border border-white/10">
                <span className="text-blue-400 text-sm font-medium">
                  {index + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
    </section>
  )
}