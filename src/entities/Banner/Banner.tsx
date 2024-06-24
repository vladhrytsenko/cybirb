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
      <div className="container">
        <div className={styles.bannerContent}>
          <div className={styles.bannerBg}>
            <svg
              preserveAspectRatio="none"
              width="1596"
              height="300"
              viewBox="0 0 1596 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.28928 33.3575C0.467499 34.1148 0 35.1814 0 36.2989V268.701C0 269.819 0.467498 270.885 1.28928 271.643L30.9116 298.941C31.6502 299.622 32.6178 300 33.6223 300H1562.74C1563.52 300 1564.29 299.771 1564.94 299.341L1594.2 280.082C1595.32 279.342 1596 278.086 1596 276.741V36.2989C1596 35.1814 1595.53 34.1148 1594.71 33.3575L1559.66 1.05857C1558.92 0.377887 1557.96 0 1556.95 0H39.0479C38.0435 0 37.0758 0.377886 36.3372 1.05857L1.28928 33.3575Z"
                fill="#151515"
              />
            </svg>
          </div>
          <span className={styles.bannerTitle}>{title}</span>
          <Button type="link" href={href} size="big">
            {buttonTitle}
          </Button>
        </div>
      </div>
    </div>
  )
}
