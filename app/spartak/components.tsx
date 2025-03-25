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
import * as TWEEN from "@tweenjs/tween.js";
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'
import { useFrame} from '@react-three/fiber'
import React, {useEffect, useRef, useState} from 'react'
import { Model } from './Spartak'
import * as THREE from 'three'
import { useSpring, animated } from '@react-spring/three'
import {useGSAP} from "@gsap/react";
import {easing} from "maath";
import {SpartakWoman} from "@/app/spartak/Spartak_woman";
const position_1 = {
    position: [0,1,10],
    rotation: [Math.PI/20,0,0],
    near: 8,
    far: 14
}

const position_2 = {
    position: [0,2.5,3],
    rotation: [0,0,0],
    near: 2,
    far: 4
}



function Components(props) {
    const [coordinates, setCoordinates] = useState(position_2)
    const [camera, setCamera] = useState<THREE.PerspectiveCamera | null>(null)
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
    const handleViewChange = (pos) => {
        setCoordinates(pos)
    }
    const startAnimate = (coords) => {
        new TWEEN.Tween(coords).to({...coordinates}).start()

    }

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.SCENE',
                markers: true,
                scrub: true,
                pin: true,
                start: 'center center',
                end: 'bottom center',
                // onToggle: (self) => {
                //     console.log(self.isActive)
                //     if(self.isActive) {
                //         setCoordinates(position_1)
                //
                //     } else {
                //         setCoordinates(position_2)
                //
                //     }
                //
                //
                // }
            }
        })
        tl.to(cameraRef.current?.position, {

            x: position_1.position.at(0),
            y: position_1.position.at(1),
            z: position_1.position.at(2),

        })
        .to(cameraRef.current?.rotation, {

            x: position_1.rotation.at(0),
            y: position_1.rotation.at(1),
            z: position_1.rotation.at(2),

        },'<')
            .to(cameraRef.current, {
                near: position_1.near,
                far: position_1.far,
                onUpdate: (val) => {
                    console.log(coordinates,cameraRef.current?.near, cameraRef.current?.far)
                    setCoordinates(prev => ({ ...prev, near: cameraRef.current?.near , far: cameraRef.current?.far}))
                }
            },'<')


    },[])
    // useFrame((_, delta) => {
    //
    //     const eps = 1e-9
    //
    //     if(camera) {
    //         cameraRef.current?.lookAt( new THREE.Vector3(0,2,0))
    //         // easing.damp3(cameraRef.current.position, coordinates.position, 1, delta, undefined, undefined, eps)
    //         // easing.dampE(cameraRef.current.rotation, coordinates.rotation, 1, delta, undefined, undefined, eps)
    //         startAnimate()
    //         cameraRef.current.updateProjectionMatrix();
    //     }
    // })

    return (
        <>
                <Model/>
            <SpartakWoman scale={0.5} position={[1,0,-3]}/>
            <SpartakWoman scale={0.5} position={[-1,0,-3]}/>
            <SpartakWoman scale={0.5} position={[0,0,-3]}/>

            <PerspectiveCamera far={coordinates.far} near={coordinates.near}   fov={40} makeDefault position={coordinates.position} rotation={coordinates.rotation} ref={(camera) => {
                        cameraRef.current = camera
                        setCamera(camera)
                    }}/>
                {/*<CameraControls/>*/}
                {/*<OrbitControls />*/}
                <axesHelper args={[2, 2, 2]}/>
        </>
    )
}

export default Components
