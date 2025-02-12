"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Bot, Sparkles, Brain, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const aiModels = [
  {
    name: "ChatGPT",
    icon: Bot,
    color: "from-blue-400/40 to-blue-600/40",
    description:
      "OpenAI's language model, capable of engaging in human-like conversations and assisting with various tasks.",
  },
  {
    name: "Claude AI",
    icon: Brain,
    color: "from-slate-400/40 to-slate-600/40",
    description: "Anthropic's AI assistant, known for its strong reasoning capabilities and ethical considerations.",
  },
  {
    name: "Gemini",
    icon: Sparkles,
    color: "from-zinc-400/40 to-zinc-600/40",
    description: "Google's multimodal AI model, adept at understanding and generating text, images, and more.",
  },
  {
    name: "ResearchGPT",
    icon: Zap,
    color: "from-gray-400/40 to-gray-600/40",
    description: "Our specialized AI for transforming research papers into engaging content formats.",
  },
]

export function Examples() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section className="py-20 bg-black/[0.96] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        >
          AI Research <span className="text-blue-400">Assistants</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aiModels.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-white/10 h-full transition-all duration-300 group-hover:border-white/20">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${model.color} opacity-0 group-hover:opacity-20 transition-opacity rounded-lg`}
                />
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-white/5 rounded-full mr-4">
                    <model.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{model.name}</h3>
                </div>
                <p className="text-gray-400 mb-4">{model.description}</p>
                <Button
                  variant="outline"
                  className="text-blue-400 border-blue-400/20 hover:bg-blue-400/10 hover:border-blue-400/40 transition-colors"
                >
                  Learn More
                </Button>
              </div>
              {hoveredIndex === index && (
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-lg blur opacity-30 group-hover:opacity-100 transition-opacity"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.75 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
    </section>
  )
}