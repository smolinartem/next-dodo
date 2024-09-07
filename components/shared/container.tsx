import { cn } from '@/lib/utils'

interface ContainerProps {
  className?: string
  children: React.ReactNode
}

export function Container({ className, children }: ContainerProps) {
  return <div className={cn('mx-auto max-w-screen-xl', className)}>{children}</div>
}
