import React from 'react'
import { useContext, useEffect } from 'react'

import { MainContext } from '../../app/providers/MainContext'
import { WithScrollSmoother } from '../../app/providers/WithScrollSmoother'
import { CybTraceScreens } from '../../widgets/Screens/CybTrace'

export const CybTrace = () => {
  const { setCurrentPage } = useContext(MainContext)

  useEffect(() => {
    setCurrentPage('cybtrace')
  }, [])

  return (
    <>
      {CybTraceScreens.map((screen, idx) => (
        <React.Fragment key={idx}>{screen}</React.Fragment>
      ))}
    </>
  )
}
