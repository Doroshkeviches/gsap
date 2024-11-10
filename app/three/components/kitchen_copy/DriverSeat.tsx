import React from 'react'


function DriverSeat(props) {
    const { nodes, materials } = props

    return (
        <>
            <group {...nodes.DriverSeatBeltColoured} {...props}>
                {nodes.DriverSeatBeltColoured.children.map((it) => (
                    <mesh geometry={it.geometry} >
                        <meshMatcapMaterial   {...it.material} />
                    </mesh>
                ))}
            </group>
            <group {...nodes.DriverSeatBeltColoured_Coloured_0} {...props}>
                <mesh geometry={nodes.DriverSeatBeltColoured_Coloured_0.geometry} >
                    <meshMatcapMaterial   {...nodes.DriverSeatBeltColoured_Coloured_0.material} />
                </mesh>
            </group>
            <group {...nodes.DriverSeatCarbon1} {...props}>
                {nodes.DriverSeatCarbon1.children.map((it) => (
                    <mesh geometry={it.geometry} >
                        <meshMatcapMaterial   {...it.material} />
                    </mesh>
                ))}
            </group>
            <group {...nodes.DriverSeatCarbon1_Carbon1_0} {...props}>
                <mesh geometry={nodes.DriverSeatCarbon1_Carbon1_0.geometry} >
                    <meshMatcapMaterial   {...nodes.DriverSeatCarbon1_Carbon1_0.material} />
                </mesh>
            </group>
            <group {...nodes.DriverSeatInterior} {...props}>
                {nodes.DriverSeatInterior.children.map((it) => (
                    <mesh geometry={it.geometry} >
                        <meshMatcapMaterial   {...it.material} />
                    </mesh>
                ))}
            </group>
            <group {...nodes.DriverSeatInterior_InteriorColour1A_0} {...props}>
                <mesh geometry={nodes.DriverSeatInterior_InteriorColour1A_0.geometry} >
                    <meshMatcapMaterial   {...nodes.DriverSeatInterior_InteriorColour1A_0.material} />
                </mesh>
            </group>
        </>
    )
}

export default DriverSeat
