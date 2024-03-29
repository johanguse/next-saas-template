import Link from 'next/link'

import { cn } from '@/lib/utils'

import { buttonVariants } from '@/components/ui/button'

import { MessageSquareText } from 'lucide-react'

export default function ButtonShareFeedback() {
  return (
    <Link
      href="/feedback"
      className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'px-4')}
    >
      <MessageSquareText className="mr-2 size-4" />
      <p>Share a feedback</p>
    </Link>
  )
}
