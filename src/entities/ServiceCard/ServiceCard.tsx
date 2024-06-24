import { FC } from 'react'
import styles from './ServiceCard.module.scss'
import clsx from 'clsx'

interface IProps {
  id: number
  title: string
  text: string
  category: string
  icon: string
  clipType?: '1' | '2' | '3'
}

export const ServiceCard: FC<IProps> = ({
  title,
  text,
  category,
  icon,
  clipType = '1',
  id,
}) => {
  return (
    <div
      style={{
        clipPath: `url(#clip-${id})`,
      }}
      className={clsx(styles.serviceCard)}
    >
      <div className={styles.clip}>
        {clipType === '1' && (
          <svg>
            <clipPath id={`clip-${id}`} clipPathUnits="objectBoundingBox">
              <path d="M0,0.99 C0,0.996,0.005,1,0.01,1 H0.99 C0.995,1,1,0.996,1,0.99 V0.01 C1,0.004,0.995,0,0.99,0 H0.08 C0.078,0,0.075,0.001,0.073,0.003 L0.003,0.072 C0.001,0.074,0,0.076,0,0.079 V0.99"></path>
            </clipPath>
          </svg>
        )}
        {clipType === '2' && (
          <svg>
            <clipPath id={`clip-${id}`} clipPathUnits="objectBoundingBox">
              <path d="M0.927,0.004 C0.925,0.002,0.923,0.001,0.921,0.001 H0.01 C0.005,0.001,0.001,0.006,0.001,0.011 V0.87 V0.992 C0.001,0.997,0.005,1,0.01,1 H0.992 C0.997,1,1,0.997,1,0.992 V0.092 C1,0.09,1,0.087,0.999,0.085 L0.927,0.004"></path>
            </clipPath>
          </svg>
        )}
        {clipType === '3' && (
          <svg>
            <clipPath id={`clip-${id}`} clipPathUnits="objectBoundingBox">
              <path d="M0.999,0.917 L0.927,0.998 C0.925,1,0.923,1,0.921,1 H0.01 C0.005,1,0.001,0.997,0.001,0.992 V0.091 C0.001,0.088,0.002,0.086,0.004,0.084 L0.076,0.004 C0.077,0.002,0.08,0.001,0.082,0.001 H0.992 C0.997,0.001,1,0.006,1,0.011 V0.911 C1,0.913,1,0.916,0.999,0.917"></path>
            </clipPath>
          </svg>
        )}
      </div>
      <div
        style={{
          clipPath: `url(#clip-${id})`,
        }}
        className={styles.serviceCardContent}
      >
        <div className={styles.serviceCardInfo}>
          <span className={styles.serviceCardTitle}>{title}</span>
          <span className={styles.serviceCardCategory}>// {category}</span>
          <p className={styles.serviceCardText}>{text}</p>
        </div>
        <div className={styles.serviceCardIcon}>
          <img src={icon} alt="" />
        </div>
        <a href="" className={styles.serviceCardLink}>
          more details
          <div className="link-arrow"></div>
        </a>
      </div>
    </div>
  )
}
