'use client'

import * as React from 'react'

import Link from 'next/link'

import { blocksConfig } from '@/config/blocks'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import { DocsSidebarNav } from '@/components/docs/sidebar-nav'

import { Menu } from 'lucide-react'

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <main className="w-full">
      <div className="container mx-auto flex flex-col px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="flex-1 md:grid md:grid-cols-[120px_1fr] md:gap-4 lg:grid-cols-[150px_1fr] lg:gap-10">
          <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-4 md:sticky md:block lg:py-10">
            <DocsSidebarNav items={blocksConfig.sidebarNavBlocks} />
          </aside>
          <div className="break-anywhere mx-auto w-full max-w-full">
            <div>
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="link"
                    className="mx-auto mt-8 flex md:hidden"
                  >
                    Open menu block <Menu className="ml-2 size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Blocks</SheetTitle>
                    <SheetDescription>Meet our blocks</SheetDescription>
                  </SheetHeader>
                  <div className="flex flex-col space-y-2">
                    {blocksConfig.sidebarNavBlocks.map((item, index) => (
                      <div key={index} className="flex flex-col space-y-3 pt-6">
                        <h4 className="font-medium">{item.title}</h4>
                        {item?.items?.length &&
                          item.items.map((item) => (
                            <React.Fragment key={item.href}>
                              {!item.disabled &&
                                (item.href ? (
                                  <Link
                                    href={item.href}
                                    className="text-muted-foreground"
                                    onClick={() => {
                                      setOpen(false)
                                    }}
                                  >
                                    {item.title}
                                    {item.label && (
                                      <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                                        {item.label}
                                      </span>
                                    )}
                                  </Link>
                                ) : (
                                  item.title
                                ))}
                            </React.Fragment>
                          ))}
                      </div>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}
