import { prisma } from '@/lib/db'
import { signInWithPasswordSchema } from '@/lib/validations/auth'

import { env } from '@/root/env.mjs'
import type { NextAuthConfig } from 'next-auth'
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
      from: 'SaaS Starter App <onboarding@resend.dev>',

      //      async sendVerificationRequest({
      //        identifier,
      //        url,
      //      }: {
      //        identifier: string
      //        url: string
      //      }) {
      //        try {
      //          console.log('Sending verification email')
      //          await resend.emails.send({
      //            from: env.RESEND_FROM_EMAIL,
      //            to: [identifier],
      //            subject: `${siteConfig.name} magic link sign in`,
      //            react: MagicLinkEmail({ identifier, url }),
      //          })
      //          console.log('Verification email sent')
      //        } catch (error) {
      //          throw new Error('Failed to send verification email')
      //        }
      //      },
    }),
    //    EmailProvider({
    //      sendVerificationRequest: async ({ identifier, url, provider }) => {
    //        const user = await getUserByEmail(identifier)
    //        if (!user || !user.name) return null
    //
    //        const userVerified = user?.emailVerified ? true : false
    //        const authSubject = userVerified
    //          ? `Sign-in link for ${siteConfig.name}`
    //          : 'Activate your account'
    //
    //        try {
    //          const { data, error } = await resend.emails.send({
    //            from: 'SaaS Starter App <onboarding@resend.dev>',
    //            to:
    //              process.env.NODE_ENV === 'development'
    //                ? 'delivered@resend.dev'
    //                : identifier,
    //            subject: authSubject,
    //            react: MagicLinkEmail({
    //              firstName: user?.name as string,
    //              actionUrl: url,
    //              mailType: userVerified ? 'login' : 'register',
    //              siteName: siteConfig.name,
    //            }),
    //            // Set this to prevent Gmail from threading emails.
    //            // More info: https://resend.com/changelog/custom-email-headers
    //            headers: {
    //              'X-Entity-Ref-ID': new Date().getTime() + '',
    //            },
    //          })
    //          if (error || !data) {
    //            throw new Error(error?.message)
    //          }
    //          // console.log(data)
    //        } catch (error) {
    //          throw new Error('Failed to send verification email.')
    //        }
    //      },
    //    }),
  ],
} satisfies NextAuthConfig
