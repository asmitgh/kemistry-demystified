"use client"

import { useState } from "react"
import { FileText } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { PDFViewer } from "@/components/pdf/pdf-viewer"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const notes = [
  {
    id: 1,
    chapter: "Chapter 1: Solutions",
    subject: "Science",
    date: "2024-01-15",
    pdfUrl: "/api/pdf",
    driveUrl: "https://drive.google.com/file/d/1hUsg79oxaKfrKRTMlJI9olLI-Nxsrbeb/preview"
  },
  // Add more notes...
]

export default function NotesPage() {
  const [selectedNote, setSelectedNote] = useState<typeof notes[0] | null>(null)

  return (
    <>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <h2 className="text-3xl font-bold tracking-tight">Class Notes</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Chapter</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {notes.map((note) => (
              <TableRow key={note.id}>
                <TableCell>{note.chapter}</TableCell>
                <TableCell>{note.subject}</TableCell>
                <TableCell>{new Date(note.date).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedNote(note)}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {selectedNote && (
        <PDFViewer
          title={selectedNote.chapter}
          pdfUrl={selectedNote.pdfUrl}
          driveUrl={selectedNote.driveUrl}
          open={!!selectedNote}
          onClose={() => setSelectedNote(null)}
        />
      )}
    </>
  )
}

