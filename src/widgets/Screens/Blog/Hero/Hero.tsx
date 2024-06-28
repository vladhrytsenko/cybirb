import clsx from 'clsx'
import styles from './Hero.module.scss'
import { HeroBg } from './components/HeroBg'
import { Ticker } from '../../../../shared/Ticker/Ticker'

export const Hero = () => {
  return (
    <>
      <section className={clsx('section', styles.blog)} id='blog-hero'>
        <div className={styles.blogBg}>
          <HeroBg />
        </div>
        <div
          className={clsx(
            'container space-top space-bottom',
            styles.blogContent
          )}
        >
          <div className='section-text-group'>
            <div className='section-title-block'>
              <span className='section-label'>// information security</span>
              <h2>
                Our <br className={styles.break} /> Blog
              </h2>
            </div>
            <div className={clsx('section-text-block', styles.blogTextBlock)}>
              <p>
                <div className='triangle'></div>
                leveraging best-in-class AI technology to protect and monitor
                blockchain protocols and smart ntracts.leveraging best-in-class
                AI technology to protect and monitor blockchain protocols and
                smart contracts.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.blogTicker}>
        <Ticker />
      </div>
    </>
  )
}
