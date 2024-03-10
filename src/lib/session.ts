import { auth } from '@/root/auth'

export async function getCurrentUser() {
  const session = await auth()

  return session?.user
}
