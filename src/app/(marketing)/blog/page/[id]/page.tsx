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
      <div className="container mx-auto flex flex-col gap-10 px-4 sm:gap-y-24 sm:px-6 md:px-8 lg:px-8">
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
      </div>
    </main>
  )
}
