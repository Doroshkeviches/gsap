'use client'
import { Sky, Effects, FaceLandmarker, CameraControls, Environment, Lightformer } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useState } from 'react'
import { Model } from './Model'


interface Props {

}
function Scene(props: Props) {
    const { } = props


    return (
        <>
            <Canvas shadows>
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 10]} intensity={1} castShadow />
                <Model />
                <CameraControls />
            </Canvas>
        </>
    )
}

export default Scene
