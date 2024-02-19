import { blocksConfig } from '@/config/blocks'

import { DocsSidebarNav } from '@/components/docs/sidebar-nav'

interface DocsLayoutProps {
  children: React.ReactNode
}

export default async function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <main className="w-full">
      <div className="container mx-auto flex flex-col px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="flex-1 md:grid md:grid-cols-[120px_1fr] md:gap-4 lg:grid-cols-[150px_1fr] lg:gap-10">
          <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-4 md:sticky md:block lg:py-10">
            <DocsSidebarNav items={blocksConfig.sidebarNavBlocks} />
          </aside>
          <div className="break-anywhere mx-auto w-full max-w-full">
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}
