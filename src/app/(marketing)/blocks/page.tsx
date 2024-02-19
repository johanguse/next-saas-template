import { BlockTitle } from '@/components/layout/main-title'
import BrandLogos from '@/components/shared/brands-logos'

export const metadata = {
  title: 'Custom Blocks Components',
}

export default function TestimonialBlocksPage() {
  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">
      <div className="container mx-auto mb-10 pt-20 text-center">
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
      </div>
      <div>
        <BrandLogos />
      </div>
    </div>
  )
}
