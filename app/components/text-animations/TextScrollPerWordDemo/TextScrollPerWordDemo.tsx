'use client'
import { gsap } from 'gsap';
import React, { useEffect } from 'react'
import { TextPlugin } from "gsap/TextPlugin"
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
interface Props { }

function TextScrollPerWordDemo(props: Props) {
    gsap.registerPlugin(TextPlugin, ScrollTrigger);

    const { } = props
    useGSAP(() => {
        const tw = gsap.timeline({
            scrollTrigger: {
                trigger: '#trigger',
                end: '+=2000px',
                scrub: true,
                pin: true,

            },
            markers: true,
        })
        tw
            .from('#textScroll', {
                opacity: 0,

            })
            .from('#textScroll_1', {
                opacity: 0,

            })
            .from('#textScroll_2', {
                opacity: 0,
            })
            .from('#textScroll_3', {
                opacity: 0,
            })

    }, [])

    return (
        <div>
            <div id='trigger' className='h-screen flex items-center justify-center text-2xl'>
                <div className='w-128'>
                    <h1 id="textScroll">я здесь ищу только одного - <span id="textScroll_1">покоя,</span> <span id="textScroll_2">умиротворения </span> <span id="textScroll_3">и вот этой гармонии, от слияния с бесконечно вечным</span></h1>

                </div>
            </div >

        </div>
    )
}

export default TextScrollPerWordDemo
