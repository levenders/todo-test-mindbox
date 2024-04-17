import { Dispatch, FC } from 'react'
import { SortButton } from './components/SortButton'

import { filterButtons, getUUId } from 'helpers'
import { TFilter } from 'types'

import styles from './Filter.module.css'

interface IProps {
  currentFilter: string
  isFilterDisabled: boolean
  setCurrentFilter: Dispatch<React.SetStateAction<TFilter>>

  clearCompletedTodos: () => void
}

export const Filter: FC<IProps> = ({
  currentFilter,
  isFilterDisabled,
  setCurrentFilter,
  clearCompletedTodos,
}) => {
  return (
    <div className={styles.filterWrapper}>
      {filterButtons.map((b) => (
        <SortButton
          key={getUUId()}
          disabled={isFilterDisabled}
          isActive={currentFilter === b.filter}
          onClick={() => {
            setCurrentFilter(b.filter)
          }}
        >
          {b.value}
        </SortButton>
      ))}
      <SortButton disabled={isFilterDisabled} onClick={clearCompletedTodos}>
        Clear completed
      </SortButton>
    </div>
  )
}
