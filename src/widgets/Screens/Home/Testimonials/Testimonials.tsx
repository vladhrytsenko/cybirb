import clsx from 'clsx'
import styles from './Testimonials.module.scss'
import { testimonials } from '../../../../data'
import { SwiperSlide, Swiper } from 'swiper/react'
import { TestimonialCard } from '../../../../entities/TestimonialCard/TestimonialCard'
import { FreeMode, Scrollbar } from 'swiper'
import { useState } from 'react'
import { ISwiper } from '../../../../interfaces/ISwiper'

export const Testimonials = () => {
  const [swiper, setSwiper] = useState<ISwiper>()

  return (
    <section className={clsx(styles.testimonials, 'section')}>
      <div className="container space-top">
        <div className="section-head">
          <div className="line"></div>
          <span>[ 01 ]</span>
          <div className="section-head-icon">
            <img src="/images/icons/services-head-icon.svg" alt="" />
          </div>
        </div>
        <div className="section-text-group">
          <div className="section-title-block">
            <span className="section-label">// information security</span>
            <h2>
              What our <br />
              clients say
            </h2>
          </div>
          <div
            className={clsx('section-text-block', styles.testimonialsTextBlock)}
          >
            <p>
              <div className="triangle"></div> Crunchbace is recommended by 11
              out of 10 dentists. By the way, our clients also recommend us
              quite actively. Feel free to check it out!
            </p>
          </div>
        </div>
      </div>
      <div className={styles.testimonialsCards}>
        <Swiper
          className={styles.servicesCards}
          slidesPerView={'auto'}
          freeMode={true}
          spaceBetween={20}
          modules={[FreeMode, Scrollbar]}
          scrollbar={{
            hide: false,
          }}
          onSwiper={(swiper) => setSwiper(swiper)}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide>
              <TestimonialCard
                author={testimonial.author}
                text={testimonial.text}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
