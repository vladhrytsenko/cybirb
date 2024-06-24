import clsx from 'clsx'
import styles from './ProjectAudit.module.scss'
import { Button } from '../../../../shared/Button/Button'
import { Card } from '../../../../shared/Card/Card'

export const ProjectAudit = () => {
  return (
    <section className={clsx('section', styles.projectAudit)}>
      <div className="container space-top space-bottom">
        <div className="section-head">
          <div className="line"></div>
          <span>[ 01 ]</span>
          <div className="section-head-icon">
            <img src="/images/icons/blog-head-icon.svg" alt="" />
          </div>
        </div>
        <div className={styles.projectAuditWrapper}>
          <div className={styles.block}>
            <div className="section-text-group flex flex-col gap-[4vh]">
              <div className="section-title-block">
                <span className="section-label">// Cybirb’s Bug Bounty</span>
                <h4>Secure Smart Contracts with Birb Brigade</h4>
              </div>
              <div
                className={clsx(
                  'section-text-block',
                  styles.projectAuditTextBlock
                )}
              >
                <p>
                  <div className="triangle"></div>
                  An elite competition figuring out high severity of the bugs in
                  your project
                </p>
                <div className="flex">
                  <Button size="big" type="link" href="/blog">
                    get project audited
                  </Button>
                  <Button size="big" bordered={false} type="link" href="/blog">
                    See past Reports
                  </Button>
                </div>
              </div>
            </div>
            <div className={styles.projectAuditCards}>
              <Card
                title={'123 B+'}
                text={'Vulnerability finding'}
                bgType={1}
              />
              <Card
                title={'3000+'}
                text={'High Severity findings'}
                bgType={7}
              />
              <Card title={'345 B+'} text={'Registered Birbs'} bgType={5} />
              <Card title={'1238+'} text={'Number of Audits'} bgType={4} />
            </div>
          </div>
          <div className={styles.block}>
            <div className="section-text-group flex flex-col gap-[4vh]">
              <div className="section-title-block">
                <span className="section-label">// Cybirb’s Bug Bounty</span>
                <h4>Hunt the bug to reap the rewards</h4>
              </div>
              <div
                className={clsx(
                  'section-text-block',
                  styles.projectAuditTextBlock
                )}
              >
                <p>
                  <div className="triangle"></div>
                  Get Paid for the rarity of your bug findings and the
                  opportunities where it takes you
                </p>
                <div className="flex">
                  <Button size="big" type="link" href="/blog">
                    Join Birb Brigade
                  </Button>
                  <Button size="big" bordered={false} type="link" href="/blog">
                    Birb Board
                  </Button>
                </div>
              </div>
            </div>
            <div className={styles.projectAuditCards}>
              <Card
                title={'123 B+'}
                text={'Vulnerability finding'}
                bgType={1}
              />
              <Card
                title={'3000+'}
                text={'High Severity findings'}
                bgType={7}
              />
              <Card title={'345 B+'} text={'Registered Birbs'} bgType={5} />
              <Card title={'1238+'} text={'Number of Audits'} bgType={4} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
