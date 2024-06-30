import clsx from 'clsx'
import styles from './Economies.module.scss'
import { cybSafeFeatures } from '../../../../data'
import { FeatureCard } from '../../../../entities/FeatureCard/FeatureCard'
import { Banner } from '../../../../entities/Banner/Banner'

export const Economies = () => {
  return (
    <section className={clsx('section', styles.economies)}>
      <div className='container'>
        <div className='section-head'>
          <div className='line'></div>
          <span>[ 05 ]</span>
          <div className='section-head-icon'>
            <img src='/images/icons/blog-head-icon.svg' alt='' />
          </div>
        </div>
        <div className='section-text-group'>
          <div className='section-title-block'>
            <span className='section-label'>// tokenomics</span>
            <h3>Token Economies</h3>
          </div>
          <div className='section-text-block'>
            <p>
              <div className='triangle'></div>
              Various aspects are assessed during <br /> a Tokenomics audit,
              including.
            </p>
          </div>
        </div>
        <div className={styles.cards}>
          {cybSafeFeatures.map((feature) => (
            <FeatureCard
              title={feature.title}
              text={feature.text}
              icon={feature.icon}
            />
          ))}
        </div>
        <Banner
          title={`Protect your project's future with 
a comprehensive tokenomics audit.`}
          buttonTitle='Schedule CybSaf Audit'
          href='#'
        />
      </div>
    </section>
  )
}
