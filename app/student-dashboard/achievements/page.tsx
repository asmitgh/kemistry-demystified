"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BadgeCard } from "@/components/badges/badge-card"
import { badges, BADGE_CATEGORIES } from "@/lib/badges"
import { Badge as BadgeType } from "@/types/badges"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AchievementsPage() {
  const [filter, setFilter] = useState<string>("all")
  
  const filteredBadges = badges.filter(
    badge => filter === "all" || badge.category === filter
  )

  const earnedCount = badges.filter(b => b.earned).length
  const totalCount = badges.length
  const earnedPercentage = Math.round((earnedCount / totalCount) * 100)

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Achievements</h2>
          <p className="text-muted-foreground">
            You've earned {earnedCount} out of {totalCount} badges ({earnedPercentage}%)
          </p>
        </div>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {Object.entries(BADGE_CATEGORIES).map(([key, value]) => (
              <SelectItem key={key} value={key}>
                {value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6">
        {Object.entries(BADGE_CATEGORIES).map(([category, title]) => {
          const categoryBadges = filteredBadges.filter(
            badge => filter === "all" || badge.category === category
          )
          
          if (categoryBadges.length === 0) return null

          return (
            <Card key={category}>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>
                  {categoryBadges.filter(b => b.earned).length} of{" "}
                  {categoryBadges.length} badges earned
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {categoryBadges.map((badge) => (
                    <BadgeCard key={badge.id} badge={badge} />
                  ))}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

