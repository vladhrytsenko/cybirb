import clsx from 'clsx'
import styles from './WhyAudit.module.scss'

export const WhyAudit = () => {
  return (
    <section className={clsx('section', styles.why)}>
      <div className="container">
        <div className="section-head">
          <div className="line"></div>
          <span>[ 02 ]</span>
          <div className="section-head-icon">
            <img src="/images/icons/blog-head-icon.svg" alt="" />
          </div>
        </div>
        <div className="section-text-group">
          <div className="section-title-block">
            <span className="section-label">// Blockchain Audit </span>
            <h3>
              Why Audit <br /> Blockchain?
            </h3>
          </div>
          <div className="section-text-block">
            <p>
              <div className="triangle"></div>A Blockchain Protocol Audit
              involves in-depth research into the inner workings of a blockchain
              protocol, including block and transaction creation, validation,
              and communication within a decentralized digital ledger. <br />{' '}
              Our experts analyze core subsystems and internal architecture with
              advanced AI and cutting-edge techniques to uncover inherent
              vulnerabilities and provide effective solutions for enhanced
              security.
            </p>
          </div>
        </div>
        <svg className="clip">
          <clipPath id="cybwatch-audit-image" clipPathUnits="objectBoundingBox">
            <path d="M0,0.064 L0.027,0 H0.973 L1,0.064 V0.936 L0.973,1 H0.027 L0,0.936 V0.064"></path>
          </clipPath>
        </svg>
        <div className={styles.whyImage}>
          <img src="/images/CybWatch/WhyAudit/image.png" alt="" />
        </div>
        <div className={styles.whyEntities}>
          <h3>
            Which individuals or entities require blockchain protocol audits
          </h3>
          <div className={styles.row}>
            <div className="section-text-block">
              <p>
                \\ conducting an audit before protocol upgrades is crucial as it
                helps you identify potential security issues and avoid any
                disruptions that could occur during the upgrade process.
              </p>
              <p>\\ identification of Vulnerabilities and Remediation:</p>
            </div>
            <div className="section-text-block">
              <p>
                \\ DeFi Bridges: DeFi bridges are mechanisms that facilitate the
                transfer of assets, such as cryptocurrencies or tokens, between
                different blockchain networks.
              </p>
              <p>\\ Expertise and Adaptability: </p>
            </div>
            <div className="section-text-block">
              <p>
                \\ Investors and Token Holders: Investors and token holders of
                blockchain projects have a vested interest in the security and
                reliability of the underlying blockchain protocol
              </p>
              <p>\\ Enhance Protocol trust: </p>
            </div>
            <div className="section-text-block">
              <p>
                \\ Modular Blockchain : The concept of a modular blockchain
                allows for flexibility, scalability, and customization in the
                design and implementation of the blockchain system
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
