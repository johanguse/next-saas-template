import { cn } from '@/lib/utils'
import { Icons } from '@/components/shared/icons'

interface StarRatingProps {
  starsCount?: number
  className?: string
}

const createStarElements = (
  starsCount: number,
  classNames: string
): JSX.Element[] => {
  return [...Array(starsCount)].map((_, index) => (
    <Icons.starRating key={index} className={classNames} />
  ))
}

export default function StarRating({
  starsCount = 5,
  className,
}: StarRatingProps) {
  const baseClassNames = cn(
    'h-5 w-5 fill-current text-yellow-300 transition-all hover:scale-110 hover:text-yellow-400 dark:text-yellow-400',
    className
  )

  return (
    <div className="flex gap-0.5">
      {createStarElements(starsCount, baseClassNames)}
    </div>
  )
}
