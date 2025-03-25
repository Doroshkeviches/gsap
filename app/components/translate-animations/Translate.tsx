'use client'

//Анимация для "Анимация css свойств  – translate"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

interface Props { }

function Translate(props: Props) {
    const { } = props

    useGSAP(() => {
        // const tl = gsap.timeline({
        //     repeat: -1
        // })
        // tl
        //     .from('#rect', {
        //         xPercent: 100,
        //         duration: 2,
        //     })
        //     .from('#rect', {
        //         xPercent: 0,
        //         duration: 2,
        //     })

        gsap.from('#rect', {
            xPercent: 100,
            repeat: -1,
            duration: 2,
            yoyo: true
        })

    }, [])
    return (
        <div className='h-screen w-full flex items-center justify-center'>
            <div id='rect' className='w-80 h-80  bg-black'></div>
        </div>
    )
}

export default Translate
