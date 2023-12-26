import { Post } from '@/root/.contentlayer/generated'

import { marketingConfig } from '@/config/marketing'
import { BlogPostListItem } from '@/components/marketing/blog-list-item'

interface BlogPostsArchiveProps {
  posts: Post[]
  currentPage: number
}

export function BlogPostsArchive({
  posts,
  currentPage,
}: BlogPostsArchiveProps) {
  const postsPerPage = marketingConfig.postsPerPage
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const currentPosts = posts.slice(startIndex, endIndex)
  return (
    <section className="container py-32">
      <div className="mb-6 flex flex-row items-center justify-between">
        <h1 className="text-3xl font-bold">Blog Archive</h1>
        <p className="text-sm text-gray-600 md:hidden dark:text-gray-300">
          {`Page ${currentPage} of ${Math.ceil(posts.length / postsPerPage)}`}
        </p>
      </div>
      <BlogPostListItem posts={currentPosts} />
    </section>
  )
}
