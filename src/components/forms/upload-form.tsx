'use client'

import { ChangeEvent, useMemo, useRef, useState } from 'react'

import { useRouter } from 'next/navigation'

import { FileWithPreview, ImageCropper } from '@/components/image-cropper'
import { Icons } from '@/components/shared/icons'
import { UserAvatar } from '@/components/shared/user-avatar'

import { useUserStore } from '@/store/use-user-store'
import { SquarePen } from 'lucide-react'
import { toast } from 'sonner'

interface UploadFormProps {
  className?: string
}

const getFullImageUrl = (url: string | null) => {
  if (!url) return null
  if (url.startsWith('http://') || url.startsWith('https://')) return url
  const r2DevUrl = process.env.NEXT_PUBLIC_R2_DEV_URL
  return `${r2DevUrl}/${url}`
}

export function UploadForm({ className }: UploadFormProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [selectedFile, setSelectedFile] = useState<FileWithPreview | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [croppedImageUrl, setCroppedImageUrl] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const { user, updateUserImage } = useUserStore()

  const avatarUrl = useMemo(() => {
    const url =
      croppedImageUrl || (user?.image ? getFullImageUrl(user.image) : null)
    return url ? `${url}?t=${Date.now()}` : null
  }, [user?.image, croppedImageUrl])

  function handleFileSelect(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (file) {
      const fileWithPreview: FileWithPreview = Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
      setSelectedFile(fileWithPreview)
      setDialogOpen(true)
    }
  }

  async function handleUpload(croppedImageBlob: Blob) {
    setIsUploading(true)
    const uniqueFileName = `${crypto.randomUUID()}-cropped-image.jpg`

    try {
      const presignedUrlResponse = await fetch('/api/upload/presigned-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: uniqueFileName }),
      })

      if (!presignedUrlResponse.ok) {
        throw new Error('Failed to get presigned URL')
      }

      const { url: presignedUrl, key } = await presignedUrlResponse.json()

      toast.info('Uploading started...')
      const uploadResponse = await fetch(presignedUrl, {
        method: 'PUT',
        body: croppedImageBlob,
        headers: { 'Content-Type': 'image/jpeg' },
      })

      if (!uploadResponse.ok) {
        throw new Error('Failed to upload file')
      }

      const updateUserResponse = await fetch('/api/upload/update-user-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageUrl: key }),
      })

      if (!updateUserResponse.ok) {
        const errorData = await updateUserResponse.json()
        throw new Error(errorData.error || 'Failed to update user model')
      }

      updateUserImage(key)
      toast.success('Upload succeeded!')
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
      router.refresh()
    } catch (error) {
      console.error('Upload error:', error)
      toast.error(
        `An error occurred during upload: ${error instanceof Error ? error.message : 'Unknown error'}`
      )
    } finally {
      setIsUploading(false)
      setSelectedFile(null)
    }
  }

  return (
    <div className={className}>
      <label
        htmlFor="avatar-upload"
        className={`relative flex size-24 cursor-pointer items-center justify-center rounded-full bg-gray-200 text-center transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 ${
          isUploading ? 'cursor-not-allowed opacity-50' : ''
        }`}
      >
        {isUploading ? (
          <Icons.spinner className="size-6 animate-spin text-gray-700" />
        ) : (
          <UserAvatar
            user={{
              name: user?.name,
              image: avatarUrl,
            }}
            className="size-full"
          />
        )}
        <div className="absolute bottom-0 right-0 rounded-full bg-primary p-2 text-primary-foreground">
          <SquarePen className="size-4" />
        </div>
      </label>
      <input
        id="avatar-upload"
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        disabled={isUploading}
        className="hidden"
        ref={fileInputRef}
      />
      <ImageCropper
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
        onCropComplete={(croppedImageBlob, croppedImageUrl) => {
          setCroppedImageUrl(croppedImageUrl)
          handleUpload(croppedImageBlob)
        }}
      />
    </div>
  )
}
