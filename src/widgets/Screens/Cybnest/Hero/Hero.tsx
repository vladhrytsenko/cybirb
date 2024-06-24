import clsx from 'clsx'
import styles from './Hero.module.scss'
import { Button } from '../../../../shared/Button/Button'
import { HeroBg } from './components/HeroBg'

export const Hero = () => {
  return (
    <section className={clsx('section', styles.hero)}>
      <div className={styles.heroBg}>
        <HeroBg />
      </div>
      <div className="container space-top space-bottom">
        <div className="section-text-group">
          <div className="section-title-block">
            <span className="section-label">// Cybirb’s CybNest</span>
            <h3>
              CybNest: Cybirb’s Bug Bounty Platform where Hackers Unite,
              Projects Thrive
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
