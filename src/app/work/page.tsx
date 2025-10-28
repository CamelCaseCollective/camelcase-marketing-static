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
        title="A selection of recent collaborations with media and content-driven businesses."
      >
        <p>
          We build scalable, content-first platforms that prioritize growth,
          performance, editorial experience, and seamless integration.
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
