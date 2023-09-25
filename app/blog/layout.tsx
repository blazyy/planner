import '../globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Faaez Razeen Nizamudeen',
  description: "Celebrating riveting topics that capture Faaez's plethora of interests",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
