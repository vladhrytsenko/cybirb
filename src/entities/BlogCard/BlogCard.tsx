import { FC } from 'react'
import styles from './BlogCard.module.scss'
import clsx from 'clsx'

interface IProps {
  title: string
  thumbnail: string
  id: number
  fullBorder?: boolean
  clip?: boolean
  link: string
}

export const BlogCard: FC<IProps> = ({
  title,
  thumbnail,
  id,
  fullBorder = false,
  clip = false,
  link,
}) => {
  return (
    <div
      className={clsx(
        styles.blogCard,
        fullBorder && styles.fullBorder,
        clip && styles.clip
      )}
    >
      {clip && (
        <svg
          className={styles.blogCardClip}
          preserveAspectRatio="none"
          width="508"
          height="541"
          viewBox="0 0 508 541"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M66.6819 540.5L0.5 474.318L0.500039 66.6818L66.6818 0.5H441.318L507.5 66.6818V474.318L441.318 540.5L66.6819 540.5Z"
            fill="#0D0C0F"
            stroke="#595A5A"
          />
        </svg>
      )}
      {clip ? (
        <img
          className={styles.blogCardThumbnail}
          style={{
            clipPath: `url(#${id}-blog-card-clip)`,
          }}
          src={thumbnail}
          alt=""
        />
      ) : (
        <img className={styles.blogCardThumbnail} src={thumbnail} alt="" />
      )}
      {clip && (
        <svg className="clip">
          <clipPath
            id={`${id}-blog-card-clip`}
            clipPathUnits="objectBoundingBox"
          >
            <path d="M0.132,1 L0.001,0.878 L0.001,0.123 L0.132,0.001 H0.87 L1,0.123 V0.878 L0.87,1 L0.132,1"></path>
          </clipPath>
        </svg>
      )}
      <div className={styles.blogCardContent}>
        <div className={styles.blogCardInfo}>
          <div className="card-number">[ 0{id} ]</div>
          <span className={styles.blogCardTitle}>{title}</span>
        </div>
        <a href={link} className={styles.blogCardLink}>
          Read details
          <div className="link-arrow"></div>
        </a>
      </div>
    </div>
  )
}
