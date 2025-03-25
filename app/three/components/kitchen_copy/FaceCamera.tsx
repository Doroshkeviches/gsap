'use client'
import * as THREE from 'three'
import { Sky, Bvh, Line, OrbitControls, Environment, Lightformer, DragControls, CameraControls, FaceControls, PerspectiveCamera, useHelper, FaceLandmarker } from '@react-three/drei'
import { useThree, useFrame, Canvas, Euler } from '@react-three/fiber'
import { EffectComposer, N8AO, Outline, Selection, TiltShift2, ToneMapping } from '@react-three/postprocessing'
import { easing } from 'maath'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Scene from './Scene'
import { useControls, button, buttonGroup, folder } from 'leva'
import { Button } from '@/components/ui/button'
import { positions } from './positions'
import { IPos } from '@/app/dust-2/Scene'
import { MathUtils } from 'three'


type Props = {
    pos: IPos,
}

function FaceCamera({ pos }: Props) {

    const [userCam, setUserCam] = useState<THREE.PerspectiveCamera | null>()
    const [current] = useState(() => {
        const obj = new THREE.Object3D()
        obj.position.set(...pos.position)
        return obj
    })


    const userCamRef = useRef()
    // useHelper(gui.camera !== 'user' && userCamRef, THREE.CameraHelper)


    const controls = useThree((state) => state.controls)
    const faceControlsApiRef = useRef()

    const screenMatRef = useRef(null)
    const onVideoFrame = useCallback(
        (e) => {
            controls.detect(e.texture.source.data, e.time)
            if (screenMatRef.current) {
                screenMatRef.current.map = e.texture
            }
        }, [controls])


    useFrame((_, delta) => {
        if (faceControlsApiRef.current) {

            const target = faceControlsApiRef.current.computeTarget()

            faceControlsApiRef.current.update(delta, target);
            // userCam.position.copy(target.position);
            // userCam.rotation.copy(target.rotation);
            // console.log(current.rotation,initialRotation)



            const eps = 1e-9
            // console.log(target)
            // easing.damp3(current.position, target.position, gui.smoothTime, delta, undefined, undefined, eps)
            easing.dampE(current.rotation, target.rotation, 1, delta, undefined, undefined, eps)

            // userCam.position.copy(current.position)
            userCam.rotation.copy(current.rotation)

        }
    })


    return (
        <>
            <group rotation={current.rotation} position={current.position}>
                <FaceControls
                    camera={userCam}
                    ref={faceControlsApiRef}
                    makeDefault
                    manualUpdate
                    manualDetect
                    onVideoFrame={onVideoFrame}
                    facemesh={{ position: pos.position }}
                    // debug={gui.camera !== 'user'}
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

