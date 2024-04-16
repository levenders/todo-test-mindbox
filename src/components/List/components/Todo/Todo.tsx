import { FC, HTMLAttributes } from 'react'

import { IconButton } from 'components/IconButton/IconButton'

import { TTodo } from 'types/todo.types'

import styles from './Todo.module.css'

interface IProps extends HTMLAttributes<HTMLDivElement> {
  todo: TTodo
  toggleTodo: (id: number) => void
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
        variant={todo.comlited ? 'complited' : 'none'}
        onClick={() => toggleTodo(todo.id)}
      />
      <span className={styles.todo}>{todo.value}</span>
    </div>
  )
}
