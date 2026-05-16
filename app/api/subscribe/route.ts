import { NextRequest, NextResponse } from 'next/server'

// Replace this stub with your email platform of choice:
// Resend → https://resend.com/docs
// Mailchimp → https://mailchimp.com/developer
// ConvertKit → https://developers.convertkit.com
// Beehiiv → https://developers.beehiiv.com

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'That email address doesn\'t look right.' }, { status: 400 })
    }

    // ── Plug in your email platform here ──────────────────────────────────
    // Example (Resend):
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.contacts.create({ email, audienceId: process.env.RESEND_AUDIENCE_ID! })
    // ──────────────────────────────────────────────────────────────────────

    console.log(`New subscriber: ${email}`)

    return NextResponse.json(
      { message: "You're in! Check your inbox for a confirmation." },
      { status: 200 },
    )
  } catch {
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
