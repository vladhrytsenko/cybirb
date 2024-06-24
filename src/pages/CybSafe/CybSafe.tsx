import React from 'react'
import { useContext, useEffect } from 'react'
import { MainContext } from '../../app/providers/MainContext'
import { CybSafeScreens } from '../../widgets/Screens/CybSafe'

export const CybSafe = () => {
  const { setCurrentPage } = useContext(MainContext)

  useEffect(() => {
    setCurrentPage('cybsafe')
  }, [])

  return (
    <>
      {CybSafeScreens.map((screen, idx) => (
        <React.Fragment key={idx}>{screen}</React.Fragment>
      ))}
    </>
  )
}
