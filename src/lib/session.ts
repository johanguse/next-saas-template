import { cache } from 'react'

import { auth } from '@/lib/auth/auth'

export const getCurrentUser = cache(async () => {
  const session = await auth()
  if (!session?.user) {
    return undefined
  }
  return session.user
})
