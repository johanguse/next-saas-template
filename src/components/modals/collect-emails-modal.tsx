'use client'

import { useState, useTransition } from 'react'

import { useCollectEmailsModal } from '@/hooks/use-collect-emails-modal'

import { Button } from '@/components/ui/button-ui'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { BlockTitle } from '@/components/layout/main-title'
import { Modal } from '@/components/shared/modal'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

const formSchema = z.object({
  email: z.string().email(),
})

interface LoadingState {
  message: string
  result: boolean
}

const initialLoadingValues: LoadingState = {
  message: '',
  result: false,
}

export const CollectEmailsModal = () => {
  const collectEmailsModal = useCollectEmailsModal()
  const closeModal = () => {
    collectEmailsModal.onClose()
    setLoading(false)
    setReturnValues(initialLoadingValues)
    form.reset()
  }

  let [isPending, startTransition] = useTransition()
  const [loading, setLoading] = useState<boolean>(false)
  const [returnValues, setReturnValues] =
    useState<LoadingState>(initialLoadingValues)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true)

    const data = new FormData()
    data.set('email', values.email)
    data.set('userGroup', 'Waitlist')
    data.set('source', 'CollectEmailsModal')

    startTransition(async () => {
      try {
        const res = await fetch('/api/marketing/create-contact-loopso', {
          method: 'POST',
          body: data,
        })

        if (!res.ok) throw res

        const json = await res.json()

        const dataSuccess = json.data.success

        if (!dataSuccess) {
          setReturnValues({
            message: json.data.message,
            result: false,
          })
          toast.warning('You are already on the list.')

          return
        }

        setReturnValues({
          message: 'Your email has been added.',
          result: true,
        })
        toast.success(
          'Thanks! You have successfully added your email to the list.'
        )

        form.reset()
      } catch (error: any) {
        console.error(error)
        toast.error('Something went wrong. Please try again.')
      } finally {
        setLoading(false)
      }
    })
  }

  return (
    <Modal showModal={collectEmailsModal.isOpen} setShowModal={closeModal}>
      <div className="w-full">
        <div className="flex flex-col items-center justify-center space-y-3 border-b bg-background px-4 py-6 pt-8 text-center md:px-16">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <BlockTitle.Wrapper>
                <BlockTitle.Header elementType="h2">
                  Get notified when launched.
                </BlockTitle.Header>
                <BlockTitle.Description className="mb-5 mt-0 text-base">
                  We are launching soon, we will send you an email.
                </BlockTitle.Description>
              </BlockTitle.Wrapper>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {returnValues.message && (
                <p
                  className={
                    `mt-3 text-balance pl-3 text-xs ` +
                    (returnValues.result ? 'text-green-400' : 'text-rose-600')
                  }
                >
                  {returnValues.message}
                </p>
              )}
              <p className="mx-auto mb-4 mt-3 text-center text-[11px] text-gray-500">
                No spam ever, we are care about the protection of your data.
                Read our{' '}
                <a
                  className="text-indigo-600 underline"
                  href="/legal/privacy-policy"
                >
                  {' '}
                  Privacy Policy{' '}
                </a>
              </p>
              <div className="text-center">
                <Button
                  variant={'primary'}
                  loading={isPending}
                  disabled={loading}
                  type="submit"
                  className="mx-auto mt-6"
                >
                  Join waitlist
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  )
}
