import Link from 'next/link'

import { siteConfig } from '@/config/site'

import { cn } from '@/lib/utils'

import { buttonVariants } from '@/components/ui/button'

import { Icons } from '@/components/shared/icons'

export default function Hero() {
  const twitterLink = siteConfig.social?.links?.twitter

  return (
    <section>
      <section className="space-y-6 pb-12 pt-16 lg:py-28">
        <div className="container relative flex max-w-5xl flex-col items-center gap-5 text-center">
          <div className="my-6 flex items-center justify-center rounded bg-black">
            <div className="relative">
              <div className="absolute -inset-1 rounded bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur"></div>
              <Link
                href="https://twitter.com/SaasTemplate"
                className="relative flex rounded bg-black px-7 py-4 font-semibold text-white"
                target="_blank"
              >
                <div className="flex items-center">
                  Follow on <Icons.twitter className="ml-2 size-4" />
                </div>
              </Link>
            </div>
          </div>

          <h1
            className="my-6 animate-fade-up text-balance font-urban text-4xl font-extrabold tracking-tight opacity-0 sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
          >
            Launching Your SaaS Success Story with{' '}
            <span className="relative bg-gradient-to-r from-indigo-500 to-purple-500/80 bg-clip-text font-extrabold text-transparent">
              Next SaaS Template
            </span>
          </h1>

          <p
            className="mb-8 max-w-2xl animate-fade-up text-balance leading-normal text-muted-foreground opacity-0 sm:text-xl sm:leading-8"
            style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
          >
            Empower Your Next Project with Next.js 14, Prisma, PostgreSQL,
            Auth.js v5, Resend, React Email, Shadcn/ui, and Stripe Integration
          </p>

          <div
            className="flex animate-fade-up justify-center space-x-2 opacity-0 md:space-x-4"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <Link
              href="/pricing"
              className={cn(buttonVariants({ size: 'lg' }))}
            >
              Go Pricing
            </Link>
            {twitterLink && (
              <Link
                href={twitterLink.href}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'px-4'
                )}
              >
                <Icons.github className="mr-2 size-4" />
                <p>
                  <span className="hidden sm:inline-block">Star on</span> GitHub{' '}
                </p>
              </Link>
            )}
          </div>
          <div className="absolute inset-0 top-[calc(100%-16rem)] mx-auto h-10 max-w-xs bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600 via-pink-600 to-blue-600 blur-[118px]  dark:from-rose-400 dark:via-fuchsia-500 dark:to-indigo-500"></div>
        </div>
      </section>
    </section>
  )
}
