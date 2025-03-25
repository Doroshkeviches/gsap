'use client'
import React from 'react';
import { Canvas } from "@react-three/fiber";
import Scene from './Scene';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger, TextPlugin } from 'gsap/all';

const page = () => {


    return (
        <>
         <div className='h-screen'>

</div>
        <div className={'h-screen w-full  relative CANVAS'}>
            <Canvas shadows className='w-full h-screen'>
                <Scene />
            </Canvas>
        </div>
        <div className='h-screen'>

        </div>
        </>

    );
};

export default page;
