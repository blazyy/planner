import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { usePlanner } from '@/hooks/Planner/Planner'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { badgeClassNames } from '../../TaskColumns/TaskCard/utils'
import { AddNewCategoryButton } from './AddNewCategoryButton'
import { ModifyCategoryDialogContent } from './ModifyCategoryDialogContent'

export const ManagingCategoriesView = () => {
  const { categories } = usePlanner()
  const [categoryBeingModified, setCategoryBeingModified] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [key, setKey] = useState(0)

  const closeDialog = () => {
    setIsDialogOpen(false)
    setKey((prevKey) => prevKey + 1) // Resets unsaved changes in dialog when cancel button is clicked
  }

  const Categories = () => (
    <div className='flex flex-col gap-2 w-full'>
      {Object.keys(categories)
        .sort()
        .map((id: string, i: number) => {
          const category = categories[id]
          if (category.name !== 'Unassigned')
            return (
              <div key={`${category.name}-${i}`}>
                <DialogTrigger asChild>
                  <Button
                    className='w-2/12'
                    variant='ghost'
                    onClick={() => {
                      setCategoryBeingModified(id)
                      setIsDialogOpen(true)
                    }}
                  >
                    <div className='flex justify-start items-center gap-2 w-full'>
                      <span
                        key={`${category.color}-${i}`}
                        className={cn('rounded-md h-6 w-6', badgeClassNames[category.color])}
                      />
                      <span className='flex'>{category.name}</span>
                    </div>
                  </Button>
                </DialogTrigger>
              </div>
            )
        })}
    </div>
  )

  return (
    <Dialog
      open={isDialogOpen}
      onOpenChange={(newOpen) => {
        // Used to call custom closeDialog function when dialog is closed, this resets unsaved changes in dialog when closed
        setIsDialogOpen(newOpen)
        if (!newOpen) {
          closeDialog()
        }
      }}
    >
      <div className='flex flex-col justify-start gap-2 ml-10 w-full'>
        <span className='mb-4 font-bold text-xl'>Manage Categories</span>
        <Categories />
        {categoryBeingModified && (
          <ModifyCategoryDialogContent
            key={key}
            categoryId={categoryBeingModified}
            closeDialog={closeDialog}
            setCategoryBeingModified={setCategoryBeingModified}
          />
        )}
        <AddNewCategoryButton />
      </div>
    </Dialog>
  )
}
