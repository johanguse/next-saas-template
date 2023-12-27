import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

import { marketingConfig } from '@/config/marketing'
import { BlogPosts } from '@/components/blog-posts'
import Pagination from '@/components/shared/pagination'

export const metadata = {
  title: 'Blog',
}

export default async function BlogPage() {
  const postsPerPage = marketingConfig.postsPerPage
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <main className="w-full">
      <div className="container mx-auto flex flex-col px-4 sm:px-6 md:px-8 lg:px-8">
        <BlogPosts posts={posts} />
        <Pagination
          currentPage={1}
          totalPostCount={posts.length}
          postsPerPage={postsPerPage}
          className="container my-10"
        />
      </div>
    </main>
  )
}
