"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Home, BookOpen, FileText, Book, Video, HelpCircle, BarChart2, Bell, Award, ClipboardList, CreditCard, Settings, LifeBuoy } from 'lucide-react'

const sidebarItems = [
  { title: "Home", icon: Home, href: "/student-dashboard" },
  { title: "My Courses", icon: BookOpen, href: "/student-dashboard/courses" },
  { title: "Test Series", icon: FileText, href: "/student-dashboard/tests" },
  { title: "Study Materials", icon: Book, href: "/student-dashboard/materials" },
  { title: "Live Classes", icon: Video, href: "/student-dashboard/live-classes" },
  { title: "Doubt Solving", icon: HelpCircle, href: "/student-dashboard/doubts" },
  { title: "Progress Tracker", icon: BarChart2, href: "/student-dashboard/progress" },
  { title: "Notifications", icon: Bell, href: "/student-dashboard/notifications" },
  { title: "Achievements", icon: Award, href: "/student-dashboard/achievements" },
  { title: "Assignments & Homework", icon: ClipboardList, href: "/student-dashboard/assignments" },
  { title: "Payment & Subscription", icon: CreditCard, href: "/student-dashboard/payments" },
  { title: "Settings", icon: Settings, href: "/student-dashboard/settings" },
  { title: "Support", icon: LifeBuoy, href: "/student-dashboard/support" },
  { title: "Class Recordings", icon: Video, href: "/student-dashboard/recordings" },
]

function SidebarContent() {
  const pathname = usePathname()

  return (
    <ScrollArea className="h-[calc(100vh-4rem)]">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            {sidebarItems.map((item) => (
              <Button
                key={item.href}
                variant={pathname === item.href ? "secondary" : "ghost"}
                className="w-full justify-start"
                asChild
              >
                <Link href={item.href}>
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.title}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </ScrollArea>
  )
}

export function StudentDashboardSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="ml-2">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SidebarContent />
      </SheetContent>
    </Sheet>
  )
}

