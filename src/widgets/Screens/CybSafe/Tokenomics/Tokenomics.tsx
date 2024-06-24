import clsx from 'clsx'
import styles from './Tokenomics.module.scss'
import { Button } from '../../../../shared/Button/Button'

export const Tokenomics = () => {
  return (
    <section className={clsx('section', styles.tokenomics)}>
      <div className="container space-top pb-[6vh]">
        <div className="section-head">
          <div className="line"></div>
          <span>[ 03 ]</span>
          <div className="section-head-icon">
            <img src="/images/icons/blog-head-icon.svg" alt="" />
          </div>
        </div>
        <div className="section-text-group">
          <div className="section-title-block">
            <span className="section-label">// tokenomics</span>
            <h3>
              Tokenomics <br /> Design
            </h3>
          </div>
          <div className="section-text-block max-w-[30vw] w-full">
            <p>
              <div className="triangle"></div>
              Get assistance in identifying suitable models for your economy
              based on your business model and the best tokenomics practices.
            </p>
            <Button size="big">Get report</Button>
          </div>
        </div>
        <svg className="clip">
          <clipPath
            id="cybsafe-tokenomics-image"
            clipPathUnits="objectBoundingBox"
          >
            <path d="M0,0.064 L0.027,0 H0.973 L1,0.064 V0.936 L0.973,1 H0.027 L0,0.936 V0.064"></path>
          </clipPath>
        </svg>
        <div className={styles.tokenomicsImage}>
          <img src="/images/CybSafe/Tokenomics/image.png" alt="" />
        </div>
      </div>
    </section>
  )
}
