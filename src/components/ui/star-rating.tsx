import React from 'react'

import { cn } from '@/lib/utils'
import { Icons } from '@/components/shared/icons'

interface StarRatingProps {
  starsCount?: number
  className?: string
}

const StarRating: React.FC<StarRatingProps> = ({
  starsCount = 5,
  className,
}) => {
  const baseClassNames = cn(
    'h-5 w-5 fill-current text-yellow-300 transition-all hover:scale-110 hover:text-yellow-400 dark:text-yellow-400',
    className
  )

  return (
    <div className="flex gap-0.5">
      {Array.from({ length: starsCount }, (_, index) => (
        <Icons.starRating key={index} className={baseClassNames} />
      ))}
    </div>
  )
}

export default StarRating
