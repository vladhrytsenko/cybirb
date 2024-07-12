import clsx from 'clsx'
import styles from './PlatformOffers.module.scss'
import { Button } from '../../../../shared/Button/Button'
import { platformOffers } from '../../../../data'
import { FeatureCard } from '../../../../entities/FeatureCard/FeatureCard'
import { Banner } from '../../../../entities/Banner/Banner'
import React from 'react'

export const PlatformOffers = () => {
  return (
    <>
      <section className={clsx('section', styles.platformOffers)}>
        <div className='container space-bottom'>
          <div className={styles.titleWrapper}>
            <div className={styles.horizontalLine} />
            <div className={styles.titleContainer}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='274'
                height='46'
                viewBox='0 0 274 46'
                fill='none'
              >
                <path
                  d='M20.9275 45.5C19.9179 45.5 18.9574 45.064 18.2928 44.3039L1.67871 25.3039C0.525074 23.9846 0.525076 22.0154 1.67872 20.6961L18.2928 1.69609C18.9574 0.936024 19.9179 0.5 20.9275 0.5H253.072C254.082 0.5 255.043 0.936024 255.707 1.6961L272.321 20.6961C273.475 22.0154 273.475 23.9846 272.321 25.3039L255.707 44.3039C255.043 45.064 254.082 45.5 253.072 45.5H20.9275Z'
                  fill='#0D0C0F'
                  stroke='#272629'
                />
              </svg>
              <span className={styles.title}>Product Features</span>
            </div>
            <div className={styles.horizontalLine} />
          </div>
          <div className={styles.cardsContainer}>
            {platformOffers.map((offer) => (
              <FeatureCard
                title={offer.title}
                text={offer.text}
                icon={offer.icon}
              />
            ))}
          </div>
        </div>
      </section>
      <Banner
        buttonTitle='Join now'
        href='/'
        title='Ready to Join the Bug Bounty?'
      />
    </>
  )
}
