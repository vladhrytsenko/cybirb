import clsx from 'clsx'
import styles from './Footer.module.scss'
import { Logo } from '../../shared/Logo/Logo'
import { Button } from '../../shared/Button/Button'
import { Input } from '../../shared/Input/Input'

const Footer = () => {
  return (
    <footer className={clsx(styles.footer, 'section')}>
      <div className={styles.footerContent}>
        <div className={styles.footerMain}>
          <div className={styles.footerLogo}>
            <Logo logoType='secondary' />
          </div>
          <div className={styles.footerLogoWrapper}>
            <div className={styles.logo}>
              <Logo logoType='common' />
            </div>
          </div>
          <div className={styles.footerBody}>
            <div className={styles.footerColumn}>
              <div className={styles.footerList}>
                <span className={styles.footerListTitle}>home page</span>
                <span className={styles.footerListTitle}>
                  24 x 7 Incident Report
                </span>
              </div>
            </div>
            <div className={styles.footerColumn}>
              <div className={styles.footerList}>
                <span className={styles.footerListTitle}>
                  Products and Services
                </span>
                <ul>
                  <li className={styles.footerListItem}>
                    <a href=''>
                      Blockchain Insights and Security Suit{' '}
                      <svg
                        preserveAspectRatio='none'
                        width='28'
                        height='14'
                        viewBox='0 0 28 14'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g clip-path='url(#clip0_2127_6272)'>
                          <path
                            d='M5.83301 2.91699V3.25727V10.7434V11.0837H6.17329H7.5344H7.87467V10.4031H7.5344H6.51356V3.59755H7.5344H7.87467V2.91699H7.5344H6.17329H5.83301Z'
                            fill='#A8A8A8'
                          />
                        </g>
                        <g clip-path='url(#clip1_2127_6272)'>
                          <path
                            d='M22.167 11.083V10.7427V3.25662V2.91634H21.8267H20.4656H20.1253V3.5969H20.4656H21.4864V10.4025H20.4656H20.1253V11.083H20.4656H21.8267H22.167Z'
                            fill='#A8A8A8'
                          />
                        </g>
                        <path
                          d='M16.3333 8.75L18.0833 7L16.3333 5.25L15.9209 5.66242L16.9668 6.70833L12.25 6.70833V7.29167L16.9668 7.29167L15.9209 8.33758L16.3333 8.75Z'
                          fill='#A8A8A8'
                        />
                        <defs>
                          <clipPath id='clip0_2127_6272'>
                            <rect width='14' height='14' fill='white' />
                          </clipPath>
                          <clipPath id='clip1_2127_6272'>
                            <rect
                              width='14'
                              height='14'
                              fill='white'
                              transform='matrix(-1 0 0 -1 28 14)'
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                  <li className={styles.footerListItem}>
                    <a href=''>
                      Optionals{' '}
                      <svg
                        preserveAspectRatio='none'
                        width='28'
                        height='14'
                        viewBox='0 0 28 14'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g clip-path='url(#clip0_2127_6272)'>
                          <path
                            d='M5.83301 2.91699V3.25727V10.7434V11.0837H6.17329H7.5344H7.87467V10.4031H7.5344H6.51356V3.59755H7.5344H7.87467V2.91699H7.5344H6.17329H5.83301Z'
                            fill='#A8A8A8'
                          />
                        </g>
                        <g clip-path='url(#clip1_2127_6272)'>
                          <path
                            d='M22.167 11.083V10.7427V3.25662V2.91634H21.8267H20.4656H20.1253V3.5969H20.4656H21.4864V10.4025H20.4656H20.1253V11.083H20.4656H21.8267H22.167Z'
                            fill='#A8A8A8'
                          />
                        </g>
                        <path
                          d='M16.3333 8.75L18.0833 7L16.3333 5.25L15.9209 5.66242L16.9668 6.70833L12.25 6.70833V7.29167L16.9668 7.29167L15.9209 8.33758L16.3333 8.75Z'
                          fill='#A8A8A8'
                        />
                        <defs>
                          <clipPath id='clip0_2127_6272'>
                            <rect width='14' height='14' fill='white' />
                          </clipPath>
                          <clipPath id='clip1_2127_6272'>
                            <rect
                              width='14'
                              height='14'
                              fill='white'
                              transform='matrix(-1 0 0 -1 28 14)'
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                  <li className={styles.footerListItem}>
                    <a href=''>
                      CybNest: Cybirb's Bug Bounty{' '}
                      <svg
                        preserveAspectRatio='none'
                        width='28'
                        height='14'
                        viewBox='0 0 28 14'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g clip-path='url(#clip0_2127_6272)'>
                          <path
                            d='M5.83301 2.91699V3.25727V10.7434V11.0837H6.17329H7.5344H7.87467V10.4031H7.5344H6.51356V3.59755H7.5344H7.87467V2.91699H7.5344H6.17329H5.83301Z'
                            fill='#A8A8A8'
                          />
                        </g>
                        <g clip-path='url(#clip1_2127_6272)'>
                          <path
                            d='M22.167 11.083V10.7427V3.25662V2.91634H21.8267H20.4656H20.1253V3.5969H20.4656H21.4864V10.4025H20.4656H20.1253V11.083H20.4656H21.8267H22.167Z'
                            fill='#A8A8A8'
                          />
                        </g>
                        <path
                          d='M16.3333 8.75L18.0833 7L16.3333 5.25L15.9209 5.66242L16.9668 6.70833L12.25 6.70833V7.29167L16.9668 7.29167L15.9209 8.33758L16.3333 8.75Z'
                          fill='#A8A8A8'
                        />
                        <defs>
                          <clipPath id='clip0_2127_6272'>
                            <rect width='14' height='14' fill='white' />
                          </clipPath>
                          <clipPath id='clip1_2127_6272'>
                            <rect
                              width='14'
                              height='14'
                              fill='white'
                              transform='matrix(-1 0 0 -1 28 14)'
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                  <li className={styles.footerListItem}>
                    <a href=''>
                      Web3 Audit Suit{' '}
                      <svg
                        preserveAspectRatio='none'
                        width='28'
                        height='14'
                        viewBox='0 0 28 14'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g clip-path='url(#clip0_2127_6272)'>
                          <path
                            d='M5.83301 2.91699V3.25727V10.7434V11.0837H6.17329H7.5344H7.87467V10.4031H7.5344H6.51356V3.59755H7.5344H7.87467V2.91699H7.5344H6.17329H5.83301Z'
                            fill='#A8A8A8'
                          />
                        </g>
                        <g clip-path='url(#clip1_2127_6272)'>
                          <path
                            d='M22.167 11.083V10.7427V3.25662V2.91634H21.8267H20.4656H20.1253V3.5969H20.4656H21.4864V10.4025H20.4656H20.1253V11.083H20.4656H21.8267H22.167Z'
                            fill='#A8A8A8'
                          />
                        </g>
                        <path
                          d='M16.3333 8.75L18.0833 7L16.3333 5.25L15.9209 5.66242L16.9668 6.70833L12.25 6.70833V7.29167L16.9668 7.29167L15.9209 8.33758L16.3333 8.75Z'
                          fill='#A8A8A8'
                        />
                        <defs>
                          <clipPath id='clip0_2127_6272'>
                            <rect width='14' height='14' fill='white' />
                          </clipPath>
                          <clipPath id='clip1_2127_6272'>
                            <rect
                              width='14'
                              height='14'
                              fill='white'
                              transform='matrix(-1 0 0 -1 28 14)'
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.footerColumn}>
              <div className={styles.footerList}>
                <span className={styles.footerListTitle}>company</span>
                <ul>
                  <li className={styles.footerListItem}>
                    <a href=''>company</a>
                  </li>
                  <li className={styles.footerListItem}>
                    <a href=''>about</a>
                  </li>
                  <li className={styles.footerListItem}>
                    <a href=''>testimonials</a>
                  </li>
                  <li className={styles.footerListItem}>
                    <a href=''>join us!</a>
                  </li>
                  <li className={styles.footerListItem}>
                    <a href=''>Legal/Disclaimer</a>
                  </li>
                  <li className={styles.footerListItem}>
                    <a href=''>Media Kit</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.footerColumn}>
              <div className={styles.footerList}>
                <span className={styles.footerListTitle}>find us here</span>
                <ul>
                  <li className={styles.footerListItem}>
                    <a href=''>telegram</a>
                  </li>
                  <li className={styles.footerListItem}>
                    <a href=''>discord</a>
                  </li>
                  <li className={styles.footerListItem}>
                    <a href=''>Linkedin</a>
                  </li>
                  <li className={styles.footerListItem}>
                    <a href=''>Instagram</a>
                  </li>
                  <li className={styles.footerListItem}>
                    <a href=''>Twitter</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.footerColumn}>
              <div className={styles.footerList}>
                <span className={styles.footerListTitle}>
                  let's stay in touch
                </span>
                <Input label={'Phone'} type={'number'} id='footer-form-phone' />
                <Button>Submit</Button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomRow}>
            <span>cyber security</span>
            <div className={styles.footerBottomRowLine}></div>
          </div>
          <span>Privacy Policy</span>
          <div className={styles.footerBottomRow}>
            <div className={styles.footerBottomRowLine}></div>
            <span>cybirb {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
