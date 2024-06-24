import clsx from 'clsx'
import styles from './ArticleContent.module.scss'
import { Button } from '../../../../shared/Button/Button'
import { Ticker } from '../../../../shared/Ticker/Ticker'

export const ArticleContent = () => {
  return (
    <section className={clsx('section', styles.articleContent)}>
      <div className="container space-top space-bottom">
        <div className={styles.articleContentBlock}>
          <div className={styles.articleContentTopicTitle}>
            <div className="card-number">[ Introduction ]</div>
          </div>
          <p>
            As the world embraces decentralized technologies and the promise of
            Web3, security concerns remain a significant barrier to widespread
            adoption. With a growing number of high-profile hacks and exploits
            in the blockchain ecosystem, ensuring the safety of users and their
            digital assets is paramount. This article discusses the importance
            of proactive security, specifically anomaly detection, and how it
            can be the missing piece for driving Web3 adoption.
          </p>

          <div className={styles.articleContentTopicTitle}>
            <div className="card-number">
              [ The Importance of Anomaly Detection for Web3 Security ]
            </div>
          </div>
          <p>
            Anomaly detection systems are critical in identifying and addressing
            adversarial behaviors within blockchain networks. These security
            systems continuously monitor the network through various detection
            models, such as generative architectures, classification-based
            models, clustering-based models, nearest neighbor models,
            statistical and analytical models, and reinforcement learning-based
            models. Although quite complicated, these are various systems that
            classify and compare data using machine learning. By monitoring the
            blockchain in real-time, block-for-block, through these detection
            models, Cyvers efficiently detects anomalies within an actionable
            timeframe and can therefore prevent hacks from occurring. Such
            anomaly detection models Cyvers has built help safeguard and protect
            the integrity and security of Web3. ‍
          </p>

          <div className={styles.articleContentTopicTitle}>
            <div className="card-number">
              [ Pioneering Solutions for Real-time Smart Contract Monitoring ]
            </div>
          </div>
          <p>
            constant innovative solution addressing the security challenges in
            Web3 is a must. Recent years have seen tremendous “innovation” from
            hackers, and security has lagged behind. Cyvers can detect and
            prevent blockchain hacks using topological AI and geometric machine
            learning, ensuring smart contracts' integrity and protecting user
            assets. At the same time, these AI detection and anomaly models are
            constantly improved with new data, examples, and training. In one
            sense, this is how we fight against the constant innovation from
            hackers. Cyvers' advanced anomaly detection capabilities help
            address the unique challenges faced in blockchain networks,
            something which has caused billions in losses in the last years.
          </p>
        </div>
        <div className={styles.articleContentViewAll}>
          <Button size="big">View all</Button>
        </div>
        <div className={styles.articleContentTicker}>
          <Ticker />
        </div>
      </div>
    </section>
  )
}
