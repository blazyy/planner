import { ColumnInfoType, TaskCardInfoType } from '@/hooks/Planner/types'
import axios from 'axios'
import { Dispatch } from 'react'

export const addNewCardToColumn = async (
  column: ColumnInfoType,
  cardDetails: {
    id: string
    title: string
    category: string
    content: string
  },
  dispatch: Dispatch<any>,
  getToken: () => Promise<string | null>
) => {
  const newTaskCardDetails: TaskCardInfoType = {
    id: cardDetails.id,
    title: cardDetails.title,
    category: cardDetails.category,
    content: cardDetails.content,
    status: 'created',
    subTasks: [],
  }
  const updatedTaskCards = Array.from(column.taskCards)
  updatedTaskCards.unshift(cardDetails.id) // Add to beginning of array
  dispatch({
    type: 'newTaskCardAdded',
    payload: {
      columnId: column.id,
      newTaskCardDetails,
      updatedTaskCards,
    },
  })
  const token = await getToken()
  axios
    .post(
      `/api/planner/columns/${column.id}/cards`,
      {
        newTaskCardDetails,
        updatedTaskCards,
      },
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
