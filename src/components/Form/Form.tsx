import { FC, HTMLAttributes, useState } from 'react'

import styles from './Form.module.css'
import { Button } from 'components/Button/Button'

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
      <Button disabled={!inputValue ? true : false} variant="add"></Button>
    </form>
  )
}
