import { SexyBorder } from '@/components/ui/sexy-border'

import { BlockTitle } from '@/components/layout/main-title'
import MoreToCome from '@/components/more-to-come'

export const metadata = {
  title: 'Buttons Components Page',
}

export default function ButtonsBlocksPage() {
  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">
      <div className="mx-auto pt-10 text-center">
        <BlockTitle.Wrapper className="mb-20">
          <BlockTitle.Header elementType="h1" className="text-xl">
            Border
          </BlockTitle.Header>
          <BlockTitle.Background />
          <BlockTitle.Separator />
        </BlockTitle.Wrapper>
        <div className="mb-20">
          <SexyBorder>
            <div className="flex w-full flex-col rounded-md border p-4 lg:p-8">
              <div className="p-4">This is a default sexy border</div>
            </div>
          </SexyBorder>
        </div>

        <div className="mb-20">
          <SexyBorder from="[#ff80b5]" to="indigo-500" via="fuchsia-500">
            <div className="flex w-full flex-col rounded-md border p-4 lg:p-8">
              <div className="p-4">This is a custom sexy border</div>
            </div>
          </SexyBorder>
        </div>
        <div className="mb-20">
          <SexyBorder
            className="w-full"
            offset={20}
            gradientClassName="gradient-secondary"
          >
            <div className="flex w-full flex-col rounded-md border p-4 lg:p-8">
              <div className="p-4">
                This is a sexy border with custom gradient css class
              </div>
            </div>
          </SexyBorder>
        </div>
      </div>
      <MoreToCome />
    </div>
  )
}
