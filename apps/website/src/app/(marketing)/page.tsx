import { testimonialsData } from '@/lib/fake-data/testimonials'

import CarouselLogos from '@/components/carousel/carousel-logos'
import { BlockTitle } from '@/components/layout/main-title'
import CtaSocialMedia from '@/components/marketing/cta-social-media'
import CtaSubscribe from '@/components/marketing/cta-subscribe'
import FAQ from '@/components/marketing/faq'
import Features from '@/components/marketing/features'
import Hero from '@/components/marketing/hero'
import LatestFromBlog from '@/components/marketing/lastest-from-blog'
import PlansMarketing from '@/components/marketing/plans'
import Powered from '@/components/marketing/powered'
import TestimonialCards from '@/components/marketing/testimonials-cards'

export default async function IndexPage() {
  return (
    <>
      <Hero />
      <section
        className="animate-fade-up bg-gray-50 py-8 text-zinc-500 opacity-0 dark:bg-black dark:text-zinc-400 dark:opacity-50"
        style={{ animationDelay: '0.55s', animationFillMode: 'forwards' }}
      >
        <div className="container mx-auto">
          <h2 className="mb-6 text-center text-sm font-semibold uppercase">
            Trusted by
          </h2>

          <div className="mx-auto flex w-full flex-wrap items-center justify-center gap-10 gap-y-8 lg:max-w-6xl lg:gap-14">
            <CarouselLogos />
          </div>
        </div>
      </section>
      <Features />
      <PlansMarketing />
      <TestimonialCards testimonials={testimonialsData} />
      <Powered />
      <LatestFromBlog />
      <CtaSocialMedia />
      <section className="mx-auto flex w-full flex-col px-6 py-10 md:w-10/12 md:py-40 lg:max-w-4xl">
        <div className="container mx-auto text-center">
          <BlockTitle.Wrapper>
            <BlockTitle.Header elementType="h1">FAQ</BlockTitle.Header>

            <BlockTitle.Title elementType="h2">
              Freequently Asked Questions{' '}
            </BlockTitle.Title>

            <BlockTitle.Description>
              Explore our comprehensive FAQ to find quick answers to common
              inquiries. If you need further assistance, don&apos;t hesitate to
              contact us for personalized help.
            </BlockTitle.Description>

            <BlockTitle.Background />

            <BlockTitle.Separator />
          </BlockTitle.Wrapper>
          <FAQ />
        </div>
      </section>

      <CtaSubscribe />
    </>
  )
}
