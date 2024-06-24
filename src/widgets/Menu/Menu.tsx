import clsx from 'clsx'
import styles from './Menu.module.scss'
import { MenuBg } from './components/MenuBg'
import { useContext, useEffect, useRef } from 'react'
import { MainContext } from '../../app/providers/MainContext'
import { MenuDropdown } from './components/MenuDropdown/MenuDropdown'
import { menuItems } from '../../data'
import { IMenuItemDefault, iMenuItem } from '../../interfaces/IMenu'

export const Menu = () => {
  const { menuActive } = useContext(MainContext)

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      const dropdownItems = ref.current.querySelectorAll<HTMLDivElement>(
        `.${styles.menuNavDropdown}`
      )

      if (dropdownItems) {
        Array.from(dropdownItems).forEach((item) => {
          item.style.height = `${item.offsetHeight}px`
          item.dataset.height = `${item.offsetHeight}`
        })
      }
    }
  }, [])

  useEffect(() => {
    menuActive
      ? (document.body.style.overflow = `hidden`)
      : (document.body.style.overflow = `auto`)
  }, [menuActive])

  return (
    <menu ref={ref} className={clsx(styles.menu, menuActive && styles.active)}>
      <div className={styles.menuBg}>
        <MenuBg />
      </div>
      <div className={styles.menuContent}>
        <div className={styles.menuSideNumbers}>
          <span>[ 01 ]</span>
          <span>[ 02 ]</span>
          <span>[ 03 ]</span>
          <span>[ 04 ]</span>
        </div>
        <div className={styles.menuLinks}>
          <ul className={styles.menuNav}>
            {menuItems.map((item: iMenuItem) => (
              <MenuDropdown
                title={item.title}
                href={item.href}
                options={item.options}
                type={item.type}
              />
            ))}
          </ul>
          <div className={styles.menuAccountOptions}>
            <a href="" className={styles.menuAccoutOption}>
              sign up
            </a>
            <a href="" className={styles.menuAccoutOption}>
              log in
            </a>
          </div>
          <div className={styles.menuContact}>
            <ul className={styles.menuContactCol}>
              <span className={styles.menuContactColTitle}>contact us</span>
              <a
                className={styles.menuContactColLink}
                href="mailto:Info@cybirb.gmail.com"
              >
                Info@cybirb.gmail.com
              </a>
              <a
                className={styles.menuContactColLink}
                href="mailto:@cybirbofficial.gmail.com"
              >
                @cybirbofficial.gmail.com
              </a>
            </ul>
            <ul className={styles.menuContactCol}>
              <span className={styles.menuContactColTitle}>stay connect</span>
              <a className={styles.menuContactColLink} href="">
                telegram
              </a>
              <a className={styles.menuContactColLink} href="">
                facebook
              </a>
              <a className={styles.menuContactColLink} href="">
                twitter
              </a>
            </ul>
          </div>
        </div>
        <div className={styles.menuSideNumbers}>
          <span>[ 01 ]</span>
          <span>[ 02 ]</span>
          <span>[ 03 ]</span>
          <span>[ 04 ]</span>
        </div>
      </div>
    </menu>
  )
}
