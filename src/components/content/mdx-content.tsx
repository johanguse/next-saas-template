import * as runtime from 'react/jsx-runtime'

import Image from 'next/image'

import MDXImage from './mdx-image'

const mdxComponents = {
  Image,
  MDXImage,
}

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

interface MdxProps {
  code: string
  components?: Record<string, React.ComponentType>
}

export const MDXContent = ({ code, components }: MdxProps) => {
  const Component = useMDXComponent(code)
  return <Component components={{ ...mdxComponents, ...components }} />
}
