import React from 'react'
import clsx from 'clsx'
import styles from './Team.module.scss'
import { TabClip } from '../../../../features/BlogArticles/components/TabClip'
import { FreeMode, Scrollbar } from 'swiper'
import { ourTeam } from '../../../../data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { TeamSlide } from './components/TeamSlide/TeamSlide'
import { Button } from '../../../../shared/Button/Button'

export const Team = () => {
  return (
    <section className={clsx('section', styles.features)}>
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
            <span className='section-label'>// Team</span>
            <h3>our team </h3>
          </div>
          <div className={styles.filters}>
            <div
              onClick={() => {}}
              className={clsx(styles.actionTab, styles.active)}
            >
              <div className={styles.actionTabBg}>
                <TabClip type={1} />
              </div>
              ALL
            </div>
            <div onClick={() => {}} className={styles.actionTab}>
              <div className={styles.actionTabBg}>
                <TabClip type={2} />
              </div>
              marketing
            </div>
            <div onClick={() => {}} className={styles.actionTab}>
              <div className={styles.actionTabBg}>
                <TabClip type={1} />
              </div>
              Finance
            </div>
            <div onClick={() => {}} className={styles.actionTab}>
              <div className={styles.actionTabBg}>
                <TabClip type={2} />
              </div>
              Hr
            </div>
          </div>
        </div>
        <div className={styles.teamContainer}>
          <Swiper
            freeMode={true}
            slidesPerView='auto'
            modules={[FreeMode, Scrollbar]}
            scrollbar={{ hide: false }}
          >
            {ourTeam.map((item) => (
              <SwiperSlide className={styles.slide}>
                <TeamSlide data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.joinOurTeamContainer}>
          <img
            src='/images/About/Team/team.png'
            alt='Team'
            className={styles.image}
          />
          <div className={styles.details}>
            <div className='section-text-group'>
              <div className='section-title-block'>
                <span className='section-label'>// Team</span>
                <h3>Join Our Team</h3>
              </div>
              <Button>JOIN</Button>
            </div>
            <div className={styles.globalPresence}>
              <h5>Global Presence</h5>
              <div className={styles.globalPresenceItems}>
                <div className={styles.globalPresenceItem}>
                  <span className={styles.value}>50+</span>
                  <p className={styles.description}>Experiences Team Members</p>
                </div>
                <div className={styles.globalPresenceItem}>
                  <span className={styles.value}>6+</span>
                  <p className={styles.description}>Security Products</p>
                </div>
                <p className={styles.description}>
                  Birbs from around the Globe from various
                  <br />
                  <span className='text-white'>Reputed institutions.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
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
            <span className={styles.title}>Cybirb In Media</span>
          </div>
          <div className={styles.horizontalLine} />
        </div>
        <div className={styles.partnersContainer}>
          <div className={styles.partnerContainer}>
            <img
              src='/images/BugBounty/PlatformOffers/trust_wallet.png'
              alt='Trust Wallet'
              className={styles.image}
            />
          </div>
          <div className={styles.partnerContainer}>
            <img
              src='/images/BugBounty/PlatformOffers/thryve.png'
              alt='Thryve'
              className={styles.image}
            />
          </div>
          <div className={styles.partnerContainer}>
            <img
              src='/images/BugBounty/PlatformOffers/tappy.png'
              alt='Tappy'
              className={styles.image}
            />
          </div>
          <div className={styles.partnerContainer}>
            <img
              src='/images/BugBounty/PlatformOffers/thryve.png'
              alt='Thryve'
              className={styles.image}
            />
          </div>
          <div className={styles.partnerContainer}>
            <img
              src='/images/BugBounty/PlatformOffers/trust_wallet.png'
              alt='Trust Wallet'
              className={styles.image}
            />
          </div>
          <div className={styles.partnerContainer}>
            <img
              src='/images/BugBounty/PlatformOffers/thryve.png'
              alt='Thryve'
              className={styles.image}
            />
          </div>
          <div className={styles.partnerContainer}>
            <img
              src='/images/BugBounty/PlatformOffers/tappy.png'
              alt='Tappy'
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
