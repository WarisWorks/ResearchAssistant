"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

const plans = [
  {
    name: "Basic",
    monthlyPrice: 29,
    yearlyPrice: 261,
    features: [
      "5 AI-powered summaries per month",
      "Basic visualization tools",
      "Email support",
      "Access to ResearchGPT",
    ],
    notIncluded: ["Advanced AI models", "Unlimited summaries", "Priority support"],
  },
  {
    name: "Pro",
    monthlyPrice: 79,
    yearlyPrice: 711,
    features: [
      "Unlimited AI-powered summaries",
      "Advanced visualization tools",
      "Priority email & chat support",
      "Access to all AI models",
      "Custom branding",
    ],
    notIncluded: ["API access", "Dedicated account manager"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "All Pro features",
      "API access for integration",
      "Dedicated account manager",
      "Custom AI model training",
      "On-premise deployment options",
    ],
    notIncluded: [],
  },
]

const PriceDisplay = ({ price, period }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="flex items-end"
  >
    <span className="text-4xl font-bold text-blue-400">$</span>
    <span className="text-5xl font-bold text-blue-400">{price}</span>
    <span className="text-lg text-gray-400 ml-2">/{period}</span>
  </motion.div>
)

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false)
  const [hoveredPlan, setHoveredPlan] = useState(null)

  return (
    <section className="py-20 bg-black/[0.96] relative overflow-hidden">
      {/* Dynamic background effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 animate-gradient-x" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full filter blur-[128px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full filter blur-[128px] animate-pulse delay-300" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        >
          Choose Your <span className="text-blue-400">Plan</span>
        </motion.h2>

        {/* Enhanced pricing toggle */}
        <motion.div 
          className="flex justify-center items-center mb-12"
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative bg-black/40 backdrop-blur-md rounded-full p-2 border border-white/10">
            <div className="flex items-center gap-4">
              <span className={`text-white px-4 py-1 rounded-full transition-colors ${!isYearly ? 'bg-blue-400/20' : ''}`}>Monthly</span>
              <Switch 
                checked={isYearly} 
                onCheckedChange={setIsYearly}
                className="data-[state=checked]:bg-blue-400"
              />
              <span className={`text-white px-4 py-1 rounded-full transition-colors ${isYearly ? 'bg-blue-400/20' : ''}`}>
                Yearly
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="ml-2 inline-flex items-center bg-blue-400 text-white text-xs font-semibold px-2 py-1 rounded-full"
                >
                  <Sparkles className="w-3 h-3 mr-1" />
                  25% off
                </motion.span>
              </span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
              onHoverStart={() => setHoveredPlan(index)}
              onHoverEnd={() => setHoveredPlan(null)}
            >
              {/* Card background with dynamic hover effect */}
              <div className="relative bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10 h-full transition-all duration-300 group-hover:border-blue-400/50">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="h-20 mb-6">
                  <AnimatePresence mode="wait">
                    {plan.price === "Custom" ? (
                      <motion.div
                        key="custom"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="text-4xl font-bold text-blue-400"
                      >
                        {plan.price}
                      </motion.div>
                    ) : (
                      <PriceDisplay
                        key={isYearly ? "yearly" : "monthly"}
                        price={isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        period={isYearly ? "year" : "month"}
                      />
                    )}
                  </AnimatePresence>
                </div>

                {/* Features */}
                <ul className="mb-8 space-y-2">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center text-gray-300"
                    >
                      <div className="flex-shrink-0 w-5 h-5 mr-2">
                        <motion.div
                          animate={{
                            scale: hoveredPlan === index ? [1, 1.2, 1] : 1,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <Check className="w-5 h-5 text-green-400" />
                        </motion.div>
                      </div>
                      {feature}
                    </motion.li>
                  ))}
                  {plan.notIncluded.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (plan.features.length + i) * 0.1 }}
                      className="flex items-center text-gray-500"
                    >
                      <X className="w-5 h-5 text-red-400 mr-2" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Button */}
                <Button 
                  className="w-full bg-blue-400 hover:bg-blue-500 text-white transition-colors relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600"
                    initial={{ x: "100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">Get Started</span>
                </Button>
              </div>

              {/* Hover effect */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-blue-400/30 to-blue-600/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
    </section>
  )
}