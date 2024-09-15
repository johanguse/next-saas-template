'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { UploadForm } from '@/components/forms/upload-form'

import { UserNameForm } from '../forms/user-name-form'
import { User } from '@prisma/client'

interface UserProps {
  user: Pick<User, 'id' | 'name'>
}

export function ChangeUserNameSection({ user }: UserProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Name</CardTitle>
        <CardDescription>
          Please enter your full name or a display name you are comfortable
          with.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <UploadForm className="aling-self-center mb-6" />
        <UserNameForm user={{ id: user.id, name: user.name }} />
      </CardContent>
    </Card>
  )
}
