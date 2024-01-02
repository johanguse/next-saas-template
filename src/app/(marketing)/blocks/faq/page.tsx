import { faqsClientData } from '@/lib/fake-data/faq-clients'
import FAQClients from '@/components/marketing/faq-clients'

export const metadata = {
  title: 'Testimonial Components Page',
}

export default function FaqBlocksPage() {
  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">
      <div className="container mx-auto pt-20 text-center">
        <FAQClients faqsClientData={faqsClientData} />
      </div>
    </div>
  )
}
