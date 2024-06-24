import clsx from 'clsx'
import styles from './Hero.module.scss'
import { Button } from '../../../../shared/Button/Button'

export const Hero = () => {
  return (
    <section className={clsx('section', styles.hero)}>
      <svg
        className={styles.heroBg}
        preserveAspectRatio="none"
        width="1686"
        height="555"
        viewBox="0 0 1686 555"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2007_14049)">
          <rect width="1686" height="555" fill="#151515" />
          <line x1="856.5" y1="43" x2="856.5" y2="687" stroke="#272629" />
          <rect
            x="1802.22"
            y="400"
            width="225.133"
            height="422.001"
            transform="rotate(47.7201 1802.22 400)"
            fill="#0D0C0F"
          />
        </g>
        <defs>
          <clipPath id="clip0_2007_14049">
            <rect width="1686" height="555" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div className="container space-top space-bottom">
        <div className="section-head">
          <div className="line"></div>
          <span>[ 03 ]</span>
          <div className="section-head-icon">
            <img src="/images/icons/blog-head-icon.svg" alt="" />
          </div>
        </div>
        <div className="section-text-group h-full">
          <div className="section-title-block">
            <span className="section-label">// Cybirb’s CybNest</span>
            <h3>
              CybSafe Unlock Your ICO <br /> / IEO Potential with <br />{' '}
              CyBirb’s CybSafe Demo
            </h3>
          </div>
          <div className="section-text-block mt-auto max-w-[30vw] w-full">
            <p>
              <div className="triangle"></div>
              CybSafe specializes in ensuring the security of token sales and
              Initial Coin Offerings (ICOs), safeguarding the entire process
              from potentially fraudulent activities, hacking attempts, and
              unauthorized access, thereby enhancing trust among team,
              communities, and investor confidence.
            </p>
            <p>
              From ideation to launch and beyond, CybSafe helps you build
              mathematically backed and resilient token design, model, and
              continuous monitoring
            </p>
            <Button size="big">Schedule CybSafe Demo</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
