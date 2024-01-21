import Image from 'next/image'
import { Marquee } from '@devnomic/marquee'

import '@devnomic/marquee/dist/index.css'

import { logosCompaniesData } from '@/lib/fake-data/logos'
import { testimonials } from '@/lib/fake-data/testimonials'
import { BlockTitle } from '@/components/layout/main-title'

export default function CarouselBlocksPage() {
  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">
      <div className="container mx-auto pt-20 text-center">
        <div className="mb-20">
          <BlockTitle.Wrapper>
            <BlockTitle.Header elementType="h1">
              Lorem Ipsum Header
            </BlockTitle.Header>
            <BlockTitle.Title elementType="h2">
              Lorem Ipsum Title
            </BlockTitle.Title>
            <BlockTitle.Description elementType="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </BlockTitle.Description>
            <BlockTitle.Background />
            <BlockTitle.Separator />
          </BlockTitle.Wrapper>
          <div className="px-0 md:px-44">
            <Marquee className="py-2" reverse={true} fade={true}>
              <ul className="flex items-center justify-center">
                {logosCompaniesData.map((logo, index) => (
                  <li key={index} className="mx-4">
                    <Image
                      src={logo.src}
                      alt={logo.alt || `Logo ${index + 1}`}
                      width="120"
                      height="120"
                      className="mx-auto dark:invert"
                    />
                  </li>
                ))}
              </ul>
            </Marquee>
          </div>
        </div>
        <div className="mb-20">
          <BlockTitle.Wrapper>
            <BlockTitle.Header elementType="h1">
              Lorem Ipsum Header
            </BlockTitle.Header>
            <BlockTitle.Title elementType="h2">
              Lorem Ipsum Title
            </BlockTitle.Title>
            <BlockTitle.Description elementType="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </BlockTitle.Description>
            <BlockTitle.Background />
            <BlockTitle.Separator />
          </BlockTitle.Wrapper>
          <div className="mt-10">
            <Marquee className="py-2" fade={true} pauseOnHover={true}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-80 break-inside-avoid">
                  <div className="relative flex h-full divide-y  divide-gray-200 overflow-hidden rounded-lg bg-gray-50 p-4 shadow-sm ring-1 ring-gray-200 dark:divide-gray-800 dark:bg-gray-900 dark:ring-gray-800">
                    <div className="flex flex-col items-center justify-between">
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
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  )
}
