import clsx from 'clsx'
import styles from './MoreArticles.module.scss'
import { Button } from '../../../../shared/Button/Button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper'
import { BlogCard } from '../../../../entities/BlogCard/BlogCard'
import { blogArticles } from '../../../../data'

export const MoreArticles = () => {
  return (
    <section className={clsx('section', styles.moreArticles)}>
      <div className='container space-top'>
        <div className='section-text-group'>
          <div className='section-title-block'>
            <span className='section-label'>// may interest you</span>
            <h2>More articles</h2>
          </div>
          <div className={clsx('section-text-block', styles.seeAllDesktop)}>
            <Button type='link' href='/blog'>
              View all
            </Button>
          </div>
        </div>
        <div className={styles.moreArticlesSlider}>
          <Swiper
            spaceBetween={20}
            speed={750}
            modules={[FreeMode]}
            breakpoints={{
              0: {
                slidesPerView: 1.15,
              },
              640: {
                slidesPerView: 2.3,
              },
              1024: {
                slidesPerView: 3.45,
              },
              2000: {
                slidesPerView: 4.6,
              },
            }}
            className={styles.moreArticlesSlider}
          >
            {blogArticles.map((article, idx) => (
              <SwiperSlide className={styles.moreArticlesSlide}>
                <BlogCard
                  description={article.description}
                  clip={true}
                  id={idx + 1}
                  title={article.title}
                  thumbnail={article.thumbnail}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.seeAllMobile}>
          <Button type='link' href='/blog'>
            View all
          </Button>
        </div>
      </div>
    </section>
  )
}
