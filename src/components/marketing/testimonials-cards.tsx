import Image from 'next/image'

import { Testimonial } from '@/lib/fake-data/testimonials'
import { BlockTitle } from '@/components/layout/main-title'

interface TestimonialCardsProps {
  testimonials: Testimonial[]
}

export default function TestimonialCards({
  testimonials,
}: TestimonialCardsProps) {
  return (
    <section
      id="testimonials"
      className="w-full py-12 md:py-24 lg:py-32 xl:py-48"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 sm:gap-y-24 sm:px-6 lg:px-8">
        <BlockTitle.Wrapper>
          <BlockTitle.Header elementType="h2">Testimonial</BlockTitle.Header>

          <BlockTitle.Title elementType="h3">
            What our customers are saying
          </BlockTitle.Title>

          <BlockTitle.Description>
            See what our customers are saying about us
          </BlockTitle.Description>

          <BlockTitle.Background />

          <BlockTitle.Separator />
        </BlockTitle.Wrapper>
        <div className="column-1 gap-8 space-y-8 md:columns-2 lg:columns-3 xl:columns-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="break-inside-avoid">
              <div className="relative divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-200 dark:divide-gray-800 dark:bg-gray-900 dark:ring-gray-800">
                <div className="flex flex-col px-4 py-5 sm:p-6">
                  <q className="text-gray-600 dark:text-gray-300">
                    {testimonial.quote}
                  </q>
                  <div className="mt-6 flex items-center gap-3">
                    <span className="relative inline-flex size-10 shrink-0 items-center justify-center rounded-full">
                      <Image
                        className="size-10 rounded-full"
                        height={40}
                        width={40}
                        alt={testimonial.name}
                        src={testimonial.imgSrc}
                        loading="lazy"
                      />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
