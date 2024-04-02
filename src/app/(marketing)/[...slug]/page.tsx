import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { siteConfig } from '@/config/site'

import { absoluteUrl } from '@/lib/utils'

import { MDXContent } from '@/components/content/mdx-content'
import { Callout } from '@/components/shared/callout'

import '@/styles/mdx.css'

import { allPages } from '@/content'
import { env } from '@/root/env.mjs'

interface PageProps {
  params: {
    slug: string[]
  }
}

async function getPageFromParams(params) {
  const slug = params?.slug?.join('/')
  const page = allPages.find((page) => page.slug === slug)

  if (!page) {
    null
  }

  return page
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPageFromParams(params)

  if (!page) {
    return {}
  }

  const url = env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set('heading', page.title)
  ogUrl.searchParams.set('type', siteConfig.name)
  ogUrl.searchParams.set('mode', 'light')

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      type: 'article',
      url: absoluteUrl(page.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [ogUrl.toString()],
    },
  }
}

export async function generateStaticParams(): Promise<PageProps['params'][]> {
  return allPages.map((page) => ({
    slug: page.slug.split('/'),
  }))
}

export default async function PagePage({ params }: PageProps) {
  const page = await getPageFromParams(params)

  if (!page) {
    notFound()
  }

  return (
    <article className="container max-w-3xl py-6 lg:py-12">
      <div className="space-y-4">
        <h1 className="inline-block font-heading text-4xl lg:text-5xl">
          {page.title}
        </h1>
        {page.description && (
          <p className="text-xl text-muted-foreground">{page.description}</p>
        )}
      </div>
      <hr className="my-4" />
      <MDXContent code={page.body} components={{ Callout }} />
    </article>
  )
}
