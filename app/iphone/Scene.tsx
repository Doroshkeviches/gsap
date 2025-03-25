'use client'
import React, { useRef, useState } from 'react';
import * as THREE from 'three'
import { Model } from './Iphone'
import { PerspectiveCamera } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useFrame, useLoader } from '@react-three/fiber';


const Scene = () => {

    const texture_1 = useLoader(THREE.TextureLoader, "/iphone/textures/lockedScreen.png");
    const texture_2 = useLoader(THREE.TextureLoader, "/iphone/textures/Doroshkevich.png");
    texture_2.flipY = false

    const texture_3 = useLoader(THREE.TextureLoader, "/iphone/textures/qr.png");
    texture_3.flipY = false

    const initialRotation = new THREE.Euler(0, -Math.PI / 10, 0)
    const [texture, setTexture] = useState<THREE.Texture>(texture_1);
    const rotationRef = useRef<THREE.Euler>(initialRotation)
    const modelRef = useRef(null);


    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.IPHONE_CONTAINER',
                markers: true,
                start: 'center center',
                end: 'max',
                pin: true,
                scrub: true,
                snap: {
                    snapTo: 'labelsDirectional',
                    ease: 'none',
                    duration: { min: 0.5, max: 4 }, // Время завершения анимации

                }
            }
        })

        tl.addLabel('1')
            .to(rotationRef.current, {
                y: -Math.PI / 2,
                duration: 1,
                ease: 'linear',
                immediateRender: false,
                onComplete: () => {
                    setTexture(texture_2)
                }
            })
            .to(rotationRef.current, {
                y: -1.5 * Math.PI,
                duration: 5,
                ease: 'linear',
                immediateRender: false,


            })
            .to(rotationRef.current, {
                y: -2 * Math.PI,
                duration: 10,
                ease: 'linear',
                immediateRender: false,


            })
            .to(rotationRef.current, {
                y: -2.5 * Math.PI,
                duration: 10,
                onComplete: () => {
                    setTexture(texture_3)

                },
                ease: 'linear',

            })
            .to(rotationRef.current, {
                y: -4 * Math.PI,
                duration: 15,
                ease: 'linear',

            })
        tl.addLabel('2')
    })
    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.copy(rotationRef.current);
        }
    })
    return (
        <>
            <ambientLight intensity={10} />
            <directionalLight position={[10, 10, 100]} intensity={1} castShadow />
            {/* <directionalLight position={[10, 10, -100]} intensity={3} castShadow /> */}
            <Model rotation={rotationRef.current} ref={modelRef} position={[0, -2, 0]} texture={texture} />
            <PerspectiveCamera
                makeDefault
                position={[0, 0, 30]}
            />
        </>
    );
};

export default Scene;
