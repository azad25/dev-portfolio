import { NextResponse } from 'next/server'
import type { ContactFormData } from '@/types'

export async function POST(req: Request) {
  try {
    const body: ContactFormData = await req.json()
    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    // TODO: wire up an email provider (Resend, SendGrid, Nodemailer)
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'portfolio@ferdousazad.com',
    //   to: 'ferdousazad12@gmail.com',
    //   subject: `[Portfolio] ${subject}`,
    //   text: `From: ${name} <${email}>\n\n${message}`,
    // })

    console.info('[contact]', { name, email, subject })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}
