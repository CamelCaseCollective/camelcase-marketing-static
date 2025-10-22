import React from 'react'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'

function HomepageHero() {
  return (
    <Container className="relative mt-24 sm:mt-32 md:mt-56">
        <GridPattern
            className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-50 stroke-neutral-950/5"
            yOffset={-96}
            interactive
        />
        <FadeIn className="max-w-3xl">
          <h1 className="font-display font-medium tracking-tight text-balance text-neutral-950 text-5xl sm:text-7xl">
            Build the future of media—without building a bigger team.
          </h1>
          <h2 className="font-display font-medium text-neutral-950 text-2xl mt-8">
            We help media organizations scale smarter - empowering lean teams with systems that grow, adapt, and thrive.
          </h2>
          <p className="mt-2 text-l text-neutral-600">
            From migrations to integrations, we design, build, and optimize the platforms that keep your publication running. Our focus: stability, growth, and new revenue — without adding headcount.
          </p>
        </FadeIn>
    </Container>
  )
}

export default HomepageHero