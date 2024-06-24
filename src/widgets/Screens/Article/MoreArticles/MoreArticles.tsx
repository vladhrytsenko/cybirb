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
      <div className="container space-top">
        <div className="section-text-group">
          <div className="section-title-block">
            <span className="section-label">// may interest you</span>
            <h3>More articles</h3>
          </div>
          <div className={clsx('section-text-block', styles.blogTextBlock)}>
            <Button type="link" href="/blog">
              View all
            </Button>
          </div>
        </div>
        <div className={styles.moreArticlesSlider}>
          <Swiper
            spaceBetween={20}
            speed={750}
            slidesPerView={'auto'}
            modules={[FreeMode]}
            className={styles.moreArticlesSlider}
          >
            {blogArticles.map((article, idx) => (
              <SwiperSlide className={styles.moreArticlesSlide}>
                <BlogCard
                  link={article.link}
                  clip={true}
                  id={idx + 1}
                  title={article.title}
                  thumbnail={article.thumbnail}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
