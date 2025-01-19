"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-background">
      {/* Background Image with increased opacity */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-FTLLqXltCLTnS54CE93JGLVGxnZfLb.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.3
        }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-background/50 to-background"
      />
      
      <div className="container mx-auto relative z-10 px-4 md:px-6 xl:px-8">
        <div className="mx-auto max-w-[64rem] py-24 md:py-32 lg:py-40">
          <div className="text-center space-y-8">
            <motion.h1 
              className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Master Chemistry with
              <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent"> Confidence</span>
            </motion.h1>
            <motion.p 
              className="mt-6 text-lg leading-8 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join Kemistry Demystified® - Where 18+ years of excellence meets modern education.
              Prepare for JEE, NEET, and Boards with India's leading Chemistry experts.
            </motion.p>
            <motion.div 
              className="mt-10 flex items-center justify-center gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button size="lg">Start Learning</Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

