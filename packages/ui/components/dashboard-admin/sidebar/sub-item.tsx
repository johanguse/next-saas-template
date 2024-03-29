'use client'

import { useMemo } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ISubItem } from '@/config/dashboard-admin'

const SubMenuItem = ({ item }: { item: ISubItem }) => {
  const { name, path } = item
  const pathname = usePathname()

  const isActive = useMemo(() => path === pathname, [path, pathname])

  return (
    <Link
      href={path}
      className={`cursor-pointer text-sm hover:text-indigo-500 ${
        isActive ? 'font-semibold text-indigo-500 ' : 'hover:underline'
      }`}
    >
      {name}
    </Link>
  )
}

export default SubMenuItem
