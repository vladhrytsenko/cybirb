import clsx from 'clsx'
import styles from './Methodology.module.scss'
import { Button } from '../../../../shared/Button/Button'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { FreeMode } from 'swiper'
import { methodologies } from '../../../../data'
import { useState } from 'react'
import { ISwiper } from '../../../../interfaces/ISwiper'

export const Methodology = () => {
  const [swiper, setSwiper] = useState<ISwiper>()

  return (
    <section className={clsx(styles.methodology, 'section')}>
      <div className='container space-top space-bottom'>
        <div className='section-head'>
          <div className='line'></div>
          <span>[ 02 ]</span>
          <div className='section-head-icon'>
            <img src='/images/icons/blog-head-icon.svg' alt='' />
          </div>
        </div>
        <div className='section-text-group'>
          <div className='section-title-block'>
            <span className='section-label'>// DApp Security</span>
            <h3>Methodology</h3>
          </div>
          <div
            className={clsx(
              styles.methodologySliderArrows,
              styles.desktopArrows
            )}
          >
            <div
              onClick={() => swiper && swiper.slidePrev()}
              className={styles.methodologySliderArrow}
            >
              <svg
                className={styles.methodologySliderArrowBg}
                preserveAspectRatio='none'
                width='97'
                height='64'
                viewBox='0 0 97 64'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g filter='url(#filter0_d_1386_743)'>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M9 56C6.23858 56 4 53.7614 4 51V20.4171C4 18.9153 4.67496 17.4932 5.83833 16.5436L24.7264 1.12652C25.619 0.397942 26.7359 3.8147e-06 27.8881 3.8147e-06H88C90.7614 3.8147e-06 93 2.23857 93 5V35.5829C93 37.0847 92.325 38.5069 91.1617 39.4564L72.2735 54.8735C71.3809 55.6021 70.2641 56 69.1119 56H9Z'
                    fill='#0D0C0F'
                  />
                  <path
                    d='M9 55.5C6.51472 55.5 4.5 53.4853 4.5 51V20.4171C4.5 19.0655 5.10747 17.7855 6.1545 16.9309L25.0426 1.51387C25.8459 0.858147 26.8511 0.500004 27.8881 0.500004H88C90.4853 0.500004 92.5 2.51472 92.5 5V35.5829C92.5 36.9345 91.8925 38.2145 90.8455 39.0691L71.9574 54.4861C71.154 55.1419 70.1489 55.5 69.1119 55.5H9Z'
                    stroke='#858585'
                  />
                </g>
                <defs>
                  <filter
                    id='filter0_d_1386_743'
                    x='0'
                    y='0'
                    width='97'
                    height='64'
                    filterUnits='userSpaceOnUse'
                    color-interpolation-filters='sRGB'
                  >
                    <feFlood flood-opacity='0' result='BackgroundImageFix' />
                    <feColorMatrix
                      in='SourceAlpha'
                      type='matrix'
                      values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                      result='hardAlpha'
                    />
                    <feOffset dy='4' />
                    <feGaussianBlur stdDeviation='2' />
                    <feComposite in2='hardAlpha' operator='out' />
                    <feColorMatrix
                      type='matrix'
                      values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                    />
                    <feBlend
                      mode='normal'
                      in2='BackgroundImageFix'
                      result='effect1_dropShadow_1386_743'
                    />
                    <feBlend
                      mode='normal'
                      in='SourceGraphic'
                      in2='effect1_dropShadow_1386_743'
                      result='shape'
                    />
                  </filter>
                </defs>
              </svg>
              <svg
                className={styles.methodologySliderArrowIcon}
                width='16'
                height='25'
                viewBox='0 0 16 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12.3158 0L0 12.5L12.3158 25L16 21.2607L7.42105 12.5L16 3.73932L12.3158 0Z'
                  fill='#858585'
                />
              </svg>
            </div>
            <div
              onClick={() => swiper && swiper.slideNext()}
              className={styles.methodologySliderArrow}
            >
              <svg
                className={styles.methodologySliderArrowBg}
                preserveAspectRatio='none'
                width='97'
                height='64'
                viewBox='0 0 97 64'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g filter='url(#filter0_d_1386_741)'>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M88 56C90.7614 56 93 53.7614 93 51V20.4171C93 18.9153 92.325 17.4932 91.1617 16.5436L72.2736 1.12652C71.381 0.397942 70.2641 3.8147e-06 69.1119 3.8147e-06H9C6.23858 3.8147e-06 4 2.23857 4 5V35.5829C4 37.0847 4.67497 38.5069 5.83834 39.4564L24.7265 54.8735C25.6191 55.6021 26.7359 56 27.8881 56H88Z'
                    fill='#0D0C0F'
                  />
                  <path
                    d='M88 55.5C90.4853 55.5 92.5 53.4853 92.5 51V20.4171C92.5 19.0655 91.8925 17.7855 90.8455 16.9309L71.9574 1.51387C71.1541 0.858147 70.1489 0.500004 69.1119 0.500004H9C6.51472 0.500004 4.5 2.51472 4.5 5V35.5829C4.5 36.9345 5.10747 38.2145 6.15451 39.0691L25.0426 54.4861C25.846 55.1419 26.8511 55.5 27.8881 55.5H88Z'
                    stroke='#858585'
                  />
                </g>
                <defs>
                  <filter
                    id='filter0_d_1386_741'
                    x='0'
                    y='0'
                    width='97'
                    height='64'
                    filterUnits='userSpaceOnUse'
                    color-interpolation-filters='sRGB'
                  >
                    <feFlood flood-opacity='0' result='BackgroundImageFix' />
                    <feColorMatrix
                      in='SourceAlpha'
                      type='matrix'
                      values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                      result='hardAlpha'
                    />
                    <feOffset dy='4' />
                    <feGaussianBlur stdDeviation='2' />
                    <feComposite in2='hardAlpha' operator='out' />
                    <feColorMatrix
                      type='matrix'
                      values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                    />
                    <feBlend
                      mode='normal'
                      in2='BackgroundImageFix'
                      result='effect1_dropShadow_1386_741'
                    />
                    <feBlend
                      mode='normal'
                      in='SourceGraphic'
                      in2='effect1_dropShadow_1386_741'
                      result='shape'
                    />
                  </filter>
                </defs>
              </svg>
              <svg
                className={styles.methodologySliderArrowIcon}
                width='16'
                height='25'
                viewBox='0 0 16 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3.68421 0L16 12.5L3.68421 25L4.55038e-07 21.2607L8.57895 12.5L4.55038e-07 3.73932L3.68421 0Z'
                  fill='#858585'
                />
              </svg>
            </div>
          </div>
        </div>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween='25vw'
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          onSwiper={(swiper) => setSwiper(swiper)}
          modules={[FreeMode]}
          className={styles.methodologySlider}
        >
          {methodologies.map((methodology, idx) => (
            <SwiperSlide className={styles.methodologySliderSlide}>
              <div className={styles.methodologySliderSlideBg}>
                <svg
                  preserveAspectRatio='none'
                  width='1142'
                  height='603'
                  viewBox='0 0 1142 603'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1.52386 41.5261C0.549922 42.4681 0 43.7651 0 45.1201V598C0 600.761 2.23858 603 5 603H869.265C872.026 603 874.265 600.761 874.265 598V566.5C874.265 563.739 876.503 561.5 879.265 561.5H1089.23C1090.42 561.5 1091.58 561.07 1092.49 560.288L1139.26 519.996C1140.37 519.046 1141 517.663 1141 516.208V6C1141 3.23859 1138.76 1 1136 1H45.4459C44.1487 1 42.9022 1.50415 41.9697 2.40607L1.52386 41.5261Z'
                    fill='#0D0C0F'
                    stroke='#595A5A'
                  />
                </svg>
              </div>
              <div className='card-number'>[ 0{idx + 1} ]</div>
              <div className={styles.methodologySliderSlideContent}>
                <div className={styles.slideImage}>
                  <img src={methodology.image} alt='' />
                </div>
                <div className={styles.slideTextInfo}>
                  <h4>{methodology.title}</h4>
                  <div className='section-text-block'>
                    <p>
                      <div className='triangle'></div>
                      {methodology.text}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className={clsx(styles.methodologySliderArrows, styles.mobileArrows)}
        >
          <div
            onClick={() => swiper && swiper.slidePrev()}
            className={styles.methodologySliderArrow}
          >
            <svg
              className={styles.methodologySliderArrowBg}
              preserveAspectRatio='none'
              width='97'
              height='64'
              viewBox='0 0 97 64'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g filter='url(#filter0_d_1386_743)'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M9 56C6.23858 56 4 53.7614 4 51V20.4171C4 18.9153 4.67496 17.4932 5.83833 16.5436L24.7264 1.12652C25.619 0.397942 26.7359 3.8147e-06 27.8881 3.8147e-06H88C90.7614 3.8147e-06 93 2.23857 93 5V35.5829C93 37.0847 92.325 38.5069 91.1617 39.4564L72.2735 54.8735C71.3809 55.6021 70.2641 56 69.1119 56H9Z'
                  fill='#0D0C0F'
                />
                <path
                  d='M9 55.5C6.51472 55.5 4.5 53.4853 4.5 51V20.4171C4.5 19.0655 5.10747 17.7855 6.1545 16.9309L25.0426 1.51387C25.8459 0.858147 26.8511 0.500004 27.8881 0.500004H88C90.4853 0.500004 92.5 2.51472 92.5 5V35.5829C92.5 36.9345 91.8925 38.2145 90.8455 39.0691L71.9574 54.4861C71.154 55.1419 70.1489 55.5 69.1119 55.5H9Z'
                  stroke='#858585'
                />
              </g>
              <defs>
                <filter
                  id='filter0_d_1386_743'
                  x='0'
                  y='0'
                  width='97'
                  height='64'
                  filterUnits='userSpaceOnUse'
                  color-interpolation-filters='sRGB'
                >
                  <feFlood flood-opacity='0' result='BackgroundImageFix' />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dy='4' />
                  <feGaussianBlur stdDeviation='2' />
                  <feComposite in2='hardAlpha' operator='out' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                  />
                  <feBlend
                    mode='normal'
                    in2='BackgroundImageFix'
                    result='effect1_dropShadow_1386_743'
                  />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow_1386_743'
                    result='shape'
                  />
                </filter>
              </defs>
            </svg>
            <svg
              className={styles.methodologySliderArrowIcon}
              width='16'
              height='25'
              viewBox='0 0 16 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12.3158 0L0 12.5L12.3158 25L16 21.2607L7.42105 12.5L16 3.73932L12.3158 0Z'
                fill='#858585'
              />
            </svg>
          </div>
          <div
            onClick={() => swiper && swiper.slideNext()}
            className={styles.methodologySliderArrow}
          >
            <svg
              className={styles.methodologySliderArrowBg}
              preserveAspectRatio='none'
              width='97'
              height='64'
              viewBox='0 0 97 64'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g filter='url(#filter0_d_1386_741)'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M88 56C90.7614 56 93 53.7614 93 51V20.4171C93 18.9153 92.325 17.4932 91.1617 16.5436L72.2736 1.12652C71.381 0.397942 70.2641 3.8147e-06 69.1119 3.8147e-06H9C6.23858 3.8147e-06 4 2.23857 4 5V35.5829C4 37.0847 4.67497 38.5069 5.83834 39.4564L24.7265 54.8735C25.6191 55.6021 26.7359 56 27.8881 56H88Z'
                  fill='#0D0C0F'
                />
                <path
                  d='M88 55.5C90.4853 55.5 92.5 53.4853 92.5 51V20.4171C92.5 19.0655 91.8925 17.7855 90.8455 16.9309L71.9574 1.51387C71.1541 0.858147 70.1489 0.500004 69.1119 0.500004H9C6.51472 0.500004 4.5 2.51472 4.5 5V35.5829C4.5 36.9345 5.10747 38.2145 6.15451 39.0691L25.0426 54.4861C25.846 55.1419 26.8511 55.5 27.8881 55.5H88Z'
                  stroke='#858585'
                />
              </g>
              <defs>
                <filter
                  id='filter0_d_1386_741'
                  x='0'
                  y='0'
                  width='97'
                  height='64'
                  filterUnits='userSpaceOnUse'
                  color-interpolation-filters='sRGB'
                >
                  <feFlood flood-opacity='0' result='BackgroundImageFix' />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dy='4' />
                  <feGaussianBlur stdDeviation='2' />
                  <feComposite in2='hardAlpha' operator='out' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                  />
                  <feBlend
                    mode='normal'
                    in2='BackgroundImageFix'
                    result='effect1_dropShadow_1386_741'
                  />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow_1386_741'
                    result='shape'
                  />
                </filter>
              </defs>
            </svg>
            <svg
              className={styles.methodologySliderArrowIcon}
              width='16'
              height='25'
              viewBox='0 0 16 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M3.68421 0L16 12.5L3.68421 25L4.55038e-07 21.2607L8.57895 12.5L4.55038e-07 3.73932L3.68421 0Z'
                fill='#858585'
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
