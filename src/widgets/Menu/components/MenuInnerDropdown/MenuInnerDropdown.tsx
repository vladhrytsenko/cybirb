import clsx from 'clsx'
import styles from './MenuInnerDropdown.module.scss'

import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import { DropdownOptions } from '../../../../interfaces/IMenu'

interface IProps {
  closeAll: boolean
  setCloseAll: Dispatch<SetStateAction<boolean>>
  option: DropdownOptions
  handleClick: (hegiht: number, state: boolean) => void
}

export const MenuInnerDropdown: FC<IProps> = ({
  handleClick,
  option,
  closeAll,
  setCloseAll,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)

  const [active, setActive] = useState<boolean>(false)

  const [initHeight, setInitHeight] = useState<number>(0)
  const [bodyHeight, setBodyHeight] = useState<number>(0)

  useEffect(() => {
    if (closeAll) {
      if (ref.current) {
        ref.current.style.height = `${
          initHeight / (window.innerHeight / 100)
        }vh`
      }
      setActive(false)
    }
  }, [closeAll])

  function toggleDropdown() {
    if (ref.current && bodyRef.current) {
      if (!active) {
        ref.current.style.height = `${
          (initHeight + bodyHeight) / (window.innerHeight / 100)
        }vh`

        setCloseAll(false)
        setActive(true)
      } else {
        ref.current.style.height = `${
          initHeight / (window.innerHeight / 100)
        }vh`
        setActive(false)
      }
    }
  }

  useEffect(() => {
    if (ref.current && bodyRef.current) {
      setInitHeight(ref.current.offsetHeight)
      setBodyHeight(bodyRef.current.offsetHeight)
      ref.current.style.height = `${
        ref.current.offsetHeight / (window.innerHeight / 100)
      }vh`
    }
  }, [])

  return option.type === 'dropdown' ? (
    <div
      ref={ref}
      className={clsx(
        styles.menuItem,
        styles.menuDropdown,
        active && styles.active
      )}
    >
      <span
        onClick={() => {
          toggleDropdown()
          handleClick(bodyHeight, active ? false : true)
        }}
        className={styles.menuItemTitle}
      >
        {option.title}
      </span>
      <div className={styles.menuItemArrow}>
        [ <span>→</span> ]
      </div>
      <div ref={bodyRef} className={styles.menuDropdownBody}>
        {option.options.map(
          (option) =>
            option.type === 'link' && (
              <a href={option.href} className={styles.menuItem}>
                <span className={styles.menuItemTitle}>{option.title}</span>
              </a>
            )
        )}
      </div>
    </div>
  ) : (
    <a href={option.href} className={clsx(styles.menuItem)}>
      <span className={styles.menuItemTitle}>{option.title}</span>
    </a>
  )
}
