import { BlockTitle } from '@/components/layout/main-title'
import ReviewsGridAnimation from '@/components/marketing/ReviewsGridAnimation'

export const metadata = {
  title: 'Testimonial Components Page',
}

export default function TestimonialBlocksPage() {
  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">
      <div className="container mx-auto pt-20 text-center">
        <div className="mb-20">
          <BlockTitle.Wrapper>
            <BlockTitle.Header elementType="h1" className="custom-header-class">
              Lorem Ipsum Header
            </BlockTitle.Header>

            <BlockTitle.Title elementType="h2" className="custom-title-class">
              Lorem Ipsum Title
            </BlockTitle.Title>

            <BlockTitle.Description
              elementType="p"
              className="custom-description-class"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </BlockTitle.Description>

            <BlockTitle.Background className="custom-background-class" />

            <BlockTitle.Separator className="custom-separator-class" />
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
