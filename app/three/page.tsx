'use client'
import React, { Suspense, useEffect, useState } from 'react'
import { Lusion } from './components/lusion/lusion'
import BaseExample from './components/base_example/BaseExample'
import { Kitchen } from './components/kitchen/kitchen'
import KitchenCopy from './components/kitchen_copy/KitchenCopy'
import dynamic from 'next/dynamic'
import { div } from 'framer-motion/client'
import { useProgress } from "@react-three/drei";

interface Props { }




function Page(props: Props) {
    const { } = props

    return (

        <div className='h-screen'>
            <Suspense fallback={<Loader />}>
                <KitchenCopy />
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
