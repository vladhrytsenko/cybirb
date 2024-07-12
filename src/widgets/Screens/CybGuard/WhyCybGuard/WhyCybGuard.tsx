import clsx from 'clsx'
import styles from './WhyCybGuard.module.scss'
import { dappsFeatures } from '../../../../data'
import { FeatureCard } from '../../../../entities/FeatureCard/FeatureCard'

export const WhyCybGuard = () => {
  return (
    <section className={clsx('section', styles.why)}>
      <div className='container space-top space-bottom'>
        <div className='section-head'>
          <div className='line'></div>
          <span>[ 03 ]</span>
          <div className='section-head-icon'>
            <img src='/images/icons/blog-head-icon.svg' alt='' />
          </div>
        </div>
        <div className='section-text-group'>
          <div className='section-title-block'>
            <span className='section-label'>// Why dapps</span>
            <h3>Why CybGuard for your DApps?</h3>
          </div>
        </div>
        <div className={styles.cardsContainer}>
          {dappsFeatures.map((feature) => (
            <FeatureCard
              prefix=''
              text={feature.text}
              title={feature.title}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
