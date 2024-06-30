import clsx from 'clsx'
import styles from './WhatGives.module.scss'
import { Banner } from '../../../../entities/Banner/Banner'

export const WhatGives = () => {
  return (
    <>
      <section className={clsx('section', styles.what)}>
        <div className='container space-top'>
          <div className='section-head'>
            <div className='line'></div>
            <span>[ 03 ]</span>
            <div className='section-head-icon'>
              <img src='/images/icons/blog-head-icon.svg' alt='' />
            </div>
          </div>
          {/*<div className="section-text-group items-center">*/}
          <div className={styles.content}>
            <div className='section-title-block'>
              <span className='section-label'>// Blockchain Audit </span>
              <h3>
                What CyBirb <br /> Blockchain Audit <br /> CybWatch gives you?
              </h3>
            </div>
            <div className={styles.items}>
              <div className='section-text-block'>
                <p>
                  \\ Comprehensive and fully <br /> transparent records of all
                  the vulnerabilities
                </p>
                <p>\\ CyBirb trust to audience and users</p>
              </div>
              <div className='section-text-block'>
                <p>\\ Detailed report</p>
                <p>\\ Continuous Monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Banner
        title={
          'Looking forward to avoiding exploits and making your project free of security flaws?'
        }
        buttonTitle='Request CyBirb Audit'
        href='#'
      />
    </>
  )
}
