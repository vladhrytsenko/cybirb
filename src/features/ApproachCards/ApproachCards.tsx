import { approaches } from '../../data'
import { ApproachCard } from '../../entities/ApproachCard/ApproachCard'
import styles from './ApproachCards.module.scss'
import { FreeMode } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

export const ApproachCards = () => {
  return (
    <div>
      <div className={styles.approachDesktopCards}>
        {approaches.map((approach, idx) => (
          <ApproachCard
            id={idx + 1}
            title={approach.title}
            text={approach.text}
            icon={approach.icon}
          />
        ))}
      </div>
      <div className={styles.approachMobileCards}>
        <Swiper
          spaceBetween={20}
          speed={750}
          modules={[FreeMode]}
          slidesPerView={1.1}
          className={styles.slider}
        >
          {approaches.map((approach, idx) => (
            <SwiperSlide key={approach.title}>
              <ApproachCard
                id={idx + 1}
                open
                title={approach.title}
                text={approach.text}
                icon={approach.icon}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
