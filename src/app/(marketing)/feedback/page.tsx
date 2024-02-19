import FeedbackForm from '@/components/forms/share-feedback'
import { BlockTitle } from '@/components/layout/main-title'

export const metadata = {
  title: 'Feedback Page',
}

export default function ContactPage() {
  return (
    <div className="flex w-full py-8 md:py-8">
      <div className="container">
        <div className="mx-auto flex max-w-xl flex-col gap-16 px-4 sm:gap-y-12 sm:px-6 lg:px-8">
          <BlockTitle.Wrapper>
            <BlockTitle.Header elementType="h1">Feedback</BlockTitle.Header>
            <BlockTitle.Title elementType="h2">
              Share your feedback
            </BlockTitle.Title>
            <BlockTitle.Description>
              Share any throughts with us and help us improve.
            </BlockTitle.Description>
            <BlockTitle.Background />
            <BlockTitle.Separator />
          </BlockTitle.Wrapper>
          <FeedbackForm />
        </div>
      </div>
    </div>
  )
}
