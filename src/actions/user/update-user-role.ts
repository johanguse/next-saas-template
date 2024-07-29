'use server'

import { revalidatePath } from 'next/cache'

import { auth } from '@/lib/auth/auth'
import { prisma } from '@/lib/db'
import { userRoleSchema } from '@/lib/validations/user'

import { UserRole } from '@prisma/client'

export type FormData = {
  role: UserRole
}

export async function updateUserRole(userId: string, data: FormData) {
  try {
    const session = await auth()

    if (!session?.user || session?.user.id !== userId) {
      throw new Error('Unauthorized')
    }

    const { role } = userRoleSchema.parse(data)

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        role: role,
      },
    })

    revalidatePath('/dashboard/settings')
    return { status: 'success' }
  } catch (error) {
    return { status: 'error' }
  }
}
