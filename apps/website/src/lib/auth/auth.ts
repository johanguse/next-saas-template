import authConfig from '@/lib/auth/auth.config'
import { prisma } from '@/lib/db'
import { getUserById } from '@/lib/user'

import { PrismaAdapter } from '@auth/prisma-adapter'
import { UserRole } from '@prisma/client'
import NextAuth from 'next-auth'

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/login',
    error: '/auth/error',
  },
  events: {
    async linkAccount({ user }) {
      await prisma.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      })
    },
  },
  callbacks: {
    async session({ token, session }) {
      if (session.user) {
        if (token.sub) {
          session.user.id = token.sub
        }

        if (token.role && session.user) {
          session.user.role = token.role as UserRole
        }

        if (token.email) {
          session.user.email = token.email
        }

        session.user.name = token.name
        session.user.image = token.picture
      }

      return session
    },

    async jwt({ token }) {
      if (!token.sub) return token

      const dbUser = await getUserById(token.sub)

      if (!dbUser) return token

      token.name = dbUser.name
      token.role = dbUser.role
      token.email = dbUser.email
      token.picture = dbUser.image

      return token
    },
  },
  ...authConfig,
  debug: process.env.NODE_ENV !== 'production',
})
