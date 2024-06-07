import { Navbar } from '@/components/dashboard-admin/navbar'

interface ContentLayoutProps {
  title: string
  children: React.ReactNode
}

export function ContentLayout({ title, children }: ContentLayoutProps) {
  return (
    <div>
      <Navbar title={title} />
      <div className="container px-4 py-8 sm:px-8">{children}</div>
    </div>
  )
}
