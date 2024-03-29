'use client'

import { useState } from 'react'

export default function PaginationNST() {
  const [pages, setPages] = useState(['1', '2', '3', , '...', '8', '9', '10'])
  const [currentPage, setCurrentPage] = useState('1')

  return (
    <div className="mx-auto my-2 py-4 text-gray-600">
      <div className="hidden justify-between text-sm md:flex">
        <div>SHOWING 1-10 OF 120</div>
        <div className="flex items-center gap-12" aria-label="Pagination">
          <a href="/page/0" className="hover:text-indigo-600">
            Previous
          </a>
          <ul className="flex items-center gap-1">
            {pages.map((item, idx) => (
              <li key={item}>
                {item == '...' ? (
                  <div>{item}</div>
                ) : (
                  <a
                    href={`/page/` + item}
                    aria-current={currentPage == item ? 'page' : false}
                    className={`rounded-lg px-3 py-2 duration-150 hover:bg-indigo-600 hover:text-white ${
                      currentPage == item
                        ? 'bg-indigo-600 font-medium text-white'
                        : ''
                    }`}
                  >
                    {item}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <a href="/page/2" className="hover:text-indigo-600">
            Next
          </a>
        </div>
      </div>
      {/* On mobile version */}
      <div className="flex items-center justify-between text-sm font-medium text-gray-600 md:hidden">
        <a
          href="/page/3"
          className="rounded-lg border px-4 py-2 duration-150 hover:bg-gray-50"
        >
          Previous
        </a>
        <div className="font-medium">SHOWING 1-10 OF 120</div>
        <a
          href="/page/4"
          className="rounded-lg border px-4 py-2 duration-150 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
    </div>
  )
}
