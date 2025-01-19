"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const subjects = [
  { name: "Organic Chemistry", progress: 85, color: "bg-green-500" },
  { name: "Inorganic Chemistry", progress: 70, color: "bg-blue-500" },
  { name: "Physical Chemistry", progress: 60, color: "bg-purple-500" },
]

export function ProgressAnalysis() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Card className="p-6 bg-black/50 backdrop-blur-sm border-gray-800">
        <h3 className="text-xl font-semibold text-white mb-4">Progress Analysis</h3>
        <div className="space-y-6">
          {subjects.map((subject, index) => (
            <motion.div
              key={subject.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white">{subject.name}</span>
                  <span className="text-gray-400">{subject.progress}%</span>
                </div>
                <Progress value={subject.progress} className="bg-gray-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  )
}

