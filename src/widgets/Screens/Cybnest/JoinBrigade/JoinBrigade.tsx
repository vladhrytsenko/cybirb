import clsx from 'clsx'
import styles from './JoinBrigade.module.scss'
import { Button } from '../../../../shared/Button/Button'
import { Card } from '../../../../shared/Card/Card'

export const JoinBrigade = () => {
  return (
    <section className={clsx('section', styles.joinBrigade)}>
      <div className="container space-top space-bottom">
        <div className="section-head">
          <div className="line"></div>
          <span>[ 02 ]</span>
          <div className="section-head-icon">
            <img src="/images/icons/blog-head-icon.svg" alt="" />
          </div>
        </div>
        <div className="section-text-group">
          <div className="section-title-block">
            <span className="section-label">// Cybirb’s Bug Bounty</span>
            <h3>Hunt the bug to reap the rewards</h3>
          </div>
          <div
            className={clsx('section-text-block', styles.joinBrigadeTextBlock)}
          >
            <p>
              <div className="triangle"></div>
              Get Paid for the rarity of your bug findings and the opportunities
              where it takes you
            </p>
            <div className="flex">
              <Button size="big" type="link" href="/blog">
                Join birb brigade
              </Button>
              <Button size="big" bordered={false} type="link" href="/blog">
                birb board
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.joinBrigadeCards}>
          <Card title={'123 B+'} text={'Vulnerability finding'} bgType={1} />
          <Card title={'3000+'} text={'High Severity findings'} bgType={2} />
          <Card title={'345 B+'} text={'Registered Birbs'} bgType={3} />
          <Card title={'1238+'} text={'Number of Audits'} bgType={4} />
        </div>
      </div>
    </section>
  )
}
