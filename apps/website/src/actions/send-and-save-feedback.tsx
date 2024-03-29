'use server'

import { siteConfig } from '@/config/site'

import { resend } from '@/lib/email'
import { FeedbackFormSchema } from '@/lib/validations/feedback-form'

import { env } from '@/root/env.mjs'
import { z } from 'zod'

type FeedbackFormInputs = z.infer<typeof FeedbackFormSchema>

export async function sendFeedbackEmail(data: FeedbackFormInputs) {
  const result = FeedbackFormSchema.safeParse(data)

  if (result.success) {
    const { name, email, description } = result.data
    try {
      const data = await resend.emails.send({
        from: env.RESEND_FROM_EMAIL,
        to: [siteConfig.mailSupport],
        reply_to: email,
        subject: 'New feedback from ' + siteConfig.name,
        text: `Name: ${name}\nEmail: ${email}\Suggestion: ${description}`,
      })
      return { success: true, data }
    } catch (error) {
      return { success: false, error }
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() }
  }
}
