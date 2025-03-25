'use client'
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three'
import { Model } from './Model'
import { CameraControls, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useFrame, useLoader } from '@react-three/fiber';
import { center } from 'maath/dist/declarations/src/buffer';
interface Properties {
    name: string
    rotation: THREE.Euler,
    texture: THREE.Texture
}



const _initialRotation = new THREE.Euler(Math.PI / 2, 0, Math.PI / 1.5)
const Scene = () => {
    const texture_1 = useLoader(THREE.TextureLoader, "/energetikTextures/litEnergy.png");
    const texture_2 = useLoader(THREE.TextureLoader, "/energetikTextures/redBull.jpeg");
    const texture_3 = useLoader(THREE.TextureLoader, "/energetikTextures/monster.jpeg");
    texture_1.flipY = false


    const PropertiesData: Properties[] = [
        {
            name: 'lit-energy',
            rotation: new THREE.Euler(Math.PI / 2, 0, Math.PI / 1.5),
            texture: texture_1
        },
        {
            name: 'red-bull',
            rotation: new THREE.Euler(Math.PI / 2, 0, Math.PI / 2),
            texture: texture_2
        },
        {
            name: 'monster',
            rotation: new THREE.Euler(Math.PI / 2, 0, Math.PI / 1.5),
            texture: texture_3
        },
    ]


    const [properties, setProperties] = useState<Properties>(PropertiesData[0]);
    const userCamRef = useRef<THREE.PerspectiveCamera | null>(null)
    const modelRef = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.CANVAS',
                markers: true,
                pin: true,
                scrub: true,
                start: 'top top',
                end: "max"
            }
        })
        const obj = {
            t: 0
        }
        tl.to(properties.rotation, {
            z: Math.PI,
            onUpdate: function () {
                const v = this.targets()[0];
                setProperties((prev) => ({
                    ...prev,
                    rotation: new THREE.Euler(v.x, v.y, v.z),
                }));

            }
        })
        tl.add(() => {
            setProperties(PropertiesData[1])
            console.log(properties.rotation)
        })
        tl.to(properties.rotation, {
            z: Math.PI,
            onUpdate: function () {
                const v = this.targets()[0];
                setProperties((prev) => ({
                    ...prev,
                    rotation: new THREE.Euler(v.x, v.y, v.z),
                }));

            }
        })
    })
    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.copy(properties.rotation);
        }
    })
    return (
        <>
            <ambientLight intensity={10} />
            <directionalLight position={[10, 10, 100]} intensity={1} castShadow />
            {/* <directionalLight position={[10, 10, -100]} intensity={3} castShadow /> */}
            <Model rotation={properties.rotation} ref={modelRef} position={[0, -2, 0]} texture={properties.texture} />
            <PerspectiveCamera
                makeDefault
                position={[0, 0, 15]}
                // fov={40}
                ref={(cam) => {
                    userCamRef.current = cam
                }}
            />
        </>
    );
};

export default Scene;
