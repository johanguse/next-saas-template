'use client'

import { useState } from 'react'

import { FeedbackFormSchema } from '@/lib/validations/feedback-form'

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

import { sendFeedbackEmail } from '@/actions/send-and-save-feedback'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

export default function FeedbackForm() {
  const [loading, setLoading] = useState<boolean>(false)
  const [status, setStatus] = useState<string>('')
  const form = useForm<z.infer<typeof FeedbackFormSchema>>({
    resolver: zodResolver(FeedbackFormSchema),
    defaultValues: {
      name: '',
      email: '',
      title: '',
      description: '',
    },
  })

  async function processForm(
    data: z.infer<typeof FeedbackFormSchema>
  ): Promise<void> {
    try {
      setLoading(true)

      const result = await sendFeedbackEmail(data)

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

  const resetandCleanErros = () => {
    form.reset()
    form.reset({})
    form.reset({})
    form.clearErrors()
    setStatus('')
  }

  return (
    <div className="w-full py-6">
      <Form {...form}>
        {status === 'success' && (
          <p className="mb-3 rounded bg-slate-800 p-3 text-center text-sm text-green-400 dark:bg-slate-700">
            Thank you for your suggestion! We&apos;ll get back to you shortly.
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
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="The title"
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
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Your suggestion" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          <div className="mt-3 flex flex-row justify-between">
            <Button
              type="submit"
              variant="primary"
              disabled={loading}
              loading={loading}
            >
              Share
            </Button>
            <Button
              variant="link"
              className="text-xs text-muted-foreground"
              onClick={resetandCleanErros}
            >
              Reset Form
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
