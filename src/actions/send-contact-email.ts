'use server'

import { env } from '@/root/env.mjs'
import { z } from 'zod'

import { siteConfig } from '@/config/site'
import { resend } from '@/lib/email'
import { ContactFormSchema } from '@/lib/validations/contact-form'

type ContactFormInputs = z.infer<typeof ContactFormSchema>

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data)

  if (result.success) {
    const { name, email, message } = result.data
    try {
      const data = await resend.emails.send({
        from: env.RESEND_FROM_EMAIL,
        to: [siteConfig.mailSupport],
        subject: 'Contact form submission from ' + siteConfig.name,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
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
