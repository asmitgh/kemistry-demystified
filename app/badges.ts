import { Badge, BadgeCategory } from "@/types/badges"

export const BADGE_CATEGORIES: Record<BadgeCategory, string> = {
  academic: "Academic Excellence",
  consistency: "Consistency and Effort",
  competitive: "Competitive Spirit",
  engagement: "Engagement and Participation",
  milestone: "Special Milestones"
}

export const badges: Badge[] = [
  {
    id: "physics-master",
    name: "Physics Master",
    description: "Achieved 90%+ accuracy in 10 consecutive Physics mock tests",
    category: "academic",
    icon: "⚡",
    criteria: "Score 90%+ in 10 consecutive Physics tests",
    progress: 80,
    earned: true,
    earnedDate: "2024-01-15",
    color: "blue"
  },
  {
    id: "chemistry-wizard",
    name: "Chemistry Wizard",
    description: "Scored full marks in Organic Chemistry quiz",
    category: "academic",
    icon: "🧪",
    criteria: "Score 100% in any Organic Chemistry quiz",
    earned: false,
    progress: 60,
    color: "purple"
  },
  // Add all other badges similarly...
]

export function getBadgeProgress(badge: Badge): number {
  if (badge.earned) return 100
  return badge.progress || 0
}

export function getNextBadgeToEarn(badges: Badge[]): Badge | null {
  const inProgressBadges = badges
    .filter(b => !b.earned && b.progress)
    .sort((a, b) => (b.progress || 0) - (a.progress || 0))
  
  return inProgressBadges[0] || null
}

