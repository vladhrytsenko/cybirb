import clsx from 'clsx'
import styles from './Features.module.scss'
import { cybShieldFeatures } from '../../../../data'
import { FeatureCard } from '../../../../entities/FeatureCard/FeatureCard'
import { ApproachCards } from '../../../../features/ApproachCards/ApproachCards'
import React from 'react'

export const Features = () => {
  return (
    <section className={clsx('section', styles.features)}>
      <div className='container space-bottom'>
        <div className='section-head'>
          <div className='line'></div>
          <span>[ 02 ]</span>
          <div className='section-head-icon'>
            <img src='/images/icons/blog-head-icon.svg' alt='' />
          </div>
        </div>
        <div className='section-text-group'>
          <div className='section-title-block'>
            <span className='section-label'>// Blockchain Audit </span>
            <h3>
              Automate Your
              <br />
              Smart Contract
              <br />
              Security
            </h3>
          </div>
          <div className='section-text-block'>
            <p>
              <div className='triangle'></div>
              find most common security issues with AI in fraction of seconds.
              <br />
              <span className='text-white mt-[10px]'>
                // CONNECT - ANALYZE - CREATE
              </span>
            </p>
          </div>
        </div>
        <div className={styles.titleWrapper}>
          <div className={styles.horizontalLine} />
          <div className={styles.titleContainer}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='274'
              height='46'
              viewBox='0 0 274 46'
              fill='none'
            >
              <path
                d='M20.9275 45.5C19.9179 45.5 18.9574 45.064 18.2928 44.3039L1.67871 25.3039C0.525074 23.9846 0.525076 22.0154 1.67872 20.6961L18.2928 1.69609C18.9574 0.936024 19.9179 0.5 20.9275 0.5H253.072C254.082 0.5 255.043 0.936024 255.707 1.6961L272.321 20.6961C273.475 22.0154 273.475 23.9846 272.321 25.3039L255.707 44.3039C255.043 45.064 254.082 45.5 253.072 45.5H20.9275Z'
                fill='#0D0C0F'
                stroke='#272629'
              />
            </svg>
            <span className={styles.title}>Features</span>
          </div>
          <div className={styles.horizontalLine} />
        </div>
        <div className={styles.cards}>
          {cybShieldFeatures.map((feature) => (
            <FeatureCard
              title={feature.title}
              text={feature.text}
              icon={feature.icon}
            />
          ))}
        </div>
        <ApproachCards />
        <div className='flex flex-col mt-[10vh]'>
          <h3 className='text-center'>
            What Cybirb smart contract Audit Report includes?
          </h3>
          <div className='section-text-group gap-[3.855vw]'>
            <div className='section-text-block flex-1'>
              <p>
                \\ Outlining the findings, vulnerabilities, and recommendations
                for improving the security of the smart contract. This includes
                suggestions for code modifications, enhancements to access
                controls, and mitigations for identified risks.
              </p>
            </div>
            <div className='section-text-block flex-1'>
              <p>
                \\ Classification of vulnerabilities depending on their severity
              </p>
            </div>
            <div className='section-text-block flex-1'>
              <p>\\ Step-by-step recommendations on how to fix all issues.</p>
            </div>
            <div className='section-text-block flex-1'>
              <p>
                \\ Smart contract scoring according to 4 parameters:
                documentation quality, code quality, architecture quality, and
                security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
