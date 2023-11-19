'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuth } from '@/hooks/Auth'
import { Github } from 'lucide-react'
import { FaGoogle } from 'react-icons/fa'

export function Login() {
  const auth = useAuth()
  return (
    <main className='flex min-h-screen flex-col items-center gap-8'>
      <Card>
        <CardHeader className='space-y-1'>
          <CardTitle className='text-2xl'>Create an account</CardTitle>
          <CardDescription>Enter your email below to create your account</CardDescription>
        </CardHeader>
        <CardContent className='grid gap-4'>
          <div className='grid grid-cols-2 gap-6'>
            <Button variant='outline'>
              <Github />
            </Button>
            <Button variant='outline' onClick={() => auth.signIn()}>
              <FaGoogle />
            </Button>
          </div>
          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <span className='w-full border-t' />
            </div>
            <div className='relative flex justify-center text-xs uppercase'>
              <span className='bg-background px-2 text-muted-foreground'>Or continue with</span>
            </div>
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='email'>Email</Label>
            <Input id='email' type='email' placeholder='m@example.com' />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='password'>Password</Label>
            <Input id='password' type='password' />
          </div>
        </CardContent>
        <CardFooter>
          <Button className='w-full'>Create account</Button>
        </CardFooter>
      </Card>
    </main>
  )
}