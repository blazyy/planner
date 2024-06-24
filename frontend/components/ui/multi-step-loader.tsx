'use client'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const CheckIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className={cn('w-6 h-6 ', className)}
    >
      <path d='M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
    </svg>
  )
}

const CheckFilled = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='currentColor'
      className={cn('w-6 h-6 ', className)}
    >
      <path
        fillRule='evenodd'
        d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
        clipRule='evenodd'
      />
    </svg>
  )
}

type LoadingState = {
  text: string
}

const LoaderCore = ({ loadingStates, value = 0 }: { loadingStates: LoadingState[]; value?: number }) => {
  return (
    <div className='relative flex flex-col justify-start mx-auto mt-40 max-w-xl'>
      {loadingStates.map((loadingState, index) => {
        const distance = Math.abs(index - value)
        const opacity = Math.max(1 - distance * 0.2, 0) // Minimum opacity is 0, keep it 0.2 if you're sane.

        return (
          <motion.div
            key={index}
            className={cn('text-left flex gap-2 mb-4')}
            initial={{ opacity: 0, y: -(value * 40) }}
            animate={{ opacity: opacity, y: -(value * 40) }}
            transition={{ duration: 0.5 }}
          >
            <div>
              {index > value && <CheckIcon className='text-black dark:text-white' />}
              {index <= value && (
                <CheckFilled
                  className={cn(
                    'text-black dark:text-white',
                    value === index && 'text-black dark:text-lime-500 opacity-100'
                  )}
                />
              )}
            </div>
            <span
              className={cn(
                'text-black dark:text-white',
                value === index && 'text-black dark:text-lime-500 opacity-100'
              )}
            >
              {loadingState.text}
            </span>
          </motion.div>
        )
      })}
    </div>
  )
}

export const MultiStepLoader = ({
  loading,
  duration = 2000,
  loop = true,
}: {
  loading?: boolean
  duration?: number
  loop?: boolean
}) => {
  const [currentState, setCurrentState] = useState(0)

  const loadingStates = [
    {
      text: 'Organizing boards',
    },
    {
      text: 'Syncing columns',
    },
    {
      text: 'Adding cards',
    },
    {
      text: 'Moving cards',
    },
    {
      text: 'Checking cards',
    },
    {
      text: 'Boosting productivity',
    },
  ]

  useEffect(() => {
    if (!loading) {
      setCurrentState(0)
      return
    }
    const timeout = setTimeout(() => {
      setCurrentState((prevState) =>
        loop
          ? prevState === loadingStates.length - 1
            ? 0
            : prevState + 1
          : Math.min(prevState + 1, loadingStates.length - 1)
      )
    }, duration)

    return () => clearTimeout(timeout)
  }, [currentState, loading, loop, loadingStates.length, duration])
  return (
    <AnimatePresence mode='wait'>
      {loading && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className='z-[100] fixed inset-0 flex justify-center items-center backdrop-blur-2xl w-full h-full'
        >
          <div className='relative h-96'>
            <LoaderCore value={currentState} loadingStates={loadingStates} />
          </div>

          <div className='bottom-0 z-20 absolute inset-x-0 bg-white dark:bg-black bg-gradient-to-t h-full [mask-image:radial-gradient(900px_at_center,transparent_30%,white)]' />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
