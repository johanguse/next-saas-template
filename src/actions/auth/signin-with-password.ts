'use server'

import {
  SignInWithPasswordFormInput,
  signInWithPasswordSchema,
} from '@/lib/validations/auth'

import { getUserByEmail } from '@/actions/user'
import { AuthError } from 'next-auth'
import { signIn } from 'next-auth/react'

export async function signInWithPassword(
  rawInput: SignInWithPasswordFormInput
): Promise<
  | 'invalid-input'
  | 'invalid-credentials'
  | 'not-registered'
  | 'unverified-email'
  | 'incorrect-provider'
  | 'success'
> {
  try {
    const validatedInput = signInWithPasswordSchema.safeParse(rawInput)
    if (!validatedInput.success) return 'invalid-input'

    const existingUser = await getUserByEmail({
      email: validatedInput.data.email,
    })
    if (!existingUser) return 'not-registered'

    if (!existingUser.email || !existingUser.password)
      return 'incorrect-provider'

    if (!existingUser.emailVerified) return 'unverified-email'

    await signIn('credentials', {
      email: validatedInput.data.email,
      password: validatedInput.data.password,
      redirect: false,
    })

    return 'success'
  } catch (error) {
    console.error(error)
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'invalid-credentials'
        default:
          throw error
      }
    } else {
      throw new Error('Error signin in with password')
    }
  }
}
