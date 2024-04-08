import { auth } from '@/lib/auth/auth'

export async function getCurrentUser() {
  const session = await auth()

  return session?.user
}

export const currentRole = async () => {
  const session = await auth()

  return session?.user?.role
}
