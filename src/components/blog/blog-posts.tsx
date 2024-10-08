import Image from 'next/image'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'

import { BlogPostListItem } from '@/components/marketing/blog-list-item'

import { Post } from '@/root/.contentlayer/generated'
import { format, parseISO } from 'date-fns'

type BlogPostsProps = {
  posts: Post[]
  currentPage: number
}

export function BlogPosts({ posts, currentPage }: BlogPostsProps) {
  return (
    <div className="container space-y-10 py-6 md:py-10">
      <section className="mb-2 lg:mb-10">
        <article className="relative">
          <div className="flex flex-col-reverse items-center md:flex-row">
            <div className="mb-6 flex size-full flex-col items-start justify-center px-0 py-6 md:mb-0 md:w-1/2">
              <div className="flex h-full flex-col items-start justify-center space-y-3 md:space-y-5 md:pr-10 lg:pr-16">
                <div
                  className="flex items-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-1.5 pl-2 pr-3 uppercase leading-none
              text-gray-50"
                >
                  <p className="inline">
                    <svg
                      className="mr-1 size-3.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
                  00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755
                  1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1
                  0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </p>
                  <p className="inline text-xs font-medium">New</p>
                  <Badge className="ml-2" variant="secondary">
                    Featured
                  </Badge>
                </div>
                <a className="text-balance text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
                  {posts[0].title}
                </a>
                <div className="px-0 pt-2">
                  {posts[0].description && (
                    <p className="mb-2 text-balance text-muted-foreground md:text-lg">
                      {posts[0].description}
                    </p>
                  )}

                  <time
                    dateTime={posts[0].date}
                    className="block text-sm tracking-tight text-blue-500 dark:text-sky-500"
                  >
                    {posts[0].date
                      ? format(parseISO(posts[0].date), 'MMM, do yyyy')
                      : null}
                  </time>

                  <Link href={posts[0].slug} className="absolute inset-0">
                    <span className="sr-only">{posts[0].title}</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="block">
                {posts[0].image && (
                  <Image
                    alt={posts[0].title}
                    className="w-full rounded-lg border object-cover object-center md:h-64 lg:h-72"
                    height={452}
                    src={posts[0].image}
                    width={804}
                  />
                )}
              </div>
            </div>
          </div>
        </article>
      </section>

      <section>
        <div className="mb-4 block lg:hidden">
          <div className="mx-auto mb-10 flex w-full flex-col gap-5">
            <h2 className="relative mb-2 bg-gradient-to-r from-indigo-500 to-purple-500/80 bg-clip-text text-base font-extrabold text-transparent">
              Lastest posts
            </h2>
          </div>
        </div>
        <BlogPostListItem posts={posts} />
      </section>
    </div>
  )
}
