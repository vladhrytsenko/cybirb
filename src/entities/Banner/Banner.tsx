import React, { FC } from 'react'

import styles from './Banner.module.scss'
import { Button } from '../../shared/Button/Button'

interface IProps {
  title: string
  buttonTitle: string
  href: string
}

export const Banner: FC<IProps> = ({ title, buttonTitle, href }) => {
  return (
    <div className={styles.banner}>
      <div className='container'>
        <div className={styles.bannerContent}>
          <div className={styles.bannerBg} />
          <span className={styles.bannerTitle}>{title}</span>
          <Button type='link' href={href} size='big'>
            {buttonTitle}
          </Button>
        </div>
      </div>
    </div>
  )
}
