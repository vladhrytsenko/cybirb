import React from 'react'
import clsx from 'clsx'
import styles from './Hero.module.scss'

export const Hero = () => {
  return (
    <section className={clsx('section', styles.hero)}>
      <div className={styles.heroBg} />
      <div className='container space-top space-bottom'>
        <div className='section-head'>
          <div className='line'></div>
          <span>[ 01 ]</span>
          <div className='section-head-icon'>
            <img src='/images/icons/blog-head-icon.svg' alt='' />
          </div>
        </div>
        <div className='section-text-group'>
          <div className='section-title-block'>
            <span className='section-label'>// Our Mission</span>
            <h3>Our Mission Securing Web3 World</h3>
          </div>
          <div className='section-text-block'>
            <p>
              <div className='triangle'></div>
              CyBirb reshapes the cybersecurity aspect integrating Web3 with its
              diverse products utilizing AL-ML technology to secure and monitor
              Blockchains, Smart Contracts and Web3 Apps.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
