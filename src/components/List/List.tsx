import { FC, HTMLAttributes } from 'react'

import { SortButton } from './components/SortButton/SortButton'
import { Todo } from './components/Todo/Todo'

import { TTodo } from 'types/todo.types'

import styles from './List.module.css'

interface IProps extends HTMLAttributes<HTMLDivElement> {
  todos: TTodo[]
  toggleTodo: (id: number) => void
  viewAllTodos: () => void
  sortActiveTodos: () => void
  sortCompletedTodos: () => void
  clearCompletedTodos: () => void
}

export const List: FC<IProps> = ({
  todos,
  toggleTodo,
  viewAllTodos,
  sortActiveTodos,
  sortCompletedTodos,
  clearCompletedTodos,
  className,
  ...props
}) => {
  return (
    <div className={`${styles.list} ${className}`} {...props}>
      <div className={styles.actions}>
        <SortButton onClick={viewAllTodos} disabled={!todos.length && true}>
          All
        </SortButton>
        <SortButton onClick={sortActiveTodos} disabled={!todos.length && true}>
          Active
        </SortButton>
        <SortButton
          onClick={sortCompletedTodos}
          disabled={!todos.length && true}
        >
          Completed
        </SortButton>
        <SortButton
          onClick={clearCompletedTodos}
          disabled={!todos.length && true}
        >
          Clear completed
        </SortButton>
      </div>
      {!todos.length && <span className={styles.empty}>add new todos!</span>}
      {todos.map((t) => (
        <Todo key={t.id} todo={t} toggleTodo={() => toggleTodo(t.id)} />
      ))}
    </div>
  )
}
