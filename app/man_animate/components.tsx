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
import React, {forwardRef, useEffect, useRef, useState} from 'react'
import { Model } from './Man'
import * as THREE from 'three'
import { useSpring, animated } from '@react-spring/three'
import {useGSAP} from "@gsap/react";
import {easing} from "maath";
import {SpartakWoman} from "@/app/spartak/Spartak_woman";
const position_1 = {
    position: [0,0,0],
    rotation: [0,0,0],
    near: 8,
    far: 14
}

const position_2 = {
    position: [0,1.5,1.1],
    rotation: [0,0,0],
    near: 0.1,
    far: 4
}



const Components = (props) => {
    const [coordinates, setCoordinates] = useState(position_2)
    const [animationNumber, setAnimationNumber] = useState<number>(1)
    const [camera, setCamera] = useState<THREE.PerspectiveCamera | null>(null)
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
    const manRef = useRef<THREE.Group | null>(null)
    const handleViewChange = (pos) => {
        setCoordinates(pos)
    }
    const startAnimate = (coords) => {
        new TWEEN.Tween(coords).to({...coordinates}).start()

    }
    useEffect(() => {
        if(cameraRef.current){
cameraRef.current?.lookAt(new THREE.Vector3(0,1.5,0))
        }
    }, [cameraRef.current]);
    useEffect(() => {
        if (manRef.current) {
            console.log("Доступ к камере:", manRef.current.getModel());

        }
    }, []);
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.MAN-SCENE',
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
        tl
            .from('.HELLO_FROM_CEO', {
                opacity: 0,

            })

            .to(manRef.current?.getModel().position, {
            x: 0,
            y: 0,
            z: 0,
delay: 1,
                ease: 'none'
        })
            .to(manRef.current?.getModel().rotation, {
                x: 0,
                y: 0,
                z: 0,
                ease: 'none'

            },'<')
            .to('.HELLO_FROM_CEO', {
                opacity: 0,
                ease: 'none'

            }, '<')

            .to(manRef.current?.getModel().position, {
                x: -0.4,
                y: 0,
                z: 0,
                ease: 'none'

            })
            .to(manRef.current?.getModel().rotation, {
                x: 0,
                y: Math.PI / 10,
                z: 0,
                ease: 'none'

            },'<')
            .from('.HELLO_FROM_CEO_2', {
                opacity: 0,
                ease: 'none'

            }, '<')




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
            <Model ref={manRef} position={[0.4,0,0]} rotation={[0,-Math.PI / 10,0]} animationNumber={animationNumber}/>
            <PerspectiveCamera far={coordinates.far} near={coordinates.near}   fov={40} makeDefault position={coordinates.position} rotation={coordinates.rotation} ref={(camera) => {
                        cameraRef.current = camera
                        setCamera(camera)
                    }}/>
                {/*<CameraControls/>*/}
                {/*<OrbitControls />*/}
                <axesHelper args={[2, 2, 2]}/>
        </>
    )
};

export default Components
