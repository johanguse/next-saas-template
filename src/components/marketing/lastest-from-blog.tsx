import Link from 'next/link'
import { allPosts } from '@/root/.contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'

import { Button } from '@/components/ui/button'

export default function LatestFromBlog() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })
  return (
    <section className="py-32">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="relative mb-2 bg-gradient-to-r from-indigo-500 to-purple-500/80 bg-clip-text text-base font-extrabold text-transparent">
            Blog
          </h2>
          <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
            Last post from our blog
          </p>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Our features are designed to enhance your productivity and
            streamline your workflow.
          </p>
        </div>
        <ul className="mt-16 grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((items, key) => (
            <li className="flex border-gray-200 p-5 shadow-sm" key={key}>
              <article className="flex flex-col">
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold duration-150 group-hover:text-indigo-600">
                    <Link href={items.slug}>{items.title}</Link>
                  </h3>
                  <img
                    src={items.image}
                    loading="lazy"
                    alt={items.title}
                    className="-order-1 w-full rounded-lg"
                  />
                </div>
                <div className="mt-3 flex-1 space-y-2">
                  <span className="block text-sm text-indigo-600">
                    {items.date
                      ? format(parseISO(items.date), 'MMM, do yyyy')
                      : null}{' '}
                  </span>
                  <p className="duration-150 group-hover:text-gray-800">
                    {items.description}
                  </p>
                </div>
                <Button
                  variant="link"
                  className="ml-0 mt-4 justify-start pl-0 text-left font-semibold"
                >
                  Read more
                </Button>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
