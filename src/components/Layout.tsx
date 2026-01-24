import type { ReactNode } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SmoothScroll } from '@/components/SmoothScroll'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <SmoothScroll>
      <div className="flex min-h-screen flex-col font-sans antialiased relative z-0 bg-background text-foreground">
        <Header />
        <main className="flex-1 relative z-0">{children}</main>
        <Footer />
      </div>
    </SmoothScroll>
  )
}
