'use client'

//Анимация для "Анимация css свойств  – opacity"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'

interface Props { }

function Opacity(props: Props) {
    const { } = props

    useGSAP(() => {
        const tl = gsap.timeline({
            repeat: -1,
        })
        tl.to('#rect', {
            opacity: 0,
            duration: 1,
        })
            .to('#rect', {
                opacity: 1,
                duration: 1,
            })

        gsap.from('#rect', {
            opacity: 0,
            repeat: -1,
            duration: 2,
            yoyo: true, //анимация проигрывается маятником
        })
    }, [])
    return (
        <div className='h-screen w-full'>
            <div id='rect' className='w-80 h-80 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-black'></div>
        </div>
    )
}

export default Opacity
