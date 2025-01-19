"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { jsPDF } from "jspdf"

export default function AdmissionPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    currentClass: "Class 11",
    email: "",
    phone: "",
    schoolName: "",
    address: "",
    examTargets: {
      jeeMains: false,
      jeeAdvanced: false,
      neet: false,
      boards: false,
      iiserTest: false,
      nest: false,
      sat: false,
      olympiads: false,
    },
    photo: null as File | null,
    agreeToTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    if (name === "agreeToTerms") {
      setFormData(prev => ({ ...prev, agreeToTerms: checked }))
    } else {
      setFormData(prev => ({
        ...prev,
        examTargets: { ...prev.examTargets, [name]: checked }
      }))
    }
  }

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, photo: e.target.files![0] }))
    }
  }

  const generatePDF = () => {
    const doc = new jsPDF()
    doc.setFontSize(18)
    doc.text("Kemistry Demystified® Admission Form", 20, 20)
    doc.setFontSize(12)
    doc.text(`Name: ${formData.firstName} ${formData.lastName}`, 20, 40)
    doc.text(`Email: ${formData.email}`, 20, 50)
    doc.text(`Phone: ${formData.phone}`, 20, 60)
    doc.text(`Current Class: ${formData.currentClass}`, 20, 70)
    doc.text(`School: ${formData.schoolName}`, 20, 80)
    doc.text(`Address: ${formData.address}`, 20, 90)
    doc.text("Exam Targets:", 20, 100)
    Object.entries(formData.examTargets).forEach(([exam, isChecked], index) => {
      if (isChecked) {
        doc.text(`- ${exam}`, 30, 110 + index * 10)
      }
    })
    return doc.output('datauristring')
  }

  const sendEmail = async (pdfData: string) => {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'kemistified@gmail.com',  // The email where you want to send the form data
        subject: 'New Admission Form Submission',
        text: 'Please find the attached admission form.',
        attachments: [
          {
            filename: 'admission_form.pdf',
            content: pdfData.split('base64,')[1],
            encoding: 'base64',
          },
        ],
      }),
    })
  
    if (!response.ok) {
      throw new Error('Failed to send email')
    }
  }
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const pdfData = generatePDF()
      await sendEmail(pdfData)
      
      toast({
        title: "Application Submitted",
        description: "We'll contact you soon!",
      })
      
      router.push("/terms-and-conditions")
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const steps = [
    {
      title: "Personal Information",
      fields: ["firstName", "lastName", "currentClass", "email", "phone"],
    },
    {
      title: "School Information",
      fields: ["schoolName", "address"],
    },
    {
      title: "Exam Targets",
      fields: ["examTargets"],
    },
    {
      title: "Photo Upload",
      fields: ["photo"],
    },
    {
      title: "Review and Submit",
      fields: ["agreeToTerms"],
    },
  ]

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1))
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0))

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 dark:from-background dark:to-secondary/5 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="space-y-8 mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-center">ADMISSION ENQUIRY</h1>
          <p className="text-center text-red-500 dark:text-red-400 text-lg">
            Limited Seats Left! Hurry Up and crack the exams.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {currentStep === 0 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-primary">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="bg-background border-input"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="bg-background border-input"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentClass">Currently Studying In *</Label>
                    <Input
                      id="currentClass"
                      name="currentClass"
                      value={formData.currentClass}
                      onChange={handleChange}
                      className="bg-background border-input"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-background border-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-background border-input"
                    />
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="schoolName">School Name & Address *</Label>
                    <Textarea
                      id="schoolName"
                      name="schoolName"
                      required
                      value={formData.schoolName}
                      onChange={handleChange}
                      className="bg-background border-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="bg-background border-input"
                    />
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-3">
                  <Label>Which exams are you targeting? *</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { id: "jeeMains", label: "JEE Mains" },
                      { id: "jeeAdvanced", label: "JEE Advanced" },
                      { id: "neet", label: "NEET" },
                      { id: "boards", label: "Boards" },
                      { id: "iiserTest", label: "IISER Admission Test" },
                      { id: "nest", label: "NEST" },
                      { id: "sat", label: "SAT" },
                      { id: "olympiads", label: "Olympiads" },
                    ].map((exam) => (
                      <div key={exam.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={exam.id}
                          checked={formData.examTargets[exam.id as keyof typeof formData.examTargets]}
                          onCheckedChange={(checked) => handleCheckboxChange(exam.id, checked as boolean)}
                        />
                        <label
                          htmlFor={exam.id}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {exam.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-2">
                  <Label htmlFor="photo">Upload your recent photo (image should be clearly visible with proper lighting)</Label>
                  <Input
                    id="photo"
                    name="photo"
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    className="bg-background border-input"
                  />
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Review Your Information</h3>
                    <p>Name: {formData.firstName} {formData.lastName}</p>
                    <p>Email: {formData.email}</p>
                    <p>Phone: {formData.phone}</p>
                    <p>Current Class: {formData.currentClass}</p>
                    <p>School: {formData.schoolName}</p>
                    <p>Exams: {Object.entries(formData.examTargets)
                      .filter(([_, value]) => value)
                      .map(([key]) => key)
                      .join(", ")}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => handleCheckboxChange("agreeToTerms", checked as boolean)}
                      required
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the terms & conditions
                    </label>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between">
            <Button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 0}
              variant="outline"
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
            {currentStep < steps.length - 1 ? (
              <Button type="button" onClick={nextStep}>
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button type="submit" disabled={isSubmitting || !formData.agreeToTerms} className="bg-primary text-primary-foreground hover:bg-primary/90">
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

