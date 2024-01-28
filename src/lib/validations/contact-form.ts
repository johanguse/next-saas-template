import { z } from 'zod'

export const ContactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().min(2, 'Email must be at least 2 characters.').email(),
  message: z
    .string()
    .min(6, { message: 'Message must be at least 6 characters.' }),
})
