import clsx from 'clsx'
import styles from './PlatformOffers.module.scss'
import { Button } from '../../../../shared/Button/Button'
import { platformOffers } from '../../../../data'
import { FeatureCard } from '../../../../entities/FeatureCard/FeatureCard'
import { Banner } from '../../../../entities/Banner/Banner'

export const PlatformOffers = () => {
  return (
    <>
      <section className={clsx('section', styles.platformOffers)}>
        <div className="container space-bottom">
          <div className="features-grid">
            {platformOffers.map((offer) => (
              <FeatureCard
                title={offer.title}
                text={offer.text}
                icon={offer.icon}
              />
            ))}
          </div>
        </div>
      </section>
      <Banner
        buttonTitle="Join now"
        href="/"
        title={'Ready to Join the Bug Bounty?'}
      />
    </>
  )
}
