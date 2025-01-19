"use client"

import Image from "next/image"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Award, BookOpen, GraduationCap, Trophy, Users } from 'lucide-react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const performanceData = [
  { month: "Jan", physics: 85, chemistry: 78, mathematics: 92 },
  { month: "Feb", physics: 88, chemistry: 82, mathematics: 88 },
  { month: "Mar", physics: 92, chemistry: 85, mathematics: 95 },
  { month: "Apr", physics: 90, chemistry: 88, mathematics: 91 },
]

const toppers = [
  {
    name: "Priya Sharma",
    score: 98,
    subject: "Physics",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&q=70",
  },
  {
    name: "Rahul Kumar",
    score: 97,
    subject: "Chemistry",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=64&h=64&q=70",
  },
  {
    name: "Anita Patel",
    score: 99,
    subject: "Mathematics",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&h=64&q=70",
  },
]

const courses = [
  {
    name: "Physics",
    progress: 85,
    chapters: 12,
    completed: 8,
  },
  {
    name: "Chemistry",
    progress: 78,
    chapters: 10,
    completed: 6,
  },
  {
    name: "Mathematics",
    progress: 92,
    chapters: 15,
    completed: 12,
  },
]

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/')
  }
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Welcome back, {session.user?.name} 👋</h2>
          <p className="text-muted-foreground">
            Here's what's happening with your studies today
          </p>
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
        <Card className="hover-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tests</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              +2 from last week
            </p>
          </CardContent>
        </Card>
        <Card className="hover-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89%</div>
            <p className="text-xs text-muted-foreground">
              +5% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="hover-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Attendance</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">95%</div>
            <p className="text-xs text-muted-foreground">
              +2% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="hover-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Rank</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">#5</div>
            <p className="text-xs text-muted-foreground">
              Top 2% of batch
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-7">
        <Card className="col-span-4 hover-card">
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="physics" 
                    stroke="#3b82f6" 
                    strokeWidth={2}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="chemistry" 
                    stroke="#8b5cf6" 
                    strokeWidth={2}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="mathematics" 
                    stroke="#10b981" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3 hover-card">
          <CardHeader>
            <CardTitle>Top Performers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {toppers.map((topper) => (
                <div key={topper.name} className="flex items-center gap-4">
                  <Image
                    src={topper.avatar || "/placeholder.svg"}
                    alt={topper.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <p className="font-medium">{topper.name}</p>
                    <p className="text-sm text-muted-foreground">{topper.subject}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{topper.score}%</p>
                    <p className="text-xs text-muted-foreground">Score</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.name} className="hover-card">
            <CardHeader>
              <CardTitle>{course.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Progress</p>
                  <p className="text-sm font-medium">{course.progress}%</p>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>
              <div className="flex items-center justify-between text-sm">
                <p className="text-muted-foreground">
                  {course.completed} of {course.chapters} chapters
                </p>
                <Button variant="ghost" size="sm">
                  Continue
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

