import { useMemo } from 'react'

import { marketingConfig } from '@/config/marketing'

import { BlogPostsArchive } from '@/components/blog/blog-posts-archive'
import PaginationNST from '@/components/shared/pagination'

import { allPosts } from 'contentlayer/generated'

type BlogPageProps = {
  params: { id: number }
}

export const metadata = {
  title: 'Blog',
}

export default function BlogPage({ params }: BlogPageProps) {
  const currentPage = Number(params.id) || 1
  const postsPerPage = marketingConfig.postsPerPage

  const slicedPosts = useMemo(() => {
    return currentPage !== 1 ? allPosts.slice(1) : allPosts
  }, [currentPage])

  const sortedAndFilteredPosts = useMemo(() => {
    return slicedPosts
      .filter((post) => post.published)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }, [slicedPosts])

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
        <PaginationNST
          totalPostCount={sortedAndFilteredPosts.length}
          currentPage={currentPage}
          postsPerPage={postsPerPage}
          className="container my-10"
        />
      </div>
    </main>
  )
}
