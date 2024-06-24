import React, { FC } from 'react'

interface IProps {
  type: number
}

export const TabClip: FC<IProps> = ({ type }) => {
  return type === 2 ? (
    <svg
      preserveAspectRatio="none"
      width="165"
      height="34"
      viewBox="0 0 165 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M152.387 31.347C151.843 32.6508 150.569 33.5 149.156 33.5L15.7933 33.5C14.4129 33.5 13.1614 32.6886 12.5981 31.4284L0.974536 5.42843C-0.0605289 3.11317 1.63367 0.499986 4.16977 0.499986L159.998 0.499999C162.496 0.5 164.19 3.04153 163.229 5.34705L152.387 31.347Z"
        fill="#0D0C0F"
        stroke="#595A5A"
      />
    </svg>
  ) : (
    <svg
      preserveAspectRatio="none"
      width="118"
      height="34"
      viewBox="0 0 118 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.6132 2.65295C13.1569 1.34916 14.431 0.500003 15.8436 0.500003L102.207 0.500019C103.587 0.50002 104.839 1.31137 105.402 2.57156L117.025 28.5716C118.061 30.8868 116.366 33.5 113.83 33.5L5.0018 33.5C2.50386 33.5 0.810021 30.9585 1.77141 28.6529L12.6132 2.65295Z"
        fill="#0D0C0F"
        stroke="#595A5A"
      />
    </svg>
  )
}
