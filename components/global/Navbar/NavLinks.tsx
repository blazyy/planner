'use client'

import Link from 'next/link'

import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

export function NavLinks() {
  const pathname = usePathname() // Used to highlight which route the website is currently on
  const internalNavRoutes = ['About', 'Blog', 'Projects']
  return (
    <div className='flex gap-2'>
      {internalNavRoutes.map((routeName) => {
        const routeHref = `/${routeName.toLowerCase()}`
        const isWebsiteOnRoute = pathname === routeHref
        return (
          <Button
            size='sm'
            className={`rounded-full ${isWebsiteOnRoute ? 'bg-slate-100' : ''}`}
            asChild
            variant='ghost'
          >
            <Link href={routeHref}>{routeName}</Link>
          </Button>
        )
      })}
    </div>
  )
}
