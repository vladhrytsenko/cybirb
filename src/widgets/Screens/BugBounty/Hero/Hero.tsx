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
          <div
            className={clsx(
              'section-title-block',
              styles.heroLeftBlock,
              styles.heroBlock
            )}
          >
            <span className="section-label">// Cybirb’s Bug Bounty</span>
            <h4>
              CybNest: Building <br /> a Secure Web3 together
            </h4>
            <div className="section-text-block">
              <p>
                <div className="triangle"></div>
                Hub for project owners and hackers to collaborate, identify
                vulnerabilities, and improve the security of Web3 and Blockchain
                projects. <br /> Harness the Collective Expertise of the World's
                Leading Ethical Hackers, offering Continuous Assessment to
                Uncover Vulnerabilities Ahead of the Curve.
              </p>
            </div>
            <Button size="big">join now</Button>
          </div>
          <div
            className={clsx(
              'section-title-block',
              styles.heroRightBlock,
              styles.heroBlock
            )}
          >
            <span className="section-label">// Bug Bounty Platform</span>
            <h4>Cybirb’s Bug Bounty Platform offers.</h4>
            <div className={styles.heroStatistics}>
              <div className={styles.heroStatistic}>
                <span className={styles.heroStatisticTitle}>123 B+</span>
                <span className={styles.heroStatisticText}>
                  Projecting userfund
                </span>
              </div>
              <div className={styles.heroStatistic}>
                <span className={styles.heroStatisticTitle}>13 +</span>
                <span className={styles.heroStatisticText}>
                  hackers on the team
                </span>
              </div>
            </div>
            <Button size="big">join now</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
