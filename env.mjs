import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    NEXTAUTH_URL: z.string().url().optional(),
    NEXTAUTH_SECRET: z.string().min(1),
    GOOGLE_CLIENT_ID: z.string().min(1),
    GOOGLE_CLIENT_SECRET: z.string().min(1),
    GITHUB_OAUTH_TOKEN: z.string().min(1),
    RESEND_API_KEY: z.string().min(1),
    STRIPE_SECRET_API_KEY: z.string().min(1),
    STRIPE_WEBHOOK_SECRET: z.string().min(1),
    RESEND_FROM_EMAIL: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_ANALITYCS_ID: z.string().min(1).optional(),
    NEXT_PUBLIC_APP_URL: z.string().min(1).optional(),
    NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PLAN_ID: z.string().min(1),
    NEXT_PUBLIC_STRIPE_PRO_YEARLY_PLAN_ID: z.string().min(1),
    NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PLAN_ID: z.string().min(1),
    NEXT_PUBLIC_STRIPE_BUSINESS_YEARLY_PLAN_ID: z.string().min(1),
    NEXT_PUBLIC_STRIPE_PRICING_TABLE_ID: z.string().min(1).optional(),
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().min(1).optional(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    NEXT_PUBLIC_ANALITYCS_ID: process.env.NEXT_PUBLIC_ANALITYCS_ID,
    // Auth
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GITHUB_OAUTH_TOKEN: process.env.GITHUB_OAUTH_TOKEN,
    // Stripe
    STRIPE_SECRET_API_KEY: process.env.STRIPE_SECRET_API_KEY,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
    NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PLAN_ID:
      process.env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PLAN_ID,
    NEXT_PUBLIC_STRIPE_PRO_YEARLY_PLAN_ID:
      process.env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PLAN_ID,
    NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PLAN_ID:
      process.env.NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PLAN_ID,
    NEXT_PUBLIC_STRIPE_BUSINESS_YEARLY_PLAN_ID:
      process.env.NEXT_PUBLIC_STRIPE_BUSINESS_YEARLY_PLAN_ID,
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    NEXT_PUBLIC_STRIPE_PRICING_TABLE_ID:
      process.env.NEXT_PUBLIC_STRIPE_PRICING_TABLE_ID,
    // Resend
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
  },
})
