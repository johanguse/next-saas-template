'use client'

import { useState, useTransition } from 'react'

import { userRoleSchema } from '@/lib/validations/user'

import { Button } from '@/components/ui/button-ui'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { type FormData, updateUserRole } from '@/actions/user/update-user-role'
import { zodResolver } from '@hookform/resolvers/zod'
import { User, UserRole } from '@prisma/client'
import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

interface UserNameFormProps {
  user: Pick<User, 'id' | 'role'>
}

export function UserRoleForm({ user }: UserNameFormProps) {
  const { update } = useSession()
  const [updated, setUpdated] = useState(false)
  const [isPending, startTransition] = useTransition()
  const updateUserRoleWithId = updateUserRole.bind(null, user.id)

  const roles = Object.values(UserRole)
  const [role, setRole] = useState(user.role)

  const form = useForm<FormData>({
    resolver: zodResolver(userRoleSchema),
    values: {
      role: role,
    },
  })

  const onSubmit = (data: z.infer<typeof userRoleSchema>) => {
    startTransition(async () => {
      const { status } = await updateUserRoleWithId(data)

      if (status !== 'success') {
        toast.error('Something went wrong.', {
          description: 'Your role was not updated. Please try again.',
        })
      } else {
        await update()
        setUpdated(false)
        toast.success('Your role has been updated.')
      }
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-6 flex w-full">
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="w-full space-y-0 sm:w-[400px]">
                <FormLabel className="sr-only">Role</FormLabel>
                <Select
                  // TODO:(FIX) Option value not update. Use useState for the moment
                  onValueChange={(value: UserRole) => {
                    setUpdated(user.role !== value)
                    setRole(value)
                    // field.onChange;
                  }}
                  name={field.name}
                  defaultValue={user.role}
                >
                  <FormControl>
                    <SelectTrigger className="w-full sm:w-[400px]">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {roles.map((role) => (
                      <SelectItem key={role} value={role.toString()}>
                        {role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex w-full">
          <Button
            type="submit"
            variant="secondary"
            loading={isPending}
            disabled={isPending || !updated}
          >
            Save
          </Button>
        </div>
      </form>
    </Form>
  )
}
