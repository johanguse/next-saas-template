'use server'

import { prisma } from '@/lib/db'
import { resend } from '@/lib/email'
import {
  PasswordResetFormInput,
  passwordResetSchema,
} from '@/lib/validations/auth'

import { ResetPasswordEmail } from '@/components/emails/reset-password-email'

import { getUserByEmail } from '@/actions/user'
import { env } from '@/root/env.mjs'
import crypto from 'crypto'

export async function resetPassword(
  rawInput: PasswordResetFormInput
): Promise<'invalid-input' | 'not-found' | 'error' | 'success'> {
  try {
    const validatedInput = passwordResetSchema.safeParse(rawInput)
    if (!validatedInput.success) return 'invalid-input'

    const user = await getUserByEmail({ email: validatedInput.data.email })
    if (!user) return 'not-found'

    const today = new Date()
    const resetPasswordToken = crypto.randomBytes(32).toString('base64url')
    const resetPasswordTokenExpiry = new Date(
      today.setDate(today.getDate() + 1)
    ) // 24 hours from now

    const userUpdated = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        resetPasswordToken,
        resetPasswordTokenExpiry,
      },
    })

    const emailSent = await resend.emails.send({
      from: env.RESEND_FROM_EMAIL,
      to: [validatedInput.data.email],
      subject: 'Reset your password',
      react: ResetPasswordEmail({
        email: validatedInput.data.email,
        resetPasswordToken,
      }),
    })

    return userUpdated && emailSent ? 'success' : 'error'
  } catch (error) {
    console.error(error)
    return 'error'
  }
}
