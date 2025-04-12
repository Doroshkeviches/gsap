'use client'
import * as THREE from 'three'
import {
    FaceControls,
    PerspectiveCamera,
    FaceControlsApi
} from '@react-three/drei'
import { useThree, useFrame,  } from '@react-three/fiber'
import { easing } from 'maath'
import React, {LegacyRef, useCallback, useLayoutEffect, useRef, useState} from 'react'
import { IPos } from '@/app/dust-2/Scene'
import {Object3D} from "three";


type Props = {
    pos: number[],
    rot: number[]
}

function FaceCamera({ pos, rot }: Props) {

    const [userCam, setUserCam] = useState<THREE.PerspectiveCamera | null>()
    const [current] = useState(() => {
        const obj = new Object3D()
        obj.position.set(0,0,0)
        obj.rotation.set(0,0,0)
        return obj
    })

    const userCamRef = useRef()
    // useHelper(gui.camera !== 'user' && userCamRef, THREE.CameraHelper)


    const controls = useThree((state) => state.controls)
    const faceControlsApiRef:LegacyRef<FaceControlsApi | undefined> = useRef(undefined)

    const screenMatRef = useRef(null)
    const onVideoFrame = useCallback(
        (e) => {
            controls?.detect(e.texture.source.data, e.time)
            if (screenMatRef.current) {
                screenMatRef.current.map = e.texture
            }
        }, [controls])


    useFrame((_, delta) => {
        if (faceControlsApiRef.current) {
            const target = faceControlsApiRef.current.computeTarget();

            // Повернуть target по Y на 180 градусов
            // target.rotation.y += Math.PI;

            const eps = 1e-9;
            easing.dampE(current.rotation, target.rotation, 1, delta, undefined, undefined, eps);
            userCam.rotation.copy(current.rotation);
            userCam.position.copy(current.position);

        }
    });


    return (
        <>
            <group rotation={new THREE.Euler(...rot)} position={new THREE.Vector3(...pos)}>
                <FaceControls
                    camera={userCam}
                    ref={faceControlsApiRef}
                    makeDefault
                    manualUpdate
                    manualDetect
                    onVideoFrame={onVideoFrame}
                />
                <PerspectiveCamera
                    ref={(cam) => {
                        userCamRef.current = cam
                        setUserCam(cam)
                    }}

                    makeDefault
                />
                <axesHelper args={[2, 2, 2]}/>
            </group>
        </>
    )
}

export default FaceCamera

