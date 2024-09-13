'use client'

import React, { useCallback, useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
} from '@/components/ui/dialog'

import { CropIcon, Trash2Icon } from 'lucide-react'
import { FileWithPath } from 'react-dropzone'
import ReactCrop, {
  type Crop,
  PixelCrop,
  centerCrop,
  makeAspectCrop,
} from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

export type FileWithPreview = FileWithPath & {
  preview: string
}

interface ImageCropperProps {
  dialogOpen: boolean
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
  selectedFile: FileWithPreview | null
  setSelectedFile: React.Dispatch<React.SetStateAction<FileWithPreview | null>>
  onCropComplete: (croppedImageBlob: Blob, croppedImageUrl: string) => void
}

function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  )
}

export function ImageCropper({
  dialogOpen,
  setDialogOpen,
  selectedFile,
  setSelectedFile,
  onCropComplete,
}: ImageCropperProps) {
  const [crop, setCrop] = useState<Crop>()
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
  const imgRef = React.useRef<HTMLImageElement>(null)

  const onImageLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      const { width, height } = e.currentTarget
      setCrop(centerAspectCrop(width, height, 1))
    },
    []
  )

  const getCroppedImg = useCallback(
    (image: HTMLImageElement, crop: PixelCrop) => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      if (!ctx) {
        throw new Error('No 2d context')
      }

      const scaleX = image.naturalWidth / image.width
      const scaleY = image.naturalHeight / image.height

      const pixelRatio = window.devicePixelRatio
      canvas.width = Math.floor(crop.width * scaleX * pixelRatio)
      canvas.height = Math.floor(crop.height * scaleY * pixelRatio)

      ctx.scale(pixelRatio, pixelRatio)
      ctx.imageSmoothingQuality = 'high'

      const cropX = crop.x * scaleX
      const cropY = crop.y * scaleY

      ctx.drawImage(
        image,
        cropX,
        cropY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width * scaleX,
        crop.height * scaleY
      )

      return new Promise<Blob>((resolve, reject) => {
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error('Canvas is empty'))
              return
            }
            resolve(blob)
          },
          'image/jpeg',
          1
        )
      })
    },
    []
  )

  const handleCropComplete = useCallback(async () => {
    if (imgRef.current && completedCrop?.width && completedCrop?.height) {
      try {
        const croppedImageBlob = await getCroppedImg(
          imgRef.current,
          completedCrop
        )
        const croppedImageUrl = URL.createObjectURL(croppedImageBlob)
        onCropComplete(croppedImageBlob, croppedImageUrl)
        setDialogOpen(false)
      } catch (e) {
        console.error('Failed to crop image:', e)
      }
    }
  }, [completedCrop, getCroppedImg, onCropComplete, setDialogOpen])

  useEffect(() => {
    return () => {
      // Clean up the object URL when the component unmounts
      if (selectedFile?.preview) {
        URL.revokeObjectURL(selectedFile.preview)
      }
    }
  }, [selectedFile])

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <div className="mt-4 flex items-center justify-center">
          <ReactCrop
            crop={crop}
            onChange={(_, percentCrop) => setCrop(percentCrop)}
            onComplete={(c) => setCompletedCrop(c)}
            aspect={1}
            circularCrop
          >
            {selectedFile && (
              <img
                ref={imgRef}
                alt="Crop me"
                src={selectedFile.preview}
                style={{
                  maxHeight: '60vh',
                  maxWidth: '100%',
                  objectFit: 'contain',
                }}
                onLoad={onImageLoad}
              />
            )}
          </ReactCrop>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              onClick={() => setSelectedFile(null)}
            >
              <Trash2Icon className="mr-2 size-4" />
              Cancel
            </Button>
          </DialogClose>
          <Button type="button" onClick={handleCropComplete}>
            <CropIcon className="mr-2 size-4" />
            Crop & Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
