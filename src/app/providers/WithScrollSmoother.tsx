import { FC, ReactNode, useContext, useEffect, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { MainContext } from './MainContext'
import Footer from '../../widgets/Footer/Footer'

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText)

interface IProps {
  children: ReactNode
}

export const WithScrollSmoother: FC<IProps> = ({ children }) => {
  const { setActiveScreen, pageLoaded, hash } = useContext(MainContext)

  useEffect(() => {
    if (hash !== '' && pageLoaded) {
      if (document.querySelector(hash)) {
        const querySection = document.querySelector<HTMLDivElement>(hash)

        if (querySection) {
          window.scrollTo({
            left: 0,
            top: querySection.offsetTop,
            behavior: 'smooth',
          })
        }
      }
    }
  }, [hash, pageLoaded])

  useEffect(() => {
    if (ScrollSmoother) {
      ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 0.75,
      })
    }
  }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const splitTexts = Array.from(
        document.querySelectorAll('.section-text-block p')
      )

      splitTexts.map((text) => {
        const split: any = new SplitText(text, {
          type: 'words',
        })

        split.elements.forEach((element: HTMLDivElement) => {
          const words = Array.from(
            element.querySelectorAll<HTMLDivElement>('div')
          )

          words.map((word, idx) => {
            const el = word as HTMLDivElement

            el.dataset.delay = `${idx * 0.015}`
            el.dataset.trigger = `.section-text-block`

            el.classList.add('reveal')
          })
        })
      })
    })

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    let ctx: any

    if (pageLoaded) {
      ctx = gsap.context(() => {
        const revealElements = Array.from(
          document.querySelectorAll<HTMLDivElement>('.reveal')
        )

        const chars = [
          '$',
          '%',
          '^',
          '&',
          '*',
          ')',
          '(',
          '-',
          '_',
          '=',
          '+',
          '!',
          '@',
          '#',
          '|',
          '~',
          '<',
          '>',
          '?',
        ]

        function getRandomInt(max: number) {
          return Math.floor(Math.random() * max)
        }

        const getRandomChars = (count: number) => {
          let string = ''

          for (let i = 0; i < count; i++) {
            string += chars[getRandomInt(chars.length)]
          }

          return string
        }

        const animateWord = (word: string, el: Element) => {
          let tl1 = gsap.timeline({
            defaults: {
              delay: 0,
              duration: 0.1,
              ease: 'expo.inOut',
            },
          })

          Array(20)
            .fill(null)
            .map(() => {
              tl1.to(
                el,
                {
                  innerText: getRandomChars(word.length),
                },
                '<50%'
              )
            })

          tl1.to(el, {
            innerText: word,
          })
        }

        revealElements.map((item) => {
          ScrollTrigger.create({
            trigger: item.dataset.trigger
              ? item.closest(item.dataset.trigger)
              : item,
            start: item.dataset.start ?? `top top+=75%`,
            onEnter: () =>
              gsap.to(item, {
                opacity: 1,
                rotate: 0,
                scale: 1,
                xPercent: 0,
                yPercent: 0,
                y: 0,
                x: 0,
                z: 0,
                duration: item.dataset.duration ? item.dataset.duration : 0.5,
                ease: item.dataset.ease ?? 'ease',
                delay: item.dataset.delay ? Number(item.dataset.delay) : 0,
              }),
          })
        })
      })
    }

    return ctx ? () => ctx.revert() : () => 0
  }, [pageLoaded])

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {children}
        <Footer />
      </div>
    </div>
  )
}
