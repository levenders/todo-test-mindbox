import { FC, HTMLAttributes } from 'react'
import { GoCircle, GoPlusCircle, GoCheckCircle } from 'react-icons/go'

import styles from './Button.module.css'

interface IButton extends HTMLAttributes<HTMLButtonElement> {
  variant: 'none' | 'add' | 'complite'
  disabled?: boolean
}

export const Button: FC<IButton> = ({
  className,
  variant,
  disabled,
  children,
  ...props
}) => {
  const getIcon = (type: string) => {
    switch (variant) {
      case 'none':
        return <GoCircle className={styles.icon} />
      case 'add':
        return <GoPlusCircle className={styles.icon} />
      case 'complite':
        return <GoCheckCircle className={styles.icon} />
      default:
        return <GoCircle />
    }
  }

  return (
    <button className={styles.button} disabled={disabled} {...props}>
      {getIcon(variant)}
    </button>
  )
}
