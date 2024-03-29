'use client'

import { FC, useEffect, useMemo, useRef, useState } from 'react'

import {
  ReviewColumnPropsType,
  ReviewType,
  reviews,
} from '@/lib/fake-data/reviews'
import { cn, splitArray } from '@/lib/utils'

import StarRating from '@/components/ui/star-rating'

import { BlockTitle } from '@/components/layout/main-title'

import clsx from 'clsx'
import { useInView } from 'framer-motion'

interface IReviewColumnPropsType extends ReviewType {
  className?: string
}

const SingleReview: FC<IReviewColumnPropsType> = ({
  title,
  body,
  author,
  rating,
  className,
}) => {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={cn(
        'animate-fade-in-forwards rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className
      )}
      style={{ animationDelay }}
    >
      <blockquote className="text-gray-900">
        <StarRating starsCount={rating} />
        <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

const ReviewColumn: FC<ReviewColumnPropsType> = ({
  reviews,
  reviewClassName = () => '',
  msPerPixel = 0,
  className,
}) => {
  const columnRef = useRef<HTMLDivElement>(null)
  const [columnHeight, setColumnHeight] = useState(0)
  const duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (columnRef.current) {
        setColumnHeight(columnRef.current.offsetHeight)
      }
    })

    if (columnRef.current) {
      resizeObserver.observe(columnRef.current)
    }

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <SingleReview
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

const ReviewGrid: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.4 })
  const columns = splitArray(reviews, 3)

  const randomBetween = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min

  const msPerPixelValues = useMemo(() => {
    let values = new Set<number>()
    while (values.size < columns.length) {
      values.add(randomBetween(20, 30))
    }
    return Array.from(values)
  }, [columns.length])

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          {columns.map((columnReviews, index) => (
            <ReviewColumn
              key={index}
              reviews={columnReviews}
              msPerPixel={msPerPixelValues[index]}
            />
          ))}
        </>
      )}

      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white dark:from-background" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white dark:from-background" />
    </div>
  )
}

export default function ReviewsGridAnimation() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="bg-white pb-16 pt-20 dark:bg-black sm:pb-24 sm:pt-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlockTitle.Wrapper>
          <BlockTitle.Title id="reviews-title" elementType="h2">
            Reviews
          </BlockTitle.Title>
          <BlockTitle.Description>
            See what our customers are saying about us
          </BlockTitle.Description>
        </BlockTitle.Wrapper>
        <ReviewGrid />
      </div>
    </section>
  )
}
