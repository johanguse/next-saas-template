import { Button } from '@/components/ui/button-ui'

import { EmptyPlaceholder } from '@/components/shared/empty-placeholder'

export default function PlaceholderContent() {
  return (
    <main className="rounded-lg border-none p-10 dark:bg-black">
      <EmptyPlaceholder>
        <EmptyPlaceholder.Icon name="post" />
        <EmptyPlaceholder.Title>No content created</EmptyPlaceholder.Title>
        <EmptyPlaceholder.Description>
          You don&apos;t have any content yet. Start creating content.
        </EmptyPlaceholder.Description>
        <Button variant="secondary">Fake button</Button>
      </EmptyPlaceholder>
    </main>
  )
}
