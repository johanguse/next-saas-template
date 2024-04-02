import Image, { StaticImageData } from 'next/image'

interface IMDXImage {
  src: StaticImageData
  title: string
  width?: string
}

const MDXImage = ({ src, title, width }: IMDXImage) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={src}
        width={1024}
        height={1024}
        alt={title}
        className="mb-2 w-auto rounded-md border border-gray-200 dark:border-gray-700"
        style={width ? { width } : {}}
      />
      <p className="m-0 text-center text-sm text-gray-500 dark:text-gray-400">
        {title}
      </p>
    </div>
  )
}

export default MDXImage
