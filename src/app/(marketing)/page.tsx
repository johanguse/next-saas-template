import { testimonials } from '@/lib/fake-data/testimonials'
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
import PricingFaq from '@/components/pricing-faq'

export default async function IndexPage() {
  return (
    <>
      <Hero />
      <Trusted />
      <Features />
      <PlansMarketing />
      <TestimonialCards testimonials={testimonials} />
      <Powered />
      <PricingFaq />
      <LatestFromBlog />
      <CtaSocialMedia />
      <FAQ />
      <CtaSubscribe />
    </>
  )
}
