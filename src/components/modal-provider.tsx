'use client'

import { useMounted } from '@/hooks/use-mounted'

import { CollectEmailsModal } from '@/components/modals/collect-emails-modal'
import { SignInModal } from '@/components/modals/sign-in-modal'

export const ModalProvider = () => {
  const mounted = useMounted()

  if (!mounted) {
    return null
  }

  return (
    <>
      <SignInModal />
      <CollectEmailsModal />
      {/* add your own modals here... */}
    </>
  )
}
