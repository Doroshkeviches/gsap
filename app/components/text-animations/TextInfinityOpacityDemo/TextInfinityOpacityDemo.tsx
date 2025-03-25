'use client'
import { gsap } from 'gsap';
import React, { useEffect } from 'react'
import { TextPlugin } from "gsap/TextPlugin"
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { div } from 'framer-motion/client';
import { SplitText } from 'gsap-trial/all';
interface Props { }

function TextInfinityOpacityDemo(props: Props) {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(SplitText);
    const { } = props
    useGSAP(() => {

        const tl = gsap.timeline(),
            mySplitText = new SplitText("#animatedText"),
            chars = mySplitText.elements; //разбиваем текст по элементам

        gsap.from(chars, {
            duration: 0.2,
            opacity: 0,
            scale: 0,
            repeat: -1,
            repeatDelay: 5,
            stagger: 1, //добавляет ступенчатость анимации, каждый новый элемент появляется через 1 секунду

        });


    }, [])

    return (
        <div>
            <img className='w-full h-screen object-cover' src="https://www.success.com/wp-content/uploads/legacy/sites/default/files/main/articles/motivationquotes.jpg" alt="" />
            <div className='absolute top-1/2 left-24 transform  -translate-y-1/2 text-3xl font-bold'>
                <div id='animatedText'>Эй ты</div>
                <div id='animatedText'>Да, да ты</div>
                <div id='animatedText'>Немотивированный говно</div>
                <div id='animatedText'>Запомни!</div>
                <div id='animatedText'>Если обидели - не обижайся</div>
                <div id='animatedText'>Если ударили - не ударяйся</div>
                <div id='animatedText'>Ты не неудачник...</div>
                <div id='animatedText'>Ты....</div>
                <div id='animatedText'>УДАЧНИК!</div>
            </div>
        </div>
    )
}

export default TextInfinityOpacityDemo
