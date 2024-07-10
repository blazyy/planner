import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { UNASSIGNED_CATEGORY_ID } from '@/constants/constants'
import { usePlanner } from '@/hooks/Planner/Planner'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { badgeClassNames } from '../../Board/TaskColumns/TaskCard/utils'
import { AddNewCategoryButton } from './AddNewCategoryButton'
import { ModifyCategoryDialogContent } from './ModifyCategoryDialogContent'

export const ManageCategoriesCard = () => {
  const { boardOrder, boards, categories } = usePlanner()
  const [detailsOfCategoryBeingModified, setDetailsOfCategoryBeingModified] = useState({
    boardId: '',
    categoryId: '',
  })
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [key, setKey] = useState(0)

  useEffect(() => {
    if (detailsOfCategoryBeingModified.categoryId && detailsOfCategoryBeingModified.boardId) {
      setIsDialogOpen(true)
    }
  }, [detailsOfCategoryBeingModified])

  const closeDialog = () => {
    setIsDialogOpen(false)
    setDetailsOfCategoryBeingModified({
      boardId: '',
      categoryId: '',
    })
    setKey((prevKey) => prevKey + 1) // Resets unsaved changes in dialog when cancel button is clicked
  }

  return (
    <Dialog
      open={isDialogOpen}
      onOpenChange={(newOpen) => {
        if (!newOpen) {
          closeDialog()
        }
      }}
    >
      <div className='flex flex-col justify-start gap-5 border-slate-200 p-5 border rounded-md w-1/4'>
        <div className='flex flex-col'>
          <span className='font-bold text-lg'>Manage Categories</span>
          <span className='text-muted-foreground text-sm'>
            Categories are specific to a board. Think of them as tags.
          </span>
        </div>
        <Separator />
        {boardOrder.map((boardId, index) => {
          if (boards[boardId].categories.filter((category) => category !== UNASSIGNED_CATEGORY_ID).length === 0) {
            return (
              <>
                <div className='flex justify-between items-center gap-2 w-full'>
                  <span className='text-lg'>{boards[boardId].name}</span>
                  <span className='text-muted-foreground text-sm'>0 categories</span>
                </div>
                {index !== boardOrder.length - 1 && <Separator />}
              </>
            )
          }
          return (
            <>
              <div key={boardId} className='flex flex-col gap-2 w-full'>
                <span className='text-lg'>{boards[boardId].name}</span>
                {boards[boardId].categories.map((categoryId: string, i: number) => {
                  const category = categories[categoryId]
                  if (category.id !== UNASSIGNED_CATEGORY_ID) {
                    return (
                      <div key={`${category.name}-${i}`}>
                        <DialogTrigger asChild>
                          <Button
                            className='pl-2 w-full'
                            variant='ghost'
                            onClick={() => {
                              setDetailsOfCategoryBeingModified({
                                boardId: boardId,
                                categoryId: categoryId,
                              })
                            }}
                          >
                            <div className='flex justify-start items-center gap-2 w-full'>
                              <span className={cn('rounded-md h-6 w-6', badgeClassNames[category.color])} />
                              <span>{category.name}</span>
                            </div>
                          </Button>
                        </DialogTrigger>
                      </div>
                    )
                  }
                })}
                {index !== boardOrder.length - 1 && <Separator />}
              </div>
            </>
          )
        })}
        {detailsOfCategoryBeingModified.boardId && detailsOfCategoryBeingModified.categoryId && (
          <ModifyCategoryDialogContent
            key={key}
            boardId={detailsOfCategoryBeingModified.boardId}
            categoryId={detailsOfCategoryBeingModified.categoryId}
            closeDialog={closeDialog}
            setDetailsOfCategoryBeingModified={setDetailsOfCategoryBeingModified}
          />
        )}
        <AddNewCategoryButton />
      </div>
    </Dialog>
  )
}
