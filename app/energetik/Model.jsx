/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 scene.gltf 
Author: aaartc (https://sketchfab.com/aaartc)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/lit-energy-energy-drink-by-mikhail-litvin-f78a2adc616a4d6ab1eb13f741c97b55
Title: LIT ENERGY - energy drink by Mikhail Litvin
*/
'use client'
import * as THREE from 'three'
import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/energetik/scene.gltf')
  const { texture, rotation } = props
  useEffect(() => {
    materials['Material.004'].map = texture;
    materials['Material.004'].needsUpdate = true;
  }, [texture])
  return (
    <group {...props} dispose={null}>
      <group rotation={[0, 0, 0]} scale={1}>
        <mesh geometry={nodes.Object_4.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Material} />
        <mesh geometry={nodes.Object_6.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Object_7.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Object_9.geometry} material={materials['Material.002']} position={[0, 0.06, -4.178]} rotation={[-Math.PI / 2, 0, 0]} scale={0.353} />
        <mesh geometry={nodes.Object_11.geometry} material={materials['Material.001']} position={[0, 0.048, -4.185]} rotation={[-Math.PI / 2, 0, 0]} scale={0.04} />
      </group>
    </group>
  )
}

useGLTF.preload('/energetik/scene.gltf')
