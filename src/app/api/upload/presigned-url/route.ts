import { NextResponse } from 'next/server'

import { r2 } from '@/lib/r2'

import { env } from '@/root/env.mjs'
import { PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

export async function POST(request: Request) {
  try {
    const { key } = await request.json()

    if (!key) {
      return NextResponse.json(
        { error: 'File key is required.' },
        { status: 400 }
      )
    }

    const signedUrl = await getSignedUrl(
      r2,
      new PutObjectCommand({
        Bucket: env.CLOUDFLARE_R2_BUCKET_NAME,
        Key: key,
      }),
      { expiresIn: 60 }
    )

    const publicUrl = `${env.NEXT_PUBLIC_R2_DEV_URL}/${key}`

    return NextResponse.json({ url: signedUrl, key, publicUrl })
  } catch (error) {
    console.error('Error generating presigned URL:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
