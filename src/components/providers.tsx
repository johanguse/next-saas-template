'use client'

import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'

interface ProvidersProps extends ThemeProviderProps {
  children: React.ReactNode
  session?: Session
}

export function Providers({ children, session, ...props }: ProvidersProps) {
  return (
    <SessionProvider session={session}>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </SessionProvider>
  )
}
