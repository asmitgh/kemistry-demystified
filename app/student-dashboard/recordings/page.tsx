"use client"

import { useState } from "react"
import { ChevronDown } from 'lucide-react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"

const recordings = {
  "Biology Molecular": [
    {
      title: "Introduction to Cell Biology",
      videoId: "URUJD5NEXC8",
      date: "2024-01-15",
    },
    {
      title: "Cell Structure and Function",
      videoId: "8IlzKri08kk",
      date: "2024-01-17",
    },
  ],
  "Color Theory": [
    {
      title: "Color Basics",
      videoId: "AvgCkHrcj8w",
      date: "2024-01-16",
    },
    {
      title: "Color Harmony",
      videoId: "Qj1FK8n7WgY",
      date: "2024-01-18",
    },
  ],
}

export default function RecordingsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <h2 className="text-3xl font-bold tracking-tight">Class Recordings</h2>
      <Accordion type="single" collapsible className="w-full">
        {Object.entries(recordings).map(([subject, videos]) => (
          <AccordionItem key={subject} value={subject}>
            <AccordionTrigger className="text-xl">{subject}</AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-4 md:grid-cols-2">
                {videos.map((video) => (
                  <Card key={video.videoId} className="p-4">
                    <div className="aspect-video mb-4">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${video.videoId}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg"
                      />
                    </div>
                    <h3 className="font-semibold">{video.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {new Date(video.date).toLocaleDateString()}
                    </p>
                  </Card>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

