import type { ReactNode } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CookieBanner } from '@/components/CookieBanner'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col font-sans antialiased relative z-0 bg-background text-foreground">
      <Header />
      <main className="flex-1 relative z-0">{children}</main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
