import { FC } from 'react'
import styles from './ApproachCard.module.scss'

interface IProps {
  title: string
  icon: string
  text: string
  id: number
}

export const ApproachCard: FC<IProps> = ({ title, text, id, icon }) => {
  return (
    <div className={styles.approachCard}>
      <div className={styles.approachCardBg}>
        <svg
          preserveAspectRatio="none"
          width="678"
          height="650"
          viewBox="0 0 678 650"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M676.509 646V37.8574C676.509 36.9345 676.144 36.0489 675.495 35.3935L642.926 2.53607C642.269 1.873 641.374 1.5 640.44 1.5H4.96484C3.60284 1.5 2.49121 2.61511 2.49121 4V646C2.49121 647.385 3.60284 648.5 4.96484 648.5H674.035C675.397 648.5 676.509 647.385 676.509 646ZM676.342 34.8343C677.028 35.5909 677.436 36.5583 677.5 37.5763V37.4432C677.5 36.5203 677.135 35.6347 676.486 34.9792L676.342 34.8343ZM640.44 0.5C641.574 0.5 642.663 0.927784 643.492 1.69352L643.336 1.53607C642.679 0.873 641.784 0.5 640.851 0.5H640.44Z"
            fill="url(#paint0_linear_2111_7419)"
            stroke="#595A5A"
          />
          <g opacity="0.4" clip-path="url(#clip0_2111_7419)">
            <path
              opacity="0.2"
              d="M32.2729 -16.8398H30.4817V672.841H32.2729V-16.8398Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M68.0979 -16.8398H66.3066V672.841H68.0979V-16.8398Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M104.102 -16.8398H102.311V672.841H104.102V-16.8398Z"
              fill="white"
            />
            <path
              opacity="0.5"
              d="M139.927 -16.8398H138.136V672.841H139.927V-16.8398Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M175.929 -16.8398H174.138V672.841H175.929V-16.8398Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M211.754 -16.8398H209.963V672.841H211.754V-16.8398Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M247.759 -16.8398H245.967V672.841H247.759V-16.8398Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M283.583 -16.8398H281.792V672.841H283.583V-16.8398Z"
              fill="white"
            />
            <path
              opacity="0.5"
              d="M319.588 -16.8398H317.796V672.841H319.588V-16.8398Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M355.413 -16.8398H353.622V672.841H355.413V-16.8398Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M391.415 -16.8398H389.624V672.841H391.415V-16.8398Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M427.24 -16.8398H425.449V672.841H427.24V-16.8398Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M463.244 -16.8398H461.453V672.841H463.244V-16.8398Z"
              fill="white"
            />
            <path
              opacity="0.5"
              d="M499.069 -16.8398H497.278V672.841H499.069V-16.8398Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M535.073 -16.8398H533.282V672.841H535.073V-16.8398Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M570.896 -16.8398H569.105V672.841H570.896V-16.8398Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M606.9 -16.8398H605.109V672.841H606.9V-16.8398Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M642.59 6H640.507V673H642.59V6Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M677.834 51.2676H-40.4507V52.9875H677.834V51.2676Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M677.834 85.666H-40.4507V87.3859H677.834V85.666Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M677.834 120.236H-40.4507V121.956H677.834V120.236Z"
              fill="white"
            />
            <path
              opacity="0.5"
              d="M677.834 154.634H-40.4507V156.354H677.834V154.634Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M677.834 189.204H-40.4507V190.924H677.834V189.204Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M677.834 223.602H-40.4507V225.321H677.834V223.602Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M677.834 258.172H-40.4507V259.892H677.834V258.172Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M677.834 292.57H-40.4507V294.29H677.834V292.57Z"
              fill="white"
            />
            <path
              opacity="0.5"
              d="M677.834 327.14H-40.4507V328.86H677.834V327.14Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M677.834 361.538H-40.4507V363.258H677.834V361.538Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M677.834 396.108H-40.4507V397.828H677.834V396.108Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M677.834 430.506H-40.4507V432.226H677.834V430.506Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M677.834 465.076H-40.4507V466.796H677.834V465.076Z"
              fill="white"
            />
            <path
              opacity="0.5"
              d="M677.834 499.475H-40.4507V501.195H677.834V499.475Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M677.834 534.044H-40.4507V535.764H677.834V534.044Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M677.834 568.442H-40.4507V570.162H677.834V568.442Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M677.834 603.013H-40.4507V604.733H677.834V603.013Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M677.834 637.41H-40.4507V639.13H677.834V637.41Z"
              fill="white"
            />
            <path
              d="M677.835 149.99H676.043V162.03H677.835V149.99Z"
              fill="white"
            />
            <path
              d="M683.208 155.15H670.669V156.87H683.208V155.15Z"
              fill="white"
            />
            <path
              d="M677.835 321.98H676.043V334.02H677.835V321.98Z"
              fill="white"
            />
            <path
              d="M683.208 327.141H670.669V328.861H683.208V327.141Z"
              fill="white"
            />
            <path
              d="M677.835 493.971H676.043V506.01H677.835V493.971Z"
              fill="white"
            />
            <path
              d="M683.208 499.131H670.669V500.851H683.208V499.131Z"
              fill="white"
            />
            <path
              d="M140.464 149.99H138.673V162.03H140.464V149.99Z"
              fill="white"
            />
            <path
              d="M145.837 155.15H133.299V156.87H145.837V155.15Z"
              fill="white"
            />
            <path
              d="M140.464 321.98H138.673V334.02H140.464V321.98Z"
              fill="white"
            />
            <path
              d="M145.837 327.141H133.299V328.861H145.837V327.141Z"
              fill="white"
            />
            <path
              d="M140.464 493.971H138.673V506.01H140.464V493.971Z"
              fill="white"
            />
            <path
              d="M145.837 499.131H133.299V500.851H145.837V499.131Z"
              fill="white"
            />
            <path
              d="M319.588 149.99H317.796V162.03H319.588V149.99Z"
              fill="white"
            />
            <path
              d="M324.961 155.15H312.422V156.87H324.961V155.15Z"
              fill="white"
            />
            <path
              d="M319.588 321.98H317.796V334.02H319.588V321.98Z"
              fill="white"
            />
            <path
              d="M324.961 327.141H312.422V328.861H324.961V327.141Z"
              fill="white"
            />
            <path
              d="M319.588 493.971H317.796V506.01H319.588V493.971Z"
              fill="white"
            />
            <path
              d="M324.961 499.131H312.422V500.851H324.961V499.131Z"
              fill="white"
            />
            <path
              d="M498.711 149.99H496.92V162.03H498.711V149.99Z"
              fill="white"
            />
            <path
              d="M504.084 155.15H491.546V156.87H504.084V155.15Z"
              fill="white"
            />
            <path
              d="M498.711 321.98H496.92V334.02H498.711V321.98Z"
              fill="white"
            />
            <path
              d="M504.084 327.141H491.546V328.861H504.084V327.141Z"
              fill="white"
            />
            <path
              d="M498.711 493.971H496.92V506.01H498.711V493.971Z"
              fill="white"
            />
            <path
              d="M504.084 499.131H491.546V500.851H504.084V499.131Z"
              fill="white"
            />
            <path
              d="M50.9013 69.1543H49.1101V70.8742H50.9013V69.1543Z"
              fill="white"
            />
            <path
              d="M230.025 69.1543H228.234V70.8742H230.025V69.1543Z"
              fill="white"
            />
            <path
              d="M409.148 69.1543H407.357V70.8742H409.148V69.1543Z"
              fill="white"
            />
            <path
              d="M588.272 69.1543H586.48V70.8742H588.272V69.1543Z"
              fill="white"
            />
            <path
              d="M50.9013 241.145H49.1101V242.864H50.9013V241.145Z"
              fill="white"
            />
            <path
              d="M230.025 241.145H228.234V242.864H230.025V241.145Z"
              fill="white"
            />
            <path
              d="M409.148 241.145H407.357V242.864H409.148V241.145Z"
              fill="white"
            />
            <path
              d="M588.272 241.145H586.48V242.864H588.272V241.145Z"
              fill="white"
            />
            <path
              d="M50.9013 413.135H49.1101V414.855H50.9013V413.135Z"
              fill="white"
            />
            <path
              d="M230.025 413.135H228.234V414.855H230.025V413.135Z"
              fill="white"
            />
            <path
              d="M409.148 413.135H407.357V414.855H409.148V413.135Z"
              fill="white"
            />
            <path
              d="M588.272 413.135H586.48V414.855H588.272V413.135Z"
              fill="white"
            />
            <path
              d="M50.9013 585.125H49.1101V586.845H50.9013V585.125Z"
              fill="white"
            />
            <path
              d="M230.025 585.125H228.234V586.845H230.025V585.125Z"
              fill="white"
            />
            <path
              d="M409.148 585.125H407.357V586.845H409.148V585.125Z"
              fill="white"
            />
            <path
              d="M588.272 585.125H586.48V586.845H588.272V585.125Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M651.63 16.6973H-36.4517V18.4172H651.63V16.6973Z"
              fill="white"
            />
          </g>
          <path d="M652.018 41L630 18V39L631.835 41H652.018Z" fill="white" />
          <defs>
            <linearGradient
              id="paint0_linear_2111_7419"
              x1="630"
              y1="1.66944e-05"
              x2="24.5"
              y2="715.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#495167" />
              <stop offset="1" stop-color="#495167" />
            </linearGradient>
            <clipPath id="clip0_2111_7419">
              <rect
                width="678"
                height="645"
                fill="white"
                transform="translate(0 1)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className={styles.approachCardContent}>
        <div className="card-number">[ 0{id} ]</div>
        <span className={styles.approachCardMiddleTitle}>{title}</span>
        <img src={icon} className={styles.approachCardIcon} alt="" />
        <div className={styles.approachCardBottomInfo}>
          <span className={styles.text}>
            <div className="triangle"></div>
            {text}
          </span>
          <span className={styles.title}>{title}</span>
        </div>
      </div>
    </div>
  )
}
