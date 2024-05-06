'use client'

import React from 'react'

import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/navigation'

import { marketingConfig } from '@/config/marketing'
import { siteConfig } from '@/config/site'

import { cn } from '@/lib/utils'

import { useCurrentUser } from '@/hooks/use-current-user'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'

import AuthLink from '@/components/shared/auth-link'
import ButtonShareFeedback from '@/components/shared/button-share-feedback'
import IconLogo from '@/components/shared/logo-icon'

import { Menu } from 'lucide-react'

export default function MobileSheetMenu() {
  const [open, setOpen] = React.useState(false)
  const user = useCurrentUser()

  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" className="mx-auto flex lg:hidden">
            Menu <Menu className="ml-2 size-4" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader className="mb-8 flex flex-row items-center">
            <IconLogo className="mr-2 size-10" />
            <span className="font-urban font-bold text-black dark:text-white">
              {siteConfig.name}
            </span>
          </SheetHeader>
          <div className="flex flex-col space-y-2">
            {marketingConfig.mainNav?.map(
              (item) =>
                item.href && (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    onOpenChange={setOpen}
                  >
                    {item.title}
                  </MobileLink>
                )
            )}
          </div>
          <div className="mt-8 flex flex-col space-y-2">
            {user ? (
              <ButtonShareFeedback />
            ) : (
              <>
                <AuthLink variant="outline" href="/login" text="Login Page" />
                <AuthLink href="/register" text="Sign in" />
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}
