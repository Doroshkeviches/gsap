'use client'
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three'
import { Airpods } from './Airpods'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useFrame } from '@react-three/fiber';
const _initialRotation = new THREE.Euler(-Math.PI / 2, 0, 0)
const Scene = () => {
    const userCamRef = useRef()
    const rotationRef = useRef(_initialRotation);
    const modelRef = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.AIRPODS-CONTAINER',
                start: 'center center',
                end: 'max',
                // markers: true,
                pin: true,
                scrub: true,
                pinSpacing: false
            }
        })
        tl.to(rotationRef.current, {
            z: -4,
        })
    }, [])
    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.copy(rotationRef.current);
        }
    });
    return (
        <>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={1} castShadow />
            <Airpods rotation={rotationRef.current} ref={modelRef} />
            <PerspectiveCamera
                makeDefault
                position={[0, -5, 70]}
                // fov={40}
                ref={(cam) => {
                    userCamRef.current = cam
                }}
            />
        </>
    );
};

export default Scene;
