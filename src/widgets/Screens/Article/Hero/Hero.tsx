import clsx from 'clsx'
import styles from './Hero.module.scss'
import { Ticker } from '../../../../shared/Ticker/Ticker'
import { ArticleInfoClip } from './components/ArticleInfoClip'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination } from 'swiper'

export const Hero = () => {
  return (
    <section id='article-hero' className={clsx('section', styles.hero)}>
      <div className='container'>
        <div className={styles.heroTicker}>
          <Ticker />
        </div>
        <div className={styles.heroWrapper}>
          <div className={styles.heroArticlePreview}>
            <div className={styles.heroArticlePreviewSocials}>
              <a href='' className={styles.heroArticlePreviewSocial}>
                <img src='/images/socials/google.svg' alt='' />
              </a>
              <a href='' className={styles.heroArticlePreviewSocial}>
                <img src='/images/socials/facebook.svg' alt='' />
              </a>
            </div>
            <Swiper
              spaceBetween={0}
              speed={1000}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className={styles.heroArticlePreviewSlider}
            >
              <SwiperSlide className={styles.heroArticlePreviewThumbnail}>
                <img src='/images/Home/Blog/1.png' alt='' />
              </SwiperSlide>
              <SwiperSlide className={styles.heroArticlePreviewThumbnail}>
                <img src='/images/Home/Blog/2.png' alt='' />
              </SwiperSlide>
              <SwiperSlide className={styles.heroArticlePreviewThumbnail}>
                <img src='/images/Home/Blog/3.png' alt='' />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={styles.heroArticleInfo}>
            <div className={styles.heroArticleInfoBg}>
              <ArticleInfoClip />
            </div>
            <div className='card-number'>[ 01.07.2023 ]</div>
            <span className={styles.heroArticleInfoTitle}>
              Enhancing Web3 Security: Introducing Cyvers' Vigilens and
              Malicious Contract API
            </span>
            <div
              className={clsx(
                'section-text-block',
                styles.heroArticleInfoTextBlock
              )}
            >
              <p>
                <div className='triangle'></div>
                leveraging best-in-class AI technology to protect and monitor
                blockchain protocols and smart ntracts.leveraging best-in-class
                AI technology to protect and monitor blockchain protocols and
                smart contracts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
