import React from 'react'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'

function HomepageHero() {
  return (
    <Container className="pt-20">
      <GridPattern
        className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-50 stroke-neutral-950/5"
        yOffset={-96}
        interactive
      />
      <FadeIn className="max-w-3xl">
        <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-6xl">
          Helping build the future of media with specialized product &
          engineering experts.
        </h1>
        <h2 className="mt-8 font-display text-2xl font-medium text-neutral-950">
          We partner with publications to help them unlock their full potential
          with systems that grow, adapt, and thrive.
        </h2>
        {/* <p className="text-l mt-2 text-neutral-600">
          From migrations to integrations, we design, build, and optimize the
          platforms that keep your publication running. We focus on stability,
          growth, and new revenue with lean, embedded teams that scale with you.
        </p> */}
      </FadeIn>
    </Container>
  )
}

export default HomepageHero
