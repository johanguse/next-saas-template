'use client'

import { env } from 'process'
import { allPosts } from '@/root/.contentlayer/generated'
import {
  FacebookShare,
  LinkedinShare,
  RedditShare,
  TwitterShare,
  WhatsappShare,
} from 'react-share-lite'

interface PostPageProps {
  params: {
    slug: string[]
  }
  size?: number
}

export default function ShareButtons({ params, size }: PostPageProps) {
  const title = allPosts.find(
    (post) => post.slugAsParams === params?.slug?.join('/')
  )?.title
  const url = env.NEXT_PUBLIC_APP_URL

  const shareUrl = `${url}/blog/${params?.slug?.join('/')}`

  return (
    <div className="grid grid-flow-col justify-start gap-2">
      <FacebookShare size={size} url={shareUrl} title={title} />
      <TwitterShare size={size} url={shareUrl} title={title} />
      <WhatsappShare size={size} url={shareUrl} title={title} />
      <LinkedinShare size={size} url={shareUrl} title={title} />
      <RedditShare size={size} url={shareUrl} title={title} />
    </div>
  )
}
