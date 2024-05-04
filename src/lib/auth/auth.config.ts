import { siteConfig } from '@/config/site'

import { prisma } from '@/lib/db'
import { resend } from '@/lib/email'
import { signInWithPasswordSchema } from '@/lib/validations/auth'

import MagicLinkEmail from '@/components/emails/magic-link-email'

import { env } from '@/root/env.mjs'
import { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import GitHubProvider from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import Resend from 'next-auth/providers/resend'

var bcryptjs = require('bcryptjs')

export default {
  providers: [
    Google({
      id: 'google',
      name: 'Google',
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    GitHubProvider({
      id: 'github',
      name: 'GitHub',
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    Credentials({
      id: 'credentials',
      name: 'Credentials',
      async authorize(rawCredentials) {
        const validatedFields =
          signInWithPasswordSchema.safeParse(rawCredentials)

        if (!validatedFields.success) {
          return null
        }

        const { email, password } = validatedFields.data

        try {
          const user = await prisma.user.findUnique({
            where: {
              email,
            },
          })

          if (!user || !user.password) {
            return null
          }

          const passwordMatch = await bcryptjs.compare(password, user.password)

          if (!passwordMatch) {
            return null
          }

          return user
        } catch (error) {
          return null
        }
      },
    }),
    Resend({
      id: 'resend',
      name: 'Resend',
      apiKey: env.RESEND_API_KEY,
      from: env.RESEND_FROM_EMAIL,
      async sendVerificationRequest({
        identifier,
        url,
      }: {
        identifier: string
        url: string
      }) {
        try {
          await resend.emails.send({
            from: env.RESEND_FROM_EMAIL,
            to: [identifier],
            subject: `${siteConfig.name} magic link sign in`,
            react: MagicLinkEmail({ identifier, url }),
          })
          console.log('Verification email sent')
        } catch (error) {
          console.log(error)
          throw new Error('Failed to send verification email')
        }
      },
    }),
  ],
} satisfies NextAuthConfig
