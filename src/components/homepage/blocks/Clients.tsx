import React from 'react'
import Link from 'next/link'
// Logos as React components (for inline SVG)
import TheDispatchLogo from '@/svgs/clients/the-dispatch.svg'
import ScotusBlogLogo from '@/svgs/clients/scotus-blog.svg'
import StripesLogo from '@/svgs/clients/stripes.svg'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

const clients = [
  {
    name: 'The Dispatch',
    logo: TheDispatchLogo,
    services: 'Custom Integrations, Development, UI/UX Design',
    url: '/work/the-dispatch',
    linkText: 'View case study',
  },
  {
    name: 'SCOTUSblog',
    logo: ScotusBlogLogo,
    services: 'Development, Systems Migration, Product Development',
    url: '/work/scotusblog',
    linkText: 'View case study',
  },
  {
    name: 'Stripes',
    logo: StripesLogo,
    services: 'Development, Performance, Author Experience',
    url: 'https://stripes.co',
    linkText: 'View website',
  },
  //   {
  //     name: 'Code Climate',
  //     logo: CodeClimateLogo,
  //     services: 'AX, Development, Performance, UI/UX',
  //     url: 'https://codeclimate.com',
  //     linkText: 'View website',
  //   },
  //   {
  //     name: 'Bowery Capital',
  //     logo: BoweryCapitalLogo,
  //     services: 'AX, Development, Performance, UI/UX',
  //     url: 'https://bowerycapital.com',
  //     linkText: 'View website',
  //   },
  //   {
  //     name: 'Babel Street',
  //     logo: BabelStreetLogo,
  //     services: 'AX, Development, Performance, UI/UX',
  //     url: 'https://babelstreet.com',
  //     linkText: 'View website',
  //   },
]

function Clients() {
  return (
    <div className="mx-auto my-20 max-w-[1800px] rounded-4xl bg-neutral-950 py-20">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center text-white">Our Clients</h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid justify-around gap-x-10 gap-y-14 sm:grid-cols-2 md:grid-cols-3 md:gap-x-12"
          >
            {clients.map((client) => (
              <li key={client.name}>
                <FadeIn className="w-full">
                  <div className="flex h-[100px] w-full items-center justify-center">
                    <client.logo className="max-h-[100px] max-w-[200px] fill-white [&_line]:stroke-white [&_path]:fill-white" />
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {client.services
                      .split(', ')
                      .map((service: string, index: number) => (
                        <span
                          className="bg-neutral-800 px-3 py-1.5 text-sm text-neutral-200"
                          key={index}
                        >
                          {service}
                        </span>
                      ))}
                  </div>

                  <div className="mt-6 text-center">
                    <Link
                      href={client.url}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-neutral-950 transition-all hover:bg-neutral-200"
                      target={
                        client.linkText === 'View website'
                          ? '_blank'
                          : undefined
                      }
                      rel={
                        client.linkText === 'View website'
                          ? 'noopener noreferrer'
                          : undefined
                      }
                    >
                      {client.linkText}
                      <span aria-hidden="true">→</span>
                    </Link>
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
