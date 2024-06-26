import { FC, HTMLAttributes } from 'react'
import { GoCircle, GoPlusCircle, GoCheckCircle } from 'react-icons/go'

import styles from './IconButton.module.css'

interface IButton extends HTMLAttributes<HTMLButtonElement> {
  variant: 'none' | 'add' | 'completed'
  disabled?: boolean
}

export const IconButton: FC<IButton> = ({
  className,
  variant,
  children,
  disabled,
  ...props
}) => {
  const getIcon = (type: string) => {
    switch (variant) {
      case 'none':
        return <GoCircle className={`${styles.icon} ${className}`} />
      case 'add':
        return <GoPlusCircle className={`${styles.icon} ${className}`} />
      case 'completed':
        return <GoCheckCircle className={`${styles.icon} ${className}`} />
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
