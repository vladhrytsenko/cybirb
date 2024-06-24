import clsx from 'clsx'
import styles from './Hero.module.scss'
import { Button } from '../../../../shared/Button/Button'
import { Card } from '../../../../shared/Card/Card'

export const Hero = () => {
  return (
    <section className={clsx('section', styles.section)}>
      <div className="container space-top space-bottom">
        <div className="section-head">
          <div className="line"></div>
          <span>[ 01 ]</span>
          <div className="section-head-icon">
            <img src="/images/icons/blog-head-icon.svg" alt="" />
          </div>
        </div>
        <div className="section-text-group items-center">
          <div className="section-title-block">
            <span className="section-label">// CybGuard</span>
            <h3>
              Secure Your <br /> DApp Today with <br />
              CybGuard!
            </h3>
          </div>
          <div className="section-text-block max-w-[25.801vw]">
            <p>
              <div className="triangle"></div>
              CybGuard offers robust security measures to protect decentralized
              applications (DApps) from potential exploits, contract
              vulnerabilities, and malicious attacks, ensuring the safety and
              reliability of DApps in the Web3 ecosystem.
            </p>
            <Button size="big">Secure DApp</Button>
          </div>
        </div>
        <div className={styles.heroCards}>
          <Card
            title="123 B+"
            text="Smart Contract Code 
Lines Audited"
            bgType={5}
          />
          <Card
            title="124 M"
            text="High Risk Vulnerabilities 
            Detected"
            bgType={6}
          />
          <Card
            title="1344"
            text="Smart Contract Audits 
            conducted"
            bgType={7}
          />
        </div>
      </div>
    </section>
  )
}
