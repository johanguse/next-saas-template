import Image from 'next/image'
import Link from 'next/link'
import { Post } from '@/root/.contentlayer/generated'

import { formatDate } from '@/lib/utils'

export function BlogPostsPagination({ posts, currentPage }) {
  const postsPerPage: number = 6
  let startIndex: number
  let endIndex: number

  console.log(currentPage)

  if (Number(currentPage) === 1) {
    startIndex = 0
    endIndex = postsPerPage
  } else {
    startIndex = (currentPage - 2) * postsPerPage
    endIndex = startIndex + postsPerPage
  }

  const currentPosts: Post[] = posts.slice(startIndex, endIndex)

  return (
    <div className="container space-y-10 py-6 md:py-10">
      <h1 className="text-3xl font-bold">Blog Articles Archive</h1>
      <section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map((post) => (
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
