import React from 'react'

interface Props { }

function Engine(props) {
    const { nodes, materials } = props


    return (
        <>
            <group {...nodes.EngineTrunkBadge} {...props}>
                {nodes.EngineTrunkBadge.children.map((it) => (
                    <mesh geometry={it.geometry} >
                        <meshMatcapMaterial   {...it.material} />
                    </mesh>
                ))}
            </group>
            <group {...nodes.EngineTrunkBadge_BadgeA_0} {...props}>
                <mesh geometry={nodes.EngineTrunkBadge_BadgeA_0.geometry} >
                    <meshMatcapMaterial   {...nodes.EngineTrunkBadge_BadgeA_0.material} />
                </mesh>
            </group>

            <group {...nodes.EngineTrunkBase} {...props}>
                {nodes.EngineTrunkBase.children.map((it) => (
                    <mesh geometry={it.geometry} >
                        <meshMatcapMaterial   {...it.material} />
                    </mesh>
                ))}
            </group>
            <group {...nodes.EngineTrunkBase_Base_0} {...props}>
                <mesh geometry={nodes.EngineTrunkBase_Base_0.geometry} >
                    <meshMatcapMaterial   {...nodes.EngineTrunkBase_Base_0.material} />
                </mesh>
            </group>
            <group {...nodes.EngineTrunkColoured} {...props}>
                {nodes.EngineTrunkColoured.children.map((it) => (
                    <mesh geometry={it.geometry} >
                        <meshMatcapMaterial   {...it.material} />
                    </mesh>
                ))}
            </group>
            <group {...nodes.EngineTrunkColoured_Coloured_0} {...props}>
                <mesh geometry={nodes.EngineTrunkColoured_Coloured_0.geometry} >
                    <meshMatcapMaterial   {...nodes.EngineTrunkColoured_Coloured_0.material} />
                </mesh>
            </group>
            <group {...nodes.EngineTrunkEngine} {...props}>
                {nodes.EngineTrunkEngine.children.map((it) => (
                    <mesh geometry={it.geometry} >
                        <meshMatcapMaterial   {...it.material} />
                    </mesh>
                ))}
            </group>
            <group {...nodes.EngineTrunkEngine_EngineA_0} {...props}>
                <mesh geometry={nodes.EngineTrunkEngine_EngineA_0.geometry} >
                    <meshMatcapMaterial   {...nodes.EngineTrunkEngine_EngineA_0.material} />
                </mesh>
            </group>

            <group {...nodes.EngineTrunkGlass} {...props}>
                {nodes.EngineTrunkGlass.children.map((it) => (
                    <mesh geometry={it.geometry} >
                        <meshMatcapMaterial   {...it.material} />
                    </mesh>
                ))}
            </group>

            <group {...nodes.EngineTrunkGlassInside} {...props}>
                {nodes.EngineTrunkGlassInside.children.map((it) => (
                    <mesh geometry={it.geometry} >
                        <meshMatcapMaterial   {...it.material} />
                    </mesh>
                ))}
            </group>
            <group {...nodes.EngineTrunkGlassInside_GlassMtl_0} {...props}>
                <mesh geometry={nodes.EngineTrunkGlassInside_GlassMtl_0.geometry} >
                    <meshMatcapMaterial   {...nodes.EngineTrunkGlassInside_GlassMtl_0.material} />
                </mesh>
            </group>

            <group {...nodes.EngineTrunkGlass_GlassMtl_0} {...props}>
                <mesh geometry={nodes.EngineTrunkGlass_GlassMtl_0.geometry} >
                    <meshMatcapMaterial   {...nodes.EngineTrunkGlass_GlassMtl_0.material} />
                </mesh>
            </group>

            <group {...nodes.EngineTrunkSpecularTint} {...props}>
                {nodes.EngineTrunkSpecularTint.children.map((it) => (
                    <mesh geometry={it.geometry} >
                        <meshMatcapMaterial   {...it.material} />
                    </mesh>
                ))}
            </group>
            <group {...nodes.EngineTrunkSpecularTint_SpecularTintA_0} {...props}>
                <mesh geometry={nodes.EngineTrunkSpecularTint_SpecularTintA_0.geometry} >
                    <meshMatcapMaterial   {...nodes.EngineTrunkSpecularTint_SpecularTintA_0.material} />
                </mesh>
            </group>
        </>
    )
}

export default Engine
