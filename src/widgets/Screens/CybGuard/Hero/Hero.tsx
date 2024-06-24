import clsx from 'clsx'
import styles from './Hero.module.scss'
import { Button } from '../../../../shared/Button/Button'
import { Card } from '../../../../shared/Card/Card'

export const Hero = () => {
  return (
    <section className={clsx('section', styles.hero)}>
      <div className="container space-top space-bottom">
        <div className="section-head">
          <div className="line"></div>
          <span>[ 01 ]</span>
          <div className="section-head-icon">
            <img src="/images/icons/blog-head-icon.svg" alt="" />
          </div>
        </div>
        <div className="section-text-group">
          <div className="section-title-block">
            <span className="section-label">// cybguard</span>
            <h3>Secure Your DApp Today with CybGuard!</h3>
          </div>
          <div className={clsx('section-text-block', styles.blogTextBlock)}>
            <p>
              <div className="triangle"></div>
              CybGuard offers robust security measures to protect decentralized
              applications (DApps) from potential exploits, contract
              vulnerabilities, and malicious attacks, ensuring the safety and
              reliability of DApps in the Web3 ecosystem.
            </p>
            <Button size="big" type="link" href="/blog">
              secure dapp
            </Button>
          </div>
        </div>
        <div className={styles.heroCards}>
          <Card
            bgType={1}
            title={'123 B+'}
            text={'Number of vulnerabilities identified and remediated.'}
          />
          <Card
            bgType={2}
            title={'100%'}
            text={'Percentage increase in DApp security'}
          />
          <Card
            bgType={3}
            title={'45%'}
            text={'Reduction in potential attack vectors'}
          />
          <Card
            bgType={4}
            title={'70%'}
            text={'Improved user trust and confidence in your DApps'}
          />
        </div>
      </div>
    </section>
  )
}
