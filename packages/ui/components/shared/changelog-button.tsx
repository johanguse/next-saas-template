import { Icons } from '@/components/shared/icons'

export default function ChangelogButton() {
  return (
    <div id="changelog" className="relative size-8">
      <button aria-label="Changelog" className="absolute right-1 top-1">
        <Icons.notification />
      </button>
    </div>
  )
}
