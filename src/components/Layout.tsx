import type { ReactNode } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col font-sans antialiased relative z-0">
      <Header />
      <main className="flex-1 relative z-0">{children}</main>
      <Footer />
    </div>
  )
}
