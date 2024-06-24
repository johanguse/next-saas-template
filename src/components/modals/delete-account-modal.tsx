import { Dispatch, SetStateAction, useCallback, useMemo, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { Icons } from '@/components/shared/icons'
import { Modal } from '@/components/shared/modal'
import { UserAvatar } from '@/components/shared/user-avatar'

import { signOut, useSession } from 'next-auth/react'
import { toast } from 'sonner'

function DeleteAccountModal({
  showDeleteAccountModal,
  setShowDeleteAccountModal,
}: {
  showDeleteAccountModal: boolean
  setShowDeleteAccountModal: Dispatch<SetStateAction<boolean>>
}) {
  const { data: session } = useSession()
  const [deleting, setDeleting] = useState(false)
  const handleCloseModal = () => setShowDeleteAccountModal(false)

  async function deleteAccount() {
    setDeleting(true)
    await fetch(`/api/user`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(async (res) => {
      if (res.status === 200) {
        // delay to allow for the route change to complete
        await new Promise((resolve) =>
          setTimeout(() => {
            signOut({
              callbackUrl: `${window.location.origin}/`,
            })
            resolve(null)
          }, 500)
        )
      } else {
        setDeleting(false)
        const error = await res.text()
        throw error
      }
    })
  }

  return (
    <Modal
      showModal={showDeleteAccountModal}
      setShowModal={handleCloseModal}
      className="gap-0"
    >
      <div className="flex flex-col items-center justify-center space-y-3 border-b p-4 pt-8 sm:px-16">
        <UserAvatar
          user={{
            name: session?.user?.name || null,
            image: session?.user?.image || null,
          }}
        />
        <h3 className="text-lg font-semibold">Delete Account</h3>
        <p className="text-center text-sm text-muted-foreground">
          <b>Warning:</b> This will permanently delete your account and your
          active subscription!
        </p>

        {/* TODO: Use getUserSubscriptionPlan(session.user.id) to display the user's subscription if he have a paid plan */}
      </div>

      <form
        onSubmit={async (e) => {
          e.preventDefault()
          toast.promise(deleteAccount(), {
            loading: 'Deleting account...',
            success: 'Account deleted successfully!',
            error: (err) => err,
          })
        }}
        className="flex flex-col space-y-6 bg-accent px-4 py-8 text-left sm:px-16"
      >
        <div>
          <label htmlFor="verification" className="mb-2 block text-sm">
            To verify, type{' '}
            <span className="font-bold text-primary dark:text-primary">
              confirm delete account
            </span>{' '}
            below
          </label>
          <Input
            type="text"
            name="verification"
            id="verification"
            pattern="confirm delete account"
            required
            autoFocus={false}
            autoComplete="off"
            className="mt-1 w-full border bg-background"
          />
        </div>

        <Button variant={'destructive'} disabled={deleting}>
          {deleting ? (
            <>
              <Icons.spinner
                className="mr-2 size-4 animate-spin"
                aria-hidden="true"
              />
              <span>Deleting...</span>
            </>
          ) : (
            <span>Delete Account</span>
          )}
          <span className="sr-only">Delete Account</span>
        </Button>
      </form>
    </Modal>
  )
}

export function useDeleteAccountModal() {
  const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false)

  const DeleteAccountModalCallback = useCallback(() => {
    return (
      <DeleteAccountModal
        showDeleteAccountModal={showDeleteAccountModal}
        setShowDeleteAccountModal={setShowDeleteAccountModal}
      />
    )
  }, [showDeleteAccountModal, setShowDeleteAccountModal])

  return useMemo(
    () => ({
      setShowDeleteAccountModal,
      DeleteAccountModal: DeleteAccountModalCallback,
    }),
    [setShowDeleteAccountModal, DeleteAccountModalCallback]
  )
}
