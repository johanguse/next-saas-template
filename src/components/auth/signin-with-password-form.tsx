'use client'

import * as React from 'react'

import { useRouter } from 'next/navigation'

import { DEFAULT_LOGIN_REDIRECT } from '@/lib/auth/routes'
import {
  type SignInWithPasswordFormInput,
  signInWithPasswordSchema,
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

import { PasswordInput } from '@/components/forms/password-input'
import { Icons } from '@/components/shared/icons'

import { signInWithPassword } from '@/actions/auth/signin-with-password'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export function SignInWithPasswordForm(): JSX.Element {
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()

  const form = useForm<SignInWithPasswordFormInput>({
    resolver: zodResolver(signInWithPasswordSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function onSubmit(formData: SignInWithPasswordFormInput) {
    startTransition(async () => {
      try {
        const message = await signInWithPassword({
          email: formData.email,
          password: formData.password,
        })

        switch (message) {
          case 'not-registered':
            toast.warning(
              'Please make sure you are signed up before signing in'
            )
            break
          case 'incorrect-provider':
            toast.warning('Perhaps you signed up with a different method?')
            break
          case 'unverified-email':
            toast.warning('Please verify your email address before signing in')
            break
          case 'invalid-credentials':
            toast.error('Double-check your credentials and try again')
            break
          case 'success':
            toast.success('You are now signed in')
            router.push(DEFAULT_LOGIN_REDIRECT)
            break
          default:
            toast.error('Please try again')
        }
      } catch (error) {
        console.error(error)
        toast.error('Something went wrong Please try again')
      }
    })
  }

  return (
    <Form {...form}>
      <form
        className="grid w-full gap-4"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="johnsmith@gmail.com"
                  {...field}
                />
              </FormControl>
              <FormMessage className="pt-2 sm:text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="********" {...field} />
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
              <span>Signing in...</span>
            </>
          ) : (
            <span>Sign in</span>
          )}
          <span className="sr-only">Sign in with email and password</span>
        </Button>
      </form>
    </Form>
  )
}
