import React, { useMemo } from 'react'
import Link from 'next/link'

interface PaginationProps {
  totalPostCount: number
  currentPage: number
  className?: string
  postsPerPage: number
}

const Pagination: React.FC<PaginationProps> = ({
  totalPostCount,
  currentPage,
  className,
  postsPerPage,
}) => {
  const totalPages = useMemo(
    () => Math.ceil(totalPostCount / postsPerPage),
    [totalPostCount]
  )

  const pages = useMemo(
    () => Array.from({ length: totalPages }, (_, i) => i + 1),
    [totalPages]
  )

  return (
    <div className={className}>
      <div className="mx-auto my-2 py-4 text-gray-600">
        <div className="hidden justify-between text-sm md:flex">
          <div>
            {currentPage > 1
              ? `SHOWING ${(currentPage - 1) * postsPerPage + 1}-${Math.min(
                  currentPage * postsPerPage,
                  totalPostCount
                )} OF ${totalPostCount}`
              : `SHOWING 1-${Math.min(
                  postsPerPage,
                  totalPostCount
                )} OF ${totalPostCount}`}
          </div>
          <div className="flex items-center gap-12" aria-label="Pagination">
            {currentPage > 1 && (
              <Link
                href={`/blog/page/${currentPage - 1}`}
                className="hover:text-indigo-600"
              >
                Previous
              </Link>
            )}
            <ul className="flex items-center gap-1">
              {pages.map((page) => (
                <li key={page}>
                  <Link
                    href={page == 1 ? '/blog' : `/blog/page/${page}`}
                    aria-current={currentPage == page ? 'page' : undefined}
                    className={`rounded-lg px-3 py-2 duration-150 hover:bg-indigo-600 hover:text-white ${
                      currentPage == page
                        ? 'bg-indigo-600 font-medium text-white'
                        : ''
                    }`}
                  >
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
            {currentPage < totalPages && (
              <Link
                href={`/blog/page/${currentPage + 1}`}
                className="hover:text-indigo-600"
              >
                Next
              </Link>
            )}
          </div>
        </div>
        {/* On the mobile version */}
        <div className="flex items-center justify-between text-sm font-medium text-gray-600 md:hidden">
          {currentPage > 1 && (
            <Link
              href={`/blog/page/${currentPage - 1}`}
              className="rounded-lg border px-4 py-2 duration-150 hover:bg-gray-50"
            >
              Previous
            </Link>
          )}
          <div>
            {currentPage > 1
              ? `SHOWING ${(currentPage - 1) * postsPerPage + 1}-${Math.min(
                  currentPage * postsPerPage,
                  totalPostCount
                )} OF ${totalPostCount}`
              : currentPage == totalPages
                ? `SHOWING ${
                    (totalPages - 1) * postsPerPage + 1
                  }-${totalPostCount} OF ${totalPostCount}`
                : `SHOWING 1-${Math.min(
                    postsPerPage,
                    totalPostCount
                  )} OF ${totalPostCount}`}
          </div>
          {currentPage < totalPages && (
            <Link
              href={`/blog/page/${currentPage + 1}`}
              className="rounded-lg border px-4 py-2 duration-150 hover:bg-gray-50"
            >
              Next
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Pagination
