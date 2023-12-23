import CtaSubscribe from '@/components/marketing/cta-subscribe'
import FAQ from '@/components/marketing/faq'
import Features from '@/components/marketing/features'
import Hero from '@/components/marketing/hero'
import LatestFromBlog from '@/components/marketing/lastest-from-blog'
import PlansMarketing from '@/components/marketing/plans'
import Powered from '@/components/marketing/powered'
import Testimonials from '@/components/marketing/testimonials'
import PricingFaq from '@/components/pricing-faq'

export default async function IndexPage() {
  return (
    <>
      <Hero />
      <Powered />
      <Features />
      <PlansMarketing />
      <Testimonials />
      <PricingFaq />
      <LatestFromBlog />
      <FAQ />
      <CtaSubscribe />
    </>
  )
}
