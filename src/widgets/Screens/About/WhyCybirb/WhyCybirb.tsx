import React from 'react'
import clsx from 'clsx'
import styles from './WhyCybirb.module.scss'
import { Card } from '../../../../shared/Card/Card'
import { FreeMode, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { cybirbHistory } from '../../../../data'

export const WhyCybirb = () => {
  return (
    <section className={clsx('section', styles.whyCybirb)}>
      <div className='container'>
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
            <span className={styles.title}>Why Cybirb</span>
          </div>
          <div className={styles.horizontalLine} />
        </div>
        <div className={styles.cards}>
          <Card bgType={1} title='15+' text='Years of Experience' />
          <Card
            bgType={7}
            title='500+'
            text='Clients including Fortune 500 for Web2 Cybersecurity Solutions'
          />
          <Card bgType={5} title='100+' text='Partners' />
          <Card bgType={4} title='50+' text='Experiences Team Members' />
        </div>
        <h5 className={styles.sectionTitle}>Global Presence</h5>
        <div className={styles.sections}>
          <div className={clsx('section-text-block', styles.section)}>
            <p>\\ California, USA; NY, USA;</p>
          </div>
          <div className={clsx('section-text-block', styles.section)}>
            <p>\\ Dubai, Abudhabi, UAE;</p>
          </div>
          <div className={clsx('section-text-block', styles.section)}>
            <p>\\ Vadodara, Mumbai, India;</p>
          </div>
          <div className={clsx('section-text-block', styles.section)}>
            <p>\\ Doha, Qatar;</p>
          </div>
        </div>
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.history}>
          <h3 className={styles.title}>Cybirb History</h3>
        </div>
        <Swiper
          freeMode={true}
          breakpoints={{
            0: {
              slidesPerView: 1.15,
            },
            800: {
              slidesPerView: 2.3,
            },
          }}
          modules={[FreeMode, Scrollbar]}
          scrollbar={{
            hide: false,
          }}
        >
          {cybirbHistory.map((item) => (
            <SwiperSlide className={styles.slide}>
              <div className={styles.year}>{item.year}</div>
              <div className='section-text-block'>
                <p>
                  <div className='triangle'></div>
                  {item.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
