"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Award, Star, Trophy, Zap } from 'lucide-react'

const badges = [
  {
    title: "Perfect Attendance",
    icon: Star,
    color: "text-yellow-500",
    description: "Attended all classes this month",
  },
  {
    title: "Top Performer",
    icon: Trophy,
    color: "text-purple-500",
    description: "Ranked #1 in recent test",
  },
  {
    title: "Quick Learner",
    icon: Zap,
    color: "text-blue-500",
    description: "Completed 5 chapters ahead of schedule",
  },
  {
    title: "Achievement Unlocked",
    icon: Award,
    color: "text-green-500",
    description: "Scored 100% in Chemistry test",
  },
]

export function AchievementBadges() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <Card className="p-6 bg-black/50 backdrop-blur-sm border-gray-800">
        <h3 className="text-xl font-semibold text-white mb-4">Achievements</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
            >
              <Card className="p-4 bg-gray-900/50 border-gray-700 hover:bg-gray-800/50 transition-colors">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className={`p-3 rounded-full bg-gray-800 ${badge.color}`}>
                    <badge.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-sm font-medium text-white">{badge.title}</h4>
                  <p className="text-xs text-gray-400">{badge.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  )
}

