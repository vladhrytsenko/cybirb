import { FC, useRef } from 'react'

import styles from './Logo.module.scss'

interface IProps {
  logoType?: 'common' | 'secondary'
}

export const Logo: FC<IProps> = ({ logoType = 'common' }) => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div ref={ref} className={styles.logo}>
      {logoType === 'common' && <img src="/images/logo.svg" alt="" />}
      {logoType === 'secondary' && (
        <img src="/images/logo-secondary.svg" alt="" />
      )}
    </div>
  )
}
