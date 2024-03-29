'use server'

import { signOut } from '@/lib/auth/auth'

export const logout = async () => {
  await signOut()
}
