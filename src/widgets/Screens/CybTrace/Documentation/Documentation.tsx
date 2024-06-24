import clsx from 'clsx'
import styles from './Documentation.module.scss'
import { Ticker } from '../../../../shared/Ticker/Ticker'

export const Documentation = () => {
  return (
    <>
      <section className={clsx('section', styles.documentation)}>
        <div className="container space-bottom">
          <div className="section-head">
            <div className="line"></div>
            <span>[ 02 ]</span>
            <div className="section-head-icon">
              <img src="/images/icons/blog-head-icon.svg" alt="" />
            </div>
          </div>
          <div className={styles.documentationWrapper}>
            <div className={styles.image}>
              <img src="/images/CybTrace/Documentation/image.png" alt="" />
            </div>
            <div className={styles.block}>
              <div className={styles.group}>
                <h4>
                  CybTrace's <br /> Documentation
                </h4>
                <div className="section-text-block">
                  <p>
                    <div className="triangle"></div> Welcome to the CybTrace's
                    Documentation. You'll find comprehensive guides and
                    documentation to help you start working with CybTrace as
                    quickly as possible, as well as support if you get stuck.
                  </p>
                </div>
              </div>
              <div className={styles.links}>
                <a href="#" className={styles.link}>
                  // App.cybtrace.com
                  <svg
                    preserveAspectRatio="none"
                    width="375"
                    height="70"
                    viewBox="0 0 375 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask id="path-1-inside-1_2007_7519" fill="white">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 70H375V0H15.9766L0 16.9751V70Z"
                      />
                    </mask>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 70H375V0H15.9766L0 16.9751V70Z"
                      fill="#0D0C0F"
                    />
                    <path
                      d="M375 70V71H376V70H375ZM0 70H-1V71H0V70ZM375 0H376V-1H375V0ZM15.9766 0V-1H15.5445L15.2484 -0.685364L15.9766 0ZM0 16.9751L-0.72821 16.2897L-1 16.5785V16.9751H0ZM375 69H0V71H375V69ZM374 0V70H376V0H374ZM15.9766 1H375V-1H15.9766V1ZM15.2484 -0.685364L-0.72821 16.2897L0.72821 17.6605L16.7048 0.685364L15.2484 -0.685364ZM1 70V16.9751H-1V70H1Z"
                      fill="#272629"
                      mask="url(#path-1-inside-1_2007_7519)"
                    />
                  </svg>
                </a>
                <a href="#" className={styles.link}>
                  // CybTrace.com/Integrations
                  <svg
                    preserveAspectRatio="none"
                    width="373"
                    height="70"
                    viewBox="0 0 373 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask id="path-1-inside-1_2007_7510" fill="white">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M373 70H0V0H357.023L373 16.9751V70Z"
                      />
                    </mask>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M373 70H0V0H357.023L373 16.9751V70Z"
                      fill="#0D0C0F"
                    />
                    <path
                      d="M0 70V71H-1V70H0ZM373 70H374V71H373V70ZM0 0H-1V-1H0V0ZM357.023 0V-1H357.456L357.752 -0.685365L357.023 0ZM373 16.9751L373.728 16.2897L374 16.5785V16.9751H373ZM0 69H373V71H0V69ZM1 0V70H-1V0H1ZM357.023 1H0V-1H357.023V1ZM357.752 -0.685365L373.728 16.2897L372.272 17.6605L356.295 0.685365L357.752 -0.685365ZM372 70V16.9751H374V70H372Z"
                      fill="#272629"
                      mask="url(#path-1-inside-1_2007_7510)"
                    />
                  </svg>
                </a>
                <a href="#" className={styles.link}>
                  // docs.cybtrace.com
                  <svg
                    preserveAspectRatio="none"
                    width="375"
                    height="70"
                    viewBox="0 0 375 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask id="path-1-inside-1_2007_7514" fill="white">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 -3.27835e-05L375 0L375 70L16.0622 70L-4.63559e-06 53.0249L0 -3.27835e-05Z"
                      />
                    </mask>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 -3.27835e-05L375 0L375 70L16.0622 70L-4.63559e-06 53.0249L0 -3.27835e-05Z"
                      fill="#0D0C0F"
                    />
                    <path
                      d="M375 0L375 -1L376 -1L376 8.74228e-08L375 0ZM0 -3.27835e-05L-1 -3.2871e-05L-1 -1.00003L8.74192e-08 -1.00003L0 -3.27835e-05ZM375 70L376 70L376 71L375 71L375 70ZM16.0622 70L16.0622 71L15.6317 71L15.3358 70.6873L16.0622 70ZM-4.63559e-06 53.0249L-0.726373 53.7122L-1 53.423L-1 53.0249L-4.63559e-06 53.0249ZM375 1L-8.74264e-08 0.999967L8.74192e-08 -1.00003L375 -1L375 1ZM374 70L374 -8.74228e-08L376 8.74228e-08L376 70L374 70ZM16.0622 69L375 69L375 71L16.0622 71L16.0622 69ZM15.3358 70.6873L-0.726373 53.7122L0.726363 52.3376L16.7886 69.3127L15.3358 70.6873ZM1 -3.26961e-05L0.999995 53.0249L-1 53.0249L-1 -3.2871e-05L1 -3.26961e-05Z"
                      fill="#272629"
                      mask="url(#path-1-inside-1_2007_7514)"
                    />
                  </svg>
                </a>
                <a href="#" className={styles.link}>
                  <svg
                    preserveAspectRatio="none"
                    width="373"
                    height="70"
                    viewBox="0 0 373 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask id="path-1-inside-1_2007_7522" fill="white">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M373 3.26087e-05L0 0L-6.1196e-06 70L357.023 70L373 53.0249L373 3.26087e-05Z"
                      />
                    </mask>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M373 3.26087e-05L0 0L-6.1196e-06 70L357.023 70L373 53.0249L373 3.26087e-05Z"
                      fill="#0D0C0F"
                    />
                    <path
                      d="M0 0L8.74228e-08 -1L-1 -1L-1 -8.74228e-08L0 0ZM373 3.26087e-05L374 3.26961e-05L374 -0.999967L373 -0.999967L373 3.26087e-05ZM-6.1196e-06 70L-1.00001 70L-1.00001 71L-6.20702e-06 71L-6.1196e-06 70ZM357.023 70L357.023 71L357.456 71L357.752 70.6854L357.023 70ZM373 53.0249L373.728 53.7103L374 53.4215L374 53.0249L373 53.0249ZM-8.74228e-08 1L373 1.00003L373 -0.999967L8.74228e-08 -1L-8.74228e-08 1ZM0.999994 70L1 8.74228e-08L-1 -8.74228e-08L-1.00001 70L0.999994 70ZM357.023 69L-6.03217e-06 69L-6.20702e-06 71L357.023 71L357.023 69ZM357.752 70.6854L373.728 53.7103L372.272 52.3396L356.295 69.3146L357.752 70.6854ZM372 3.25213e-05L372 53.0249L374 53.0249L374 3.26961e-05L372 3.25213e-05Z"
                      fill="#272629"
                      mask="url(#path-1-inside-1_2007_7522)"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Ticker />
    </>
  )
}
