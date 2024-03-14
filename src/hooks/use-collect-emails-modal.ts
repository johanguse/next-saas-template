import { create } from 'zustand'

interface usecollectEmailsModalModalStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const useCollectEmailsModal = create<usecollectEmailsModalModalStore>(
  (set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
  })
)
