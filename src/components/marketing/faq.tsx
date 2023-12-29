import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { BlockTitle } from '../layout/main-title'

const pricingFaqData = [
  {
    id: 'item-1',
    question: 'What is the cost of the free plan?',
    answer:
      "Our free plan is completely free, with no monthly or annual charges. It's a great way to get started and explore our basic features.",
  },
  {
    id: 'item-2',
    question: 'How much does the Basic Monthly plan cost?',
    answer:
      'The Basic Monthly plan is priced at $15 per month. It provides access to our core features and is billed on a monthly basis.',
  },
  {
    id: 'item-3',
    question: 'What is the price of the Pro Monthly plan?',
    answer:
      'The Pro Monthly plan is available for $25 per month. It offers advanced features and is billed on a monthly basis for added flexibility.',
  },
  {
    id: 'item-4',
    question: 'Do you offer any annual subscription plans?',
    answer:
      'Yes, we offer annual subscription plans for even more savings. The Basic Annual plan is $144 per year, and the Pro Annual plan is $300 per year.',
  },
  {
    id: 'item-5',
    question: 'Is there a trial period for the paid plans?',
    answer:
      "We offer a 14-day free trial for both the Pro Monthly and Pro Annual plans. It's a great way to experience all the features before committing to a paid subscription.",
  },
]

export default function FAQ() {
  return (
    <section className="py-32">
      <div className="mx-auto flex max-w-3xl flex-col gap-16 px-4 sm:gap-y-24 sm:px-6 lg:px-8">
        <BlockTitle.Wrapper>
          <BlockTitle.Header elementType="h1">FAQ</BlockTitle.Header>

          <BlockTitle.Title elementType="h2">
            Freequently Asked Questions{' '}
          </BlockTitle.Title>

          <BlockTitle.Description>
            Explore our comprehensive FAQ to find quick answers to common
            inquiries. If you need further assistance, don&apos;t hesitate to
            contact us for personalized help.
          </BlockTitle.Description>

          <BlockTitle.Background />

          <BlockTitle.Separator />
        </BlockTitle.Wrapper>
        <Accordion type="single" collapsible className="w-full">
          {pricingFaqData.map((faqItem) => (
            <AccordionItem key={faqItem.id} value={faqItem.id}>
              <AccordionTrigger>{faqItem.question}</AccordionTrigger>
              <AccordionContent>{faqItem.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
