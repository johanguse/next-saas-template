import { z } from 'zod'

export const FeedbackFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().min(2, 'Email must be at least 2 characters.').email(),
  title: z.string().min(2, 'Title must be at least 2 characters.'),
  description: z
    .string()
    .min(6, { message: 'Description must be at least 6 characters.' }),
  images: z.array(z.string().url()).optional(),
})
