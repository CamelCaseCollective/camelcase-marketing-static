import React from 'react'
import Link from 'next/link'
import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { formatDate } from '@/lib/formatDate'

// Logos as React components (for inline SVG)
import TheDispatchLogo from '@/svgs/clients/the-dispatch.svg'
import ScotusBlogLogo from '@/svgs/clients/scotus-blog.svg'
import StripesLogo from '@/svgs/clients/stripes.svg'

interface CaseStudyData {
  client: string
  logo: React.ComponentType<React.SVGProps<SVGSVGElement>>
  service: string
  date: string
  title: string
  summary: string[]
  href: string
  testimonial?: {
    author: {
      name: string
      role: string
    }
    content: string
  }
}

const caseStudies: CaseStudyData[] = [
  {
    client: 'The Dispatch',
    logo: TheDispatchLogo,
    service: 'Custom Integrations, Development, UI/UX Design',
    date: '2023-10-15',
    title: 'Transforming digital journalism with a modern publishing platform',
    summary: [
      'The Dispatch needed a robust publishing platform that could handle their growing subscriber base while maintaining the high-quality reading experience their audience expects.',
      'We built custom integrations with their existing systems and designed a seamless user experience that increased engagement by 40%.',
    ],
    href: '/work/the-dispatch',
    testimonial: {
      author: {
        name: 'Declan Garvey',
        role: 'Executive Editor at The Dispatch',
      },
      content:
        "From conception to execution, we couldn't be more thrilled with the incredible work CamelCase did redesigning The Dispatch's website, laying the foundation for a new growth trajectory.",
    },
  },
  {
    client: 'SCOTUSblog',
    logo: ScotusBlogLogo,
    service: 'Development, Systems Migration, Product Development',
    date: '2024-01-20',
    title: 'Modernizing legal news delivery for the digital age',
    summary: [
      'SCOTUSblog required a complete systems migration to support their expanding coverage of Supreme Court proceedings and legal analysis.',
      'Our team delivered a scalable solution that improved site performance by 60% while maintaining their reputation for authoritative legal journalism.',
    ],
    href: '/work/scotusblog',
  },
  {
    client: 'Stripes',
    logo: StripesLogo,
    service: 'Development, Performance, Author Experience',
    date: '2021-11-10',
    title: 'Enhancing content creation and reader engagement',
    summary: [
      'Stripes needed to streamline their content creation workflow while improving the reading experience for their diverse audience.',
      'We developed custom tools that reduced publishing time by 50% and implemented performance optimizations that led to a 35% increase in page views.',
    ],
    href: '',
  },
]

function CaseStudies() {
  return (
    <Container className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Case studies
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {caseStudies.map((caseStudy) => (
          <FadeIn key={caseStudy.client}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <caseStudy.logo className="h-auto w-full max-w-[200px]" />
                    <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                      {caseStudy.client}
                    </h3>
                  </div>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      {caseStudy.service}
                    </p>
                    <p className="text-sm text-neutral-950 lg:mt-2">
                      Since {caseStudy.date.split('-')[0]}
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    <Link href={caseStudy.href}>{caseStudy.title}</Link>
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    {caseStudy.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {caseStudy.href && (
                    <div className="mt-8 flex">
                      <Button
                        href={caseStudy.href}
                        aria-label={`Read case study: ${caseStudy.client}`}
                      >
                        Read case study
                      </Button>
                    </div>
                  )}
                  {caseStudy.testimonial && (
                    <Blockquote
                      author={caseStudy.testimonial.author}
                      className="mt-12"
                    >
                      {caseStudy.testimonial.content}
                    </Blockquote>
                  )}
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

export default CaseStudies
