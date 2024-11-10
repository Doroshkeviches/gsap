import React from 'react'


function Chassis(props) {
    const { nodes, materials } = props


    return (
        <>
            <group {...nodes.ChassisGrille1} {...props}>
                {nodes.ChassisGrille1.children.map((it) => (
                    <mesh geometry={it.geometry} >
                        <meshMatcapMaterial   {...it.material} />
                    </mesh>
                ))}
            </group>
        </>
    )
}

export default Chassis
