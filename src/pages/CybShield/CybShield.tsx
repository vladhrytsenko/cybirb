import React from 'react'
import { useContext, useEffect } from 'react'
import { MainContext } from '../../app/providers/MainContext'
import { CybShieldScreens } from '../../widgets/Screens/CybShield'

export const CybShield = () => {
  const { setCurrentPage } = useContext(MainContext)

  useEffect(() => {
    setCurrentPage('cybshield')
  }, [])

  return (
    <>
      {CybShieldScreens.map((screen, idx) => (
        <React.Fragment key={idx}>{screen}</React.Fragment>
      ))}
    </>
  )
}
