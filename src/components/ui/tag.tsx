/* eslint-disable */

import { FC } from 'react'

import { cn } from '@/lib/utils'

type TagProps = {
  labelToken?: string
  text?: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export const Tag: FC<TagProps> = ({ labelToken, className, text, size }) => {
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-4 py-2',
    lg: 'text-lg px-6 py-3',
  }

  const sizeClass = size ? sizeClasses[size] : ''

  const classes = cn(
    `
    px-2 py-px rounded border border-gray-300
    dark:border-gray-600 dark:text-gray-200
  `,
    sizeClass,
    className
  )

  return <span className={classes}>{text ?? labelToken}</span>
}
