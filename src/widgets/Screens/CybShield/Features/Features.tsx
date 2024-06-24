import clsx from 'clsx'
import styles from './Features.module.scss'
import { cybShieldFeatures } from '../../../../data'
import { FeatureCard } from '../../../../entities/FeatureCard/FeatureCard'
import { ApproachCards } from '../../../../features/ApproachCards/ApproachCards'

export const Features = () => {
  return (
    <section className={clsx('section', styles.features)}>
      <div className="container space-bottom">
        <span className="section-label-figure">
          features
          <svg
            className="figure"
            preserveAspectRatio="none"
            width="1598"
            height="46"
            viewBox="0 0 1598 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 23L1597 23.0001"
              stroke="#272629"
              stroke-linecap="round"
            />
            <path
              d="M684.928 45.5C683.918 45.5 682.957 45.064 682.293 44.3039L665.679 25.3039C664.525 23.9846 664.525 22.0154 665.679 20.6961L682.293 1.69609C682.957 0.936024 683.918 0.5 684.928 0.5H917.072C918.082 0.5 919.043 0.936024 919.707 1.6961L936.321 20.6961C937.475 22.0154 937.475 23.9846 936.321 25.3039L919.707 44.3039C919.043 45.064 918.082 45.5 917.072 45.5H684.928Z"
              fill="#0D0C0F"
              stroke="#272629"
            />
          </svg>
        </span>
        <div className="features-grid">
          {cybShieldFeatures.map((feature) => (
            <FeatureCard
              title={feature.title}
              text={feature.text}
              icon={feature.icon}
            />
          ))}
        </div>
        <ApproachCards />
        <div className="flex flex-col mt-[10vh]">
          <h3 className="text-center">
            What Cybirb smart contract Audit Report includes?
          </h3>
          <div className="section-text-group gap-[3.855vw]">
            <div className="section-text-block flex-1">
              <p>
                \\ Outlining the findings, vulnerabilities, and recommendations
                for improving the security of the smart contract. This includes
                suggestions for code modifications, enhancements to access
                controls, and mitigations for identified risks.
              </p>
            </div>
            <div className="section-text-block flex-1">
              <p>
                \\ Classification of vulnerabilities depending on their severity
              </p>
            </div>
            <div className="section-text-block flex-1">
              <p>\\ Step-by-step recommendations on how to fix all issues.</p>
            </div>
            <div className="section-text-block flex-1">
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
