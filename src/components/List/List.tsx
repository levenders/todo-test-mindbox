import { FC } from 'react'

import { Todo } from './components/Todo'

import { TTodo } from 'types'

import styles from './List.module.css'

interface IProps {
  todos: TTodo[]
  toggleTodo: (id: string) => void
}

export const List: FC<IProps> = ({ todos, toggleTodo, ...props }) => {
  return (
    <div className={styles.list} {...props}>
      {todos.map((t) => (
        <Todo key={t.id} todo={t} toggleTodo={() => toggleTodo(t.id)} />
      ))}
    </div>
  )
}
