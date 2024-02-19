import { faqsClientData } from '@/lib/fake-data/faq-clients'

import { BlockTitle } from '@/components/layout/main-title'
import FAQ from '@/components/marketing/faq'
import FAQClients from '@/components/marketing/faq-clients'

export const metadata = {
  title: "FAQ's Components Page",
}

export default function FaqBlocksPage() {
  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">
      <div className="pt-20 text-center">
        <BlockTitle.Wrapper>
          <BlockTitle.Header elementType="h1" className="text-xl">
            FAQs
          </BlockTitle.Header>
          <BlockTitle.Background />
          <BlockTitle.Separator />
        </BlockTitle.Wrapper>
        <div className="my-20">
          <FAQ />
          <FAQClients faqsClientData={faqsClientData} />
        </div>
      </div>
    </div>
  )
}
