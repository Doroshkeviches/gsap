'use client'
import { gsap } from 'gsap';
import React, { useEffect } from 'react'
import { TextPlugin } from "gsap/TextPlugin"
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
interface Props { }

function TextScrollDemo(props: Props) {
    gsap.registerPlugin(TextPlugin, ScrollTrigger);

    const { } = props
    useGSAP(() => {
        const tw = gsap.timeline({
            delay: 0.6,
            scrollTrigger: {
                trigger: '#trigger',
                end: '+=3000px',
                scrub: true,
                pin: true,

            },
            markers: true,
        })
        gsap.set('#textScroll', {
            opacity: 0
        })
        gsap.set('#textScroll1', {
            opacity: 0
        })
        gsap.set('#textScroll2', {
            opacity: 0
        })
        tw.to('#textScroll', {
            duration: 4,
            delay: 2,
            opacity: 1,
            text: {
                value: "Я вас не слышу  ",
                newClass: 'text-red-600',
                padSpace: true,
            },
            ease: "none",
            overwrite: 'auto'

        })
            .to('#textScroll1', {
                duration: 5,
                opacity: 1,
                delay: 1,
                text: {
                    value: "ГРОООМЧЕ ",
                    newClass: 'text-amber-600',
                    padSpace: true,
                },
                ease: "none",
            })
            .to('#textScroll2', {
                duration: 2,
                opacity: 1,
                delay: 1,
                text: {
                    value: "правильно - СПАНЧ-БОБ",
                    newClass: 'text-lime-600',
                    padSpace: true,
                },
                ease: "none",
            })

    }, [])

    return (
        <div>
            <div id='trigger' className='h-screen flex items-center justify-center '>
                <div className='w-128'>
                    <h1  >Кто проживает на дне окена ? <span id="textScroll"></span> <span id="textScroll1"></span> <span id="textScroll2"></span></h1>

                </div>
            </div >

        </div>
    )
}

export default TextScrollDemo
