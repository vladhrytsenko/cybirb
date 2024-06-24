import { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import styles from './Preloader.module.scss'
import { MainContext } from '../../app/providers/MainContext'
import gsap from 'gsap'
import clsx from 'clsx'
import { preloader } from './function'
import { TextPlugin } from 'gsap/all'

gsap.registerPlugin(TextPlugin)

export const Preloader = () => {
  const { pageLoaded, setPageLoaded } = useContext(MainContext)

  const [loading, setLoading] = useState<number>(0)
  const [circlesRotating, setCirclesRotating] = useState<boolean>(false)
  const [firstPartImages, setFirstPartImages] = useState<boolean>(false)
  const [secondPartImages, setSecondPartImages] = useState<boolean>(false)
  const [textStep, setTextStep] = useState<number>(0)

  const [closed, setClosed] = useState<boolean>(false)

  const ref = useRef<HTMLDivElement>(null)
  const range = useRef<SVGSVGElement>(null)
  const logo = useRef<SVGSVGElement>(null)
  const text = useRef<HTMLDivElement>(null)
  const counterLabel = useRef<HTMLDivElement>(null)
  const imageLt = useRef<HTMLImageElement>(null)
  const imageLb = useRef<HTMLImageElement>(null)
  const imageRt = useRef<HTMLImageElement>(null)
  const imageRb = useRef<HTMLImageElement>(null)
  const circlesOne = useRef<SVGSVGElement>(null)
  const circlesTwo = useRef<SVGSVGElement>(null)

  useEffect(() => {
    switch (textStep) {
      case 1:
        gsap.to(text.current, {
          text: {
            value: '// Security of information',
          },
        })
        break
      case 2:
        gsap.to(text.current, {
          text: {
            value: '// Neutralization attacks',
          },
        })
        break
      case 3:
        gsap.to(text.current, {
          text: {
            value: '// DATA Protection',
          },
        })
        break
      case 4:
        gsap.to(text.current, {
          text: {
            value: '',
          },
        })
        break
    }
  }, [textStep])

  useEffect(() => {
    loading === 100 && setPageLoaded(true)
  }, [loading])

  useEffect(() => {
    if (!pageLoaded) {
      document.body.classList.add('freezed')
    } else {
      ref.current?.classList.add(`${styles.loaded}`)

      setTimeout(() => {
        document.body.classList.remove('freezed')
        setClosed(true)
      }, 1000)
    }
  }, [pageLoaded])

  useEffect(() => {
    if (circlesRotating) {
      gsap.to(circlesOne.current, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'ease',
      })

      gsap.to(circlesTwo.current, {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.25,
        ease: 'ease',
      })
    } else if (!circlesRotating) {
      gsap.to(circlesOne.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        rotate: 0,
        ease: 'ease',
      })

      gsap.to(circlesTwo.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        rotate: 0,
        delay: 0.15,
        ease: 'ease',
      })
    }
  }, [circlesRotating])

  useEffect(() => {
    if (firstPartImages) {
      gsap.to(imageLb.current, {
        opacity: 1,
        duration: 0.45,
        ease: 'ease',
      })

      gsap.to(imageRt.current, {
        opacity: 1,
        duration: 0.45,
        ease: 'ease',
      })
    } else if (!firstPartImages) {
      gsap.to(imageLb.current, {
        opacity: 0,
        duration: 0.45,
        ease: 'ease',
      })

      gsap.to(imageRt.current, {
        opacity: 0,
        duration: 0.45,
        ease: 'ease',
      })
    }
  }, [firstPartImages])

  useEffect(() => {
    if (secondPartImages) {
      gsap.to(imageRb.current, {
        opacity: 1,
        duration: 0.45,
        ease: 'ease',
      })

      gsap.to(imageLt.current, {
        opacity: 1,
        duration: 0.45,
        ease: 'ease',
      })
    } else if (!secondPartImages) {
      gsap.to(imageRb.current, {
        opacity: 0,
        duration: 0.45,
        ease: 'ease',
      })

      gsap.to(imageLt.current, {
        opacity: 0,
        duration: 0.45,
        ease: 'ease',
      })
    }
  }, [secondPartImages])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // counter
      const tl1 = gsap.fromTo(
        '.preloader-counter',
        {
          textContent: 0,
        },
        {
          textContent: 100,
          duration: 8,
          ease: 'none',
          snap: { textContent: 1 },
          stagger: 1,
        }
      )

      tl1.eventCallback('onUpdate', () => {
        const percent = Number(tl1.progress().toFixed(2))
        const num = Number(Number(percent * 100).toFixed(2))
        setLoading(num)

        if (range.current) {
          range.current.style.transform = `translate(-${100 - num}%, 0)`
        }

        if (num >= 15 && num < 85) {
          if (!circlesRotating) {
            setCirclesRotating(true)
          }
        } else if (num >= 85) {
          setCirclesRotating(false)
          if (logo.current) {
            logo.current.classList.add(`${styles.loaded}`)
          }
        }

        // images
        if (num >= 20 && num < 55) {
          if (!firstPartImages) {
            setFirstPartImages(true)
          }
        } else if (num >= 55) {
          setFirstPartImages(false)
        }

        if (num >= 55 && num < 80) {
          if (!secondPartImages) {
            setSecondPartImages(true)
          }
        } else if (num >= 80) {
          setSecondPartImages(false)
        }

        if (num >= 25) {
          setTextStep(1)
        }

        if (num >= 45) {
          setTextStep(2)
        }

        if (num >= 65) {
          setTextStep(3)
        }

        if (num >= 85) {
          setTextStep(4)
        }
      })

      // circles
      const preloaderCircles = ref.current?.querySelectorAll(
        `.${styles.preloaderCircles}`
      )

      if (preloaderCircles) {
        Array.from(preloaderCircles).forEach((el, idx) => {
          gsap.to(el, {
            rotate: idx % 2 === 0 ? 360 : -360,
            repeat: -1,
            duration: 5,
            ease: 'none',
          })
        })
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      {!closed && (
        <div ref={ref} id="preloader" className={clsx(styles.preloader)}>
          <div className="container">
            <div ref={counterLabel} className={styles.preloaderLabel}>
              <span>
                [ <span className="preloader-counter"></span>% ]
              </span>
              <span>// loading</span>
            </div>
          </div>

          <img
            ref={imageLt}
            className={clsx(styles.preloaderCodeImage, styles.left, styles.top)}
            src="/images/Preloader/lt.png"
            alt=""
          />

          <img
            ref={imageLb}
            className={clsx(
              styles.preloaderCodeImage,
              styles.left,
              styles.bottom
            )}
            src="/images/Preloader/lb.png"
            alt=""
          />

          <img
            ref={imageRt}
            className={clsx(
              styles.preloaderCodeImage,
              styles.right,
              styles.top
            )}
            src="/images/Preloader/rt.png"
            alt=""
          />

          <img
            ref={imageRb}
            className={clsx(
              styles.preloaderCodeImage,
              styles.right,
              styles.bottom
            )}
            src="/images/Preloader/rb.png"
            alt=""
          />

          <span ref={text} className={styles.preloaderCenterText}></span>
          <svg
            ref={circlesOne}
            className={styles.preloaderCircles}
            width="220"
            height="220"
            viewBox="0 0 220 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="110" cy="110" r="109.5" stroke="#595A5A" />
            <rect x="10" y="53" width="8" height="8" fill="#4500DF" />
            <rect x="191" y="36" width="8" height="8" fill="#4500DF" />
            <rect x="136" y="210" width="8" height="8" fill="#4500DF" />
          </svg>
          <svg
            ref={circlesTwo}
            className={clsx(styles.preloaderCircles, styles.two)}
            width="148"
            height="146"
            viewBox="0 0 148 146"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M144.5 74C144.5 113.485 112.268 145.5 72.5 145.5C32.7322 145.5 0.5 113.485 0.5 74C0.5 34.5149 32.7322 2.5 72.5 2.5C112.268 2.5 144.5 34.5149 144.5 74Z"
              stroke="#595A5A"
            />
            <rect x="20" y="122" width="6" height="6" fill="#4500DF" />
            <rect x="142" y="78" width="6" height="6" fill="#4500DF" />
            <rect x="73" width="6" height="6" fill="#4500DF" />
          </svg>

          <svg
            ref={range}
            className={styles.preloaderRange}
            preserveAspectRatio="none"
            width="1686"
            height="41"
            viewBox="0 0 1686 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2531_5756)">
              <rect
                width="1686"
                height="41"
                transform="matrix(1 0 0 -1 0 41)"
                fill="#0D0C0F"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 814.936 -1419.52)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 820.593 -1413.86)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 826.249 -1408.21)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 831.906 -1402.55)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 837.562 -1396.89)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 843.22 -1391.24)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 848.877 -1385.58)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 854.533 -1379.92)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 860.19 -1374.27)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 865.848 -1368.61)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 871.504 -1362.95)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 877.161 -1357.3)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 882.817 -1351.64)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 888.475 -1345.98)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 894.132 -1340.32)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 899.788 -1334.67)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 905.445 -1329.01)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 911.103 -1323.35)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 916.759 -1317.7)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 922.416 -1312.04)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 928.072 -1306.38)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 933.729 -1300.73)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 939.387 -1295.07)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 945.043 -1289.41)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 950.7 -1283.76)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 956.356 -1278.1)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 962.014 -1272.44)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 967.671 -1266.79)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 973.327 -1261.13)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 978.984 -1255.47)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 984.642 -1249.82)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 990.298 -1244.16)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 995.955 -1238.5)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1001.61 -1232.84)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1007.27 -1227.19)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1012.93 -1221.53)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1018.58 -1215.87)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1024.24 -1210.22)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1029.9 -1204.56)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1035.55 -1198.9)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1041.21 -1193.25)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1046.87 -1187.59)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1052.52 -1181.93)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1058.18 -1176.28)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1063.84 -1170.62)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1069.49 -1164.96)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1075.15 -1159.31)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1080.81 -1153.65)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1086.46 -1147.99)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1092.12 -1142.33)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1097.78 -1136.68)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1103.44 -1131.02)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1109.09 -1125.36)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1114.75 -1119.71)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1120.41 -1114.05)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1126.06 -1108.39)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1131.72 -1102.74)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1137.38 -1097.08)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1143.03 -1091.42)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1148.69 -1085.77)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1154.35 -1080.11)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1160 -1074.45)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1165.66 -1068.8)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1171.32 -1063.14)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1176.97 -1057.48)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1182.63 -1051.83)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1188.29 -1046.17)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1193.94 -1040.51)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1199.6 -1034.85)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1205.26 -1029.2)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1210.92 -1023.54)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1216.57 -1017.88)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1222.23 -1012.23)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1227.89 -1006.57)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1233.54 -1000.91)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1239.2 -995.257)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1244.86 -989.6)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1250.51 -983.943)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1256.17 -978.286)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1261.83 -972.629)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1267.48 -966.972)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1273.14 -961.315)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1278.8 -955.659)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1284.45 -950.002)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1290.11 -944.345)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1295.77 -938.688)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1301.42 -933.031)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1307.08 -927.374)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1312.74 -921.717)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1318.4 -916.061)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1324.05 -910.404)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1329.71 -904.747)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1335.37 -899.09)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1341.02 -893.433)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1346.68 -887.776)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1352.34 -882.12)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1357.99 -876.463)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1363.65 -870.806)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1369.31 -865.149)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1374.96 -859.492)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1380.62 -853.835)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1386.28 -848.178)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1391.93 -842.522)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1397.59 -836.865)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1403.25 -831.208)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1408.91 -825.551)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1414.56 -819.894)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1420.22 -814.237)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1425.88 -808.58)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1431.53 -802.924)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1437.19 -797.267)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1442.85 -791.61)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1448.5 -785.953)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1454.16 -780.296)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1459.82 -774.639)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1465.47 -768.982)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1471.13 -763.326)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1476.79 -757.669)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1482.44 -752.012)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1488.1 -746.355)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1493.76 -740.698)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1499.42 -735.041)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1505.07 -729.384)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1510.73 -723.728)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1516.39 -718.071)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1522.04 -712.414)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1527.7 -706.757)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1533.36 -701.1)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1539.01 -695.443)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1544.67 -689.786)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1550.33 -684.13)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1555.98 -678.473)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1561.64 -672.816)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1567.3 -667.159)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1572.95 -661.502)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1578.61 -655.845)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1584.27 -650.188)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1589.92 -644.532)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1595.58 -638.875)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1601.24 -633.218)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1606.9 -627.561)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1612.55 -621.904)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1618.21 -616.247)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1623.87 -610.591)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1629.52 -604.934)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1635.18 -599.277)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1640.84 -593.62)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1646.49 -587.963)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1652.15 -582.306)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1657.81 -576.649)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1663.46 -570.993)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1669.12 -565.336)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1674.78 -559.679)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1680.43 -554.022)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1686.09 -548.365)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1691.75 -542.708)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1697.4 -537.051)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1703.06 -531.395)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1708.72 -525.738)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1714.38 -520.081)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1720.03 -514.424)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1725.69 -508.767)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1731.35 -503.11)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1737 -497.453)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1742.66 -491.797)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1748.32 -486.14)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1753.97 -480.483)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1759.63 -474.826)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1765.29 -469.169)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1770.94 -463.512)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1776.6 -457.855)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1782.26 -452.199)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1787.91 -446.542)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1793.57 -440.885)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1799.23 -435.228)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1804.88 -429.571)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1810.54 -423.914)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1816.2 -418.257)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1821.86 -412.601)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1827.51 -406.944)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1833.17 -401.287)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1838.83 -395.63)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1844.48 -389.973)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1850.14 -384.316)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1855.8 -378.659)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1861.45 -373.003)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1867.11 -367.346)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1872.77 -361.689)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1878.42 -356.032)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1884.08 -350.375)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1889.74 -344.718)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1895.39 -339.062)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1901.05 -333.405)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1906.71 -327.748)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1912.37 -322.091)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1918.02 -316.434)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1923.68 -310.777)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1929.34 -305.12)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1934.99 -299.464)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1940.65 -293.807)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1946.31 -288.15)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1951.96 -282.493)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 1957.62 -276.836)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 2077.55 -156.904)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 2083.21 -151.247)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 2088.87 -145.59)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 2094.52 -139.933)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 2100.18 -134.277)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 2105.84 -128.62)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 2111.49 -122.963)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 2117.15 -117.306)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 2122.81 -111.649)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 2128.46 -105.992)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 2134.12 -100.335)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 2139.78 -94.6786)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 2145.43 -89.0218)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 2151.09 -83.3649)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 2156.75 -77.708)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 2162.41 -72.0512)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 2168.06 -66.3943)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 2173.72 -60.7375)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 2179.38 -55.0806)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 2185.03 -49.4238)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 2190.69 -43.7669)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 2196.35 -38.1101)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 2202 -32.4532)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 2207.66 -26.7963)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 2213.32 -21.1395)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 2218.97 -15.4827)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 2224.63 -9.82581)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 2230.29 -4.16895)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 2235.94 1.48792)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 2241.6 7.14478)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 2247.26 12.8016)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 2252.92 18.4585)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 2258.57 24.1154)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 2264.23 29.7722)"
                fill="#272629"
              />
              <rect
                width="2006"
                height="4"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 2269.88 35.429)"
                fill="#272629"
              />
            </g>
            <defs>
              <clipPath id="clip0_2531_5756">
                <rect
                  width="1686"
                  height="41"
                  fill="white"
                  transform="matrix(1 0 0 -1 0 41)"
                />
              </clipPath>
            </defs>
          </svg>
          <svg
            ref={logo}
            className={styles.preloaderLogo}
            width="64"
            height="65"
            viewBox="0 0 64 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.735913 0C0.32948 0 0 0.329478 0 0.73591V45.4446C0 45.6682 0.101686 45.8797 0.276349 46.0193L23.814 64.8389C23.9445 64.9432 24.1066 65 24.2736 65H40.68C40.8552 65 41.0245 64.9376 41.1577 64.8239L63.1942 46.0187C63.358 45.8789 63.4524 45.6743 63.4524 45.4589V0.73591C63.4524 0.329478 63.1229 0 62.7165 0H0.735913ZM6.96391 8.1068C6.96391 7.90359 7.12865 7.73885 7.33187 7.73885H18.4657C18.5614 7.73885 18.6532 7.77609 18.7219 7.84268L43.3476 31.7269L55.6063 44.0002C55.6752 44.0691 55.7139 44.1627 55.7139 44.2602V51.478C55.7139 51.6812 55.5492 51.846 55.346 51.846L38.78 51.846L20.4421 51.846C20.3586 51.846 20.2776 51.8176 20.2123 51.7654L7.10209 41.2838C7.01476 41.2139 6.96391 41.1082 6.96391 40.9964L6.96391 8.1068Z"
              fill="#4500DF"
            />
            <path
              d="M36.615 36.1605C36.7111 36.1605 36.8034 36.1981 36.8722 36.2652L43.461 42.7018C43.697 42.9323 43.5338 43.333 43.2039 43.333L25.8139 43.333C25.73 43.333 25.6486 43.3043 25.5832 43.2517L16.3873 35.8535C16.3005 35.7836 16.25 35.6782 16.25 35.5668L16.25 18.7039C16.25 18.3736 16.6516 18.2106 16.8819 18.4475L23.3422 25.0962C23.409 25.1649 23.4463 25.2569 23.4463 25.3527L23.4463 30.4657C23.4463 30.6587 23.5334 30.8418 23.6841 30.9657L29.9291 36.0084C30.0487 36.1066 30.1996 36.1605 30.3555 36.1605L36.615 36.1605Z"
              fill="white"
            />
          </svg>
        </div>
      )}
    </>
  )
}
