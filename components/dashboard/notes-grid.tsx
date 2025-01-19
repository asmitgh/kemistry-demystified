"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { FileText, Download } from 'lucide-react'
import { Button } from "@/components/ui/button"

const notes = [
  { title: "Organic Chemistry - Chapter 1", date: "2024-01-15" },
  { title: "Inorganic Chemistry - Periodic Table", date: "2024-01-14" },
  { title: "Physical Chemistry - Thermodynamics", date: "2024-01-13" },
  { title: "Chemical Bonding Notes", date: "2024-01-12" },
]

export function NotesGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Card className="p-6 bg-black/50 backdrop-blur-sm border-gray-800">
        <h3 className="text-xl font-semibold text-white mb-4">Recent Notes</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {notes.map((note, index) => (
            <motion.div
              key={note.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-4 bg-gray-900/50 border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="text-sm font-medium text-white">{note.title}</h4>
                      <p className="text-xs text-gray-400">{note.date}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  )
}

