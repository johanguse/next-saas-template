import * as React from 'react'

import { cn } from '@/lib/utils'

import { Slot } from '@radix-ui/react-slot'

import { SexyBorder } from '../sexy-border'
import { type VariantProps, cva } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'underline-offset-4 hover:underline text-primary',
        orange: 'bg-orange-500 hover:bg-orange-400',
        sexy: 'transition-all bg-black hover:bg-opacity-0',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 rounded-md',
        lg: 'h-11 px-8 rounded-md',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <WithSexyBorder variant={variant} className={cn('w-fit', className)}>
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      </WithSexyBorder>
    )
  }
)
Button.displayName = 'Button'

export function WithSexyBorder({
  variant,
  className,
  children,
}: {
  variant: string | null | undefined
  className?: string
  children: React.ReactNode
}) {
  if (variant === 'sexy') {
    return <SexyBorder className={className}>{children}</SexyBorder>
  } else {
    return <>{children}</>
  }
}

export { Button, buttonVariants }
