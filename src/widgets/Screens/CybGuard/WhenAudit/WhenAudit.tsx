import clsx from 'clsx'
import styles from './WhenAudit.module.scss'
import { Ticker } from '../../../../shared/Ticker/Ticker'

export const WhenAudit = () => {
  return (
    <>
      <section className={clsx(styles.when, 'section')}>
        <div className={styles.whenHead}>
          <svg
            className={styles.whenBg}
            preserveAspectRatio='none'
            width='1686'
            height='555'
            viewBox='0 0 1686 555'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clip-path='url(#clip0_2007_14049)'>
              <rect width='1686' height='555' fill='#151515' />
              <line x1='856.5' y1='43' x2='856.5' y2='687' stroke='#272629' />
              <rect
                x='1802.22'
                y='400'
                width='225.133'
                height='422.001'
                transform='rotate(47.7201 1802.22 400)'
                fill='#0D0C0F'
              />
            </g>
            <defs>
              <clipPath id='clip0_2007_14049'>
                <rect width='1686' height='555' fill='white' />
              </clipPath>
            </defs>
          </svg>

          <div className='container'>
            <div className='section-head'>
              <div className='line'></div>
              <span>[ 04 ]</span>
              <div className='section-head-icon'>
                <img src='/images/icons/blog-head-icon.svg' alt='' />
              </div>
            </div>
            <div className='section-text-group'>
              <div className='section-title-block'>
                <span className='section-label'>// information security</span>
                <h3>
                  When to go <br /> for DApp Audit?
                </h3>
              </div>
            </div>
            <div className={clsx('section-text-block')}>
              <p>
                <div className='triangle'></div>
                By conducting regular dApp audits, you can maintain a secure
                system that protects your assets and reputation. Here are
                several instances when it's advisable to conduct a dApp audit.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.whenWrapper}>
          <div className='container'>
            <div className={styles.image}>
              <img src='/images/CybGuard/WhenAudit/img.png' alt='' />
              <span className={styles.label}>// dapp audit</span>
            </div>
            <div className={styles.block}>
              <div className='section-text-block'>
                <p>
                  \\ One of these instances is before a product release. This is
                  important as it ensures that your dApp is free from
                  vulnerabilities and is secure for use.
                </p>
              </div>
              <div className='section-text-block'>
                <p>
                  \\ conducting an audit before protocol upgrades is crucial as
                  it helps you identify potential security issues and avoid any
                  disruptions that could occur during the upgrade process.
                </p>
              </div>
              <div className='section-text-block'>
                <p>
                  \\ Another situation that calls for a dApp audit is when you
                  notice any malicious activity. If you suspect any suspicious
                  activity within your system, conducting an audit can help
                  identify any potential vulnerabilities that have been
                  exploited.
                </p>
              </div>
              <div className='section-text-block'>
                <p>
                  \\ additionally, conducting an audit after implementing
                  significant changes to the core functionality is important as
                  it helps you to ensure that the new changes have not
                  introduced any security vulnerabilities to the system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Ticker />
    </>
  )
}
