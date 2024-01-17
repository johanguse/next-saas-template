import create from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface SidebarToggle {
  toggleCollapse: boolean
  invokeToggleCollapse: () => void
}

export const useSideBarToggle = create(
  immer<SidebarToggle>((set) => ({
    toggleCollapse: false,
    invokeToggleCollapse: () =>
      set((state) => {
        state.toggleCollapse = !state.toggleCollapse
      }),
  }))
)
