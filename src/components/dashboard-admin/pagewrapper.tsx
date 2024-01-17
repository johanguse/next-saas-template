'use client'

import { ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { useSideBarToggle } from '@/hooks/use-sidebar-toggle'

export default function PageWrapper({ children }: { children: ReactNode }) {
  const { toggleCollapse } = useSideBarToggle()
  const bodyStyle = cn('mt-16 grow bg-background px-4', {
    ['sm:pl-[21rem]']: !toggleCollapse,
    ['sm:pl-[6.4rem]']: toggleCollapse,
  })

  return <div className={bodyStyle}>{children}</div>
}
