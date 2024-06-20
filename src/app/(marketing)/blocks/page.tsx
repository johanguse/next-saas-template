import { BlockTitle } from '@/components/layout/main-title'
import BentoGrid from '@/components/marketing/bento-grid'
import BrandLogos from '@/components/shared/brands-logos'

export const metadata = {
  title: 'Custom Blocks Components',
}

export default function TestimonialBlocksPage() {
  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">
      <div className="container mx-auto my-8 text-center">
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
        <div className="mx-auto my-14 flex w-full justify-center">
          <a
            href="https://www.producthunt.com/posts/next-saas-template?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-next&#0045;saas&#0045;template"
            target="_blank"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=464422&theme=light"
              alt="Next&#0032;SaaS&#0032;Template - Launching&#0032;your&#0032;SaaS&#0032;success&#0032;story | Product Hunt"
              style={{ width: '250px', height: '54px' }}
              width="250"
              height="54"
            />
          </a>
        </div>
        <div>
          <BlockTitle.Header elementType="h1">Custom Header</BlockTitle.Header>
          <BlockTitle.Title elementType="span">Custom Title</BlockTitle.Title>
        </div>
      </div>
      <div>
        <BentoGrid className="mb-36" />
        <BrandLogos />
      </div>
    </div>
  )
}
