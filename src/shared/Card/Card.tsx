import { FC } from 'react'
import styles from './Card.module.scss'

interface IProps {
  title: string
  text: string
  bgType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
}

export const Card: FC<IProps> = ({ title, text, bgType }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardBg}>
        {bgType === 1 && (
          <svg
            preserveAspectRatio='none'
            width='392'
            height='220'
            viewBox='0 0 392 220'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <mask id='path-1-inside-1_1268_3586' fill='white'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M392 2C392 0.895431 391.105 0 390 0H2C0.89543 0 0 0.895429 0 2V218C0 219.105 0.895435 220 2 220H363.107C363.631 220 364.133 219.795 364.507 219.429L391.4 193.085C391.784 192.709 392 192.194 392 191.656V2Z'
              />
            </mask>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M392 2C392 0.895431 391.105 0 390 0H2C0.89543 0 0 0.895429 0 2V218C0 219.105 0.895435 220 2 220H363.107C363.631 220 364.133 219.795 364.507 219.429L391.4 193.085C391.784 192.709 392 192.194 392 191.656V2Z'
              fill='#0D0C0F'
            />
            <path
              d='M391.4 193.085L390.7 192.371L391.4 193.085ZM364.507 219.429L363.807 218.714L364.507 219.429ZM2 1H390V-1H2V1ZM1 218V2H-1V218H1ZM363.107 219H2V221H363.107V219ZM365.207 220.143L392.099 193.799L390.7 192.371L363.807 218.714L365.207 220.143ZM391 2V191.656H393V2H391ZM392.099 193.799C392.675 193.235 393 192.463 393 191.656H391C391 191.925 390.892 192.183 390.7 192.371L392.099 193.799ZM363.107 221C363.892 221 364.646 220.692 365.207 220.143L363.807 218.714C363.62 218.897 363.369 219 363.107 219V221ZM-1 218C-1 219.657 0.343153 221 2 221V219C1.44772 219 1 218.552 1 218H-1ZM390 1C390.552 1 391 1.44771 391 2H393C393 0.343146 391.657 -1 390 -1V1ZM2 -1C0.343147 -1 -1 0.343143 -1 2H1C1 1.44771 1.44771 1 2 1V-1Z'
              fill='#595A5A'
              mask='url(#path-1-inside-1_1268_3586)'
            />
          </svg>
        )}
        {bgType === 2 && (
          <svg
            preserveAspectRatio='none'
            width='392'
            height='220'
            viewBox='0 0 392 220'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <mask id='path-1-inside-1_1268_3608' fill='white'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M392 28.3437C392 27.8061 391.784 27.2912 391.4 26.915L364.507 0.571289C364.133 0.205093 363.631 0 363.107 0H28.8926C28.3693 0 27.8668 0.205093 27.493 0.571289L0.600433 26.915C0.216431 27.2912 0 27.8061 0 28.3437V218C0 219.105 0.895416 220 2 220H390C391.105 220 392 219.105 392 218V28.3437Z'
              />
            </mask>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M392 28.3437C392 27.8061 391.784 27.2912 391.4 26.915L364.507 0.571289C364.133 0.205093 363.631 0 363.107 0H28.8926C28.3693 0 27.8668 0.205093 27.493 0.571289L0.600433 26.915C0.216431 27.2912 0 27.8061 0 28.3437V218C0 219.105 0.895416 220 2 220H390C391.105 220 392 219.105 392 218V28.3437Z'
              fill='#0D0C0F'
            />
            <path
              d='M0.600433 26.915L1.30023 27.6294L0.600433 26.915ZM27.493 0.571289L28.1928 1.28564L27.493 0.571289ZM391.4 26.915L392.099 26.2006L391.4 26.915ZM364.507 0.571289L365.207 -0.143082L364.507 0.571289ZM363.807 1.28564L390.7 27.6294L392.099 26.2006L365.207 -0.143082L363.807 1.28564ZM28.8926 1H363.107V-1H28.8926V1ZM26.7932 -0.143082L-0.0993347 26.2006L1.30023 27.6294L28.1928 1.28564L26.7932 -0.143082ZM1 218V28.3437H-1V218H1ZM390 219H2V221H390V219ZM391 28.3437V218H393V28.3437H391ZM390 221C391.657 221 393 219.657 393 218H391C391 218.552 390.552 219 390 219V221ZM-1 218C-1 219.657 0.34314 221 2 221V219C1.44772 219 1 218.552 1 218H-1ZM-0.0993347 26.2006C-0.675385 26.7649 -1 27.5373 -1 28.3437H1C1 28.0749 1.10822 27.8175 1.30023 27.6294L-0.0993347 26.2006ZM28.8926 -1C28.1076 -1 27.354 -0.692368 26.7932 -0.143082L28.1928 1.28564C28.3797 1.10254 28.6309 1 28.8926 1V-1ZM390.7 27.6294C390.892 27.8175 391 28.0749 391 28.3437H393C393 27.5374 392.675 26.7649 392.099 26.2006L390.7 27.6294ZM365.207 -0.143082C364.646 -0.692368 363.892 -1 363.107 -1V1C363.369 1 363.62 1.10255 363.807 1.28564L365.207 -0.143082Z'
              fill='#595A5A'
              mask='url(#path-1-inside-1_1268_3608)'
            />
          </svg>
        )}
        {bgType === 3 && (
          <svg
            preserveAspectRatio='none'
            width='392'
            height='220'
            viewBox='0 0 392 220'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <mask id='path-1-inside-1_1268_3592' fill='white'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M0.881775 0.341569C0.349762 0.700983 0 1.30964 0 2V189.697C0 190.235 0.2164 190.75 0.600433 191.126L29.493 219.429C29.8668 219.795 30.3693 220 30.8926 220H390C391.105 220 392 219.105 392 218V28.3437C392 27.8061 391.784 27.2912 391.4 26.915L364.507 0.571282C364.133 0.205093 363.631 0 363.107 0H2C1.58578 0 1.20099 0.12592 0.881775 0.341569Z'
              />
            </mask>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M0.881775 0.341569C0.349762 0.700983 0 1.30964 0 2V189.697C0 190.235 0.2164 190.75 0.600433 191.126L29.493 219.429C29.8668 219.795 30.3693 220 30.8926 220H390C391.105 220 392 219.105 392 218V28.3437C392 27.8061 391.784 27.2912 391.4 26.915L364.507 0.571282C364.133 0.205093 363.631 0 363.107 0H2C1.58578 0 1.20099 0.12592 0.881775 0.341569Z'
              fill='#0D0C0F'
            />
            <path
              d='M0.881775 0.341569L0.32196 -0.487059L0.321991 -0.487064L0.881775 0.341569ZM0.600433 191.126L1.3002 190.411V190.411L0.600433 191.126ZM29.493 219.429L30.1928 218.714L30.1928 218.714L29.493 219.429ZM391.4 26.915L392.099 26.2006L392.099 26.2006L391.4 26.915ZM364.507 0.571282L365.207 -0.143078L365.207 -0.143077L364.507 0.571282ZM-1 2C-1 0.963549 -0.473541 0.0503802 0.32196 -0.487059L1.44159 1.1702C1.17307 1.35159 1 1.65574 1 2H-1ZM-1 189.697V2H1V189.697H-1ZM-0.0993347 191.84C-0.675415 191.276 -1 190.503 -1 189.697H1C1 189.966 1.10822 190.223 1.3002 190.411L-0.0993347 191.84ZM28.7932 220.143L-0.0993347 191.84L1.3002 190.411L30.1928 218.714L28.7932 220.143ZM30.8926 221C30.1077 221 29.3539 220.692 28.7932 220.143L30.1928 218.714C30.3797 218.897 30.6309 219 30.8926 219V221ZM390 221H30.8926V219H390V221ZM393 218C393 219.657 391.657 221 390 221V219C390.552 219 391 218.552 391 218H393ZM393 28.3437V218H391V28.3437H393ZM392.099 26.2006C392.675 26.7649 393 27.5373 393 28.3437H391C391 28.0749 390.892 27.8175 390.7 27.6294L392.099 26.2006ZM365.207 -0.143077L392.099 26.2006L390.7 27.6294L363.807 1.28564L365.207 -0.143077ZM363.107 -1C363.892 -1 364.646 -0.69236 365.207 -0.143078L363.807 1.28564C363.62 1.10255 363.369 1 363.107 1V-1ZM2 -1H363.107V1H2V-1ZM0.321991 -0.487064C0.8013 -0.810877 1.38007 -1 2 -1V1C1.7915 1 1.60068 1.06272 1.44156 1.1702L0.321991 -0.487064Z'
              fill='#595A5A'
              mask='url(#path-1-inside-1_1268_3592)'
            />
          </svg>
        )}
        {bgType === 4 && (
          <svg
            preserveAspectRatio='none'
            width='392'
            height='220'
            viewBox='0 0 392 220'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <mask id='path-1-inside-1_1268_3602' fill='white'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M0 218C0 219.105 0.895416 220 2 220H390C391.105 220 392 219.105 392 218V2C392 0.895432 391.105 0 390 0H29.0322C28.5106 0 28.0097 0.20372 27.6362 0.567734L0.604065 26.9138C0.217834 27.2902 0 27.8067 0 28.3461V218Z'
              />
            </mask>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M0 218C0 219.105 0.895416 220 2 220H390C391.105 220 392 219.105 392 218V2C392 0.895432 391.105 0 390 0H29.0322C28.5106 0 28.0097 0.20372 27.6362 0.567734L0.604065 26.9138C0.217834 27.2902 0 27.8067 0 28.3461V218Z'
              fill='#0D0C0F'
            />
            <path
              d='M0.604065 26.9138L1.30203 27.6299L0.604065 26.9138ZM27.6362 0.567734L26.9383 -0.148407L27.6362 0.567734ZM390 219H2V221H390V219ZM391 2V218H393V2H391ZM29.0322 1H390V-1H29.0322V1ZM26.9383 -0.148407L-0.0938721 26.1976L1.30203 27.6299L28.3342 1.28386L26.9383 -0.148407ZM1 218V28.3461H-1V218H1ZM-0.0938721 26.1976C-0.673248 26.7623 -1 27.537 -1 28.3461H1C1 28.0764 1.10892 27.8181 1.30203 27.6299L-0.0938721 26.1976ZM29.0322 -1C28.2498 -1 27.4985 -0.694427 26.9383 -0.148407L28.3342 1.28386C28.5209 1.10185 28.7714 1 29.0322 1V-1ZM393 2C393 0.34314 391.657 -1 390 -1V1C390.552 1 391 1.44772 391 2H393ZM2 219C1.44772 219 1 218.552 1 218H-1C-1 219.657 0.34314 221 2 221V219ZM390 221C391.657 221 393 219.657 393 218H391C391 218.552 390.552 219 390 219V221Z'
              fill='#595A5A'
              mask='url(#path-1-inside-1_1268_3602)'
            />
          </svg>
        )}
        {bgType === 5 && (
          <svg
            preserveAspectRatio='none'
            width='392'
            height='220'
            viewBox='0 0 392 220'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <mask id='path-1-inside-1_1138_7718' fill='white'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M392 218C392 219.105 391.105 220 390 220H2C0.895431 220 0 219.105 0 218V2C0 0.895432 0.895432 0 2 0H362.968C363.489 0 363.99 0.20372 364.364 0.567734L391.396 26.9138C391.782 27.2902 392 27.8067 392 28.3461V218Z'
              />
            </mask>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M392 218C392 219.105 391.105 220 390 220H2C0.895431 220 0 219.105 0 218V2C0 0.895432 0.895432 0 2 0H362.968C363.489 0 363.99 0.20372 364.364 0.567734L391.396 26.9138C391.782 27.2902 392 27.8067 392 28.3461V218Z'
              fill='#0D0C0F'
            />
            <path
              d='M391.396 26.9138L390.698 27.6299L391.396 26.9138ZM364.364 0.567734L365.062 -0.148407L364.364 0.567734ZM2 219H390V221H2V219ZM1 2V218H-1V2H1ZM362.968 1H2V-1H362.968V1ZM365.062 -0.148407L392.094 26.1976L390.698 27.6299L363.666 1.28386L365.062 -0.148407ZM391 218V28.3461H393V218H391ZM392.094 26.1976C392.673 26.7623 393 27.537 393 28.3461H391C391 28.0764 390.891 27.8181 390.698 27.6299L392.094 26.1976ZM362.968 -1C363.75 -1 364.501 -0.694427 365.062 -0.148407L363.666 1.28386C363.479 1.10185 363.229 1 362.968 1V-1ZM-1 2C-1 0.34314 0.343148 -1 2 -1V1C1.44772 1 1 1.44772 1 2H-1ZM390 219C390.552 219 391 218.552 391 218H393C393 219.657 391.657 221 390 221V219ZM2 221C0.343147 221 -1 219.657 -1 218H1C1 218.552 1.44771 219 2 219V221Z'
              fill='#595A5A'
              mask='url(#path-1-inside-1_1138_7718)'
            />
          </svg>
        )}
        {bgType === 6 && (
          <svg
            preserveAspectRatio='none'
            width='392'
            height='220'
            viewBox='0 0 392 220'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <mask id='path-1-inside-1_1138_7708' fill='white'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M390 0C391.105 0 392 0.89543 392 2V193.603C392 194.143 391.782 194.659 391.396 195.035L366.364 219.432C365.99 219.796 365.489 220 364.968 220H2.00001C0.895439 220 0 219.105 0 218V28.346C0 27.8067 0.217833 27.2902 0.604079 26.9138L27.6362 0.567727C28.0097 0.203719 28.5106 0 29.0322 0H390Z'
              />
            </mask>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M390 0C391.105 0 392 0.89543 392 2V193.603C392 194.143 391.782 194.659 391.396 195.035L366.364 219.432C365.99 219.796 365.489 220 364.968 220H2.00001C0.895439 220 0 219.105 0 218V28.346C0 27.8067 0.217833 27.2902 0.604079 26.9138L27.6362 0.567727C28.0097 0.203719 28.5106 0 29.0322 0H390Z'
              fill='#0D0C0F'
            />
            <path
              d='M391.396 195.035L392.094 195.752V195.752L391.396 195.035ZM366.364 219.432L367.062 220.148H367.062L366.364 219.432ZM0.604079 26.9138L1.30204 27.6299H1.30204L0.604079 26.9138ZM27.6362 0.567727L26.9383 -0.148409V-0.148409L27.6362 0.567727ZM393 2C393 0.34315 391.657 -1 390 -1V1C390.552 1 391 1.44771 391 2H393ZM393 193.603V2H391V193.603H393ZM392.094 195.752C392.673 195.187 393 194.412 393 193.603H391C391 193.873 390.891 194.131 390.698 194.319L392.094 195.752ZM367.062 220.148L392.094 195.752L390.698 194.319L365.666 218.716L367.062 220.148ZM364.968 221C365.75 221 366.501 220.694 367.062 220.148L365.666 218.716C365.479 218.898 365.229 219 364.968 219V221ZM2.00001 221H364.968V219H2.00001V221ZM-1 218C-1 219.657 0.34316 221 2.00001 221V219C1.44772 219 1 218.552 1 218H-1ZM-1 28.346V218H1V28.346H-1ZM-0.0938809 26.1976C-0.673246 26.7623 -1 27.537 -1 28.346H1C1 28.0764 1.10891 27.8181 1.30204 27.6299L-0.0938809 26.1976ZM26.9383 -0.148409L-0.0938813 26.1976L1.30204 27.6299L28.3342 1.28386L26.9383 -0.148409ZM29.0322 -1C28.2499 -1 27.4985 -0.694421 26.9383 -0.148409L28.3342 1.28386C28.5209 1.10186 28.7714 1 29.0322 1V-1ZM390 -1H29.0322V1H390V-1Z'
              fill='#595A5A'
              mask='url(#path-1-inside-1_1138_7708)'
            />
          </svg>
        )}
        {bgType === 7 && (
          <svg
            preserveAspectRatio='none'
            width='392'
            height='220'
            viewBox='0 0 392 220'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <mask id='path-1-inside-1_1138_7702' fill='white'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M0 2C0 0.895431 0.895416 0 2 0H390C391.105 0 392 0.895429 392 2V218C392 219.105 391.105 220 390 220H28.8926C28.3693 220 27.8668 219.795 27.493 219.429L0.600433 193.085C0.216431 192.709 0 192.194 0 191.656V2Z'
              />
            </mask>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M0 2C0 0.895431 0.895416 0 2 0H390C391.105 0 392 0.895429 392 2V218C392 219.105 391.105 220 390 220H28.8926C28.3693 220 27.8668 219.795 27.493 219.429L0.600433 193.085C0.216431 192.709 0 192.194 0 191.656V2Z'
              fill='#0D0C0F'
            />
            <path
              d='M0.600433 193.085L1.30023 192.371L0.600433 193.085ZM27.493 219.429L28.1928 218.714L27.493 219.429ZM390 1H2V-1H390V1ZM391 218V2H393V218H391ZM28.8926 219H390V221H28.8926V219ZM26.7932 220.143L-0.0993347 193.799L1.30023 192.371L28.1928 218.714L26.7932 220.143ZM1 2V191.656H-1V2H1ZM-0.0993347 193.799C-0.675385 193.235 -1 192.463 -1 191.656H1C1 191.925 1.10822 192.183 1.30023 192.371L-0.0993347 193.799ZM28.8926 221C28.1076 221 27.354 220.692 26.7932 220.143L28.1928 218.714C28.3797 218.897 28.6309 219 28.8926 219V221ZM393 218C393 219.657 391.657 221 390 221V219C390.552 219 391 218.552 391 218H393ZM2 1C1.44772 1 1 1.44771 1 2H-1C-1 0.343146 0.34314 -1 2 -1V1ZM390 -1C391.657 -1 393 0.343143 393 2H391C391 1.44771 390.552 1 390 1V-1Z'
              fill='#595A5A'
              mask='url(#path-1-inside-1_1138_7702)'
            />
          </svg>
        )}
      </div>
      <span className={styles.cardTitle}>{title}</span>
      <span className={styles.cardText}>{text}</span>
    </div>
  )
}
