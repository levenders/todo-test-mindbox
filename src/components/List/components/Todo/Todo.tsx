import { FC, HTMLAttributes } from 'react'

import { IconButton } from 'components/IconButton'

import { TTodo } from 'types/todo.types'

import styles from './Todo.module.css'

interface IProps extends HTMLAttributes<HTMLDivElement> {
  todo: TTodo
  toggleTodo: (id: string) => void
}

export const Todo: FC<IProps> = ({
  todo,
  toggleTodo,
  children,
  className,
  ...props
}) => {
  return (
    <div className={`${styles.todoWrapper} ${className}`} {...props}>
      <IconButton
        className={styles.iconButton}
        variant={todo.comlited ? 'completed' : 'none'}
        onClick={() => toggleTodo(todo.id)}
      />
      <div className={`${styles.todo} ${todo.comlited ? styles.comlited : ''}`}>
        {todo.value}
      </div>
    </div>
  )
}
