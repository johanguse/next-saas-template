'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { UserRoleForm } from '../forms/user-role-form'
import { User } from '@prisma/client'

interface UserProps {
  user: Pick<User, 'id' | 'role'>
}

export function ChangeRoleAccountSection({ user }: UserProps) {
  return (
    <>
      <Card className="border border-yellow-600">
        <CardHeader className="space-y-2">
          <CardTitle>Change Role</CardTitle>
          <CardDescription>Change your account role.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <UserRoleForm user={{ id: user.id, role: user.role }} />
        </CardContent>
        <CardFooter className="italic">
          Remove this field on real production
        </CardFooter>
      </Card>
    </>
  )
}
