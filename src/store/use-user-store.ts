import { ExtendedUser } from '@/types/next-auth'

import { StateCreator, create } from 'zustand'
import { PersistOptions, StorageValue, persist } from 'zustand/middleware'

interface UserState {
  user: ExtendedUser | null
  setUser: (user: ExtendedUser | null) => void
  updateUserImage: (imageUrl: string) => void
}

type UserPersist = (
  config: StateCreator<UserState>,
  options: PersistOptions<UserState>
) => StateCreator<UserState>

const storage = {
  getItem: (name: string): string | null => {
    if (typeof window === 'undefined') return null
    return window.localStorage.getItem(name)
  },
  setItem: (name: string, value: string): void => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(name, value)
    }
  },
  removeItem: (name: string): void => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(name)
    }
  },
}

const persistOptions: PersistOptions<UserState> = {
  name: 'user-storage',
  storage: {
    getItem: (name: string): Promise<StorageValue<UserState> | null> => {
      const str = storage.getItem(name)
      if (!str) return Promise.resolve(null)
      try {
        return Promise.resolve(JSON.parse(str) as StorageValue<UserState>)
      } catch {
        return Promise.resolve(null)
      }
    },
    setItem: (name: string, value: StorageValue<UserState>): Promise<void> => {
      storage.setItem(name, JSON.stringify(value))
      return Promise.resolve()
    },
    removeItem: (name: string): Promise<void> => {
      storage.removeItem(name)
      return Promise.resolve()
    },
  },
}

export const useUserStore = create<UserState>()(
  (persist as UserPersist)(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      updateUserImage: (imageUrl) =>
        set((state) => ({
          user: state.user ? { ...state.user, image: imageUrl } : null,
        })),
    }),
    persistOptions
  )
)
