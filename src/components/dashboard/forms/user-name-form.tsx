'use client'

import { useTransition } from 'react'

import { userNameSchema } from '@/lib/validations/user'

import { Button } from '@/components/ui/button-ui'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { type FormData, updateUserName } from '@/actions/user/update-user-name'
import { zodResolver } from '@hookform/resolvers/zod'
import { User } from '@prisma/client'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

interface UserProps {
  user: Pick<User, 'id' | 'name'>
}

export function UserNameForm({ user }: UserProps) {
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
        toast.success('Your name has been updated!')
      }
    })
  })

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-6 w-full">
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

      <div className="flex w-full">
        <Button
          type="submit"
          variant="secondary"
          loading={isPending}
          disabled={isPending}
        >
          Change Name
        </Button>
      </div>
    </form>
  )
}
