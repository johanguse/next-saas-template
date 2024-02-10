import { Metadata, Viewport } from 'next'

import { siteConfig } from '@/config/site'

import { cn } from '@/lib/utils'

import { Toaster } from '@/components/ui/toaster'

import { ModalProvider } from '@/components/modal-provider'
import { Providers } from '@/components/providers'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import HWComponent from '@/components/thirdparty/headwayapp'

import '@/styles/globals.css'

import { fontHeading, fontSans, fontUrban } from '@/assets/fonts'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GA } from 'pliny/analytics/GoogleAnalytics'
import { env } from 'process'

// e.g. UA-000000-2 or G-XXXXXXX
const googleAnalyticsId = env.NEXT_PUBLIC_GOOGLE_ANALITYCS!

interface RootLayoutProps {
  children: React.ReactNode
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'cyan' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Server Components',
    'Radix UI',
  ],
  authors: [
    {
      name: 'johanguse',
    },
  ],
  creator: 'johanguse',
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@johanguse',
  },
  icons: {
    icon: '/favicons/favicon.ico',
    shortcut: '/favicons/favicon-16x16.png',
    apple: '/favicons/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontUrban.variable,
          fontHeading.variable
        )}
      >
        <Providers attribute="class" defaultTheme="system" enableSystem>
          {children}
          <GA googleAnalyticsId={googleAnalyticsId} />
          <VercelAnalytics />
          <SpeedInsights />
          <Toaster richColors closeButton position="top-center" />
          <ModalProvider />
          <TailwindIndicator />
          <HWComponent />
        </Providers>
      </body>
    </html>
  )
}
