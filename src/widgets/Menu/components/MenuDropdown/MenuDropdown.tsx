import clsx from 'clsx'
import styles from './MenuDropdown.module.scss'
import { FC, useEffect, useRef, useState } from 'react'
import { MenuInnerDropdown } from '../MenuInnerDropdown/MenuInnerDropdown'
import { DropdownOptions, iMenuItem } from '../../../../interfaces/IMenu'

export const MenuDropdown: FC<iMenuItem> = ({ title, type, href, options }) => {
  const ref = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)

  const [active, setActive] = useState<boolean>(false)

  const [initHeight, setInitHeight] = useState<number>(0)
  const [bodyHeight, setBodyHeight] = useState<number>(0)

  const [closeAll, setCloseAll] = useState<boolean>(false)

  function updateDropdown(height: number, state: boolean) {
    if (bodyRef.current && ref.current) {
      if (state) {
        ref.current.style.height = `${
          (initHeight + bodyRef.current.offsetHeight + height) /
          (window.innerHeight / 100)
        }vh`

        return
      }

      if (!state) {
        ref.current.style.height = `${
          (initHeight + bodyRef.current.offsetHeight - height) /
          (window.innerHeight / 100)
        }vh`
      }
    }
  }

  function toggleDropdown() {
    if (ref.current && bodyRef.current) {
      if (!active) {
        ref.current.style.height = `${
          (initHeight + bodyHeight) / (window.innerHeight / 100)
        }vh`

        setActive(true)
      } else {
        ref.current.style.height = `${
          initHeight / (window.innerHeight / 100)
        }vh`
        setActive(false)
        setCloseAll(true)
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

  return type === 'dropdown' ? (
    <div
      data-height={initHeight}
      ref={ref}
      className={clsx(
        styles.menuItem,
        styles.menuDropdown,
        active && styles.active
      )}
    >
      <span onClick={() => toggleDropdown()} className={styles.menuItemTitle}>
        {title}
      </span>
      <div className={styles.menuItemArrow}>
        [ <span>→</span> ]
      </div>
      <div ref={bodyRef} className={styles.menuDropdownBody}>
        {options?.map((option: DropdownOptions) => (
          <MenuInnerDropdown
            closeAll={closeAll}
            setCloseAll={setCloseAll}
            option={option}
            handleClick={updateDropdown}
          />
        ))}
      </div>
    </div>
  ) : (
    <a href={href} data-height={initHeight} className={clsx(styles.menuItem)}>
      <span className={styles.menuItemTitle}>{title}</span>{' '}
    </a>
  )
}
