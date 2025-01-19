"use client"

import { useState } from "react"
import { Calendar, Clock, MapPin, MessageCircle } from 'lucide-react'
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const classes = [
  {
    id: 1,
    subject: "Physics",
    topic: "Quantum Mechanics",
    date: "2024-01-15",
    time: "09:00 AM",
    duration: "1h 30m",
    status: "Attended",
    location: "Room 101",
  },
  {
    id: 2,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    date: "2024-01-15",
    time: "11:00 AM",
    duration: "1h 30m",
    status: "Missed",
    location: "Room 102",
  },
  {
    id: 3,
    subject: "Mathematics",
    topic: "Calculus",
    date: "2024-01-16",
    time: "09:00 AM",
    duration: "1h 30m",
    status: "Attended",
    location: "Room 103",
  },
]

export default function AttendancePage() {
  const [filter, setFilter] = useState("all")
  
  const stats = {
    total: classes.length,
    attended: classes.filter(c => c.status === "Attended").length,
    percentage: Math.round((classes.filter(c => c.status === "Attended").length / classes.length) * 100),
  }

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Attendance</h2>
          <p className="text-muted-foreground">
            Track your class attendance and participation
          </p>
        </div>
        <div className="flex gap-2">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Subjects</SelectItem>
              <SelectItem value="physics">Physics</SelectItem>
              <SelectItem value="chemistry">Chemistry</SelectItem>
              <SelectItem value="mathematics">Mathematics</SelectItem>
            </SelectContent>
          </Select>
          <Button>Export</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="hover-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Classes</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>
        <Card className="hover-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Classes Attended</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.attended}</div>
          </CardContent>
        </Card>
        <Card className="hover-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Attendance Percentage</CardTitle>
            <div className={`text-2xl font-bold ${stats.percentage >= 75 ? 'text-green-500' : 'text-red-500'}`}>
              {stats.percentage}%
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">
              {stats.percentage >= 75 ? 'Good standing' : 'Needs improvement'}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Class History</CardTitle>
          <CardDescription>
            View all your attended and missed classes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subject</TableHead>
                <TableHead>Topic</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {classes.map((class_) => (
                <TableRow key={class_.id}>
                  <TableCell className="font-medium">{class_.subject}</TableCell>
                  <TableCell>{class_.topic}</TableCell>
                  <TableCell>
                    {format(new Date(class_.date), "MMM d, yyyy")} at {class_.time}
                  </TableCell>
                  <TableCell>{class_.duration}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {class_.location}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        class_.status === "Attended"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {class_.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Ask Doubt
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Ask a Doubt - {class_.subject}</DialogTitle>
                          <DialogDescription>
                            Ask your doubt about {class_.topic}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 pt-4">
                          <Input placeholder="Type your question here..." />
                          <Button className="w-full">Submit Question</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

