"use client"

import { useState } from "react"
import { FileText, ExternalLink } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

interface PDFViewerProps {
  title: string
  pdfUrl: string
  driveUrl: string
  onClose: () => void
  open: boolean
}

export function PDFViewer({
  title,
  pdfUrl,
  driveUrl,
  onClose,
  open,
}: PDFViewerProps) {
  const [viewType, setViewType] = useState<"pdf" | "drive">("pdf")

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[80vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>{title}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(driveUrl, "_blank")}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Open in Drive
            </Button>
          </DialogTitle>
        </DialogHeader>
        <Tabs
          value={viewType}
          onValueChange={(v) => setViewType(v as "pdf" | "drive")}
          className="flex-1"
        >
          <TabsList>
            <TabsTrigger value="pdf">
              <FileText className="h-4 w-4 mr-2" />
              PDF View
            </TabsTrigger>
            <TabsTrigger value="drive">
              <ExternalLink className="h-4 w-4 mr-2" />
              Drive View
            </TabsTrigger>
          </TabsList>
          <TabsContent value="pdf" className="flex-1 mt-0">
            <div className="w-full h-full border rounded-lg overflow-hidden">
              <iframe
                src={pdfUrl}
                className="w-full h-full"
                title={`PDF viewer for ${title}`}
              />
            </div>
          </TabsContent>
          <TabsContent value="drive" className="flex-1 mt-0">
            <div className="w-full h-full border rounded-lg overflow-hidden">
              <iframe
                src={driveUrl}
                className="w-full h-full"
                title={`Google Drive viewer for ${title}`}
              />
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

