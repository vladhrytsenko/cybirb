import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { HomeContext } from '../../app/providers/HomeContext'
import { HomeScreens } from '../../widgets/Screens/Home'
import { MainContext } from '../../app/providers/MainContext'
import { WithScrollSmoother } from '../../app/providers/WithScrollSmoother'

export const Home = () => {
  const { setCurrentPage } = useContext(MainContext)

  useEffect(() => {
    setCurrentPage('home')
  }, [])

  const {
    setActiveScreen,
    setDirection,
    activeScreen,
    setPlayerActive,
    playerActive,
    pageLoaded,
  } = useContext(MainContext)

  return (
    <HomeContext.Provider value={{}}>
      {HomeScreens.map((screen, idx) => (
        <React.Fragment key={idx}>{screen}</React.Fragment>
      ))}
    </HomeContext.Provider>
  )
}
