import React from 'react'
import clsx from 'clsx'
import styles from './Documentation.module.scss'
import { Button } from '../../../../shared/Button/Button'
import Ticker from 'framer-motion-ticker'
import { Ticker as MainTicker } from '../../../../shared/Ticker/Ticker'

export const Documentation = () => {
  return (
    <section className={clsx(styles.documentation, 'section')}>
      <div className={styles.documentationHead}>
        <svg
          className={styles.documentationBg}
          preserveAspectRatio='none'
          width='1686'
          height='555'
          viewBox='0 0 1686 555'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clip-path='url(#clip0_2007_14049)'>
            <rect width='1686' height='555' fill='#151515' />
            <line x1='856.5' y1='43' x2='856.5' y2='687' stroke='#272629' />
            <rect
              x='1802.22'
              y='400'
              width='225.133'
              height='422.001'
              transform='rotate(47.7201 1802.22 400)'
              fill='#0D0C0F'
            />
          </g>
          <defs>
            <clipPath id='clip0_2007_14049'>
              <rect width='1686' height='555' fill='white' />
            </clipPath>
          </defs>
        </svg>

        <div className='container'>
          <div className='section-head'>
            <div className='line'></div>
            <span>[ 02 ]</span>
            <div className='section-head-icon'>
              <img src='/images/icons/blog-head-icon.svg' alt='' />
            </div>
          </div>
          <div className='section-text-group'>
            <div className='section-title-block'>
              <span className='section-label'>// Brand Kit</span>
              <h3>
                Cybirb Brand
                <br />
                Kit: Brand
                <br />
                Documentation
              </h3>
            </div>
          </div>
          <div className={clsx('section-text-block')}>
            <p>
              <div className='triangle'></div>
              We have developed certain directives that will assist you in
              utilizing our brand and resources, such as our logo, content, and
              trademarks, without the need to negotiate legal agreements for
              every usage.
            </p>
            <div className={styles.buttonsContainer}>
              <Button>Download Brand Kit</Button>
              <Button bordered={false}>Brand Guide</Button>
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
          <span className={styles.title}>Awards</span>
        </div>
        <div className={styles.horizontalLine} />
      </div>
      <div className={styles.awardsContainer}>
        <div className={styles.awardContainer}>
          <img
            src='/images/About/Documentation/award.png'
            alt='Award'
            className={styles.image}
          />
          <p className={styles.title}>Global Awards Silver Winner</p>
        </div>
        <div className={styles.awardContainer}>
          <img
            src='/images/About/Documentation/award.png'
            alt='Award'
            className={styles.image}
          />
          <p className={styles.title}>Global Awards Silver Winner</p>
        </div>
        <div className={styles.awardContainer}>
          <img
            src='/images/About/Documentation/award.png'
            alt='Award'
            className={styles.image}
          />
          <p className={styles.title}>Global Awards Silver Winner</p>
        </div>
        <div className={styles.awardContainer}>
          <img
            src='/images/About/Documentation/award.png'
            alt='Award'
            className={styles.image}
          />
          <p className={styles.title}>Global Awards Silver Winner</p>
        </div>
        <div className={styles.awardContainer}>
          <img
            src='/images/About/Documentation/award.png'
            alt='Award'
            className={styles.image}
          />
          <p className={styles.title}>Global Awards Silver Winner</p>
        </div>
        <div className={styles.awardContainer}>
          <img
            src='/images/About/Documentation/award.png'
            alt='Award'
            className={styles.image}
          />
          <p className={styles.title}>Global Awards Silver Winner</p>
        </div>
        <div className={styles.awardContainer}>
          <img
            src='/images/About/Documentation/award.png'
            alt='Award'
            className={styles.image}
          />
          <p className={styles.title}>Global Awards Silver Winner</p>
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
          <span className={styles.title}>Trusted by</span>
        </div>
        <div className={styles.horizontalLine} />
      </div>
      <div className={styles.tickerContainer}>
        <div className={styles.leftShadow} />
        <div className={styles.rightShadow} />
        <div className={styles.topLine}>
          <Ticker duration={30}>
            <img
              src='/images/BugBounty/PlatformOffers/tappy.png'
              alt='Tappy'
              className={styles.image}
            />
            <img
              src='/images/BugBounty/PlatformOffers/thryve.png'
              alt='Thryve'
              className={styles.image}
            />
            <img
              src='/images/BugBounty/PlatformOffers/tappy.png'
              alt='Tappy'
              className={styles.image}
            />
            <img
              src='/images/BugBounty/PlatformOffers/deloitte.png'
              alt='Deloitte'
              className={styles.image}
            />
            <img
              src='/images/BugBounty/PlatformOffers/prosper.png'
              alt='Prosper'
              className={styles.image}
            />
            <img
              src='/images/BugBounty/PlatformOffers/trust_wallet.png'
              alt='Trust Wallet'
              className={styles.image}
            />
            <img
              src='/images/BugBounty/PlatformOffers/standard.png'
              alt='Standard'
              className={styles.image}
            />
            <img
              src='/images/BugBounty/PlatformOffers/deloitte.png'
              alt='Deloitte'
              className={styles.image}
            />
            <img
              src='/images/BugBounty/PlatformOffers/prosper.png'
              alt='Prosper'
              className={styles.image}
            />
          </Ticker>
        </div>
        <div className={styles.bottomLine}>
          <Ticker duration={30}>
            <img
              src='/images/BugBounty/PlatformOffers/tappy.png'
              alt='Tappy'
              className={styles.image}
            />
            <img
              src='/images/BugBounty/PlatformOffers/thryve.png'
              alt='Thryve'
              className={styles.image}
            />
            <img
              src='/images/BugBounty/PlatformOffers/tappy.png'
              alt='Tappy'
              className={styles.image}
            />
            <img
              src='/images/BugBounty/PlatformOffers/deloitte.png'
              alt='Deloitte'
              className={styles.image}
            />
            <img
              src='/images/BugBounty/PlatformOffers/prosper.png'
              alt='Prosper'
              className={styles.image}
            />
            <img
              src='/images/BugBounty/PlatformOffers/trust_wallet.png'
              alt='Trust Wallet'
              className={styles.image}
            />
            <img
              src='/images/BugBounty/PlatformOffers/standard.png'
              alt='Standard'
              className={styles.image}
            />
            <img
              src='/images/BugBounty/PlatformOffers/deloitte.png'
              alt='Deloitte'
              className={styles.image}
            />
            <img
              src='/images/BugBounty/PlatformOffers/prosper.png'
              alt='Prosper'
              className={styles.image}
            />
          </Ticker>
        </div>
      </div>
      <div>
        <MainTicker />
      </div>
    </section>
  )
}
