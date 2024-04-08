'use client'

import { AuthLogout } from '@/actions/auth/logout'

interface LogoutButtonProps {
  children?: React.ReactNode
}

export const LogoutButton = ({ children }: LogoutButtonProps) => {
  const onClick = () => {
    AuthLogout()
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  )
}
