'use client'

import * as React from 'react'

import { useRouter } from 'next/navigation'

import {
  type PasswordResetFormInput,
  passwordResetSchema,
} from '@/lib/validations/auth'

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

import { resetPassword } from '@/actions/auth/reset-password'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export function PasswordResetForm(): JSX.Element {
  const router = useRouter()

  const [isPending, startTransition] = React.useTransition()

  const form = useForm<PasswordResetFormInput>({
    resolver: zodResolver(passwordResetSchema),
    defaultValues: {
      email: '',
    },
  })

  function onSubmit(formData: PasswordResetFormInput): void {
    startTransition(async () => {
      try {
        const message = await resetPassword({ email: formData.email })

        switch (message) {
          case 'not-found':
            toast.warning('User with this email address does not exist')
            form.reset()
            break
          case 'success':
            toast.success('Check your email for a password reset link')
            router.push('/login')
            break
          default:
            toast.error('Error resetting password<br/>Please try again')
            router.push('/login')
        }
      } catch (error) {
        console.error(error)
        toast.error('Something went wrong<br/>Try again')
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
              <span>Pending...</span>
            </>
          ) : (
            <span>Continue</span>
          )}
          <span className="sr-only">Continue resetting password</span>
        </Button>
      </form>
    </Form>
  )
}
