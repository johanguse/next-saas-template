import Image from 'next/image'

import { logosCompaniesColorData } from '@/lib/fake-data/logos'

export default function BrandLogos() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:gap-6">
      {logosCompaniesColorData.map((logo, index) => (
        <div className="flex w-full items-center justify-center rounded-lg bg-gray-100 p-4 dark:bg-slate-800 md:p-7">
          <Image
            src={logo.src}
            alt={logo.alt || `Logo ${index + 1}`}
            width="120"
            height="120"
            className="mx-auto"
          />
        </div>
      ))}
    </div>
  )
}
