'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import * as React from 'react'
import { Suspense } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Icons } from '@/components/shared/icons'
import { buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from '@/components/ui/use-toast'
import { cn } from '@/lib/utils'
import { userAuthSchema } from '@/lib/validations/auth'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: string
}

type FormData = z.infer<typeof userAuthSchema>

function useSearchParam(key: string): string | null {
  const [paramValue, setParamValue] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      setParamValue(urlParams.get(key));
    }
  }, [key]);

  return paramValue;
}

export function UserAuthForm({ className, type, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  })
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [isGoogleLoading, setIsGoogleLoading] = React.useState<boolean>(false)
  const callbackUrl = useSearchParam('from');

  async function onSubmit(data: FormData) {
    setIsLoading(true)

    const signInResult = await signIn('email', {
      email: data.email.toLowerCase(),
      redirect: false,
      callbackUrl: callbackUrl || '/dashboard',
    })

    setIsLoading(false)

    if (!signInResult?.ok) {
      return toast({
        title: 'Something went wrong.',
        description: 'Your sign in request failed. Please try again.',
        variant: 'destructive',
      })
    }

    return toast({
      title: 'Check your email',
      description: 'We sent you a login link. Be sure to check your spam too.',
    })
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading || isGoogleLoading}
              {...register('email')}
            />
            {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <button className={cn(buttonVariants())} disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 size-4 animate-spin" />
            )}
            {type === 'register' ? 'Sign Up with Email' : 'Sign In with Email'}
          </button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <button
        type="button"
        className={cn(buttonVariants({ variant: 'outline' }))}
        onClick={() => {
          setIsGoogleLoading(true)
          signIn('google')
        }}
        disabled={isLoading || isGoogleLoading}
      >
        {isGoogleLoading ? (
          <Icons.spinner className="mr-2 size-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 size-4" />
        )}{' '}
        Google
      </button>
    </div>
    </Suspense>
  )
}
