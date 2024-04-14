import { absoluteUrl } from '@/lib/utils'

const defaultUrl = absoluteUrl('')

const docsUrl = new URL('http://localhost:3001')

if (process.env.NODE_ENV === 'production') {
  const docsUrl = new URL(defaultUrl)
  docsUrl.host = `docs.${docsUrl.host}`
}

export const docsConfig = {
  docUrl: docsUrl,
}
