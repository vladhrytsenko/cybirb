import clsx from 'clsx'
import styles from './Approach.module.scss'
import { Ticker } from '../../../../shared/Ticker/Ticker'
import { approaches } from '../../../../data'
import { ApproachCard } from '../../../../entities/ApproachCard/ApproachCard'
import { ApproachCards } from '../../../../features/ApproachCards/ApproachCards'

export const Approach = () => {
  return (
    <section className={clsx(styles.approach, 'section')}>
      <div className={styles.approachHead}>
        <svg
          preserveAspectRatio="none"
          className={styles.approachHeadBg}
          width="1686"
          height="687"
          viewBox="0 0 1686 687"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1898_14145)">
            <rect width="1686" height="687" fill="#151515" />
            <line x1="843.5" y1="43" x2="843.5" y2="687" stroke="#272629" />
            <rect
              x="1737.4"
              y="555"
              width="225.133"
              height="422.001"
              transform="rotate(45 1737.4 555)"
              fill="#0D0C0F"
            />
          </g>
          <defs>
            <clipPath id="clip0_1898_14145">
              <rect width="1686" height="687" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <div className="container space-top">
          <div className="section-head">
            <div className="line"></div>
            <span>[ 02 ]</span>
            <div className="section-head-icon">
              <img src="/images/icons/blog-head-icon.svg" alt="" />
            </div>
          </div>
          <div className="section-text-group">
            <div className="section-title-block">
              <span className="section-label">// information security</span>
              <h2>
                Our <br /> Approach
              </h2>
            </div>
          </div>
          <div className={clsx('section-text-block', styles.approachTextBlock)}>
            <p>
              <div className="triangle"></div>
              leveraging best-in-class AI technology to protect and monitor
              blockchain protocols and smart ntracts.leveraging best-in-class AI
              technology to protect and monitor blockchain protocols and smart
              contracts.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.ticker}>
        <Ticker />
      </div>
      <div className="container">
        <ApproachCards />
      </div>
    </section>
  )
}
