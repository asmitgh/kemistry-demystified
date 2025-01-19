import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const body = await req.json()
  const { to, subject, text, attachments } = body

  const transporter = nodemailer.createTransport({
    service: 'gmail',  // Using Gmail service
    auth: {
      user: "kemystified@gmail.com", // Set your Gmail account as an environment variable
      pass: "ccbp wwpr ymok oxxi", // Set your Gmail password or App Password as an environment variable
    },
  })

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER, // The email address you're sending from
      to,
      subject,
      text,
      attachments,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to send email:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
