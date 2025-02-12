"use client"

import { Button } from "@/components/ui/button"
import { Bot, Menu } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"
import type React from "react" // Added import for React

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["features", "how-it-works", "examples", "pricing"]
      const scrollPosition = window.scrollY + 100 // Add offset for better accuracy

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { top, bottom } = element.getBoundingClientRect()
          if (top <= scrollPosition && bottom > scrollPosition) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10 bg-black/50"
    >
      <Link href="/" className="flex items-center space-x-2">
        <Bot className="w-8 h-8 text-purple-500" />
        <span className="text-white font-medium text-xl">ResearchAI</span>
      </Link>

      <div className="hidden md:flex items-center space-x-8">
        <NavLink href="#features" active={activeSection === "features"} onClick={() => scrollToSection("features")}>
          Features
        </NavLink>
        <NavLink
          href="#how-it-works"
          active={activeSection === "how-it-works"}
          onClick={() => scrollToSection("how-it-works")}
        >
          How it Works
        </NavLink>
        <NavLink href="#examples" active={activeSection === "examples"} onClick={() => scrollToSection("examples")}>
          Examples
        </NavLink>
        <NavLink href="#pricing" active={activeSection === "pricing"} onClick={() => scrollToSection("pricing")}>
          Pricing
        </NavLink>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <Button variant="ghost" className="text-white hover:text-purple-400">
          Sign In
        </Button>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button>
      </div>

      <Button variant="ghost" size="icon" className="md:hidden text-white">
        <Menu className="w-6 h-6" />
      </Button>
    </motion.nav>
  )
}

function NavLink({
  href,
  children,
  active,
  onClick,
}: { href: string; children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
      className={`text-gray-300 hover:text-white transition-colors relative group ${active ? "text-white" : ""}`}
    >
      {children}
      <span
        className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full ${active ? "w-full" : ""}`}
      />
    </a>
  )
}

