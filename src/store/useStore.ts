import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface AppState {
  // Add your global state here
  user: { id: string; name: string; email: string } | null
  theme: 'light' | 'dark'
  setUser: (user: { id: string; name: string; email: string } | null) => void
  setTheme: (theme: 'light' | 'dark') => void
}

export const useStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        theme: 'light',
        setUser: (user) => set({ user }),
        setTheme: (theme) => set({ theme }),
      }),
      {
        name: 'app-storage',
      }
    )
  )
)




