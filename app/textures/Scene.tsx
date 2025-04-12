'use client'
import {Sky, Effects, FaceLandmarker, CameraControls, Environment, Lightformer} from '@react-three/drei'
import {Canvas, useLoader} from '@react-three/fiber'
import React, {useEffect, useRef, useState} from 'react'
import * as THREE from 'three'
import {Button} from '@/components/ui/button'
import {Bmw} from './Bmw'
import {ColorRepresentation} from 'three'
import gsap from 'gsap'

type Props = {}

type IPos = {
    x: number,
    y: number,
    z: number,
    duration: number,
}
const colors: ColorRepresentation[] = ['rgb(252,147,3)', 'rgb(244,34,31)', 'rgb(176,141,87)', 'rgb(1,119,164)', 'rgb(139,137,112)']

function Scene(props: Props) {
    const texture_1 = useLoader(THREE.TextureLoader, "/textures/texture_1.png");
    const texture_2 = useLoader(THREE.TextureLoader, "/textures/texture_2.png");
    const texture_3 = useLoader(THREE.TextureLoader, "/textures/texture_3.png");
    const [texture, setTexture] = useState<THREE.Texture>(texture_1);
    const [color, setColor] = useState<THREE.Color>(new THREE.Color(colors[0]));
    const cameraRef = useRef<CameraControls>(null)
    const [material, setMaterial] = useState<THREE.MeshStandardMaterial | undefined>(new THREE.MeshStandardMaterial({color: "blue"}));
    useEffect(() => {
        // console.log(texture)
    }, [color])

    const handleColorChange = (color: ColorRepresentation) => {
        setColor(new THREE.Color(color))
    }
    const handleTextureChange = (texture: THREE.Texture) => {
        setTexture(texture)
    }
    const handleCameraMove = (array: IPos[]) => {
        if (!cameraRef.current) {
            alert('no camera')
            return
        }
        const tl = gsap.timeline()
        array.forEach((it: IPos) => {
            const pos = cameraRef.current?.camera.position
            tl.to(pos, {
                x: it.x,
                y: it.y,
                z: it.z,
                duration: it.duration,
                ease: 'none',
                onUpdate: function () {
                    const t = this.targets()[0]
                    cameraRef.current?.setLookAt(t.x, t.y, t.z, 0, 0, 0)
                },
            })
        })

    }


    return (
        <>
            <Canvas shadows>
                <ambientLight intensity={5}/>
                {/* <Sky /> */}
                <directionalLight position={[10, 10, 10]} intensity={3} castShadow/>
                <directionalLight position={[-10, 10, 10]} intensity={1} castShadow/>
                <directionalLight position={[0, 10, -10]} intensity={1} castShadow/>

                <axesHelper scale={10}/>
                <Bmw bodyMaterial={color} glack={texture}/>
                <CameraControls ref={cameraRef}/>
            </Canvas>
            <div className='absolute top-10 left-10 flex gap-5'>
                {colors.map(col => (
                    <Button style={{
                        backgroundColor: `${col}`
                    }} onClick={() => handleColorChange(col)}></Button>

                ))}
                <Button onClick={() => handleTextureChange(texture_1)}>Текстура 1</Button>
                <Button onClick={() => handleTextureChange(texture_2)}>Текстура 2</Button>
                <Button onClick={() => handleTextureChange(texture_3)}>Текстура 3</Button>
                <Button onClick={() => {
                    handleCameraMove([{
                        x: 5, y: 0, z: 2, duration: 1
                    }, {
                        x: 5, y: 1, z: -2, duration: 1,
                    }])
                }}>Камера 1</Button>
                <Button onClick={() => handleCameraMove([
                    {
                        x: 0, y: 1, z: 6, duration: 1
                    },
                    {
                        x: -3, y: 1, z: 6, duration: 1
                    }])}>Камера 2</Button>


            </div>
        </>
    )
}

export default Scene
