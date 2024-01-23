import Image from 'next/image'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'

import { marketingConfig } from '@/config/marketing'
import { Button } from '@/components/ui/button-ui'

export function BlogPostListItem({ posts }) {
  const postsPerPage = marketingConfig.postsPerPage

  return (
    <ul className="grid auto-rows-fr grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.slice(0, postsPerPage).map((items, key) => (
        <li className="flex border-gray-200" key={key}>
          <article className="flex flex-col">
            <div className="flex flex-col">
              <Link href={items.slug} tabIndex={-1}>
                <Image
                  width={384}
                  height={256}
                  src={items.image}
                  loading="lazy"
                  alt={items.title}
                  className="w-full rounded-lg"
                />
              </Link>
              <h3 className="mt-2 text-balance text-lg font-semibold">
                <Link href={items.slug}>{items.title}</Link>
              </h3>
            </div>
            <div className="mt-3 flex-1 space-y-2">
              <span className="block text-sm tracking-tight text-blue-500 dark:text-sky-500">
                {items.date
                  ? format(parseISO(items.date), 'MMM, do yyyy')
                  : null}{' '}
              </span>
              <p className="text-balance duration-150 group-hover:text-gray-800">
                {items.description}
              </p>
            </div>
            <Button
              className="ml-0 mt-4 justify-start pl-0 text-left font-semibold"
              tabIndex={-1}
              href={items.slug}
              variant="link"
            >
              Read more
            </Button>
          </article>
        </li>
      ))}
    </ul>
  )
}
