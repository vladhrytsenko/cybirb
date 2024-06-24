import clsx from 'clsx'
import styles from './Model.module.scss'
import { Button } from '../../../../shared/Button/Button'

export const Model = () => {
  return (
    <section className={clsx('section mb-[6vh]', styles.model)}>
      <div className="container flex flex-col py-[6vh]">
        <div className="section-head">
          <div className="line"></div>
          <span>[ 03 ]</span>
          <div className="section-head-icon">
            <img src="/images/icons/blog-head-icon.svg" alt="" />
          </div>
        </div>
        <div className="section-text-group flex-1">
          <div className="section-title-block">
            <span className="section-label">// tokenomics</span>
            <h3>Tokemomics Model</h3>
          </div>
          <div className="section-text-block mt-auto max-w-[28vw] w-full">
            <p>
              <div className="triangle"></div>
              Anticipate what might happen. We simulate multiple growth
              scenarios, vesting, and incentive schedules to understand how this
              will affect your token. CybSafe helps you seamlessly integrates
              the custom designed tokenomics model into an easy-to-use
              dashboard. Test and visualize multiple scenarios.
            </p>
            <Button size="big">Get report</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
