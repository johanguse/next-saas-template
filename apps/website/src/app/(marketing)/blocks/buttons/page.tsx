import Link from 'next/link'

import { cn } from '@/lib/utils'

import { buttonVariants } from '@/components/ui/button'

import { BlockTitle } from '@/components/layout/main-title'
import { Icons } from '@/components/shared/icons'

export const metadata = {
  title: 'Buttons Components Page',
}

export default function ButtonsBlocksPage() {
  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">
      <div className="mx-auto pt-20 text-center">
        <BlockTitle.Wrapper className="mb-20">
          <BlockTitle.Header elementType="h1" className="text-xl">
            Buttons
          </BlockTitle.Header>
          <BlockTitle.Background />
          <BlockTitle.Separator />
        </BlockTitle.Wrapper>
        <div className="mb-20">
          <Link
            href="https://twitter.com/johanguse"
            className={cn(
              buttonVariants({ variant: 'outline', size: 'sm' }),
              'animate-fade-up bg-gradient-to-r from-indigo-500 to-purple-500/80 px-4 py-2 font-semibold text-white opacity-0 hover:text-white'
            )}
            style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
            target="_blank"
          >
            Introducing on <Icons.twitter className="ml-2 size-4" />
          </Link>
        </div>
        <div className="my-6 flex items-center justify-center rounded bg-background py-20">
          <div className="relative">
            <div className="absolute -inset-1 rounded bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur"></div>
            <Link
              href="https://twitter.com/johanguse"
              className="relative flex rounded bg-black px-7 py-4 font-semibold text-white"
            >
              <div className="flex items-center">
                Follow me on <Icons.twitter className="ml-2 size-4" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center text-sm">
        <p>
          More buttons to come...
          <br />
          checkout our&nbsp;
          <a
            href="https://bit.ly/48LTNin"
            target="_blank"
            className="underline"
          >
            public roadmap here
          </a>
          .
        </p>
      </div>
    </div>
  )
}
