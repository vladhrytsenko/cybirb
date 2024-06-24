import React from 'react'
import { useContext, useEffect, useState } from 'react'

import { MainContext } from '../../app/providers/MainContext'
import { WithScrollSmoother } from '../../app/providers/WithScrollSmoother'
import { BlogContext } from '../../app/providers/BlogContext'
import { BlogScreens } from '../../widgets/Screens/Blog'
import { ArticleContext } from '../../app/providers/ArticleContext'
import { ArticleScreens } from '../../widgets/Screens/Article'

export const Article = () => {
  const { setCurrentPage } = useContext(MainContext)

  useEffect(() => {
    setCurrentPage('article')
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
    <ArticleContext.Provider value={{}}>
      {ArticleScreens.map((screen, idx) => (
        <React.Fragment key={idx}>{screen}</React.Fragment>
      ))}
    </ArticleContext.Provider>
  )
}
