import clsx from 'clsx'
import styles from './Hero.module.scss'
import { HeroBg } from '../../Cybnest/Hero/components/HeroBg'
import { Button } from '../../../../shared/Button/Button'

export const Hero = () => {
  return (
    <section className={clsx('section', styles.hero)}>
      <div className={styles.heroBg}>
        <HeroBg />
      </div>
      <div className='container space-top space-bottom'>
        <div className='section-text-group'>
          <div className='section-title-block'>
            <span className='section-label'>// CybGuard</span>
            <h3>
              Secure Your <br />
              DApp Today with <br />
              CybGuard!
            </h3>
          </div>
        </div>
        <div className='section-text-block'>
          <p>
            <div className='triangle'></div>
            CybWatch SECURES the underlying blockchain network itself, including
            the consensus mechanisms, nodes, and network infrastructure ensuring
            the overall integrity, resilience, and security of the blockchain
            ecosystem.{' '}
            <span className='text-white inline'>
              MAKING IT MORE SECURE AND REAL WORLD CYBERATTACKSPROOF.
            </span>
          </p>
          <Button size='big'>Request CyBirb Audit</Button>
        </div>
      </div>
    </section>
  )
}
