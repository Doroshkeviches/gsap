import { useFrame } from '@react-three/fiber'
import { Select } from '@react-three/postprocessing'
import { easing } from 'maath'
import React, { useRef, useState } from 'react'
import { a, useSpring } from '@react-spring/three'
interface Props { }
const pos1 = {
    enabled: false,
    position: [0, 0, 0],
    rotation: [0, 0, 0]
}
const pos2 = {
    enabled: true,
    position: [0, 50, -20],
    rotation: [0.5, 0, 0]
}
export function DoorL(props) {
    const { nodes, materials } = props
    const ref = useRef()
    const [hovered, hover] = useState(pos1)
    // Debounce hover a bit to stop the ticker from being erratic
    const handleClick = (e) => {
        e.stopPropagation()
        if (!hovered.enabled) {
            hover(pos2)
            return
        }
        hover(pos1)
        return
    }
    const { position, rotation } = useSpring({
        position: hovered.position,
        rotation: hovered.rotation,
        config: { mass: 1, tension: 50, friction: 26 }, // параметры анимации
    })
    return (
        <Select enabled={hovered.enabled} onClick={(e) => handleClick(e)}>
            <a.group {...props} position={position} rotation={rotation} onClick={() => handleClick}>
                <group {...nodes.DoorLBadge} >
                    {nodes.DoorLBadge.children.map((it) => (
                        <mesh geometry={it.geometry} >
                            <meshMatcapMaterial   {...it.material} />
                        </mesh>
                    ))}
                </group>
                <group {...nodes.DoorLBadge_BadgeA_0} >
                    <mesh geometry={nodes.DoorLBadge_BadgeA_0.geometry} >
                        <meshMatcapMaterial   {...nodes.DoorLBadge_BadgeA_0.material} />
                    </mesh>
                </group>
                <group {...nodes.DoorLCarbon1} >
                    {nodes.DoorLCarbon1.children.map((it) => (
                        <mesh geometry={it.geometry} >
                            <meshMatcapMaterial   {...it.material} />
                        </mesh>
                    ))}
                </group>
                <group {...nodes.DoorLCarbon1_Carbon1_0} >
                    <mesh geometry={nodes.DoorLCarbon1_Carbon1_0.geometry} >
                        <meshMatcapMaterial   {...nodes.DoorLCarbon1_Carbon1_0.material} />
                    </mesh>
                </group>

                <group {...nodes.DoorLColoured} >
                    {nodes.DoorLColoured.children.map((it) => (
                        <mesh geometry={it.geometry} >
                            <meshMatcapMaterial   {...it.material} />
                        </mesh>
                    ))}
                </group>
                <group {...nodes.DoorLColoured_Coloured_0} >
                    <mesh geometry={nodes.DoorLColoured_Coloured_0.geometry} >
                        <meshMatcapMaterial   {...nodes.DoorLColoured_Coloured_0.material} />
                    </mesh>
                </group>
                <group {...nodes.DoorLGlass} >
                    {nodes.DoorLGlass.children.map((it) => (
                        <mesh geometry={it.geometry} >
                            <meshMatcapMaterial   {...it.material} />
                        </mesh>
                    ))}
                </group>
                <group {...nodes.DoorLGlassInside} >
                    {nodes.DoorLGlassInside.children.map((it) => (
                        <mesh geometry={it.geometry} >
                            <meshMatcapMaterial   {...it.material} />
                        </mesh>
                    ))}
                </group>
                <group {...nodes.DoorLGlassInside_GlassMtl_0} >
                    <mesh geometry={nodes.DoorLGlassInside_GlassMtl_0.geometry} >
                        <meshMatcapMaterial   {...nodes.DoorLGlassInside_GlassMtl_0.material} />
                    </mesh>
                </group>
                <group {...nodes.DoorLGlass_GlassMtl_0} >
                    <mesh geometry={nodes.DoorLGlass_GlassMtl_0.geometry} >
                        <meshMatcapMaterial   {...nodes.DoorLGlass_GlassMtl_0.material} />
                    </mesh>
                </group>

                <group {...nodes.DoorLGrille3} >
                    {nodes.DoorLGrille3.children.map((it) => (
                        <mesh geometry={it.geometry} >
                            <meshMatcapMaterial   {...it.material} />
                        </mesh>
                    ))}
                </group>

                <group {...nodes.DoorLGrille3_Grille3A_0} >
                    <mesh geometry={nodes.DoorLGrille3_Grille3A_0.geometry} >
                        <meshMatcapMaterial   {...nodes.DoorLGrille3_Grille3A_0.material} />
                    </mesh>
                </group>
                <group {...nodes.DoorLInterior} >
                    {nodes.DoorLInterior.children.map((it) => (
                        <mesh geometry={it.geometry} >
                            <meshMatcapMaterial   {...it.material} />
                        </mesh>
                    ))}
                </group>
                <group {...nodes.DoorLInteriorTilling} >
                    {nodes.DoorLInteriorTilling.children.map((it) => (
                        <mesh geometry={it.geometry} >
                            <meshMatcapMaterial   {...it.material} />
                        </mesh>
                    ))}
                </group>

                <group {...nodes.DoorLInteriorTilling_InteriorTillingA_0} >
                    <mesh geometry={nodes.DoorLInteriorTilling_InteriorTillingA_0.geometry} >
                        <meshMatcapMaterial   {...nodes.DoorLInteriorTilling_InteriorTillingA_0.material} />
                    </mesh>
                </group>

                <group {...nodes.DoorLInterior_InteriorA_0} >
                    <mesh geometry={nodes.DoorLInterior_InteriorA_0.geometry} >
                        <meshMatcapMaterial   {...nodes.DoorLInterior_InteriorA_0.material} />
                    </mesh>
                </group>
                <group {...nodes.DoorLInterior_InteriorColour1A_0} >
                    <mesh geometry={nodes.DoorLInterior_InteriorColour1A_0.geometry} >
                        <meshMatcapMaterial   {...nodes.DoorLInterior_InteriorColour1A_0.material} />
                    </mesh>
                </group>
                <group {...nodes.body_1DoorLPaint} >
                    {nodes.body_1DoorLPaint.children.map((it) => (
                        <mesh geometry={it.geometry} >
                            <meshMatcapMaterial   {...it.material} />
                        </mesh>
                    ))}
                </group>
            </a.group>
        </Select>


    )
}

export function DoorR(props) {
    const { nodes, materials } = props
    return (
        <>
            <group {...nodes.DoorRBadge} {...props}>
                {nodes.DoorRBadge.children.map((it) => (
                    <mesh geometry={it.geometry} >
                        <meshMatcapMaterial   {...it.material} />
                    </mesh>
                ))}
            </group>
            <group {...nodes.DoorRBadge_BadgeA_0} {...props}>
                <mesh geometry={nodes.DoorRBadge_BadgeA_0.geometry} >
                    <meshMatcapMaterial   {...nodes.DoorRBadge_BadgeA_0.material} />
                </mesh>
            </group>
            <group {...nodes.DoorRCarbon1} {...props}>
                {nodes.DoorRCarbon1.children.map((it) => (
                    <mesh geometry={it.geometry} >
                        <meshMatcapMaterial   {...it.material} />
                    </mesh>
                ))}
            </group>
            <group {...nodes.DoorRCarbon1_Carbon1_0} {...props}>
                <mesh geometry={nodes.DoorRCarbon1_Carbon1_0.geometry} >
                    <meshMatcapMaterial   {...nodes.DoorRCarbon1_Carbon1_0.material} />
                </mesh>
            </group>

            <group {...nodes.DoorRColoured} {...props}>
                {nodes.DoorRColoured.children.map((it) => (
                    <mesh geometry={it.geometry} >
                        <meshMatcapMaterial   {...it.material} />
                    </mesh>
                ))}
            </group>
            <group {...nodes.DoorRColoured_Coloured_0} {...props}>
                <mesh geometry={nodes.DoorRColoured_Coloured_0.geometry} >
                    <meshMatcapMaterial   {...nodes.DoorRColoured_Coloured_0.material} />
                </mesh>
            </group>
            <group {...nodes.DoorRGlass} {...props}>
                {nodes.DoorRGlass.children.map((it) => (
                    <mesh geometry={it.geometry} >
                        <meshMatcapMaterial   {...it.material} />
                    </mesh>
                ))}
            </group>
            <group {...nodes.DoorRGlassInside} {...props}>
                {nodes.DoorRGlassInside.children.map((it) => (
                    <mesh geometry={it.geometry} >
                        <meshMatcapMaterial   {...it.material} />
                    </mesh>
                ))}
            </group>
            <group {...nodes.DoorRGlassInside_GlassMtl_0} {...props}>
                <mesh geometry={nodes.DoorRGlassInside_GlassMtl_0.geometry} >
                    <meshMatcapMaterial   {...nodes.DoorRGlassInside_GlassMtl_0.material} />
                </mesh>
            </group>
            <group {...nodes.DoorRGlass_GlassMtl_0} {...props}>
                <mesh geometry={nodes.DoorRGlass_GlassMtl_0.geometry} >
                    <meshMatcapMaterial   {...nodes.DoorRGlass_GlassMtl_0.material} />
                </mesh>
            </group>

            <group {...nodes.DoorRGrille3} {...props}>
                {nodes.DoorRGrille3.children.map((it) => (
                    <mesh geometry={it.geometry} >
                        <meshMatcapMaterial   {...it.material} />
                    </mesh>
                ))}
            </group>

            <group {...nodes.DoorRGrille3_Grille3A_0} {...props}>
                <mesh geometry={nodes.DoorRGrille3_Grille3A_0.geometry} >
                    <meshMatcapMaterial   {...nodes.DoorRGrille3_Grille3A_0.material} />
                </mesh>
            </group>
            <group {...nodes.DoorRInterior} {...props}>
                {nodes.DoorRInterior.children.map((it) => (
                    <mesh geometry={it.geometry} >
                        <meshMatcapMaterial   {...it.material} />
                    </mesh>
                ))}
            </group>
            <group {...nodes.DoorRInteriorTilling} {...props}>
                {nodes.DoorRInteriorTilling.children.map((it) => (
                    <mesh geometry={it.geometry} >
                        <meshMatcapMaterial   {...it.material} />
                    </mesh>
                ))}
            </group>

            <group {...nodes.DoorRInteriorTilling_InteriorTillingA_0} {...props}>
                <mesh geometry={nodes.DoorRInteriorTilling_InteriorTillingA_0.geometry} >
                    <meshMatcapMaterial   {...nodes.DoorRInteriorTilling_InteriorTillingA_0.material} />
                </mesh>
            </group>

            <group {...nodes.DoorRInterior_InteriorA_0} {...props}>
                <mesh geometry={nodes.DoorRInterior_InteriorA_0.geometry} >
                    <meshMatcapMaterial   {...nodes.DoorRInterior_InteriorA_0.material} />
                </mesh>
            </group>
            <group {...nodes.DoorRInterior_InteriorColour1A_0} {...props}>
                <mesh geometry={nodes.DoorRInterior_InteriorColour1A_0.geometry} >
                    <meshMatcapMaterial   {...nodes.DoorRInterior_InteriorColour1A_0.material} />
                </mesh>
            </group>
        </>
    )
}