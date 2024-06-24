import clsx from 'clsx'
import styles from './Build.module.scss'

export const Build = () => {
  return (
    <section className={clsx('section', styles.build)}>
      <svg
        className={styles.buildBg}
        preserveAspectRatio="none"
        width="1686"
        height="687"
        viewBox="0 0 1686 687"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2010_10854)">
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
          <clipPath id="clip0_2010_10854">
            <rect width="1686" height="687" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <div className="container">
        <div className="section-head">
          <div className="line"></div>
          <span>[ 02 ]</span>
          <div className="section-head-icon">
            <img src="/images/icons/blog-head-icon.svg" alt="" />
          </div>
        </div>
        <div className="section-text-group flex-1">
          <div className="section-title-block">
            <span className="section-label">// CyBirb Badge </span>
            <h3>
              Build credibility <br /> with your partners <br /> and customers
            </h3>
          </div>
          <div className="section-text-block mt-auto max-w-[21.056vw]">
            <p>
              <div className="triangle"></div>
              After the audit, you will be able to integrate the badge “audited
              by CyBirb” into your website.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
