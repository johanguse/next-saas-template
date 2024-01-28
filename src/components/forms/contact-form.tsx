'use client'

import { useState } from 'react'
import { sendEmail } from '@/actions/send-contact-email'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

import {
  ContactFormSchema,
  FormDataSchema,
} from '@/lib/validations/contact-form'
import { Button } from '@/components/ui/button-ui'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  async function processForm(
    data: z.infer<typeof FormDataSchema>
  ): Promise<void> {
    try {
      setLoading(true)
      console.log(JSON.parse(JSON.stringify(data)))

      const result = await sendEmail(JSON.parse(JSON.stringify(data)))

      if (result?.success) {
        console.log({ data: result.data })
        toast.success('Email sent!')
      } else {
        console.error(result?.error)
        toast.error('Something went wrong!')
      }

      setLoading(false)
    } catch (error) {
      console.error(error)
      toast.error('An unexpected error occurred!')

      setLoading(false)
    }
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(processForm)}
          className="grid w-full gap-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your name"
                    className="w-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="w-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Your message" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="mr-auto mt-4 px-6 text-left"
            variant="primary"
            disabled={loading}
            loading={loading}
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}
