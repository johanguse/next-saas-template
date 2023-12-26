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
    <main>
      <BlogPosts posts={posts} />
      <Pagination
        currentPage={1}
        totalPostCount={posts.length}
        postsPerPage={postsPerPage}
        className="container my-10"
      />
    </main>
  )
}
