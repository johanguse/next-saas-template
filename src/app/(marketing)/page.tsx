import CtaSubscribe from '@/components/marketing/cta-subscribe'
import FAQ from '@/components/marketing/faq'
import Features from '@/components/marketing/features'
import Hero from '@/components/marketing/hero'
import LatestFromBlog from '@/components/marketing/lastest-from-blog'
import PlansMarketing from '@/components/marketing/plans'
import Powered from '@/components/marketing/powered'
import TestimonialCards from '@/components/marketing/testimonials-cards'
import PricingFaq from '@/components/pricing-faq'

export default async function IndexPage() {
  const testimonials = [
    {
      quote:
        'Nostrud tempor sunt fugiat. Dolor in sint dolore labore non occaecat adipisicing Lorem labore ullamco enim excepteur. In fugiat Lorem sit velit id veniam esse eiusmod non ea voluptate cupidatat reprehenderit ullamco dolore. Mollit laborum occaecat aliquip.',
      name: 'Rose Roberson',
      role: 'CEO at Company',
      imgSrc: 'https://i.pravatar.cc/120?img=1',
    },
    {
      quote:
        'Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation. Culpa consectetur dolor pariatur commodo aliqua amet tempor nisi enim deserunt elit cillum.',
      name: 'Chace Rodgers',
      role: 'CEO at Company',
      imgSrc: 'https://i.pravatar.cc/120?img=10',
    },
    {
      quote:
        'Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor.',
      name: 'Cornelius Sheppard',
      role: 'CEO at Company',
      imgSrc: 'https://i.pravatar.cc/120?img=9',
    },
    {
      quote:
        'Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.',
      name: 'Chace Rodgers',
      role: 'CEO at Company',
      imgSrc: 'https://i.pravatar.cc/120?img=7',
    },
    {
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.',
      name: 'Cornelius Sheppard',
      role: 'CEO at Company',
      imgSrc: 'https://i.pravatar.cc/120?img=8',
    },
    {
      quote:
        'Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.',
      name: 'Chace Rodgers',
      role: 'CEO at Company',
      imgSrc: 'https://i.pravatar.cc/120?img=2',
    },
    {
      quote:
        'Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor.',
      name: 'Cornelius Sheppard',
      role: 'CEO at Company',
      imgSrc: 'https://i.pravatar.cc/120?img=3',
    },
  ]
  return (
    <>
      <Hero />
      <Powered />
      <Features />
      <PlansMarketing />
      <TestimonialCards testimonials={testimonials} />
      <PricingFaq />
      <LatestFromBlog />
      <FAQ />
      <CtaSubscribe />
    </>
  )
}
