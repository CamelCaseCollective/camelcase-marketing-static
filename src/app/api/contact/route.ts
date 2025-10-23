import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, phone, message, budget } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      )
    }

    // Map budget value to label
    const budgetLabels: Record<string, string> = {
      '25': '$25K – $50K',
      '50': '$50K – $100K',
      '100': '$100K – $150K',
      '150': 'More than $150K',
    }

    const budgetLabel = budget
      ? budgetLabels[budget] || budget
      : 'Not specified'

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'CamelCase Contact Form <website@camelcasecollective.com>',
      to: [
        'hello@camelcasecollective.com',
        'johnny@camelcasecollective.com',
        'hayden@camelcasecollective.com',
      ],
      subject: `New Work Inquiry from ${name}`,
      html: `
        <h2>New Work Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Budget:</strong> ${budgetLabel}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      text: `
New Work Inquiry

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Phone: ${phone || 'Not provided'}
Budget: ${budgetLabel}

Message:
${message}
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 },
      )
    }

    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 },
    )
  }
}
