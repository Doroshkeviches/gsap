import React from 'react'


function Wheel(props) {
    const { nodes, materials } = props


    return (
        <>
            <group {...nodes.Wheel1A_LF} {...props}>
                {nodes.Wheel1A_LF.children.map((it) => (
                    <mesh geometry={it.geometry} >
                        <meshMatcapMaterial   {...it.material} />
                    </mesh>
                ))}
            </group>
            <group {...nodes.Wheel1A_LR} {...props}>
                {nodes.Wheel1A_LR.children.map((it) => (
                    <mesh geometry={it.geometry} >
                        <meshMatcapMaterial   {...it.material} />
                    </mesh>
                ))}
            </group>
            <group {...nodes.Wheel1A_RF} {...props}>
                {nodes.Wheel1A_RF.children.map((it) => (
                    <mesh geometry={it.geometry} >
                        <meshMatcapMaterial   {...it.material} />
                    </mesh>
                ))}
            </group>
            <group {...nodes.Wheel1A_RR} {...props}>
                {nodes.Wheel1A_RR.children.map((it) => (
                    <mesh geometry={it.geometry} >
                        <meshMatcapMaterial   {...it.material} />
                    </mesh>
                ))}
            </group>
        </>
    )
}

export default Wheel
