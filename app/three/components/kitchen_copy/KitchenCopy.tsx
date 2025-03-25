'use client'
import * as THREE from 'three'
import { Sky, Bvh, Line, OrbitControls, Environment, Lightformer, DragControls, CameraControls, FaceControls, PerspectiveCamera, useHelper, FaceLandmarker } from '@react-three/drei'
import { useThree, useFrame, Canvas } from '@react-three/fiber'
import { EffectComposer, N8AO, Outline, Selection, TiltShift2, ToneMapping } from '@react-three/postprocessing'
import { easing } from 'maath'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Scene from './Scene'
import { useControls, button, buttonGroup, folder } from 'leva'
import { Button } from '@/components/ui/button'
import { positions } from './positions'

function KitchenCopy(props) {
    const { } = props

    const [current] = useState(() => new THREE.Object3D())
useEffect
    const handleFrontLeftView = () => {
        current.position.set(...positions.frontLeft.position)
        current.rotation.set(...positions.frontLeft.rotation)
        current.rotation.fromArray(positions.frontLeft.rotation)
    }
    const handleFrontRightView = () => {
        current.position.set(...positions.fronRight.position)
        current.rotateY(-2)

    }
    const handleNearView = () => {
        current.position.set(...positions.near.position)
        current.rotation.set(...positions.near.rotation)
    }

    return (
        <>
            <Canvas shadows camera={{
                position: [20, 10, 20],
                // fov: 7,

            }}>
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 10]} intensity={1} castShadow />
                <Sky />
                {/* <OrbitControls
                enableZoom={true}
                enablePan={true}       // Отключает панорамирование (по желанию)
                minDistance={5}         // Минимальное приближение
                maxDistance={50}        // Максимальное отдаление
                rotateSpeed={1}
                target={[0,0,0]}
            /> */}



                {/* <Bvh firstHitOnly> */}
                <Selection>
                    <Effects />
                    {/* <DragControls> */}
                    <FaceLandmarker>
                        <Scene current={current}  />
                    </FaceLandmarker>
                    {/* </DragControls> */}
                    <CameraControls />
                </Selection>
                <Environment resolution={256} preset='sunset'>
                    <group rotation={[-Math.PI / 3, 0, 1]}>
                        <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
                        <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
                        <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} />
                        <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
                    </group>
                </Environment>
                {/* </Bvh> */}
            </Canvas>
            <div className='flex gap-4 absolute top-10 left-10'>
                <Button className='' onClick={handleFrontLeftView}>Front Left</Button>
                <Button className='' onClick={handleFrontRightView}>Front Right</Button>
                <Button className='' onClick={handleNearView}>Neat</Button>
            </div>

        </>
    )
}

export default KitchenCopy



function Effects() {
    const { size } = useThree()
    return (
        <EffectComposer stencilBuffer disableNormalPass autoClear={false} multisampling={4}>
            <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />

            <Outline visibleEdgeColor="white" hiddenEdgeColor="white" blur width={size.width * 1.25} edgeStrength={10} />
            <ToneMapping />
        </EffectComposer>
    )
}