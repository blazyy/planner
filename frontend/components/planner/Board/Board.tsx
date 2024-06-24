import { FilterToolbar } from './FilterToolbar/FilterToolbar'
import { TaskColumns } from './TaskColumns/TaskColumns'

type BoardProps = {
  boardId: string
}

export const Board = ({ boardId }: BoardProps) => {
  return (
    <div className='flex flex-col w-10/12 h-full'>
      <FilterToolbar boardId={boardId} />
      <TaskColumns boardId={boardId} />
    </div>
  )
}
