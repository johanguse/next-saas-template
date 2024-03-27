import { ErrorCard } from '@/components/auth/error-card'

const AuthErrorPage = () => {
  return (
    <div className="size-screen container flex flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <ErrorCard />
      </div>
    </div>
  )
}

export default AuthErrorPage
