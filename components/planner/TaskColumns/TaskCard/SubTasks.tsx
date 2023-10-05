import { produce } from 'immer'
import { useContext } from 'react'

import { Checkbox } from '@/components/ui/checkbox'

import { PlannerContext } from '../TaskColumns'

type SubTasksProps = {
  taskCardId: string
}

export const SubTasks = ({ taskCardId }: SubTasksProps) => {
  const { data, setData } = useContext(PlannerContext)!
  const subTasks = data.taskCards[taskCardId].subTasks.map((subTaskId) => data.subTasks[subTaskId])

  return (
    <div>
      {subTasks.map((subTask, index) => (
        <div key={subTask.id} className='flex gap-2 items-center'>
          <Checkbox
            id={`${index}`}
            className='text-gray-500'
            checked={subTask.checked}
            onClick={(event) => {
              event.preventDefault() // Neede to prevent dialog from triggering
              const isChecked = (event.target as HTMLButtonElement).getAttribute('data-state') === 'checked'
              setData(
                produce((draft) => {
                  draft.subTasks[subTask.id].checked = !isChecked
                })
              )
            }}
          />
          <label htmlFor={subTask.id} className={`text-sm text-gray-500 ${subTask.checked ? 'line-through' : ''}`}>
            {subTask.title}
          </label>
        </div>
      ))}
    </div>
  )
}
