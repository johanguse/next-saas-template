import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { constructMetadata } from '@/lib/metadata'
import { getTableOfContents } from '@/lib/toc'
import { cn } from '@/lib/utils'

import { buttonVariants } from '@/components/ui/button'

import { Mdx } from '@/components/content/mdx-components'
import { DocsPageHeader } from '@/components/docs/page-header'
import { Icons } from '@/components/shared/icons'
import { DashboardTableOfContents } from '@/components/shared/toc'

import '@/styles/mdx.css'

import { allGuides } from 'contentlayer/generated'

interface GuidePageProps {
  params: {
    slug: string[]
  }
}

async function getGuideFromParams(params) {
  const slug = params?.slug?.join('/')
  const guide = allGuides.find((guide) => guide.slugAsParams === slug)

  if (!guide) {
    null
  }

  return guide
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const doc = await getGuideFromParams(params)

  if (!doc) return {}

  const { title, description } = doc

  return constructMetadata({
    title: `${title} – SaaS Starter`,
    description: description,
  })
}

export async function generateStaticParams(): Promise<
  GuidePageProps['params'][]
> {
  return allGuides.map((guide) => ({
    slug: guide.slugAsParams.split('/'),
  }))
}

export default async function GuidePage({ params }: GuidePageProps) {
  const guide = await getGuideFromParams(params)

  if (!guide) {
    notFound()
  }

  const toc = await getTableOfContents(guide.body.raw)

  return (
    <main className="relative py-6 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 lg:py-10 xl:gap-20">
      <div>
        <DocsPageHeader heading={guide.title} text={guide.description} />
        <Mdx code={guide.body.code} />
        <hr className="my-4" />
        <div className="flex justify-center py-6 lg:py-10">
          <Link
            href="/guides"
            className={cn(buttonVariants({ variant: 'ghost' }))}
          >
            <Icons.chevronLeft className="mr-2 size-4" />
            See all guides
          </Link>
        </div>
      </div>
      <div className="hidden text-sm lg:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          <DashboardTableOfContents toc={toc} />
        </div>
      </div>
    </main>
  )
}
