import { FC, HTMLAttributes } from 'react'

import styles from './SortButton.module.css'

interface IButton extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
}

export const SortButton: FC<IButton> = ({
  disabled,
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
