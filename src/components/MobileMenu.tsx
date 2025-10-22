'use client'

import { motion } from 'framer-motion'

import { Container } from '@/components/Container'
import { Header, XIcon } from '@/components/Header'
import Navigation from '@/components/Navigation'
import { Offices } from '@/components/Offices'
import { SocialMedia } from '@/components/SocialMedia'

export function MobileMenu({
  panelId,
  expanded,
  onToggle,
  closeRef,
  navRef,
}: {
  panelId: string
  expanded: boolean
  onToggle: () => void
  closeRef: React.RefObject<HTMLButtonElement | null>
  navRef: React.RefObject<HTMLDivElement | null>
}) {
  return (
    <motion.div
      layout
      id={panelId}
      style={{ height: expanded ? 'auto' : '0.5rem' }}
      className="relative z-50 overflow-hidden bg-neutral-950 pt-2"
      aria-hidden={expanded ? undefined : 'true'}
      // @ts-ignore - inert is a valid HTML attribute
      inert={expanded ? undefined : true}
    >
      <motion.div layout className="bg-neutral-800">
        <div ref={navRef} className="bg-neutral-950 pt-14 pb-16">
          <Header
            invert
            panelId={panelId}
            icon={XIcon}
            toggleRef={closeRef}
            expanded={expanded}
            onToggle={onToggle}
          />
        </div>
        <Navigation />
        <div className="relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800">
          <Container>
            <div className="grid grid-cols-1 gap-y-10 pt-10 pb-16 sm:grid-cols-2 sm:pt-16">
              <div>
                <h2 className="font-display text-base font-semibold text-white">
                  Our office
                </h2>
                <Offices
                  invert
                  className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                />
              </div>
              <div className="sm:border-l sm:border-transparent sm:pl-16">
                <h2 className="font-display text-base font-semibold text-white">
                  Follow us
                </h2>
                <SocialMedia className="mt-6" invert />
              </div>
            </div>
          </Container>
        </div>
      </motion.div>
    </motion.div>
  )
}