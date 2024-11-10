'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { DragControls, Line, OrbitControls, PivotControls } from '@react-three/drei'

interface Props { }

function BaseExample(props: Props) {

    return (
        <>
            <Canvas camera={{
                position: [0, 0, 10]
            }}>
                {/* <OrbitControls minAzimuthAngle={10} maxAzimuthAngle={30}/> */}
                <ambientLight intensity={0.1} />
                <directionalLight color="blue" position={[0, 0, 5]} />
                <MyBox />
            </Canvas>
        </>
    )
}

export default BaseExample



interface Props { }

export function MyBox(props: Props) {
    const line = useRef()

    useFrame(({ clock }) => {

        line.current.rotation.z += -0.025
        line.current.rotation.x += -0.025

        // ref.current.rotation.z += 0.01


    })
    return (
        <mesh ref={line} position={[0, 0, 5]}>
            <lineBasicMaterial color={'red'} />
            <bufferGeometry />
            {/* <boxGeometry args={[2, 1, 2]} /> */}

            <group >
                <Line color={'black'} lineWidth={10} points={[
                    [-1, 1, 0],
                    [-1, 0, 0],
                    [1, 0, 0],
                    [1, -1, 0],
                ]} />
                <Line color={'black'} lineWidth={10} points={[
                    [-1, -1, 0],
                    [0, -1, 0],
                    [0, 1, 0],
                    [1, 1, 0],
                ]} />
            </group>
            <meshStandardMaterial />
        </mesh>
    )
}

