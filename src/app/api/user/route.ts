import { auth } from '@/lib/auth/auth'
import { prisma } from '@/lib/db'

export const DELETE = auth(async (req) => {
  if (!req.auth) {
    return new Response('Not authenticated', { status: 401 })
  }

  const currentUser = req.auth.user
  if (!currentUser) {
    return new Response('Invalid user', { status: 401 })
  }

  // TODO: Add soft delete
  try {
    await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        isBlocked: true,
        deletedAt: new Date(),
      },
    })
  } catch (error) {
    return new Response('Internal server error', { status: 500 })
  }

  return new Response('User deleted successfully!', { status: 200 })
})
