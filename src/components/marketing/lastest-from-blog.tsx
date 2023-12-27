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
      <div className="container mx-auto flex flex-col gap-16 sm:gap-y-24">
        <div className="mx-auto text-center">
          <div className="w-full">
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
        </div>
        <div className="w-full">
          <BlogPostListItem posts={posts} />
        </div>
      </div>
      <div className="mt-16 flex justify-center">
        <Button variant="outline" className="text-sm font-semibold">
          <Link href="/blog" className="p-6">
            See all blog posts
          </Link>
        </Button>
      </div>
    </section>
  )
}
