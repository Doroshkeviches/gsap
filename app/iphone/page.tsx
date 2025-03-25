'use client'
import React from 'react';
import { Canvas } from "@react-three/fiber";
import Scene from './Scene';

const page = () => {
    return (
        <>
            <div className='h-screen' />
            <div className={'h-screen w-full  relative IPHONE_CONTAINER'}>
                <Canvas shadows className='w-full h-screen'>
                    <Scene />
                </Canvas>
            </div>
            <div className='h-screen' />
        </>

    );
};

export default page;
