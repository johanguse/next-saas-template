import { TriangleAlert } from 'lucide-react'

export const ErrorCard = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <TriangleAlert className="text-destructive" />
    </div>
  )
}
