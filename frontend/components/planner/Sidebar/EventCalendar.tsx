import { Calendar } from '@/components/ui/calendar'
import * as React from 'react'

export const EventCalendar = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return <Calendar mode='single' selected={date} onSelect={setDate} className='rounded-md border shadow w-min' />
}
