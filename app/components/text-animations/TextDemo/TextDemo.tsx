'use client'
import { gsap } from 'gsap';
import React, { useEffect } from 'react'
import { TextPlugin } from "gsap/TextPlugin"
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
interface Props { }

function TextDemo(props: Props) {
    gsap.registerPlugin(TextPlugin);

    const { } = props
    useGSAP(() => {
        const tw = gsap.timeline({
            delay: 0.6,
            repeat: -1,
        })
        tw.to('#text', {
            duration: 2,
            text: {
                value: "Я вас не слышу  ",
                newClass: 'text-red-600',
                padSpace: true,
            },
            ease: "none",
            overwrite: 'auto'

        })
            .to('#text1', {
                duration: 2,
                text: {
                    value: "ГРОООМЧЕ ",
                    newClass: 'text-amber-600',
                    padSpace: true,
                },
                ease: "none",
            })
            .to('#text2', {
                duration: 2,
                text: {
                    value: "правильно - СПАНЧ-БОБ",
                    newClass: 'text-lime-600',
                    padSpace: true,
                },
                ease: "none",
            })

    }, [])

    return (
        <h1  >Кто проживает на дне окена ? <span id="text"></span> <span id="text1"></span> <span id="text2"></span></h1>
    )
}

export default TextDemo
