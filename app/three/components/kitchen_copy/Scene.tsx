'use client'
import { Line, useGLTF } from '@react-three/drei'
import React from 'react'
import { DoorL, DoorR } from './Door'
import DriverSeat from './DriverSeat'
import Engine from './Engine'
import FinalModFbx from './FinalModFbx'
import Chassis from './Chassis'
import Spoiler from './Spoiler'
import Wheel from './Wheel'
import Body from './Body'

function Scene(props) {
    const { nodes, materials } = useGLTF("/car.glb") as any
    console.log(nodes, materials)
    return (
        <>
            <DoorL nodes={nodes} materials={materials} />
            <DoorR nodes={nodes} materials={materials} />
            <DriverSeat nodes={nodes} materials={materials} />
            <Engine nodes={nodes} materials={materials} />
            <FinalModFbx nodes={nodes} materials={materials} />
            <Chassis nodes={nodes} materials={materials} />
            <Spoiler nodes={nodes} materials={materials} />
            <Wheel nodes={nodes} materials={materials} />
            <Body nodes={nodes} materials={materials} />


        </>
    )
}

export default Scene
