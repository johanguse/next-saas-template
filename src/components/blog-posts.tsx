import Image from 'next/image'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'

import { formatDate } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

export function BlogPosts({ posts }) {
  return (
    <div className="container space-y-10 py-6 md:py-10">
      <section className="mb-2 lg:mb-20">
        <article className="relative">
          <div className="flex flex-col items-center md:flex-row">
            <div className="mb-6 flex h-full w-full flex-col items-start justify-center pb-6 pl-0 pr-0 pt-6 md:mb-0 md:w-1/2">
              <div
                className="flex h-full transform flex-col items-start justify-center space-y-3 md:space-y-5 md:pr-10
            lg:pr-16"
              >
                <div
                  className="flex items-center rounded-full bg-green-600 pb-1.5 pl-2 pr-3 pt-1.5 uppercase leading-none
              text-gray-50 dark:bg-green-800"
                >
                  <p className="inline">
                    <svg
                      className="mr-1 h-3.5 w-3.5"
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
                  <Badge className="ml-2">Featured</Badge>
                </div>
                <a className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
                  {posts[0].title}
                </a>
                <div className="pb-0 pl-0 pr-0 pt-2">
                  {posts[0].description && (
                    <p className="text-muted-foreground md:text-lg">
                      <Balancer>{posts[0].description}</Balancer>
                    </p>
                  )}
                  <Link href={posts[0].slug} className="absolute inset-0">
                    <span className="sr-only">View Article</span>
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(1, 7).map((post) => (
            <article
              key={post._id}
              className="group relative flex flex-col space-y-2"
            >
              {post.image && (
                <Image
                  alt={post.title}
                  src={post.image}
                  width={804}
                  height={452}
                  className="rounded-md border bg-muted transition-colors"
                />
              )}
              <h2 className="line-clamp-1 font-heading text-2xl">
                {post.title}
              </h2>
              {post.description && (
                <p className="line-clamp-1 text-muted-foreground">
                  {post.description}
                </p>
              )}
              {post.date && (
                <p className="text-sm text-muted-foreground">
                  {formatDate(post.date)}
                </p>
              )}
              <Link href={post.slug} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
