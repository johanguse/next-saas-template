import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { absoluteUrl, cn, formatDate } from '@/lib/utils'

import { buttonVariants } from '@/components/ui/button'

import { Mdx } from '@/components/content/mdx-components'
import { Icons } from '@/components/shared/icons'
import ShareButtons from '@/components/shared/share-buttons'

import '@/styles/mdx.css'

import { env } from '@/root/env.mjs'
import { allAuthors, allPosts } from 'contentlayer/generated'

interface PostPageProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params) {
  const slug = params?.slug?.join('/')
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    return null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  const url = env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set('heading', post.title)
  ogUrl.searchParams.set('type', 'Blog Post')
  ogUrl.searchParams.set('mode', 'dark')

  return {
    title: post.title,
    description: post.description,
    authors: post.authors.map((author) => ({
      name: author,
    })),
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: absoluteUrl(post.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogUrl.toString()],
    },
  }
}

export async function generateStaticParams(): Promise<
  PostPageProps['params'][]
> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split('/'),
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params)
  const postURL = `${env.NEXT_PUBLIC_APP_URL}/blog/${params?.slug?.join('/')}`

  if (!post) {
    notFound()
  }

  const authors = post.authors
    .map((author) =>
      allAuthors.find(({ slug }) => slug === `/authors/${author}`)
    )
    .filter((author) => author != null)

  return (
    <div className="container mx-auto">
      <div className="mx-auto grid w-full grid-cols-8 gap-16 py-12">
        <article className="col-span-5 col-start-2">
          <div>
            {post.date && (
              <time
                dateTime={post.date}
                className="block text-sm text-muted-foreground"
              >
                Published on {formatDate(post.date)}
              </time>
            )}
            <h1 className="mt-2 inline-block text-balance font-heading text-4xl leading-tight lg:text-5xl">
              {post.title}
            </h1>
            <div className="mt-8 flex justify-between">
              {authors?.length ? (
                <div className="flex space-x-4">
                  {authors.map((author) =>
                    author ? (
                      <Link
                        key={author._id}
                        href={`https://twitter.com/${author.twitter}`}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <Image
                          src={author.avatar}
                          alt={author.title}
                          width={42}
                          height={42}
                          className="rounded-full bg-white"
                        />
                        <div className="flex-1 text-left leading-tight">
                          <p className="font-medium">{author.title}</p>
                          <p className="text-[12px] text-muted-foreground">
                            @{author.twitter}
                          </p>
                        </div>
                      </Link>
                    ) : null
                  )}
                </div>
              ) : null}
              <div>
                <h3
                  className={`mb-1 text-xs ${authors?.length ? 'text-right' : ''}`}
                >
                  Share this post
                </h3>
                <ShareButtons post={post} size={24} />
              </div>
            </div>
          </div>
          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              width={720}
              height={405}
              className="my-8 w-full rounded-md border bg-muted transition-colors"
              priority
            />
          )}
          <Mdx code={post.body.code} />
          <hr className="my-10" />
          <div className="mb-10">
            <h3 className="mb-4 text-xl"> Share this post </h3>
            <ShareButtons size={40} post={post} />
          </div>
          <hr className="my-6" />
          <div className="flex justify-start py-12 lg:py-10">
            <Link
              href="/blog"
              className={cn(
                buttonVariants({ variant: 'link' }),
                'px-0 text-black dark:text-white'
              )}
            >
              <Icons.chevronLeft className="mr-2 size-4" />
              All posts
            </Link>
          </div>
        </article>
        <aside className="col-span-2 items-center py-6">
          <div className="mb-10">
            <Link
              href="/blog"
              className={cn(
                buttonVariants({ variant: 'link' }),
                'px-0 text-black dark:text-white'
              )}
            >
              <Icons.chevronLeft className="mr-2 size-4" />
              All posts
            </Link>
          </div>
          {post.toc ? (
            <div className="w-full">
              <h3 className="mb-4 uppercase leading-relaxed">On this page</h3>
              <div className="text-balance">
                {post.headings.map((heading) => {
                  return (
                    <div key={`#${heading.slug}`}>
                      <a
                        data-level={heading.level}
                        href={`#${heading.slug}`}
                        className="text-sm hover:underline data-[level=three]:pl-4 data-[level=two]:pl-2"
                      >
                        {heading.text}
                      </a>
                    </div>
                  )
                })}
              </div>
            </div>
          ) : null}
        </aside>
      </div>
    </div>
  )
}
