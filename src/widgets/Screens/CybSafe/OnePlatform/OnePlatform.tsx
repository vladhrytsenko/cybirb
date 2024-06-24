import clsx from 'clsx'
import styles from './OnePlatform.module.scss'
import { Ticker } from '../../../../shared/Ticker/Ticker'

export const OnePlatform = () => {
  return (
    <section className={clsx('section', styles.platform)}>
      <div className={styles.ticker}>
        <Ticker />
      </div>
      <div className="container space-top">
        <div className="section-head">
          <div className="line"></div>
          <span>[ 03 ]</span>
          <div className="section-head-icon">
            <img src="/images/icons/blog-head-icon.svg" alt="" />
          </div>
        </div>
        <div className="section-text-group">
          <div className="section-title-block">
            <span className="section-label">// Cybirb’s CybNest</span>
            <h3>
              CybSafe – One Platform <br /> for every scenario
            </h3>
          </div>
          <div className="section-text-block max-w-[30vw] w-full">
            <p>
              <div className="triangle"></div>
              Сonsider any design for your tokenomics, and any situation to test
              it against. <br /> Get actionable insights to improve your
              economy.
            </p>
          </div>
        </div>
        <svg className="clip">
          <clipPath
            id="cybsafe-platform-image"
            clipPathUnits="objectBoundingBox"
          >
            <path d="M0,0.064 L0.027,0 H0.973 L1,0.064 V0.936 L0.973,1 H0.027 L0,0.936 V0.064"></path>
          </clipPath>
        </svg>
        <div className={styles.platformImage}>
          <img src="/images/CybSafe/OnePlatform/image.png" alt="" />
        </div>
      </div>
    </section>
  )
}
