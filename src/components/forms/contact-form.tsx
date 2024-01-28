'use client'

import { useState } from 'react'
import { sendEmail } from '@/actions/send-contact-email'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

import { ContactFormSchema } from '@/lib/validations/contact-form'
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
  const [loading, setLoading] = useState<boolean>(false)
  const [status, setStatus] = useState<string>('')
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  async function processForm(
    data: z.infer<typeof ContactFormSchema>
  ): Promise<void> {
    try {
      setLoading(true)

      const result = await sendEmail(data)

      if (result?.success) {
        toast.success('Email sent!')
        setStatus('success')
        form.reset()
      } else {
        console.error(result?.error)
        setStatus('error')
        toast.error('Something went wrong!')
      }
      setLoading(false)
    } catch (error) {
      console.error(error)
      setStatus('error')
      toast.error('An unexpected error occurred!')
      setLoading(false)
    }
  }

  return (
    <div>
      <Form {...form}>
        {status === 'success' && (
          <p className="mb-3 rounded bg-slate-800 p-3 text-center text-sm text-green-400 dark:bg-slate-700">
            Thank you for your message! We&apos;ll get back to you shortly.
          </p>
        )}
        {status === 'error' && (
          <p className="mb-3 rounded bg-slate-800 p-3 text-center text-sm text-red-400 dark:bg-slate-700">
            Something went wrong, please try again!
          </p>
        )}
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
