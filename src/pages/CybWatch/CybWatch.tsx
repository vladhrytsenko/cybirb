import React from 'react'
import { useContext, useEffect } from 'react'

import { MainContext } from '../../app/providers/MainContext'
import { WithScrollSmoother } from '../../app/providers/WithScrollSmoother'
import { CybWatchScreens } from '../../widgets/Screens/CybWatch'

export const CybWatch = () => {
  const { setCurrentPage } = useContext(MainContext)

  useEffect(() => {
    setCurrentPage('cybtrace')
  }, [])

  return (
    <>
      {CybWatchScreens.map((screen, idx) => (
        <React.Fragment key={idx}>{screen}</React.Fragment>
      ))}
    </>
  )
}
