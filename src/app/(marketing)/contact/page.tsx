import ContactForm from '@/components/forms/contact-form'
import { BlockTitle } from '@/components/layout/main-title'

export const metadata = {
  title: 'Contact Page',
}

export default function ContactPage() {
  return (
    <div className="flex w-full py-8 md:py-8">
      <div className="container">
        <div className="mx-auto flex max-w-xl flex-col gap-16 px-4 sm:gap-y-12 sm:px-6 lg:px-8">
          <BlockTitle.Wrapper>
            <BlockTitle.Header elementType="h1">Contact</BlockTitle.Header>

            <BlockTitle.Title elementType="h2">Get in touch</BlockTitle.Title>

            <BlockTitle.Description>
              We are always happy to answer any questions you might have.
            </BlockTitle.Description>

            <BlockTitle.Background />

            <BlockTitle.Separator />
          </BlockTitle.Wrapper>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
