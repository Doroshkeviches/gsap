'use client'
import { Sky, Bvh, Line, OrbitControls, Environment, Lightformer, DragControls } from '@react-three/drei'
import { useThree, useFrame, Canvas } from '@react-three/fiber'
import { EffectComposer, N8AO, Outline, Selection, TiltShift2, ToneMapping } from '@react-three/postprocessing'
import { easing } from 'maath'
import React from 'react'
import Scene from './Scene'

function KitchenCopy(props) {
    const { } = props

    return (
        <Canvas camera={{
            position: [0, 0, 10]
        }}>
            <ambientLight intensity={0.4} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <Sky />
            <OrbitControls />
            {/* <Bvh firstHitOnly> */}
            <Selection>
                <Effects />
                <DragControls>
                    <Scene position={[0, 0, 0]} />
                </DragControls>

            </Selection>
            <Environment resolution={256}>
                <group rotation={[-Math.PI / 3, 0, 1]}>
                    <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
                    <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
                    <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} />
                    <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
                </group>
            </Environment>
            {/* </Bvh> */}
        </Canvas>
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