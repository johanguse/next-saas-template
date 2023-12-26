import Link from 'next/link'
import { allPosts } from '@/root/.contentlayer/generated'
import { compareDesc } from 'date-fns'

import { Button } from '@/components/ui/button'
import { BlogPostListItem } from '@/components/marketing/blog-list-item'

export default function LatestFromBlog() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })
  return (
    <section className="py-32">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="relative mb-2 bg-gradient-to-r from-indigo-500 to-purple-500/80 bg-clip-text text-base font-extrabold text-transparent">
            Blog
          </h2>
          <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
            Last post from our blog
          </p>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Our features are designed to enhance your productivity and
            streamline your workflow.
          </p>
        </div>
        <BlogPostListItem posts={posts} />
        <div className="mt-16 flex justify-center">
          <Button variant="outline" className="p-6 text-sm font-semibold">
            <Link href="/blog">See all blog posts</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
