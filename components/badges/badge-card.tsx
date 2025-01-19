"use client"

import { useState } from "react"
import { motion } from "framer-motion"

import { Badge } from "@/types/badges"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface BadgeCardProps {
  badge: Badge
}

export function BadgeCard({ badge }: BadgeCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card
            className={`relative overflow-hidden transition-all duration-300 ${
              badge.earned
                ? "hover:shadow-lg hover:-translate-y-1"
                : "opacity-60 hover:opacity-80"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {badge.earned && (
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  background: isHovered
                    ? [
                        "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)",
                        "linear-gradient(45deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.2) 100%)",
                      ]
                    : "none",
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            )}
            <CardHeader className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{badge.icon}</span>
                <CardTitle className="text-base">{badge.name}</CardTitle>
              </div>
              <CardDescription>{badge.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {!badge.earned && badge.progress !== undefined && (
                <div className="space-y-2">
                  <Progress value={badge.progress} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    {badge.progress}% progress to unlock
                  </p>
                </div>
              )}
              {badge.earned && (
                <p className="text-xs text-muted-foreground">
                  Earned on {new Date(badge.earnedDate!).toLocaleDateString()}
                </p>
              )}
            </CardContent>
          </Card>
        </TooltipTrigger>
        <TooltipContent>
          <p>{badge.criteria}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

