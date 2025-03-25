'use client'
import {
    Sky,
    Effects,
    FaceLandmarker,
    CameraControls,
    Environment,
    Lightformer,
    PerspectiveCamera, OrbitControls
} from '@react-three/drei'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'
import {Canvas, useFrame} from '@react-three/fiber'
import React, {useEffect, useRef, useState} from 'react'
import { Model } from './Spartak'
import * as THREE from 'three'
import { Button } from '@/components/ui/button'
import { useSpring, animated } from '@react-spring/three'
import {useGSAP} from "@gsap/react";
import Components from "@/app/man_animate/components";
const position_1 = {
    position: [0,1,10],
    rotation: [Math.PI/20,0,0]
}

const position_2 = {
    position: [0,2.5,3],
    rotation: [0,0,0]
}



function Scene(props) {

    return (
        <>
            <Canvas shadows>
                <ambientLight intensity={5}/>
                <directionalLight position={[10, 10, 10]} intensity={1} castShadow/>
                <Components/>
            </Canvas>
            <div className={'w-[500px] absolute top-1/2 -translate-y-1/2 left-[15%] flex gap-5 HELLO_FROM_CEO'}>
                <p className={'font-sans text-5xl'}>Привет!<br/>Меня зовут Жамбал Гармажапов,<br/> я CEO Kodix</p>
            </div>

            <div className={'w-[500px] absolute top-1/2 -translate-y-1/2 right-[10%] flex gap-5 HELLO_FROM_CEO_2'}>
                <p className={'font-sans text-5xl'}>Я напишу вам, отвечу на все вопросы и предложу лучшее решение для вашей задачи</p>
            </div>


        </>
    )
}

export default Scene
