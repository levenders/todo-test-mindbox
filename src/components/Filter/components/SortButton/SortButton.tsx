import { FC, HTMLAttributes } from 'react'

import styles from './SortButton.module.css'

interface IButton extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  isActive?: boolean
}

export const SortButton: FC<IButton> = ({
  disabled,
  className,
  children,
  isActive = false,
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${isActive && styles.active} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
