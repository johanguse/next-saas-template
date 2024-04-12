'use server'

import { prisma } from '@/lib/db'
import {
  PasswordUpdateFormInputExtended,
  passwordUpdateSchemaExtended,
} from '@/lib/validations/auth'

import { getUserByResetPasswordToken } from '@/actions/user'

var bcryptjs = require('bcryptjs')

export async function updatePassword(
  rawInput: PasswordUpdateFormInputExtended
): Promise<'invalid-input' | 'not-found' | 'expired' | 'error' | 'success'> {
  try {
    const validatedInput = passwordUpdateSchemaExtended.safeParse(rawInput)
    if (
      !validatedInput.success ||
      validatedInput.data.password !== validatedInput.data.confirmPassword
    )
      return 'invalid-input'

    const user = await getUserByResetPasswordToken({
      token: validatedInput.data.resetPasswordToken,
    })
    if (!user) return 'not-found'

    const resetPasswordExpiry = user.resetPasswordTokenExpiry
    if (!resetPasswordExpiry || resetPasswordExpiry < new Date())
      return 'expired'

    const passwordHash = await bcryptjs.hash(validatedInput.data.password, 10)

    const userUpdated = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        password: passwordHash,
        resetPasswordToken: null,
        resetPasswordTokenExpiry: null,
      },
    })

    return userUpdated ? 'success' : 'error'
  } catch (error) {
    console.error(error)
    throw new Error('Error updating password')
  }
}
