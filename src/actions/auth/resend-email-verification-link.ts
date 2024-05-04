'use server'

import { siteConfig } from '@/config/site'

import { prisma } from '@/lib/db'
import { resend } from '@/lib/email'
import {
  EmailVerificationFormInput,
  emailVerificationSchema,
} from '@/lib/validations/email'

import { EmailVerificationEmail } from '@/components/emails/email-verification-email'

import { getUserByEmail } from '../user'
import { env } from '@/root/env.mjs'
import crypto from 'crypto'

export async function resendEmailVerificationLink(
  rawInput: EmailVerificationFormInput
): Promise<'invalid-input' | 'not-found' | 'error' | 'success'> {
  try {
    const validatedInput = emailVerificationSchema.safeParse(rawInput)
    if (!validatedInput.success) return 'invalid-input'

    const user = await getUserByEmail({ email: validatedInput.data.email })
    if (!user) return 'not-found'

    const emailVerificationToken = crypto.randomBytes(32).toString('base64url')

    const userUpdated = await prisma.user.update({
      where: {
        email: validatedInput.data.email,
      },
      data: {
        emailVerificationToken,
      },
    })

    const emailSent = await resend.emails.send({
      from: env.RESEND_FROM_EMAIL,
      to: [validatedInput.data.email],
      subject: `${siteConfig.name} - Verify your email address`,
      react: EmailVerificationEmail({
        email: validatedInput.data.email,
        emailVerificationToken,
      }),
    })

    return userUpdated && emailSent ? 'success' : 'error'
  } catch (error) {
    console.error(error)
    throw new Error('Error resending email verification link')
  }
}
