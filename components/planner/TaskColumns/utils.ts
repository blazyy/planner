'use client'
import {
  cardMovedAcrossColumns,
  cardMovedWithinColumn,
  columnsReordered,
  subTasksReordered,
} from '@/app/store/planner/plannerSlice'
import { AppDispatch } from '@/app/store/store'
import type { DragStart, DropResult } from '@hello-pangea/dnd'
import { PlannerContextType, PlannerDataType } from '../Planner'

type OnDragEndFunc = (
  data: PlannerDataType,
  result: DropResult,
  dispatch: AppDispatch,
  plannerContext: PlannerContextType
) => void

export const handleOnDragEnd: OnDragEndFunc = (data, result, dispatch, plannerContext) => {
  const { destination, source, draggableId, type } = result
  const { setIdOfCardBeingDragged, setIsSubTaskBeingDragged } = plannerContext

  // If there's no destination or if card is in original position from where it was dragged from, do nothing
  if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) {
    return
  }

  if (type === 'subtask') {
    dispatch(
      subTasksReordered({
        draggableId: draggableId,
        sourceIndex: source.index,
        destIndex: destination.index,
      })
    )
    setIsSubTaskBeingDragged(false)
    return
  }

  if (type === 'column') {
    dispatch(
      columnsReordered({
        draggableId: draggableId,
        sourceIndex: source.index,
        destIndex: destination.index,
      })
    )
    return
  }

  setIdOfCardBeingDragged('')

  // Moving a card within the same column
  if (data.columns[source.droppableId] === data.columns[destination.droppableId]) {
    dispatch(
      cardMovedWithinColumn({
        draggableId,
        source,
        destination,
      })
    )
    return
  }

  // Moving cards betweean columns
  dispatch(
    cardMovedAcrossColumns({
      draggableId,
      source,
      destination,
    })
  )
}

type OnDragStartFunction = (dragStartObj: DragStart, plannerContext: PlannerContextType) => void

export const handleOnDragStart: OnDragStartFunction = (dragStartObj, plannerContext) => {
  if (dragStartObj.type === 'subtask') {
    const { setIsSubTaskBeingDragged } = plannerContext
    setIsSubTaskBeingDragged(true)
  }
  if (dragStartObj.type === 'card') {
    const { setIdOfCardBeingDragged } = plannerContext
    setIdOfCardBeingDragged(dragStartObj.draggableId)
  }
}
