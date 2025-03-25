'use client'
import React from 'react';
import Scene from "@/app/character/Scene";
import {Canvas} from "@react-three/fiber";

const page = () => {
    return <div className={'h-screen w-full'}>
        <Canvas shadows>
        <Scene/>
        </Canvas>
    </div>;
};

export default page;
