import React from 'react'
import { useContext, useEffect } from 'react'

import { MainContext } from '../../app/providers/MainContext'
import { WithScrollSmoother } from '../../app/providers/WithScrollSmoother'
import { CybnestScreens } from '../../widgets/Screens/Cybnest'

export const Cybnest = () => {
  const { setCurrentPage } = useContext(MainContext)

  useEffect(() => {
    setCurrentPage('cybnest')
  }, [])

  return (
    <>
      {CybnestScreens.map((screen, idx) => (
        <React.Fragment key={idx}>{screen}</React.Fragment>
      ))}
    </>
  )
}
