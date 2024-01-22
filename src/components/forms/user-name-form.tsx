'use client'

import { useTransition } from 'react'
import { updateUserName, type FormData } from '@/actions/update-user-name'
import { zodResolver } from '@hookform/resolvers/zod'
import { User } from '@prisma/client'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { cn } from '@/lib/utils'
import { userNameSchema } from '@/lib/validations/user'
import { buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Icons } from '@/components/shared/icons'

interface UserNameFormProps {
  user: Pick<User, 'id' | 'name'>
}

export function UserNameForm({ user }: UserNameFormProps) {
  const [isPending, startTransition] = useTransition()
  const updateUserNameWithId = updateUserName.bind(null, user.id)

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userNameSchema),
    defaultValues: {
      name: user?.name || '',
    },
  })

  const onSubmit = handleSubmit((data) => {
    startTransition(async () => {
      const { status } = await updateUserNameWithId(data)

      if (status !== 'success') {
        toast.error('Something went wrong. Please try again.')
      } else {
        toast.success('Your name has been updated.')
      }
    })
  })

  return (
    <form onSubmit={onSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Your Name</CardTitle>
          <CardDescription>
            Please enter your full name or a display name you are comfortable
            with.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="name">
              Name
            </Label>
            <Input
              id="name"
              className="w-full sm:w-[400px]"
              size={32}
              {...register('name')}
            />
            {errors?.name && (
              <p className="px-1 text-xs text-red-600">{errors.name.message}</p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <button
            type="submit"
            className={cn(buttonVariants())}
            disabled={isPending}
          >
            {isPending && (
              <Icons.spinner className="mr-2 size-4 animate-spin" />
            )}
            <span>{isPending ? 'Saving' : 'Save'}</span>
          </button>
        </CardFooter>
      </Card>
    </form>
  )
}
