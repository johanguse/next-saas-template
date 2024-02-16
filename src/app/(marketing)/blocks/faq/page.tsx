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
      <div className="container mx-auto pt-20 text-center">
        <BlockTitle.Wrapper>
          <BlockTitle.Header elementType="h1">FAQ</BlockTitle.Header>

          <BlockTitle.Title elementType="h2">
            Introducing our custom blocks
          </BlockTitle.Title>

          <BlockTitle.Description>
            Build webapps easy with our custom blocks
          </BlockTitle.Description>

          <BlockTitle.Background />

          <BlockTitle.Separator />
        </BlockTitle.Wrapper>
        <FAQ />
        <FAQClients faqsClientData={faqsClientData} />
      </div>
    </div>
  )
}
