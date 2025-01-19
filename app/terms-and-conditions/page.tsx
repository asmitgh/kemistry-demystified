"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"

export default function TermsAndConditionsPage() {
  const router = useRouter()

  useEffect(() => {
    const formSubmitted = sessionStorage.getItem('formSubmitted')
    if (!formSubmitted) {
      router.push('/admission')
    }
  }, [router])

  const handleAccept = () => {
    sessionStorage.removeItem('formSubmitted')
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-background py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        <div className="prose dark:prose-invert">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using the services provided by Kemistry Demystified®, you agree to comply with and be bound by these Terms and Conditions.</p>

          <h2>2. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Your continued use of our services after any such changes constitutes your acceptance of the new Terms and Conditions.</p>

          <h2>3. Privacy Policy</h2>
          <p>Your use of our services is also governed by our Privacy Policy, which is incorporated into these terms by reference.</p>

          <h2>4. User Responsibilities</h2>
          <p>You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.</p>

          <h2>5. Intellectual Property</h2>
          <p>All content included on this site, such as text, graphics, logos, images, audio clips, video, data, music, software, and other material (collectively "Content") is owned or licensed property of Kemistry Demystified® or its suppliers or licensors and is protected by copyright, trademark, patent, or other proprietary rights.</p>

          <h2>6. Limitation of Liability</h2>
          <p>Kemistry Demystified® shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.</p>
        </div>
        <div className="mt-8 flex justify-center">
          <Button onClick={handleAccept}>I Accept</Button>
        </div>
      </div>
    </div>
  )
}

