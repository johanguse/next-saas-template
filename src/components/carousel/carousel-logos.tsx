import Image from 'next/image'

import { logosCompaniesData } from '@/lib/fake-data/logos'

import { Marquee } from '@devnomic/marquee'

const logoWidth = 125

const CarouselLogos: React.FC = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="container mx-auto text-center">
        <div className="inline-flex max-w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <Marquee className="py-2" reverse={false} fade={true}>
            <ul className="flex items-center justify-center">
              {logosCompaniesData.map((logo, index) => (
                <li
                  key={index}
                  className="mx-4"
                  style={{ width: `${logoWidth}px` }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logoWidth}
                    height={logoWidth}
                    style={{ maxWidth: 'none' }}
                    className="mx-auto dark:invert"
                  />
                </li>
              ))}
            </ul>
          </Marquee>
        </div>
      </div>
    </div>
  )
}

export default CarouselLogos
