import { type Metadata } from 'next'
import CallToAction from '@/components/blocks/CallToAction'
import { Container } from '@/components/Container'
import { GridList, GridListItem } from '@/components/GridList'
import InteriorPageHero from '@/components/InteriorPageHero'
import { SectionIntro } from '@/components/SectionIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We help digital media publications scale, stabilize, and integrate their digital products.',
}

export default async function About() {
  return (
    <RootLayout>
      <InteriorPageHero
        eyebrow="About us"
        title="Small Teams. Big Results. Built for the Long Game."
      >
        <p>
          camelCase helps content-rich organizations — especially publishers —
          scale, stabilize, and integrate their digital products. We embed
          alongside your team to ship quickly, solve complex problems, and grow
          without the overhead of a traditional agency.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Founded in 2020 on a simple idea: small, sharp teams can outbuild
            big, bloated agencies. Since then, we’ve partnered with ambitious
            media brands and content-driven organizations to modernize stacks,
            migrate platforms, and design systems that last.
          </p>
        </div>
      </InteriorPageHero>

      <Culture />

      <CallToAction
        headline="Ready to level up your stack?"
        description="Partner with us to design smarter systems built for scale."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </RootLayout>
  )
}

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-12 sm:mt-16 lg:mt-24 lg:py-12">
      <SectionIntro
        eyebrow="Why camelCase"
        title="We’re not your typical agency... by design."
        invert
      ></SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Product-First Thinking" invert>
            Every decision anchored to outcomes, not deliverables.
          </GridListItem>
          <GridListItem title="Faster to Value" invert>
            Quick impact without compromising scalability.
          </GridListItem>
          <GridListItem title="Transparent Collaboration" invert>
            No black boxes. You’ll know exactly what’s happening and why.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}
