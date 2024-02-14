import { BlockTitle } from '@/components/layout/main-title'
import ReviewsGridAnimation from '@/components/marketing/ReviewsGridAnimation'
import BrandLogos from '@/components/shared/brands-logos'

export const metadata = {
  title: 'Testimonial Components Page',
}

export default function TestimonialBlocksPage() {
  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">
      <div className="container mx-auto pt-20 text-center">
        <div className="mb-20">
          <BlockTitle.Wrapper>
            <BlockTitle.Header elementType="h1">Blocks</BlockTitle.Header>

            <BlockTitle.Title elementType="h2">
              Introducing our custom blocks
            </BlockTitle.Title>

            <BlockTitle.Description elementType="p">
              Build webapps easy with our custom blocks
            </BlockTitle.Description>

            <BlockTitle.Background />

            <BlockTitle.Separator />
          </BlockTitle.Wrapper>
        </div>
        <div>
          <BlockTitle.Header elementType="h1">Custom Header</BlockTitle.Header>
          <BlockTitle.Title elementType="span">Custom Title</BlockTitle.Title>
        </div>
        <div>
          <BlockTitle.Header elementType="h1">Custom Header</BlockTitle.Header>
          <BlockTitle.Title elementType="span">Custom Title</BlockTitle.Title>
        </div>
      </div>
      <div>
        <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="mx-auto mb-6 text-center sm:w-1/2 md:mb-12 xl:w-1/3">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 md:text-2xl md:leading-tight">
              Trusted by Open Source, enterprise, and more than 99,000 of you
            </h2>
          </div>

          <BrandLogos />
        </div>
      </div>
      <div className="container mx-auto text-center">
        <p>Here we go!!</p>
      </div>
      <div
        id="reviews"
        aria-labelledby="reviews-title"
        className="pb-16 pt-20 sm:pb-24 sm:pt-32"
      >
        <ReviewsGridAnimation />
      </div>
    </div>
  )
}
