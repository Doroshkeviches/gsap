'use client'
import { Sky, Effects, FaceLandmarker, CameraControls, Environment, Lightformer } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useState } from 'react'
import { Model } from './Dust_2'
import FaceCamera from '../three/components/kitchen_copy/FaceCamera'
import * as THREE from 'three'
import { Button } from '@/components/ui/button'

export type IPos = {
    position: [number, number, number],
    rotation: [number, number, number],
    lookAt: [number, number, number],
}
interface Props { }
const pos1: IPos = {
    position: [0,0,0],
    rotation: [Math.PI /4,0,0],
    lookAt: [0, 0,0]

}
const pos2: IPos = {
    position: [0,0,0],
    rotation: [Math.PI /4,-Math.PI /2,0],
    lookAt: [Math.PI /2,0,0]



}
const pos3: IPos = {
    position: [5, 5, 5],
    rotation: [0,0,0],
    lookAt: [0,0,0]
}
function Scene(props: Props) {
    const { } = props
    const [pos, setPos] = useState<IPos>(pos1)

    const handleFirstClick = () => {
        setPos(pos1)
    }
    const handleSecondClick = () => {
        setPos(pos2)
    }

    return (
        <>
            <Canvas shadows>
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 10]} intensity={1} castShadow />
                <FaceLandmarker>
                    <Model />
                    <FaceCamera pos={pos} />
                </FaceLandmarker>
                <CameraControls />
            </Canvas>
            <div className='absolute top-10 left-10 flex gap-5'>
                <Button onClick={handleFirstClick}>1</Button>
                <Button onClick={handleSecondClick}>2</Button>
                <Button>3</Button>

            </div>
        </>
    )
}

export default Scene
