import { useMemo } from 'react'
import { allPosts } from 'contentlayer/generated'

import { BlogPostsPagination } from '@/components/blog-post-content-pagination'
import Pagination from '@/components/shared/pagination'

type BlogPageProps = {
  params: { id: number }
}

export const metadata = {
  title: 'Blog',
}

export default function BlogPage({ params }: BlogPageProps) {
  const sortedAndFilteredPosts = useMemo(() => {
    return allPosts
      .filter((post) => post.published)
      .sort((a, b) => -new Date(a.date).getTime() + new Date(b.date).getTime())
  }, [allPosts])

  const currentPage = params.id || 1

  metadata.title = `Blog - Page ${currentPage}`

  return (
    <main>
      <BlogPostsPagination
        posts={sortedAndFilteredPosts}
        currentPage={currentPage}
      />
      <Pagination
        totalPostCount={sortedAndFilteredPosts.length}
        currentPage={currentPage}
        className="container my-10"
      />
    </main>
  )
}
