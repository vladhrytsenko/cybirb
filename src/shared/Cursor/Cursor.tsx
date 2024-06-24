import { useEffect, useRef, useState } from 'react'
import './Cursor.scss'
// import MouseFollower from 'mouse-follower'

export const Cursor = () => {
  const [init, setInit] = useState<boolean>(false)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!init) {
      // const cursor = new MouseFollower({
      //   el: cursorRef.current,
      //   speed: 0.3,
      //   stateDetection: {
      //     '-artist-card': '.artist-slider-card',
      //     '-record-cover': '.record-cover',
      //   },
      // })
      // setInit(true)
    }
  }, [init])

  return (
    <div ref={cursorRef} className="cursor">
      <div></div>
    </div>
  )
}
