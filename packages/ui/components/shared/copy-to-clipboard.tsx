'use client'

import { cn } from '@/lib/utils'

import { useClipboard } from '@/hooks/use-clipboard'

import { Button } from '@/components/ui/button'

import { CheckIcon, CopyIcon } from 'lucide-react'

interface CopyActionsProps extends React.ComponentProps<'div'> {
  message: string
}

export default function CopyToClipboard({
  message,
  className,
  ...props
}: CopyActionsProps) {
  const { isCopied, copyToClipboard } = useClipboard({ timeout: 2000 })

  const onCopy = () => {
    if (isCopied) return
    copyToClipboard(message)
  }

  return (
    <div className={cn('', className)} {...props}>
      <Button
        variant="secondary"
        size="icon"
        className="size-8"
        onClick={onCopy}
      >
        {isCopied ? (
          <CheckIcon className="size-4 text-emerald-500" />
        ) : (
          <CopyIcon className="size-4 text-zinc-500" />
        )}
        <span className="sr-only">Copy message</span>
      </Button>
    </div>
  )
}
