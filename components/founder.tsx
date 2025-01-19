"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function Founder() {
  return (
    <section className="container mx-auto py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div 
            className="relative aspect-square rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-V6XMzIEsmemTiEenR1SjKmbLoh9tMb.png"
              alt="Founder of Kemistry Demystified"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet Our Founder
            </h2>
            <p className="text-lg text-muted-foreground">
              With over two decades of experience in Chemistry education, our founder
              has helped thousands of students achieve their dreams of getting into
              top institutions like IITs, NITs, and AIIMS.
            </p>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="grid gap-1">
                    <h3 className="text-xl font-semibold">18+ Years</h3>
                    <p className="text-sm text-muted-foreground">
                      Of Excellence in Chemistry Education
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="grid gap-1">
                    <h3 className="text-xl font-semibold">10,000+</h3>
                    <p className="text-sm text-muted-foreground">
                      Students Mentored Successfully
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

