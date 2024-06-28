import { useContext, useEffect, useRef } from 'react'
import clsx from 'clsx'
import { Logo } from '../../shared/Logo/Logo'
import styles from './Header.module.scss'
import { Button } from '../../shared/Button/Button'
import { MainContext } from '../../app/providers/MainContext'

const Header = () => {
  const { menuActive, setMenuActive, currentPage } = useContext(MainContext)

  return (
    <header className={clsx(styles.header, menuActive && styles.menuActive)}>
      <div className='container'>
        <nav className={styles.headerNav}>
          <a
            href='/'
            onClick={(ev) => {
              if (currentPage === 'home') {
                ev.preventDefault()

                window.scrollTo({
                  left: 0,
                  top: 0,
                  behavior: 'smooth',
                })
              }
            }}
            className={styles.headerLogo}
          >
            <Logo />
          </a>
          <div className={styles.headerGroup}>
            <div className={styles.auditButton}>
              <Button>Request Audit</Button>
            </div>
            <button
              onClick={() =>
                !menuActive ? setMenuActive(true) : setMenuActive(false)
              }
              className={clsx(
                styles.headerMenuButton,
                menuActive && styles.active
              )}
            >
              <span>menu</span>
              <span className={styles.icon}>
                [ <span className={styles.first}>/</span>
                <span className={styles.second}>/</span> ]
              </span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
