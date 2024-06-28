import React, { useContext, useEffect } from "react"

import { MainContext } from "../../app/providers/MainContext"
import { AboutScreens } from "../../widgets/Screens/About"

export const About = () => {
  const { setCurrentPage } = useContext(MainContext)

  useEffect(() => {
    setCurrentPage("about")
  }, [])

  return (
    <>
      {AboutScreens.map((screen, idx) => (
        <React.Fragment key={idx}>{screen}</React.Fragment>
      ))}
    </>
  )
}
