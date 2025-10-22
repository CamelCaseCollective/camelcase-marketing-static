import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function CallToAction({
  headline,
  description,
  buttonText,
  buttonLink = "/contact"
}: {
  headline: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
}) {
  return (
    <Container className="my-20">
      <FadeIn className="rounded-4xl bg-neutral-950 px-12 py-10">
        <div className="">
          <h2 className="font-display font-semibold text-white">
            {headline}
          </h2>
          <p className="my-4 text-neutral-300">
            {description}
          </p>
          <Button href={buttonLink} invert>
            {buttonText}
          </Button>
        </div>
      </FadeIn>
    </Container>
  )
}

export default CallToAction