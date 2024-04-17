import { FC, HTMLAttributes, useState } from 'react'

import { IconButton } from 'components/IconButton/IconButton'

import styles from './Form.module.css'

interface IForm extends HTMLAttributes<HTMLFormElement> {
  addTodo: (text: string) => void
}

export const Form: FC<IForm> = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('')

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault()
        addTodo(inputValue)
        setInputValue('')
      }}
    >
      <input
        placeholder="What needs to be done?"
        className={styles.input}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.currentTarget.value)
        }}
      ></input>
      <IconButton
        className={styles.iconButton}
        disabled={!inputValue ? true : false}
        variant="add"
      ></IconButton>
    </form>
  )
}
