import { marketingConfig } from '@/config/marketing'

import { BlogPostListItem } from '@/components/marketing/blog-list-item'

import { Post } from '@/root/.contentlayer/generated'

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
    <section className="container pt-16">
      <div className="mb-6 flex flex-row items-center justify-between">
        <h1 className="text-3xl font-bold">Blog Archive</h1>
        <p className="text-sm text-gray-600 dark:text-gray-300 md:hidden">
          {`Page ${currentPage} of ${Math.ceil(posts.length / postsPerPage)}`}
        </p>
      </div>
      <BlogPostListItem posts={currentPosts} />
    </section>
  )
}
