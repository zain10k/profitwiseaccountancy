import { AnimatedText } from '@/components/ui/AnimatedText'
import { PageHero } from '@/components/PageHero'
import { FAQ } from '@/components/FAQ'

/** Hero image - documents/desk (no people). */
const FAQ_HERO_IMAGE =
  'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1920'

export function Faq() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <PageHero
        backgroundImage={FAQ_HERO_IMAGE}
        title={
          <AnimatedText
            as="h1"
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
            highlightWords={['Asked']}
            start="top 90%"
            stagger={0.03}
          >
            Frequently Asked Questions
          </AnimatedText>
        }
        subtitle={
          <AnimatedText
            as="p"
            className="mt-4 text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            mode="word"
            start="top 90%"
            delay={0.2}
          >
            Quick answers to common questions about our services and how we work.
          </AnimatedText>
        }
      />
      <FAQ hideHeading />
    </div>
  )
}
