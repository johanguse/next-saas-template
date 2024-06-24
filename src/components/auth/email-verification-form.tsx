'use client'

import * as React from 'react'

import { useRouter } from 'next/navigation'

import {
  type EmailVerificationFormInput,
  emailVerificationSchema,
} from '@/lib/validations/email'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { Icons } from '@/components/shared/icons'

import { resendEmailVerificationLink } from '@/actions/auth/resend-email-verification-link'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export function EmailVerificationForm(): JSX.Element {
  const router = useRouter()

  const [isPending, startTransition] = React.useTransition()

  const form = useForm<EmailVerificationFormInput>({
    resolver: zodResolver(emailVerificationSchema),
    defaultValues: {
      email: '',
    },
  })

  function onSubmit(formData: EmailVerificationFormInput): void {
    startTransition(async () => {
      try {
        const message = await resendEmailVerificationLink({
          email: formData.email,
        })

        switch (message) {
          case 'not-found':
            toast.error('User with this email address does not exist')
            form.reset()
            break
          case 'success':
            toast.success('Check your inbox and verify your email address')
            router.push('/login')
            break
          default:
            toast.error('Error sending verification link<br/>Please try again')
            router.push('/register/reverify-email')
        }
      } catch (error) {
        toast.error('Something went wrong<br/>Please try again')
        console.error(error)
      }
    })
  }

  return (
    <Form {...form}>
      <form
        className="grid gap-4"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="johnsmith@gmail.com" {...field} />
              </FormControl>
              <FormMessage className="pt-2 sm:text-sm" />
            </FormItem>
          )}
        />

        <Button disabled={isPending}>
          {isPending ? (
            <>
              <Icons.spinner
                className="mr-2 size-4 animate-spin"
                aria-hidden="true"
              />
              <span>Loading...</span>
            </>
          ) : (
            <span>Get verification link</span>
          )}
          <span className="sr-only">Resend email verification link</span>
        </Button>
      </form>
    </Form>
  )
}
