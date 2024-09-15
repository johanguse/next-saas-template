'use client'

import { redirect } from 'next/navigation'

import { Skeleton } from '@/components/ui/skeleton'

import { ChangeUserNameSection } from '@/components/dashboard/settings/change-name'
import { ChangeRoleAccountSection } from '@/components/dashboard/settings/change-role'
import { DeleteAccountSection } from '@/components/dashboard/settings/delete-account'

import { useUserStore } from '@/store/use-user-store'
import { useSession } from 'next-auth/react'

export default function SettingsComponent() {
  const { data: session, status } = useSession()
  const { user, setUser } = useUserStore()

  if (status === 'loading') {
    return <Skeleton className="h-80 w-full rounded-lg" />
  }

  if (status === 'unauthenticated') {
    redirect('/login')
  }

  return (
    <div className="grid gap-10">
      {user && (
        <>
          <ChangeUserNameSection
            user={{ id: user.id, name: user.name || '' }}
          />
          <ChangeRoleAccountSection user={user} />
          <DeleteAccountSection />
        </>
      )}
    </div>
  )
}
