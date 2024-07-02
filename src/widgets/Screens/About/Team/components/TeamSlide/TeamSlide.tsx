import React from 'react'
import styles from './TeamSlide.module.scss'
import { Button } from '../../../../../../shared/Button/Button'

interface TeamSlideProps {
  id: number
  name: string
  avatar: any
  position: string
  team: string
  description: string
}

interface ITeamSlide {
  data: TeamSlideProps[]
}

export const TeamSlide = ({ data }: ITeamSlide) => {
  return (
    <div className={styles.slidesContainer}>
      {data.map((slide) => (
        <div className={styles.slideContainer}>
          <img src={slide.avatar} alt={slide.name} className={styles.avatar} />
          <div className={styles.slideContent}>
            <div className={styles.userDetails}>
              <span className={styles.name}>{slide.name}</span>
              <span className={styles.position}>{slide.position}</span>
            </div>
            <div className={styles.icon}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M6 12H18'
                  stroke='white'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M12 18V6'
                  stroke='white'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </div>
          <div className={styles.slideAdditionalInfo}>
            <div className={styles.slideAdditionalContent}>
              <div className={styles.userDetails}>
                <span className={styles.name}>{slide.name}</span>
                <span className={styles.team}>Team: {slide.team}</span>
                <div className={styles.description}>
                  <p>
                    <div className='triangle'></div>
                    {slide.description}
                  </p>
                </div>
              </div>
              <div className={styles.icon}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M6 12H18'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
