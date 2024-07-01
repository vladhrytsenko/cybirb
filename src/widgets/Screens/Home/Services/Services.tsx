import clsx from 'clsx'
import styles from './Services.module.scss'
import { services } from '../../../../data'
import { ServiceCard } from '../../../../entities/ServiceCard/ServiceCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { FreeMode } from 'swiper'
import { Button } from '../../../../shared/Button/Button'
import React from 'react'

export const Services = () => {
  return (
    <section className={clsx(styles.services, 'section')}>
      <div className='container space-top'>
        <div className='section-head'>
          <div className='line'></div>
          <span>[ 01 ]</span>
          <div className='section-head-icon'>
            <img src='/images/icons/services-head-icon.svg' alt='' />
          </div>
        </div>
        <div className='section-text-group'>
          <div className='section-title-block'>
            <span className='section-label'>// information security</span>
            <h2>
              Our <br /> Services
            </h2>
          </div>
          <div className={clsx('section-text-block', styles.servicesTextBlock)}>
            <p>
              <div className='triangle'></div>
              Be part of Secured Web3.{' '}
              <span className='text-white'>
                Join 124M satisfied clients
              </span>{' '}
              who rely on team CyBirb's products to safer and secured Web3
              Experience.
            </p>
          </div>
        </div>
        <Swiper
          className={styles.servicesCards}
          slidesPerView={'auto'}
          freeMode={true}
          spaceBetween={24}
          modules={[FreeMode]}
        >
          <SwiperSlide className={styles.servicesCardsGroup}>
            <ServiceCard
              title={services[0].title}
              text={services[0].text}
              icon={services[0].icon}
              category={services[0].category}
              id={1}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.servicesCardsGroup}>
            <ServiceCard
              title={services[1].title}
              text={services[1].text}
              icon={services[1].icon}
              category={services[1].category}
              clipType='2'
              id={2}
            />
            <ServiceCard
              title={services[2].title}
              text={services[2].text}
              icon={services[2].icon}
              category={services[2].category}
              clipType='3'
              id={3}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.servicesCardsGroup}>
            <ServiceCard
              title={services[3].title}
              text={services[3].text}
              icon={services[3].icon}
              category={services[3].category}
              id={4}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.servicesCardsGroup}>
            <ServiceCard
              title={services[4].title}
              text={services[4].text}
              icon={services[4].icon}
              category={services[4].category}
              clipType='2'
              id={5}
            />
            <ServiceCard
              title={services[5].title}
              text={services[5].text}
              icon={services[5].icon}
              category={services[5].category}
              clipType='3'
              id={6}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.servicesCardsGroup}>
            <ServiceCard
              title={services[0].title}
              text={services[0].text}
              icon={services[0].icon}
              category={services[0].category}
              id={7}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.servicesCardsGroup}>
            <ServiceCard
              title={services[1].title}
              text={services[1].text}
              icon={services[1].icon}
              category={services[1].category}
              clipType='2'
              id={8}
            />
            <ServiceCard
              title={services[2].title}
              text={services[2].text}
              icon={services[2].icon}
              category={services[2].category}
              clipType='3'
              id={9}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.servicesCardsGroup}>
            <ServiceCard
              title={services[3].title}
              text={services[3].text}
              icon={services[3].icon}
              category={services[3].category}
              id={10}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.servicesCardsGroup}>
            <ServiceCard
              title={services[4].title}
              text={services[4].text}
              icon={services[4].icon}
              category={services[4].category}
              clipType='2'
              id={11}
            />
            <ServiceCard
              title={services[5].title}
              text={services[5].text}
              icon={services[5].icon}
              category={services[5].category}
              clipType='3'
              id={12}
            />
          </SwiperSlide>
        </Swiper>
        <div className={styles.servicesCardsMobile}>
          <div className={styles.servicesCardsGroupMobile}>
            <ServiceCard
              title={services[0].title}
              text={services[0].text}
              icon={services[0].icon}
              category={services[0].category}
              id={1}
            />
          </div>
          <div className={styles.servicesCardsGroupMobile}>
            <ServiceCard
              title={services[1].title}
              text={services[1].text}
              icon={services[1].icon}
              category={services[1].category}
              clipType='2'
              id={2}
            />
          </div>
          <div className={styles.servicesCardsGroupMobile}>
            <ServiceCard
              title={services[2].title}
              text={services[2].text}
              icon={services[2].icon}
              category={services[2].category}
              clipType='3'
              id={3}
            />
          </div>
          <div className={styles.servicesCardsGroupMobile}>
            <ServiceCard
              title={services[3].title}
              text={services[3].text}
              icon={services[3].icon}
              category={services[3].category}
              id={4}
            />
          </div>
          <div className={styles.servicesCardsGroupMobile}>
            <ServiceCard
              title={services[4].title}
              text={services[4].text}
              icon={services[4].icon}
              category={services[4].category}
              clipType='2'
              id={5}
            />
          </div>
          <div className={styles.servicesCardsGroupMobile}>
            <ServiceCard
              title={services[5].title}
              text={services[5].text}
              icon={services[5].icon}
              category={services[5].category}
              clipType='3'
              id={6}
            />
          </div>
          <div className={styles.servicesCardsGroupMobile}>
            <ServiceCard
              title={services[0].title}
              text={services[0].text}
              icon={services[0].icon}
              category={services[0].category}
              id={7}
            />
          </div>
          <div className={styles.servicesCardsGroupMobile}>
            <ServiceCard
              title={services[1].title}
              text={services[1].text}
              icon={services[1].icon}
              category={services[1].category}
              clipType='2'
              id={8}
            />
          </div>
          <div className={styles.servicesCardsGroupMobile}>
            <ServiceCard
              title={services[2].title}
              text={services[2].text}
              icon={services[2].icon}
              category={services[2].category}
              clipType='3'
              id={9}
            />
          </div>
          <div className={styles.servicesCardsGroupMobile}>
            <ServiceCard
              title={services[3].title}
              text={services[3].text}
              icon={services[3].icon}
              category={services[3].category}
              id={10}
            />
          </div>
          <div className={styles.servicesCardsGroupMobile}>
            <ServiceCard
              title={services[4].title}
              text={services[4].text}
              icon={services[4].icon}
              category={services[4].category}
              clipType='2'
              id={11}
            />
          </div>
          <div className={styles.servicesCardsGroupMobile}>
            <ServiceCard
              title={services[5].title}
              text={services[5].text}
              icon={services[5].icon}
              category={services[5].category}
              clipType='3'
              id={12}
            />
          </div>
          <Button size='big'>View All</Button>
        </div>
      </div>
    </section>
  )
}
