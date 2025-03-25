'use client'
import React, {useEffect, useState} from 'react';
import * as THREE from 'three'
 import {Model} from "@/app/character/Eyes";
import {Canvas, useFrame} from "@react-three/fiber";
import { easing } from 'maath'
import {useRef} from "react";
import {OrbitControls, PerspectiveCamera} from "@react-three/drei";

const Scene = () => {
    const userCamRef = useRef()
    const [userCam, setUserCam] = useState<THREE.PerspectiveCamera | null>()
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [rotation, setRotation] = useState<THREE.Euler>(new THREE.Euler(0, 0, Math.PI));
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const x = (event.clientX / window.innerWidth) * 2 - 1; // Преобразуем в диапазон [-1, 1]
            const y = -(event.clientY / window.innerHeight) * 2 + 1; // Преобразуем в диапазон [-1, 1]
            setMousePos({ x, y });
        };

        // Добавляем обработчик события
        window.addEventListener('mousemove', handleMouseMove);

        // Убираем обработчик при размонтировании компонента
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const { x, y } = mousePos;

        // Плавно изменяем углы поворота с ограничениями
        setRotation((prevRotation) => {
            const newRotation = prevRotation.clone();

            // Ограничение для поворота по оси X (максимум ±π/2)
            const maxX = Math.PI / 10;
            const minX = -Math.PI / 10;
            newRotation.x += ((y*0.2 * Math.PI) / 2 - newRotation.x);
            newRotation.x = Math.max(minX, Math.min(maxX, newRotation.x));  // Ограничиваем угол по оси X

            // Ограничение для поворота по оси Y (максимум ±π)
            const maxY = Math.PI / 4;
            const minY = -Math.PI / 4;
            // newRotation.y += (x * Math.PI) / 2 - newRotation.y;
            // newRotation.y = Math.max(minY, Math.min(maxY, newRotation.y));  // Ограничиваем угол по оси Y

            return newRotation;
        });
    }, [mousePos]);
    return (
        <>
            <ambientLight intensity={1}/>
            <directionalLight position={[10, 10, 10]} intensity={1} castShadow/>
            <Model  rotation={rotation} position={[0,-2,0]}/>
            <PerspectiveCamera
                makeDefault
                position={[0,-2,20]}
                // fov={40}
                ref={(cam) => {
                    userCamRef.current = cam
                    setUserCam(cam)
                }}
            />
            <OrbitControls camera={userCam} />
        </>
    );
};

export default Scene;
