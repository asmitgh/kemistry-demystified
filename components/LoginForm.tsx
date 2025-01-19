'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import GoogleLoginButton from './GoogleLoginButton'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleGoogleLogin = async () => {
    const result = await signIn('google', { callbackUrl: '/student-dashboard' })
    if (result?.error) {
      console.error('Google login failed:', result.error)
    }
  }

  return (
    <div>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Sign in with Google</CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-col">
          <GoogleLoginButton onClick={handleGoogleLogin} />
        </CardFooter>
      </Card>
  </div>
  )
}

