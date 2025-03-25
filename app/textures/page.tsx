'use client'
import React, { Suspense, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { div } from 'framer-motion/client'
import { useProgress } from "@react-three/drei";
import Scene from './Scene';

interface Props { }




function Page(props: Props) {
    const { } = props
 


    return (

        <div className='h-screen'>
            <Suspense fallback={<Loader />}>
                <Scene />
            </Suspense>
        </div>


    )
}

export default Page

const Loader = () => {
    const { progress } = useProgress(); // Получаем процент загрузки
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black text-white">
            <p>Загрузка: {progress.toFixed(2)}%</p>
        </div>
    );
};
