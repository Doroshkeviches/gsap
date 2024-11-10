'use client'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react'

interface Props { }

function OpacityAnimation(props: Props) {
    const { } = props
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const trigger = document.querySelector('.trigger')
        const itemsArray = gsap.utils.toArray('.item')
        itemsArray.forEach((it: any,index) => {
            gsap.set(it, {
                opacity: 0,
                yPercent: 200
            })
            const tw = gsap.timeline({
                scrollTrigger: {
                    trigger: trigger,
                    markers: true,
                    start: 'top center',
                    end: 'top center'
                }
            })
            tw.to(it, {
                opacity: 1,
                delay: index / 10,
                duration: 0.5,
                yPercent: 0,
            })
        })
    }, [])
    return (
        <>
            <div className='w-full h-screen'></div>
            <div className='flex flex-col items-center gap-8 trigger'>
                <div className='p-4 border-2 border-white w-96 item'></div>
                <div className='p-4 border-2 border-white w-96 item'></div>
                <div className='p-4 border-2 border-white w-96 item'></div>
                <div className='p-4 border-2 border-white w-96 item'></div>
                <div className='p-4 border-2 border-white w-96 item'></div>
            </div>
            <div className='w-full h-screen'></div>
        </>
    )
}

export default OpacityAnimation
