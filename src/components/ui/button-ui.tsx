'use client'

import {
  ButtonHTMLAttributes,
  ComponentType,
  DetailedHTMLProps,
  FC,
  forwardRef,
  ForwardRefRenderFunction,
  HTMLAttributeAnchorTarget,
  InputHTMLAttributes,
  PropsWithChildren,
  SVGProps,
  useMemo,
} from 'react'
import Link, { LinkProps } from 'next/link'
import { Loader2, LucideProps } from 'lucide-react'
import { always, cond, equals } from 'ramda'

import { cn } from '@/lib/utils'

type HTMLButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger'

type ButtonProps<NativeProps = {}> = PropsWithChildren & {
  labelToken?: string
  className?: string
  tokenArgs?: { [key: string]: any }
  href?: string
  target?: HTMLAttributeAnchorTarget
  Icon?: ComponentType<SVGProps<SVGSVGElement> & LucideProps>
  iconPlacement?: 'left' | 'right'
  iconSize?: 'sm' | 'md'
  disabled?: boolean
  variant?: ButtonVariant
  download?: any
  loading?: boolean
} & NativeProps

const getButtonColorClasses = cond<ButtonVariant[], string>([
  [
    equals<ButtonVariant>('primary'),
    always(
      `bg-gray-900 text-white border border-gray-900 
        dark:bg-white dark:text-gray-900
        hover:bg-white hover:text-gray-900
          dark:hover:bg-gray-900 dark:hover:text-white dark:hover:border-white
        active:bg-gray-200 
          dark:active:bg-gray-800 
        disabled:bg-gray-200 disabled:text-gray-900 disabled:cursor-not-allowed
          dark:disabled:bg-gray-900 dark:disabled:text-white dark:disabled:border-white
        focus:ring focus:ring-purple-200 focus:ring-opacity-50 
          dark:focus:ring-purple-600 text-sm font-medium
      `
    ),
  ],
  [
    equals<ButtonVariant>('secondary'),
    always(
      `bg-white text-gray-600 border border-gray-300 
        dark:bg-black dark:border-gray-600 dark:text-gray-300
        hover:text-gray-900 hover:border-gray-900
          dark:hover:text-white dark:hover:border-white
        active:bg-gray-200 
          dark:active:bg-gray-700 text-sm font-medium
      `
    ),
  ],
  [
    equals<ButtonVariant>('tertiary'),
    always(`
    text-purple-700 dark:text-purple-300 px-3 py-1
      hover:bg-gray-100  dark:hover:bg-gray-800 text-sm font-medium
  `),
  ],
  [
    equals<ButtonVariant>('danger'),
    always(
      `bg-rose-600 text-white border border-rose-700 
        hover:bg-white/25 hover:text-pink-700
          dark:hover:bg-gray-900/25 dark:hover:text-rose-600
        active:bg-rose-50 
        disabled:bg-gray-200 disabled:text-gray-900 disabled:cursor-not-allowed
          dark:disabled:bg-gray-900 dark:disabled:text-white dark:disabled:border-white text-sm font-medium
        
  `
    ),
  ],
])

export const getButtonStyles = (variant: ButtonVariant, className?: string) =>
  cn(
    'relative group cursor-pointer rounded-md flex px-4 py-3 items-center',
    getButtonColorClasses(variant),
    className
  )

export const Button: FC<ButtonProps<HTMLButtonProps | LinkProps>> = ({
  labelToken,
  tokenArgs,
  className,
  children,
  href,
  Icon,
  iconPlacement = 'left',
  iconSize = 'md',
  variant = 'primary',
  download,
  loading,
  target,
  ...props
}) => {
  const iconPlacementRight = iconPlacement === 'right'
  const classes = useMemo(
    () =>
      cn(
        'relative group cursor-pointer rounded-md flex px-4 py-3 font-medium items-center',
        getButtonColorClasses(variant),
        { 'flex-row-reverse': iconPlacement === 'right' },
        className
      ),
    [className, variant, iconPlacement]
  )

  const content = (
    <>
      {Icon && (
        <Icon
          className={cn(
            'h-5 w-5 stroke-2',
            {
              'h-5 w-5': iconSize === 'md',
              'h-4 w-4': iconSize === 'sm',
              invisible: loading,
            },
            iconPlacementRight ? 'ml-2' : 'mr-2'
          )}
        />
      )}
      <span className={cn({ invisible: loading })}>
        {children ?? labelToken}
      </span>
      {loading && variant !== 'tertiary' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      )}
    </>
  )

  if (href) {
    return (
      <Link {...{ href, target }} {...(props as LinkProps)} className={classes}>
        {content}
      </Link>
    )
  }
  return (
    <button {...(props as HTMLButtonProps)} className={classes}>
      {content}
    </button>
  )
}

type InputSubmitProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>
type CombinedProps = ButtonProps & InputHTMLAttributes<HTMLInputElement>

const SubmitButtonBase: ForwardRefRenderFunction<
  HTMLInputElement,
  ButtonProps<InputSubmitProps>
> = (
  { labelToken, tokenArgs, className, variant = 'primary', loading, ...props },
  ref
) => {
  const classes = useMemo(
    () => getButtonStyles(variant, className),
    [variant, className]
  )

  return (
    <input
      type="submit"
      className={classes}
      disabled={loading}
      value={labelToken ?? tokenArgs?.label}
      {...props}
      ref={ref} // Apply the forwarded ref to the input element
    />
  )
}

export const SubmitButton = forwardRef(SubmitButtonBase)
