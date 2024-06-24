import { FC, InputHTMLAttributes } from 'react'
import styles from './Input.module.scss'

interface IProps extends InputHTMLAttributes<string> {
  label?: string
}

export const Input: FC<IProps> = ({
  placeholder,
  type,
  id,
  label,
  disabled,
}) => {
  return (
    <div className={styles.inputGroup}>
      {label && <label className={styles.inputGroupLabel}>{label}</label>}

      <div className={styles.input}>
        <input
          style={{
            clipPath: `url(#${id}-clip)`,
          }}
          type={type}
          placeholder={placeholder}
          id={id}
        />
        <svg className="clip">
          <clipPath id={`${id}-clip`} clipPathUnits="objectBoundingBox">
            <path d="M1,0.58 C1,0.591,1,0.602,0.999,0.611 L0.965,0.976 C0.963,0.991,0.961,1,0.959,1 H0.011 C0.005,1,0,0.963,0,0.917 V0.083 C0,0.037,0.005,0,0.011,0 H0.989 C0.995,0,1,0.037,1,0.083 V0.58"></path>
          </clipPath>
        </svg>
        <svg
          className={styles.inputBg}
          preserveAspectRatio="none"
          width="268"
          height="36"
          viewBox="0 0 268 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="nonzero"
            clip-rule="evenodd"
            d="M3 1C1.89543 1 1 1.89543 1 3V33C1 34.1046 1.89543 35 3.00001 35H256.356C257.012 35 257.625 34.679 257.999 34.1408L266.643 21.6941C266.875 21.3592 267 20.9611 267 20.5533V3C267 1.89543 266.105 1 265 1H3ZM268 20.8665C268 21.2743 267.875 21.6724 267.643 22.0073L258.522 35.1408C258.148 35.679 257.535 36 256.88 36H3.00001C1.34315 36 0 34.6569 0 33V3C0 1.34315 1.34315 0 3 0H265C266.657 0 268 1.34315 268 3V20.8665Z"
            fill={disabled ? '#7A7979' : 'white'}
          />
        </svg>
      </div>
      {/* <div className={styles.inputGroupNotice}>
        <img
          src="/images/icons/not-valid.svg"
          alt=""
          className={styles.inputGroupNoticeIcon}
        />
        <span>{type === 'number' && 'Please enter a valid phone'}</span>
      </div> */}
    </div>
  )
}
