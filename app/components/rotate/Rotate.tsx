'use client'

//Анимация для "Анимация css свойств  – rotate"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

interface Props { }

function Rotate(props: Props) {
    const { } = props

    useGSAP(() => {
        const tl = gsap.timeline()
        tl
            .from('#rect', {
                opacity: 0,
                duration: 2
            })
            .from('#rect', {
                translateX: 400,

            })
            .from('#rect', {
                rotate: 180,
                duration: 2

            })

      

    }, [])
    return (
        <div className='h-screen w-full'>
            <div id='rect' className='w-80 h-80 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  bg-black'></div>
        </div>
    )
}

export default Rotate
