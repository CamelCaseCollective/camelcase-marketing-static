import { type Metadata } from 'next'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - camelCase Collective',
    default: 'Product & engineering studio to help media publications scale.',
  },
  description:
    'We help media organizations scale smarter by empowering lean teams with systems that grow, adapt, and thrive.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
