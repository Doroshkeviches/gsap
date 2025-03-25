'use client'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { MorphSVGPlugin } from 'gsap-trial/all'
import React, { ChangeEvent, useEffect, useState } from 'react'

interface Props { }
type IDirection = 1 | -1
function Progressbar(props: Props) {
    const { } = props
    const [progressValue, setProgressValue] = useState<string>('');
    const [direction, setDirection] = useState<IDirection>(1);

    const [tween, setTween] = useState<gsap.core.Timeline | null>();
    const [tweenRight, setTweenRight] = useState<gsap.core.Timeline | null>();

    const handleProgressBarValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (progressValue > e.target.value) {
            setDirection(-1)
        } else {
            setDirection(1)
        }
        setProgressValue(e.target.value)
    }

    const ylitka1Path = "M8 20H19.5C22.5376 20 25 17.5376 25 14.5V12C25 10.3431 23.6569 9 22 9C20.3431 9 19 10.3431 19 12V14M19 14C19 17.3137 16.3137 20 13 20C9.68629 20 7 17.3137 7 14C7 10.6863 9.68629 9 13 9C16.3137 9 19 10.6863 19 14ZM17.5 4.5L21 9M22.5 3.5L23 9"
    const ylitka2Path = "M8 20H19.5C22.5376 20 25 17.5376 25 14.5V12C25 10.3431 23.6569 9 22 9C20.3431 9 19 10.3431 19 12V14M19 14C19 17.3137 16.3137 20 13 20C9.68629 20 7 17.3137 7 14C7 10.6863 9.68629 9 13 9C16.3137 9 19 10.6863 19 14ZM17.5 4.5L21 9M22.5 3.5L23 9"
    const ylitka3Path = "M4 20H15.5C18.5376 20 21 17.5376 21 14.5V12.9737C21 12.3288 20.9423 11.6602 20.5945 11.1171C20.0688 10.2963 19.2755 10 18 10C16.3431 10 15 10.3431 15 12V14M15 14C15 17.3137 12.3137 20 9 20C5.68629 20 2.5 17.3137 2.5 14C2.5 10.6863 5.68629 9 9 9C12.3137 9 15 10.6863 15 14ZM12.5 6L17 10M16.5 4.5L19 10"

    const zayac1Path = "M21.1618 12.0725C21.0324 12.2462 20.8964 12.4091 20.6947 12.4906C19.8889 12.8161 17.72 12.7592 18.1576 14.4568C20.4274 15.7829 18.7648 19.057 17.312 19.6509C14.5299 20.7884 15.2668 16.2734 12.558 16.6605C10.2266 16.9937 8.25785 22.0029 5.92645 21.1221C3.11203 20.0589 7.03795 16.2052 3.80815 15.0326C0.15683 13.9675 2.89493 9.94939 5.98043 12.2436C6.17283 12.0692 7.37001 10.5381 9.67966 9.76257C12.072 8.95926 13.6526 9.29784 13.6509 9.28399C13.0759 8.07151 10.3146 6.76186 10.2522 5.06943C10.2291 4.44247 10.8734 4.06837 11.4987 4.01715C14.1054 3.80361 16.496 4.09566 17.1154 5.96899C19.9542 5.62044 23.1405 9.41662 21.1618 12.0725Z"
    const zayac2Path = "M21.1777 11.3703C21.0607 11.5526 20.9365 11.7246 20.7409 11.8199C19.9598 12.2008 18.4008 11.9811 18.9557 13.644C21.3124 14.8086 23.9451 17.671 22.5373 18.3648C19.8413 19.6936 15.5901 15.9721 12.9149 16.5473C10.6125 17.0423 5.90925 21.4348 3.52209 20.7189C0.640352 19.8546 7.37655 16.4781 4.07283 15.5336C0.356106 14.7259 2.80724 10.5266 6.04526 12.5999C6.22503 12.4125 7.31249 10.8017 9.56242 9.86692C11.8929 8.89869 13.4933 9.12618 13.4906 9.11248C12.8306 7.93976 9.18504 6.60733 8.78419 4.85079C8.6446 4.23913 9.26919 3.80341 9.89169 3.72521C12.6765 3.3754 15.9636 3.73045 16.7155 5.56389C19.523 5.01816 22.9663 8.58284 21.1777 11.3703Z"
    const zayac3Path = "M20.9725 13.8838C20.8098 14.0268 20.6429 14.1579 20.4287 14.1956C19.5728 14.3464 18.1348 13.7055 18.2098 15.4569C20.1543 17.226 21.8959 20.7032 20.3515 20.9821C17.3937 21.5163 14.3329 16.7672 11.6028 16.5827C9.25311 16.4239 5.7761 19.0402 3.67875 17.694C1.14688 16.0689 7.28575 15.146 4.37033 13.3275C1.02023 11.5266 4.53391 8.16558 7.07499 11.0512C7.29946 10.9205 7.80111 9.51543 10.2215 9.23703C12.7286 8.94867 14.2043 9.60848 14.2055 9.59458C13.8943 8.28534 10.7572 5.99969 10.8561 4.20071C10.8905 3.57426 11.611 3.32758 12.2309 3.424C15.0043 3.85533 18.0662 5.10268 18.2836 7.07233C21.1327 7.3216 23.4601 11.6973 20.9725 13.8838Z"
    const zayac4Path = "M21.115 13.1921C20.9654 13.3487 20.8106 13.4938 20.6005 13.5501C19.761 13.7749 17.6152 13.4542 17.8427 15.1924C19.9339 16.7853 20.8847 19.8323 19.3704 20.2448C16.4704 21.0348 14.7521 16.6432 12.0163 16.6973C9.66163 16.7439 7.09707 21.4758 4.89038 20.3175C2.22651 18.9192 6.59282 15.5726 3.53001 14.0151C0.0356922 12.5131 3.24307 8.85857 6.02598 11.5117C6.2382 11.362 7.61304 9.98829 10 9.5C12.4724 8.99423 14 9.52291 14 9.50896C13.5713 8.2183 11.6644 5.81661 12.0937 3.89732C12.2306 3.28506 12.8811 2.98279 13.504 3.05766C15.922 3.34828 17.4579 4.71479 17.8427 6.64088C20.7027 6.64088 23.4026 10.7971 21.115 13.1921Z"

    gsap.registerPlugin(MorphSVGPlugin)
    gsap.registerPlugin(GSDevTools)
    const handleYlitkaAnimation = () => {
        if (tween?.isActive() || typeof tweenRight === 'undefined') {
            return
        }
        if (tween?.isActive() === false) {
            setTween(null)
            return
        }
        const tl = gsap.timeline({ defaults: { duration: 0.2 } })
        setTween(tl)
        tl.to("#ylitka1", { morphSVG: "#ylitka2" })
            .to("#ylitka1", { morphSVG: "#ylitka3" })
            .to("#ylitka1", { morphSVG: "#ylitka1" })

    }

    const handleZayacAnimation = () => {
        if (tweenRight?.isActive() || typeof tweenRight === 'undefined') {
            return
        }
        if (tweenRight?.isActive() === false) {
            setTweenRight(null)
            return
        }
        const tl = gsap.timeline({ defaults: { duration: 0.1 } })
        setTweenRight(tl)
        tl.to("#zayac1", { morphSVG: "#zayac2" })
            .to("#zayac1", { morphSVG: "#zayac3" })
            .to("#zayac1", { morphSVG: "#zayac4" })
            .to("#zayac1", { morphSVG: "#zayac1" })

    }
    useEffect(() => {
        const tl = gsap.timeline()
        setTween(tl)
        setTweenRight(tl)

    }, [])
    useEffect(() => {
        if (direction === 1) {
            handleZayacAnimation()
        } else {
            handleYlitkaAnimation()
        }
    }, [progressValue, direction])
    return (
        <div className='w-full h-screen flex items-center justify-center'>

            <div className='flex'>
                <svg viewBox="0 0 24 24" width={48} height={48}>
                    <defs>
                        <path d={ylitka2Path} id='ylitka2' fill='white' />
                        <path d={ylitka3Path} id='ylitka3' fill='white' />
                    </defs>
                    <path d={ylitka1Path} id='ylitka1' fill='white' />

                </svg>

                <input type="range" min="0" max="100" value={progressValue} onChange={handleProgressBarValue} />
                <svg viewBox="0 0 24 24" width={48} height={48}>
                    <defs>
                        <path d={zayac2Path} id='zayac2' fill='white' />
                        <path d={zayac3Path} id='zayac2' fill='white' />
                        <path d={zayac4Path} id='zayac2' fill='white' />
                    </defs>

                    <path d={zayac1Path} id='zayac1' fill='white' />
                </svg>

            </div>
        </div>
    )
}

export default Progressbar
