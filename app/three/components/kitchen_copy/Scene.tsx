'use client'
import { Line, useGLTF } from '@react-three/drei'
import React from 'react'
import { DoorL, DoorR } from './Door'
import Lambo from './Lambo'
import FaceCamera from './FaceCamera'

type Props = {
    pos: any,
    rot: any
}
function Scene(props: Props) {
    const { nodes, materials } = useGLTF("/lamborghini.glb") as any
    console.log(nodes, materials)
    return (
        <>
            {/* <DoorL nodes={nodes} materials={materials} /> */}
            {/* <DoorR nodes={nodes} materials={materials} /> */}
            {/* <DriverSeat nodes={nodes} materials={materials} /> */}
            {/* <Engine nodes={nodes} materials={materials} />
            <FinalModFbx nodes={nodes} materials={materials} />
            <Chassis nodes={nodes} materials={materials} />
            <Spoiler nodes={nodes} materials={materials} />
            <Wheel nodes={nodes} materials={materials} />
            <Body nodes={nodes} materials={materials} /> */}
            <FaceCamera pos={props.pos} rot={props.rot}/>
            <Lambo />
        </>
    )
}

export default Scene
