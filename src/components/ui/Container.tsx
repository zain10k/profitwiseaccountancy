import { cn } from '@/utils/cn'
import React, { memo } from 'react'

interface ContainerProps {
  className?: string
  children: React.ReactNode
  id?: string
}

export const Container = memo(function Container({ className, children, id }: ContainerProps) {
  return (
    <div id={id} className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  )
})
