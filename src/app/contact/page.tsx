import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import InteriorPageHero from '@/components/InteriorPageHero'
import { SocialMedia } from '@/components/SocialMedia'
import { RootLayout } from '@/components/RootLayout'
import ContactForm from './ContactForm'

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Email us
      </h2>
      <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
        {[
          ['General', 'info@camelcasecollective.com'],
          ['Careers', 'hello@camelcasecollective.com'],
        ].map(([label, email]) => (
          <div key={email}>
            <dt className="font-semibold text-neutral-950">{label}</dt>
            <dd>
              <Link
                href={`mailto:${email}`}
                className="text-neutral-600 hover:text-neutral-950"
              >
                {email}
              </Link>
            </dd>
          </div>
        ))}
      </dl>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Let’s work together. We can’t wait to hear from you.',
}

export default function Contact() {
  return (
    <RootLayout>
      <InteriorPageHero eyebrow="Contact us" title="Let’s work together">
        <p>We can’t wait to hear from you.</p>
      </InteriorPageHero>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </RootLayout>
  )
}
