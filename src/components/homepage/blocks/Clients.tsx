import React from 'react'
// Logos as React components (for inline SVG)
import TheDispatchLogo from '@/svgs/clients/the-dispatch.svg'
import ScotusBlogLogo from '@/svgs/clients/scotus-blog.svg'
import CodeClimateLogo from '@/svgs/clients/code-climate.svg'
import StripesLogo from '@/svgs/clients/stripes.svg'
import BoweryCapitalLogo from '@/svgs/clients/bowery-capital.svg'
import BabelStreetLogo from '@/svgs/clients/babel-street.svg'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

const clients = [
    ['The Dispatch', TheDispatchLogo, 'Custom Integrations, Development, UX'],
    ['SCOTUSblog', ScotusBlogLogo, 'Development, UX'],
    ['Code Climate', CodeClimateLogo, 'AX, Development, Performance, UI/UX'],
    ['Stripes', StripesLogo, 'AX, Development, Performance, UI/UX'],
    ['Bowery Capital', BoweryCapitalLogo, 'AX, Development, Performance, UI/UX'],
    ['Babel Street', BabelStreetLogo, 'AX, Development, Performance, UI/UX']
  ]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
        <Container>
            <FadeIn className="flex items-center gap-x-8">
            <h2 className="text-center text-white">
                Our Highlights
            </h2>
            <div className="h-px flex-auto bg-neutral-800" />
            </FadeIn>
            <FadeInStagger faster>
            <ul
                role="list"
                className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 justify-around gap-x-10 gap-y-14"
            >
                {clients.map(([client, Logo, services]) => (
                <li key={client}>
                    <FadeIn className="w-full">
                    <Logo className="h-full w-full fill-white [&_path]:fill-white [&_line]:stroke-white" />
                    <div className="mt-6 flex gap-4 flex-wrap">
                        {services.split(', ').map((service: string, index: number) =>
                        <div className="flex justify-center items-center text-white text-xs px-4 py-2 rounded-full border-2 border-white whitespace-nowrap" key={index}>{service}</div>
                        )}
                    </div>
                    </FadeIn>
                </li>
                ))}
            </ul>
            </FadeInStagger>
        </Container>
    </div>
  )
}

export default Clients