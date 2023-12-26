import { useMemo } from 'react'
import { allPosts } from 'contentlayer/generated'

import { marketingConfig } from '@/config/marketing'
import { BlogPostsArchive } from '@/components/blog-posts-archive'
import Pagination from '@/components/shared/pagination'

type BlogPageProps = {
  params: { id: number }
}

export const metadata = {
  title: 'Blog',
}

export default function BlogPage({ params }: BlogPageProps) {
  const postsPerPage = marketingConfig.postsPerPage

  const sortedAndFilteredPosts = useMemo(() => {
    return allPosts
      .filter((post) => post.published)
      .sort((a, b) => -new Date(a.date).getTime() + new Date(b.date).getTime())
  }, [allPosts])

  const currentPage = params.id || 1

  metadata.title = `Blog - Page ${currentPage} of ${Math.ceil(
    sortedAndFilteredPosts.length / postsPerPage
  )}`

  return (
    <main>
      <BlogPostsArchive
        posts={sortedAndFilteredPosts}
        currentPage={currentPage}
      />
      <Pagination
        totalPostCount={sortedAndFilteredPosts.length}
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        className="container my-10"
      />
    </main>
  )
}
