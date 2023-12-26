'use client'

import { useEffect } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    HW_config?: {
      selector: string
      account: string
    }
  }
}

const HWComponent = () => {
  useEffect(() => {
    if (!window.HW_config) {
      window.HW_config = {
        selector: '#changelog',
        account: '7kzOvx',
      }
    }

    return () => {
      if (window.hasOwnProperty('HW_config')) {
        delete window.HW_config
      }
    }
  }, [])

  return (
    <>
      <Script src="//cdn.headwayapp.co/widget.js" strategy="afterInteractive" />
    </>
  )
}

export default HWComponent
