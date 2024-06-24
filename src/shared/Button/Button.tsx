import clsx from 'clsx'
import React, { FC, ReactNode } from 'react'
import styles from './Button.module.scss'

interface IProps {
  children: ReactNode
  handleClick?: () => void
  size?: 'normal' | 'big'
  type?: 'button' | 'link'
  href?: string
  bordered?: boolean
}

export const Button: FC<IProps> = ({
  children,
  size = 'normal',
  handleClick,
  type = 'button',
  href,
  bordered = true,
}) => {
  return type === 'button' ? (
    <button
      onClick={() => {
        handleClick && handleClick()
      }}
      className={clsx(
        styles.button,
        styles[size],
        !bordered && styles.noBordered
      )}
    >
      <div className={styles.content}>{children}</div>
    </button>
  ) : (
    <a
      href={href}
      onClick={() => {
        handleClick && handleClick()
      }}
      className={clsx(
        styles.button,
        styles[size],
        !bordered && styles.noBordered
      )}
    >
      <div className={styles.content}>{children}</div>
    </a>
  )
}
