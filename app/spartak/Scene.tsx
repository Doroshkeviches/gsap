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
import Components from "@/app/spartak/components";
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
            <div className='absolute top-10 left-10 flex gap-5'>
                <Button onClick={() => handleViewChange(position_1)}>1</Button>
                <Button onClick={() => handleViewChange(position_2)}>2</Button>
                <Button>3</Button>
            </div>
        </>
    )
}

export default Scene
