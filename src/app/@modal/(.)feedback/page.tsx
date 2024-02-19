'use client'

import { useRouter } from 'next/navigation'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Dialog, DialogContent } from '@/components/ui/dialog'

import FeedbackForm from '@/components/forms/share-feedback'
import { BlockTitle } from '@/components/layout/main-title'

const ShareFeedbackModal = () => {
  const router = useRouter()
  return (
    <Dialog open={true} onOpenChange={() => router.back()}>
      <DialogContent className="border-0 bg-white text-transparent dark:bg-black lg:w-[700px]">
        <Card className="bg-light-gray-800 dark:bg-dark-gray-800 border-light-gray-700 dark:border-dark-gray-700 border lg:w-full">
          <CardHeader className="text-2xl">
            <BlockTitle.Wrapper>
              <BlockTitle.Header elementType="h1">Feedback</BlockTitle.Header>
              <BlockTitle.Title elementType="h2">
                Share your feedback
              </BlockTitle.Title>
              <BlockTitle.Description>
                Share any throughts with us and help us improve.
              </BlockTitle.Description>
              <BlockTitle.Background />
              <BlockTitle.Separator />
            </BlockTitle.Wrapper>
          </CardHeader>
          <CardContent>
            <FeedbackForm />
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  )
}

export default ShareFeedbackModal
