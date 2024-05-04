'use server'

import { siteConfig } from '@/config/site'

import { prisma } from '@/lib/db'
import { resend } from '@/lib/email'
import { absoluteUrl } from '@/lib/utils'
import {
  SignUpWithPasswordFormInput,
  signUpWithPasswordSchema,
} from '@/lib/validations/auth'

import { EmailVerificationEmail } from '@/components/emails/email-verification-email'

import { getUserByEmail } from '@/actions/user'
import { env } from '@/root/env.mjs'
import crypto from 'crypto'

var bcryptjs = require('bcryptjs')

const baseUrl = absoluteUrl('')

export async function signUpWithPassword(
  rawInput: SignUpWithPasswordFormInput
): Promise<'invalid-input' | 'exists' | 'error' | 'success'> {
  try {
    const validatedInput = signUpWithPasswordSchema.safeParse(rawInput)
    if (!validatedInput.success) return 'invalid-input'

    const user = await getUserByEmail({ email: validatedInput.data.email })
    if (user) return 'exists'

    const passwordHash = await bcryptjs.hash(validatedInput.data.password, 10)
    const emailVerificationToken = crypto.randomBytes(32).toString('base64url')

    const newUser = await prisma.user.create({
      data: {
        email: validatedInput.data.email,
        password: passwordHash,
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

    return newUser && emailSent ? 'success' : 'error'
  } catch (error) {
    console.error(error)
    throw new Error('Error signing up with password')
  }
}
