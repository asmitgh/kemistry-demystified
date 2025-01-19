import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const { activityType, timestamp } = body

  // Here you would typically log this activity to a database or external service
  console.log(`Activity logged: ${activityType} at ${timestamp}`)

  // For demonstration purposes, we're just returning a success response
  return NextResponse.json({ success: true })
}

