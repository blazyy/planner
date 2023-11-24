import { Navbar } from '@/components/global/Navbar'
// import { AuthProvider } from '@/hooks/Auth'
import './globals.css'

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang='en'>
      <body>
        {/* <AuthProvider> */}
        <Navbar />
        {children}
        {/* </AuthProvider> */}
      </body>
    </html>
  )
}