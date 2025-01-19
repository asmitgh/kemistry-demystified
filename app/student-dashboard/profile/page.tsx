"use client"

import { useState } from "react"
import Image from "next/image"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Award, Clock, Flame, GraduationCap, Trophy, Users } from 'lucide-react'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const mockData = {
  testScores: [
    { test: "Test 1", physics: 85, chemistry: 78, mathematics: 92 },
    { test: "Test 2", physics: 88, chemistry: 82, mathematics: 88 },
    { test: "Test 3", physics: 92, chemistry: 85, mathematics: 95 },
    { test: "Test 4", physics: 90, chemistry: 88, mathematics: 91 },
  ],
  badges: [
    { name: "Physics Master", description: "Completed all Physics modules with >90% score", icon: "🔬" },
    { name: "Chemistry Pro", description: "Solved 500+ Chemistry problems", icon: "⚗️" },
    { name: "Math Wizard", description: "Achieved perfect score in 3 Math tests", icon: "📐" },
    { name: "Consistent Learner", description: "Maintained a 30-day study streak", icon: "📚" },
  ],
  subjects: [
    { name: "Physics", progress: 85 },
    { name: "Chemistry", progress: 78 },
    { name: "Mathematics", progress: 92 },
    { name: "Biology", progress: 88 },
  ]
}

export default function ProfilePage() {
  const [streak, setStreak] = useState(15)

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="h-20 w-20 rounded-full overflow-hidden border-2 border-primary">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=256&h=256&q=80"
                alt="Profile"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 rounded-full bg-green-500 p-1.5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Aarav Gupta</h1>
            <p className="text-muted-foreground">Level 5: Aspiring Topper</p>
            <p className="text-sm text-primary">Dream Big. Work Hard. Achieve More.</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Users className="h-4 w-4" />
            View Batch
          </Button>
          <Button className="gap-2">
            <GraduationCap className="h-4 w-4" />
            Take Test
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Rank</CardTitle>
            <Trophy className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">#5</div>
            <p className="text-xs text-muted-foreground">
              in Physics (Top 2%)
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
            <Flame className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{streak} days</div>
            <p className="text-xs text-muted-foreground">
              Keep it up! 5 days to new badge
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tests Completed</CardTitle>
            <Award className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">
              Avg. score: 88%
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Test</CardTitle>
            <Clock className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2d 4h</div>
            <p className="text-xs text-muted-foreground">
              Physics Mock Test
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={mockData.testScores}
                      margin={{
                        top: 5,
                        right: 10,
                        left: 10,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="test" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="physics" stroke="#3b82f6" />
                      <Line type="monotone" dataKey="chemistry" stroke="#a855f7" />
                      <Line type="monotone" dataKey="mathematics" stroke="#22c55e" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Subject Progress</CardTitle>
                <CardDescription>
                  Your current progress across subjects
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockData.subjects.map((subject) => (
                  <div key={subject.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">
                          {subject.name}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {subject.progress}%
                      </span>
                    </div>
                    <Progress value={subject.progress} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {mockData.badges.map((badge) => (
              <Card key={badge.name}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{badge.icon}</span>
                    <CardTitle className="text-base">{badge.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {badge.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="achievements" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Trophy className="h-8 w-8 text-yellow-500" />
                  <div>
                    <p className="font-medium">Physics Champion</p>
                    <p className="text-sm text-muted-foreground">
                      Ranked #1 in Physics Weekly Test
                    </p>
                  </div>
                  <Badge variant="secondary" className="ml-auto">
                    Today
                  </Badge>
                </div>
                <div className="flex items-center gap-4">
                  <Flame className="h-8 w-8 text-orange-500" />
                  <div>
                    <p className="font-medium">15 Day Streak</p>
                    <p className="text-sm text-muted-foreground">
                      Consistent study streak maintained
                    </p>
                  </div>
                  <Badge variant="secondary" className="ml-auto">
                    2d ago
                  </Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Milestones</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">20 Day Study Streak</p>
                    <span className="text-sm text-muted-foreground">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Complete Physics Module</p>
                    <span className="text-sm text-muted-foreground">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Weekly Study Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={[
                        { day: "Mon", hours: 4 },
                        { day: "Tue", hours: 6 },
                        { day: "Wed", hours: 5 },
                        { day: "Thu", hours: 7 },
                        { day: "Fri", hours: 5 },
                        { day: "Sat", hours: 8 },
                        { day: "Sun", hours: 6 },
                      ]}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="hours" stroke="#a855f7" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Time Distribution</CardTitle>
                <CardDescription>
                  Hours spent per subject this week
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { subject: "Physics", hours: 12 },
                  { subject: "Chemistry", hours: 10 },
                  { subject: "Mathematics", hours: 15 },
                  { subject: "Biology", hours: 8 },
                ].map((item) => (
                  <div key={item.subject} className="flex items-center justify-between">
                    <p className="text-sm font-medium">{item.subject}</p>
                    <p className="text-sm text-muted-foreground">{item.hours}h</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

