import { productData } from '@/lib/fake-data/hero-parallax'
import { testimonialsData } from '@/lib/fake-data/testimonials'

import { HeroParallax } from '@/components/hero/hero-parallax'
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
import Trusted from '@/components/marketing/trusted'

export default async function IndexPage() {
  return (
    <>
      <Hero />
      <HeroParallax products={productData} />
      <Trusted />
      <Features />
      <PlansMarketing />
      <TestimonialCards testimonials={testimonialsData} />
      <Powered />
      <LatestFromBlog />
      <CtaSocialMedia />
      <section className="flex w-full flex-col gap-16 py-8 md:py-8">
        <div className="container mx-auto pt-20 text-center">
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
