import Link from 'next/link'

export default function NotFoundPage() {
  const navigations = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
          />
        </svg>
      ),
      title: 'Resources',
      desc: 'Lorem Ipsum is simply dummy text of the printing',
      href: '/contact',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
          />
        </svg>
      ),
      title: 'Guides',
      desc: 'Lorem Ipsum is simply dummy text of the printing',
      href: '/contact',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>
      ),
      title: 'Support',
      desc: 'Lorem Ipsum is simply dummy text of the printing',
      href: '/contact',
    },
  ]

  return (
    <main>
      <div className="mx-auto flex h-screen max-w-screen-xl items-center justify-start px-4 md:px-8">
        <div className="mx-auto max-w-lg text-gray-600">
          <div className="space-y-10 text-center">
            <h1 className="font-semibold text-indigo-600 dark:text-indigo-500">
              404 Error
            </h1>
            <p className="text-4xl font-semibold text-gray-800 dark:text-white sm:text-5xl">
              Page not found
            </p>
            <p className="text-gray-600 dark:text-white">
              Sorry, the page you are looking for could not be found or has been
              removed.
            </p>
            <div>
              <Link href="/" className="text-indigo-600 dark:text-indigo-500">
                Back to Home page
              </Link>
            </div>
          </div>
          <div className="mt-12">
            <ul className="divide-y">
              {navigations.map((item, idx) => (
                <li key={idx} className="flex gap-x-4 py-6">
                  <div className="flex size-14 flex-none items-center justify-center rounded-full bg-indigo-50">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium text-gray-800 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.desc}
                    </p>
                    <a
                      href={item.href}
                      className="inline-flex items-center gap-x-1 text-sm font-medium text-indigo-950 duration-150 hover:text-indigo-400 dark:text-indigo-500"
                    >
                      Learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="size-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
