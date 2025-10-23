import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

// function NewsletterForm() {
//   return (
//     <form className="max-w-sm">
//       <h4>
//         Sign up for our newsletter
//       </h4>
//       <p className="mt-4 text-neutral-700">
//         Subscribe to get the latest design news, articles, resources and
//         inspiration.
//       </p>
//       <div className="relative mt-6">
//         <input
//           type="email"
//           placeholder="Email address"
//           autoComplete="email"
//           aria-label="Email address"
//           className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pr-20 pl-6 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
//         />
//         <div className="absolute inset-y-1 right-1 flex justify-end">
//           <button
//             type="submit"
//             aria-label="Submit"
//             className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
//           >
//             <ArrowIcon className="w-4" />
//           </button>
//         </div>
//       </div>
//     </form>
//   )
// }

export function Footer() {
  return (
    <Container as="footer" className="mt-12 w-full sm:mt-16 lg:mt-20">
      <FadeIn viewport={{ once: true, margin: '0px' }}>
        <div className="flex flex-col gap-x-8 gap-y-16 md:flex-row md:justify-between">
          <Link href="/" aria-label="Home">
            <Logo className="h-8 w-40" />
          </Link>
          {/* TODO: Make a pages component and just loop over the pages */}
          <nav className="">
            <div className="flex gap-8">
              <Link
                href="/work"
                className="text-neutral-700 transition hover:text-neutral-950"
              >
                Our Work
              </Link>
              <Link
                href="/about"
                className="text-neutral-700 transition hover:text-neutral-950"
              >
                About Us
              </Link>
            </div>
          </nav>
          {/* <div className="flex lg:justify-end">
            <NewsletterForm />
          </div> */}
        </div>
        <div className="mt-10 mb-10 flex justify-end border-t border-neutral-950/10 pt-8">
          <p className="text-sm text-neutral-700">
            © camelCase Collective. {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
