import { env } from '@/root/env.mjs'
import { S3Client } from '@aws-sdk/client-s3'

export const r2 = new S3Client({
  endpoint: `https://${env.CLOUDFLARE_R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  region: 'auto',
  credentials: {
    accessKeyId: env.CLOUDFLARE_R2_ACCESS_KEY_ID!,
    secretAccessKey: env.CLOUDFLARE_R2_SECRET_ACCESS_KEY!,
  },
})
