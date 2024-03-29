'use client'

import { Post } from '@/root/.contentlayer/generated'
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LineIcon,
  LineShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'next-share'

import { absoluteUrl } from '@/lib/utils'

interface PostPageProps {
  post: Post
  size?: number
}

export default function ShareButtons({ post, size = 32 }: PostPageProps) {
  const title = post.title
  const shareUrl = absoluteUrl(post.slug)

  return (
    <div className="grid grid-flow-col justify-start gap-2">
      <FacebookShareButton url={shareUrl} quote={title}>
        <FacebookIcon size={size} />
      </FacebookShareButton>

      <TwitterShareButton url={shareUrl} title={title}>
        <TwitterIcon size={size} />
      </TwitterShareButton>

      <LinkedinShareButton url={shareUrl} title={title}>
        <LinkedinIcon size={size} />
      </LinkedinShareButton>

      <RedditShareButton url={shareUrl} title={title}>
        <RedditIcon size={size} />
      </RedditShareButton>

      <WhatsappShareButton url={shareUrl} title={title}>
        <WhatsappIcon size={size} />
      </WhatsappShareButton>

      <TelegramShareButton url={shareUrl} title={title}>
        <TelegramIcon size={size} />
      </TelegramShareButton>

      <EmailShareButton url={shareUrl} subject={title}>
        <EmailIcon size={size} />
      </EmailShareButton>

      <LineShareButton url={shareUrl} title={title}>
        <LineIcon size={size} />
      </LineShareButton>
    </div>
  )
}
