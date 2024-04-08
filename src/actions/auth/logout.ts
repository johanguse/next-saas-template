'use server'

import { signOut } from '@/lib/auth/auth'

export const AuthLogout = async () => {
  await signOut()
}
