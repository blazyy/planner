import { useAppSelector } from '@/app/store/hooks'
import { Card, CardHeader } from '@/components/ui/card'
import { produce } from 'immer'
import { PlusCircle } from 'lucide-react'
import { useContext } from 'react'
import { PlannerContext } from '../Planner'
import { PlannerDataType } from '../types'

const getTotalTaskCardsCount = (data: PlannerDataType): number => {
  return Object.keys(data.taskCards).length
}

type AddTaskCardButtonProps = {
  columnId: string
}

export const AddTaskCardButton = ({ columnId }: AddTaskCardButtonProps) => {
  const { data } = useAppSelector((state) => state.planner)
  const { dataEnteredInTaskCardBeingInitialized, setTaskCardBeingInitialized } = useContext(PlannerContext)!
  return (
    <Card
      className='mb-2 cursor-pointer'
      onClick={() => {
        // Only allow an initializing task card to be added in an existing task card doesn't already exist,
        // or if it exists and does not have any info entered.
        if (!dataEnteredInTaskCardBeingInitialized) {
          const currentTaskCardsCount = getTotalTaskCardsCount(data)
          const newTaskCardId = `taskcard-${currentTaskCardsCount + 1}`
          setTaskCardBeingInitialized({
            taskCardId: newTaskCardId,
            columnId,
            isHighlighted: false,
          })
        } else {
          setTaskCardBeingInitialized(
            produce((draft) => {
              if (draft) draft.isHighlighted = true
            })
          )
        }
      }}
    >
      <CardHeader className='p-2'>
        <div className=' flex flex-row align-center gap-2'>
          <PlusCircle className='text-gray-400' />
          <div className='text-gray-500'>Add task</div>
        </div>
      </CardHeader>
    </Card>
  )
}
