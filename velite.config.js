import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import { defineCollection, defineConfig, s } from 'velite'

const allAuthors = defineCollection({
  name: 'Author',
  pattern: 'authors/**/*.mdx',
  schema: s
    .object({
      title: s.string(),
      description: s.string().optional(),
      avatar: s.string().optional(),
      twitter: s.string().optional(),
    })
    .transform((data) => ({
      ...data,
      slug: data.title
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, ''),
    })),
})

const allDocs = defineCollection({
  name: 'Doc',
  pattern: 'docs/**/*.mdx',
  schema: s.object({
    slug: s.path(),
    title: s.string(),
    description: s.string(),
    body: s.mdx(),
    published: s.boolean().default(true),
  }),
})

const allGuides = defineCollection({
  name: 'Guide',
  pattern: 'guides/**/*.mdx',
  schema: s.object({
    slug: s.path(),
    title: s.string(),
    description: s.string(),
    body: s.mdx(),
    date: s.isodate(),
    published: s.boolean().default(true),
    featured: s.boolean().default(false),
  }),
})

const allPages = defineCollection({
  name: 'Page',
  pattern: 'pages/**/*.mdx',
  schema: s.object({
    slug: s.path(),
    title: s.string(),
    description: s.string(),
    body: s.mdx(),
  }),
})

const allPosts = defineCollection({
  name: 'Post',
  pattern: 'blog/**/*.mdx',
  schema: s
    .object({
      slug: s.path(),
      title: s.string(),
      description: s.string(),
      body: s.mdx(),
      date: s.isodate(),
      published: s.boolean().default(true),
      image: s.string().optional(),
      authors: s.array(s.string()),
      tags: s.array(s.string()).optional(),
      category: s.array(s.string()).optional(),
      hasToc: s.boolean().default(false),
      toc: s.toc(),
    })
    .transform((data) => ({
      ...data,
      slug: data.slug.replace('blog/', ''),
    })),
})

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: {
    allAuthors,
    allDocs,
    allGuides,
    allPages,
    allPosts,
  },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: 'github-dark' }],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
    remarkPlugins: [],
  },
})
