import React from 'react'
import { useContext, useEffect } from 'react'

import { MainContext } from '../../app/providers/MainContext'
import { WithScrollSmoother } from '../../app/providers/WithScrollSmoother'
import { BugBountyScreens } from '../../widgets/Screens/BugBounty'

export const BugBounty = () => {
  const { setCurrentPage } = useContext(MainContext)

  useEffect(() => {
    setCurrentPage('bug-bounty')
  }, [])

  return (
    <>
      {BugBountyScreens.map((screen, idx) => (
        <React.Fragment key={idx}>{screen}</React.Fragment>
      ))}
    </>
  )
}
