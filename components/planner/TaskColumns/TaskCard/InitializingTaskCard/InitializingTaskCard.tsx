import * as z from 'zod'
import { produce } from 'immer'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardHeader, CardFooter } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'

import { PlannerContext } from '../../TaskColumns'
import { CancelButton } from './CancelButton'

type InitializingTaskCardProps = {
  columnId: string
}

const formSchema = z.object({
  taskCardTitle: z.string().min(2, {
    message: 'Card title must be at least 2 characters.',
  }),
  taskCardDesc: z.string().optional(),
})

export const InitializingTaskCard = ({ columnId }: InitializingTaskCardProps) => {
  const { setData, taskCardBeingInitializedInfo, setTaskCardBeingInitializedInfo } = useContext(PlannerContext)!

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      taskCardTitle: '',
      taskCardDesc: '',
    },
  })

  const [isFormEmpty, setIsFormEmpty] = useState(true)

  form.watch((value) => {
    if (value.taskCardTitle !== '' || value.taskCardDesc !== '') {
      setIsFormEmpty(false)
    } else {
      setIsFormEmpty(true)
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const taskCardId = taskCardBeingInitializedInfo?.taskCardId!
    setData(
      produce((draft) => {
        const newTaskCard = {
          id: taskCardId,
          title: values.taskCardTitle,
          category: 'Default',
          content: `${values.taskCardDesc}`,
          checked: false,
          subTasks: [],
        }
        draft.taskCards[taskCardId] = newTaskCard
        draft.columns[columnId].cardIds.unshift(taskCardId)
      })
    )
    setTaskCardBeingInitializedInfo(null)
  }

  return (
    <Card className='border-stone-400 mb-2'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <CardHeader className='p-4'>
            <FormField
              control={form.control}
              name='taskCardTitle'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder='Task title' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='taskCardDesc'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder='Task description... (optional)' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardHeader>
          <CardFooter className='flex justify-between'>
            <div className='flex gap-2'>
              <Button type='submit'>Add</Button>
              <CancelButton isFormEmpty={isFormEmpty} />
            </div>
            <p className='text-sm text-right text-emerald-500'># Default</p>
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}