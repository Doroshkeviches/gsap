import React from 'react'


function Spoiler(props) {
    const { nodes, materials } = props


    return (
        <>
            <group {...nodes.SpoilerBadge} {...props}>
                {nodes.SpoilerBadge.children.map((it) => (
                    <mesh geometry={it.geometry} >
                        <meshMatcapMaterial   {...it.material} />
                    </mesh>
                ))}
            </group>
            <group {...nodes.SpoilerCarbon1} {...props}>
                {nodes.SpoilerCarbon1.children.map((it) => (
                    <mesh geometry={it.geometry} >
                        <meshMatcapMaterial   {...it.material} />
                    </mesh>
                ))}
            </group>
            <group {...nodes.SpoilerGrille7} {...props}>
                {nodes.SpoilerGrille7.children.map((it) => (
                    <mesh geometry={it.geometry} >
                        <meshMatcapMaterial   {...it.material} />
                    </mesh>
                ))}
            </group>
            <group {...nodes.SpoilerPaint} {...props}>
                {nodes.SpoilerPaint.children.map((it) => (
                    <mesh geometry={it.geometry} >
                        <meshMatcapMaterial   {...it.material} />
                    </mesh>
                ))}
            </group>
        </>
    )
}

export default Spoiler
