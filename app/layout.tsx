import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Faaez Razeen Nizamudeen',
  description: 'The digital realm of Faaez Razeen Nizamudeen',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
