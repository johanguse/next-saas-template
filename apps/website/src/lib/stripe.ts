import { env } from '@/root/env.mjs'
import Stripe from 'stripe'

export const stripe = new Stripe(env.STRIPE_SECRET_API_KEY, {
  apiVersion: '2023-10-16',
  typescript: true,
})
