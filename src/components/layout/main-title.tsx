/* eslint-disable */

/*
to fix: Error: Component definition is missing display name  react/display-name
*/

import React from 'react'

import { cn } from '@/lib/utils'

function createComponentWithElement(
  defaultElement: string,
  baseClassNames: string
) {
  return ({
    elementType = defaultElement,
    className = '',
    children,
    ...props
  }: {
    elementType?: string
    className?: string
    children?: React.ReactNode
    [x: string]: any
  }) => {
    const combinedClassNames = cn(baseClassNames, className)
    return React.createElement(
      elementType,
      { className: combinedClassNames, ...props },
      children
    )
  }
}

const BlockTitleHeader = createComponentWithElement(
  'h1',
  'relative mb-2 bg-gradient-to-r from-indigo-500 to-purple-500/80 bg-clip-text text-base font-extrabold text-transparent text-balance'
)

const BlockTitleTitle = createComponentWithElement(
  'p',
  'text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white text-balance'
)

const BlockTitleDescription = createComponentWithElement(
  'p',
  'mt-6 text-lg text-gray-600 dark:text-gray-300 text-balance'
)

const BlockTitleGradientBackground = createComponentWithElement(
  'div',
  'absolute inset-0 mx-auto h-10 top-20 max-w-xs bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600 via-pink-600 to-blue-600 blur-[118px]'
)

const BlockTitleSeparatorLine = createComponentWithElement(
  'div',
  'mt-16 mb-5 mx-auto h-px w-full max-w-xs bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_6px]'
)

const BlockTitleWrapper: React.FC<{
  className?: string
  children?: React.ReactNode
}> = ({ children, className }) => {
  const wrapperClass = cn(
    'relative flex flex-col items-center text-center',
    className
  )
  return <div className={wrapperClass}>{children}</div>
}

const BlockTitle = {
  Wrapper: BlockTitleWrapper,
  Header: BlockTitleHeader,
  Title: BlockTitleTitle,
  Description: BlockTitleDescription,
  Background: BlockTitleGradientBackground,
  Separator: BlockTitleSeparatorLine,
}

export { BlockTitle }
