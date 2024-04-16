import { FC, HTMLAttributes, useState } from 'react'

import { IconButton } from 'components/IconButton/IconButton'

import styles from './Form.module.css'

interface IForm extends HTMLAttributes<HTMLFormElement> {}

export const Form: FC<IForm> = () => {
  const [inputValue, setInputValue] = useState('')

  return (
    <form className={styles.form}>
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
