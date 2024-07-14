'use client'
import { AlertCard, logError } from '@/components/global/AlertCard/AlertCard'
import { Navbar } from '@/components/global/Navbar'
import { Sidebar } from '@/components/planner/Sidebar'
import { Toaster } from '@/components/ui/sonner'
import { PlannerProvider } from '@/hooks/Planner/Planner'
import { cn } from '@/lib/utils'
import { ClerkProvider } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import { ErrorBoundary } from 'react-error-boundary'

export default function Layout({ children }: { children: JSX.Element }) {
  const pathname = usePathname()
  const currentPage = pathname.split('/boards/')[1]

  return (
    <ClerkProvider afterSignOutUrl='/'>
      <div className={cn('flex flex-col min-h-screen')} style={{ backgroundColor: '#3B2F42' }}>
        <Navbar />
        <main id='planner' className='flex flex-col flex-1 justify-start items-center p-5 w-full'>
          <ErrorBoundary FallbackComponent={AlertCard} onError={logError}>
            <PlannerProvider>
              <div className='flex flex-1 justify-start gap-2 w-full'>
                <Sidebar currentPage={currentPage} />
                <Toaster richColors />
                {children}
              </div>
            </PlannerProvider>
          </ErrorBoundary>
        </main>
      </div>
    </ClerkProvider>
  )
}
