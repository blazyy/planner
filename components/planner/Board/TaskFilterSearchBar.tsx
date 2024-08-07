import { Input } from '@/components/ui/input'
import { usePlannerFilters, usePlannerFiltersDispatch } from '@/hooks/PlannerFilters/PlannerFilters'

export const TaskFilterSearchBar = () => {
  const dispatch = usePlannerFiltersDispatch()
  const { searchQuery } = usePlannerFilters()
  return (
    <Input
      className='w-96 focus-visible:ring-0 focus-visible:ring-transparent'
      type='text'
      placeholder='Search for tasks...'
      value={searchQuery}
      onChange={(e) => dispatch({ type: 'searchQueryChanged', payload: { searchQuery: e.target.value } })}
    />
  )
}
