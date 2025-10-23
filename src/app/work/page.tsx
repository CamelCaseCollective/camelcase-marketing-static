import { type Metadata } from 'next'

import CallToAction from '@/components/blocks/CallToAction'
import CaseStudies from '@/components/blocks/CaseStudies'
import InteriorPageHero from '@/components/InteriorPageHero'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Work() {
  return (
    <RootLayout>
      <InteriorPageHero
        eyebrow="Our work"
        title="Proven solutions for real-world problems."
      >
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients. The primary way we do that is by re-using
          the same five projects we&apos;ve been developing for the past decade.
        </p>
      </InteriorPageHero>

      <CaseStudies />

      <CallToAction
        headline="Ready to level up your stack?"
        description="Partner with us to design smarter systems built for scale."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </RootLayout>
  )
}
