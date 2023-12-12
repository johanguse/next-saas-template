'use client'

import { useMounted } from '@/hooks/use-mounted'
import { SignInModal } from '@/components/layout/sign-in-modal'

export const ModalProvider = () => {
  const mounted = useMounted()

  if (!mounted) {
    return null
  }

  return (
    <>
      <SignInModal />
      {/* add your own modals here... */}
    </>
  )
}
