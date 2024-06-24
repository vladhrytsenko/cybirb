import React from 'react'
import { useContext, useEffect } from 'react'

import { MainContext } from '../../app/providers/MainContext'
import { WithScrollSmoother } from '../../app/providers/WithScrollSmoother'
import { BlogContext } from '../../app/providers/BlogContext'
import { BlogScreens } from '../../widgets/Screens/Blog'

export const Blog = () => {
  const { setCurrentPage } = useContext(MainContext)

  useEffect(() => {
    setCurrentPage('blog')
  }, [])

  return (
    <BlogContext.Provider value={{}}>
      {BlogScreens.map((screen, idx) => (
        <React.Fragment key={idx}>{screen}</React.Fragment>
      ))}
    </BlogContext.Provider>
  )
}
