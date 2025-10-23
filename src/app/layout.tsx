import { type Metadata } from 'next'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - camelCase Collective',
    default: 'Helping digital media publications scale.',
  },
  description:
    'We help media organizations scale smarter by empowering lean teams with systems that grow, adapt, and thrive.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const isProduction = process.env.VERCEL_ENV === 'production'

  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      {isProduction && (
        <head>
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KZNJT8W');
            `,
            }}
          />
        </head>
      )}
      <body className="flex min-h-full flex-col">
        {isProduction && (
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-KZNJT8W"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        {children}
        <Analytics />
      </body>
    </html>
  )
}
