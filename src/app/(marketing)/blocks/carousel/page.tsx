'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

import { LogoCompanies, logosCompaniesData } from '@/lib/fake-data/logos'

const initialLogoData = logosCompaniesData
const logoWidth = 125
const scrollSpeed = 30

const CarouselBlocksPage: React.FC = () => {
  const [logoData, setLogoData] = useState<LogoCompanies[]>([])
  const controls = useAnimation()
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setLogoData([...initialLogoData, ...initialLogoData])
  }, [])

  useEffect(() => {
    const totalWidth = logoWidth * logoData.length

    const animateScroll = async () => {
      await controls.start({
        x: -totalWidth,
        transition: { duration: totalWidth / scrollSpeed, ease: 'linear' },
      })

      // Reset position and repeat animation
      if (controls) {
        controls.set({ x: 0 })
        animateScroll()
      }
    }

    if (logoData.length > 0) {
      animateScroll()
    }
  }, [logoData, controls])

  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">
      <h1 className="text-center">Trusted by</h1>
      <div className="container mx-auto py-5 text-center">
        <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <motion.div ref={carouselRef} animate={controls}>
            <LogoList logoData={logoData} />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

const LogoList: React.FC<{ logoData: LogoCompanies[] }> = ({ logoData }) => (
  <ul className="flex items-center justify-center">
    {logoData.map((logo, index) => (
      <li key={index} className="mx-4" style={{ width: `${logoWidth}px` }}>
        <img
          src={logo.src}
          alt={logo.alt}
          style={{ maxWidth: 'none' }}
          className="mx-auto"
        />
      </li>
    ))}
  </ul>
)

export default CarouselBlocksPage
