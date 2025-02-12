import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import { SparklesCore } from "@/components/sparkles"
import { HowItWorks } from "@/components/how-it-works"
import { Examples } from "@/components/examples"
import { Pricing } from "@/components/pricing"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* Ambient background with moving particles */}
      <div className="h-full w-full absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <div id="features">{/* Add your Features section here */}</div>
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="examples">
          <Examples />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <Footer />
      </div>
    </main>
  )
}

