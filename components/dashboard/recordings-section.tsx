"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export function RecordingsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card className="p-6 bg-black/50 backdrop-blur-sm border-gray-800">
        <h3 className="text-xl font-semibold text-white mb-4">Latest Recordings</h3>
        <div className="aspect-video rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/zZCWgaOdJA0"
            title="Kemistry Demystified Lecture"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="border-0"
          />
        </div>
      </Card>
    </motion.div>
  )
}

