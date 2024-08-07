import { ColumnsType } from '@/hooks/Planner/types'
import axios from 'axios'
import { Dispatch } from 'react'

export default async function moveCardWithinColumn(
  columns: ColumnsType,
  columnId: string,
  cardId: string,
  sourceIndex: any,
  destIndex: any,
  dispatch: Dispatch<any>,
  getToken: () => Promise<string | null>
) {
  const startingColumn = columns[columnId]
  const reorderedCardIds = Array.from(startingColumn.taskCards) // Copy of taskCards
  reorderedCardIds.splice(sourceIndex, 1)
  reorderedCardIds.splice(destIndex, 0, cardId)

  dispatch({
    type: 'cardMovedWithinColumn',
    payload: {
      columnId,
      reorderedCardIds,
    },
  })
  const token = await getToken()
  axios
    .patch(
      `/api/planner/columns/${columnId}/cards/reorder`,
      { reorderedCardIds },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .catch((error) => {
      dispatch({
        type: 'backendErrorOccurred',
      })
    })
}
