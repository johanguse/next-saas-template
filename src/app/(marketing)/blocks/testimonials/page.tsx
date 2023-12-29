import Image from 'next/image'

import { AvatarsGroup } from '@/components/ui/avatar-group'
import StarRating from '@/components/ui/star-rating'
import { BlockTitle } from '@/components/layout/main-title'
import TestimonialCards from '@/components/marketing/testimonials-cards'
import TestimonialSlider from '@/components/marketing/testimonials-slider'
import TestimonialSliderClean from '@/components/marketing/testimonials-slider-clean'

export const metadata = {
  title: 'Testimonial Components Page',
}

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

export default function TestimonialBlocksPage() {
  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">
      <div className="container mx-auto pt-20 text-center">
        <BlockTitle.Wrapper>
          <BlockTitle.Header elementType="h1">
            Lorem Ipsum Header
          </BlockTitle.Header>

          <BlockTitle.Title elementType="h2">
            Lorem Ipsum Title
          </BlockTitle.Title>

          <BlockTitle.Description
            elementType="p"
            className="custom-description-class"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BlockTitle.Description>

          <BlockTitle.Background />
          <BlockTitle.Separator />
        </BlockTitle.Wrapper>
      </div>
      <div className="container mx-auto text-center">
        <div className="flex justify-center">
          <Image
            src="/images/demo/product-hunt-button.png"
            alt="Product Hunt"
            width={220}
            height={51}
          />
        </div>
        <div className="mb-6 mt-4 flex flex-col items-center justify-center gap-2 md:flex-row">
          <div className="flex flex-col items-center">
            <AvatarsGroup />
          </div>
          <div className="flex flex-col items-center gap-1 md:items-start">
            <StarRating />
            <p className="text-sm font-medium">loved by 100+ service owners</p>
          </div>
        </div>
      </div>
      <TestimonialSlider testimonials={testimonials} />
      <TestimonialSliderClean testimonials={testimonials} />
      <TestimonialCards testimonials={testimonials} />
    </div>
  )
}
