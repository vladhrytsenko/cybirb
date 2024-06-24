import { FC } from 'react'
import styles from './FeatureCard.module.scss'
import clsx from 'clsx'
import { Button } from '../../shared/Button/Button'

interface IProps {
  icon: string
  title: string
  text: string[]
  link?: boolean
  linkTitle?: string
  linkHref?: string
}

export const FeatureCard: FC<IProps> = ({
  icon,
  title,
  text,
  link = false,
  linkTitle,
  linkHref,
}) => {
  return (
    <div className={clsx(styles.featureCard)}>
      <div className={styles.featureCardContent}>
        <div className={styles.featureCardIcon}>
          <img src={icon} alt="" />
        </div>
        <span className={styles.featureCardTitle}>{title}</span>
        <div className={styles.featureCardText}>
          {text.map((text) => (
            <p>// {text}</p>
          ))}
        </div>
        {link && (
          <a className={styles.featureCardLink} href={linkHref}>
            {linkTitle}
            <span>→</span>
          </a>
        )}
      </div>
    </div>
  )
}
