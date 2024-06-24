import { FC, useEffect, useRef, useState } from 'react'
import styles from './Dropdown.module.scss'
import clsx from 'clsx'

interface IProps {
  id: number
  title: string
  bodyText: string
}

export const Dropdown: FC<IProps> = ({ id, title, bodyText }) => {
  const [active, setActive] = useState<boolean>(false)

  const body = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (body.current) {
      if (active) {
        body.current.style.height = `${body.current.scrollHeight}px`
      } else {
        body.current.style.height = `0`
      }
    }
  }, [active])

  return (
    <div className={clsx(styles.dropdown, active && styles.active)}>
      <div className="section-head">
        <div className="line"></div>
        <span className={styles.dropdownHeadTitle}>
          [ 0{id} ] <span className={styles.dropdownTitle}>{title}</span>{' '}
        </span>
        <span
          onClick={() => (active ? setActive(false) : setActive(true))}
          className={styles.dropdownArrow}
        >
          [
          <svg
            width="10"
            height="15"
            viewBox="0 0 10 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.75 10L5 14.125L9.25 10L8.24842 9.02788L5.70833 11.4933L5.70833 0.375L4.29167 0.375L4.29167 11.4933L1.75158 9.02787L0.75 10Z"
              fill="white"
            />
          </svg>
          ]
        </span>
      </div>
      <div ref={body} className={styles.dropdownBody}>
        <div className={styles.dropdownBodyContent}>
          <div className="section-text-block">
            <p>
              <div className="triangle"></div>
              {bodyText}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
