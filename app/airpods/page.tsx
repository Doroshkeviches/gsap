'use client'
import React from 'react';
import { Canvas } from "@react-three/fiber";
import Scene from './Scene';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger, TextPlugin } from 'gsap/all';
import Text from './components/Text';

const page = () => {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.registerPlugin(TextPlugin)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.TEXT_CONTAINER_1',
                start: 'top center',
                end: 'bottom center',
                // markers: true,
                pin: true,
                scrub: true,

            }
        })
        tl
            .to('.TEXT_1', {
                opacity: 1,
            })
            .to('.TEXT_1', {
                text: {
                    value: 'Get the highlights',
                    speed: 2
                },
                easy: 'none',
            })
            .to('.TEXT_1', {
                opacity: 0,
                duration: 1 / 4,
            })
            .to('.TEXT_2', {
                opacity: 1,
                duration: 3 / 4
            })

            .to('.TEXT_2', {
                opacity: 0,
                duration: 1 / 4
            })
            .to('.TEXT_3', {
                opacity: 1,
                duration: 3 / 4
            })


    }, [])


    return (
        <div className='bg-airpodsBackground'>
            <div className={'h-screen w-full  relative'}>
                <div className='w-full h-screen flex flex-col justify-center items-center pb-60'>
                    <h1 className='text-9xl font-major text-white'>Airpods max</h1>
                </div>
                <div className='absolute top-0 z-10 w-full h-screen AIRPODS-CONTAINER'>
                    <Canvas shadows className='w-full h-screen'>
                        <Scene />
                    </Canvas>
                </div>
            </div>
            <div className='CONTAINER'>
                <div className='h-screen flex p-10 TEXT_CONTAINER_1 justify-between items-start'>
                    <div className='flex flex-col  gap-20'>
                        <Text text='Take a closer look' trigger='TEXT_1'></Text>
                        <Text text='Unheard-of sound.' trigger='TEXT_2'></Text>

                    </div>
                    <Text text='Everything designed in perfect harmony.' trigger='TEXT_3 w-1/3'></Text>
                </div>
            </div>
        </div>
    );
};

export default page;
