import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import CallToAction from '@/components/blocks/CallToAction'
import HomepageHero from '@/components/HomepageHero'
import { Testimonial } from '@/components/Testimonial'

import { RootLayout } from '@/components/RootLayout'
import Clients from '@/components/homepage/blocks/Clients'
import Services from '@/components/homepage/blocks/Services'

export const metadata: Metadata = {
  description:
    'We help media organizations scale smarter by empowering lean teams with systems that grow, adapt, and thrive.',
}

export default async function Home() {
  return (
    <RootLayout>
      <HomepageHero />
      <Clients />
      <Services />
      <Testimonial
        className=""
        client={{
          name: 'Declan Garvey',
          subtitle: 'Executive Editor at The Dispatch',
        }}
      >
        From conception to execution, we couldn’t be more thrilled with the
        incredible work camelCase did redesigning The Dispatch&apos;s website,
        laying the foundation for a new growth trajectory. We now have a website
        worthy of the quality of the work our team produces on a daily basis,
        and the transformation has exceeded all our expectations.
      </Testimonial>
      <CallToAction
        headline="Ready to level up your stack?"
        description="Partner with us to design smarter systems built for scale."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </RootLayout>
  )
}
