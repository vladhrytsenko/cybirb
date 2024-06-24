import clsx from 'clsx'
import styles from './Partners.module.scss'
import { partners } from '../../../../data'

export const Partners = () => {
  return (
    <section className={clsx('section', styles.partners)}>
      <div className="container space-top space-bottom">
        <span className="section-label-figure">
          trusted by
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
        <div className={styles.partnersLogos}>
          {partners.map((logo) => (
            <div className={styles.partnersLogo}>
              <img src={logo} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
