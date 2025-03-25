'use client'
import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

interface Props { }

function ScrollTriggerDemo(props: Props) {
    const { } = props
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
        const tw = gsap.timeline({
            scrollTrigger: {
                markers: true,
                trigger: '#rect',
                scrub: true,
                // pin: true,
                start: 'top center',
                end: 'bottom center',
            },
        })
        tw.from('#rect', {
            opacity: 0,
            duration: 2
        })

    }, [])
    return (
        <div className='h-screen w-full'>
            <div className='h-screen bg-slate-500'></div>
            <div id='rect' className='w-80 h-80 bg-black'></div>
            <div className='h-screen bg-slate-500'></div>
        </div>
    )
}

export default ScrollTriggerDemo
