'use client'

import { useEffect, useState } from 'react'

import { ChevronUp } from 'lucide-react'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false)
    }
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      })
  }

  return (
    <button
      className={`fixed bottom-4 right-4 rounded-full bg-slate-100 p-2 outline-none transition-opacity duration-200 dark:bg-black ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={scrollToTop}
    >
      <ChevronUp className="text-primary  dark:text-primary" />
    </button>
  )
}

export default ScrollToTopButton
