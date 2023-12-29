import Link from 'next/link'
import { allPosts } from '@/root/.contentlayer/generated'
import { compareDesc } from 'date-fns'

import { Button } from '@/components/ui/button'
import { BlogPostListItem } from '@/components/marketing/blog-list-item'

import { BlockTitle } from '../layout/main-title'

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
          <BlockTitle.Wrapper>
            <BlockTitle.Header elementType="h1">Blog</BlockTitle.Header>

            <BlockTitle.Title elementType="h2">
              {' '}
              Last post from our blog
            </BlockTitle.Title>

            <BlockTitle.Background />

            <BlockTitle.Separator />
          </BlockTitle.Wrapper>
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
