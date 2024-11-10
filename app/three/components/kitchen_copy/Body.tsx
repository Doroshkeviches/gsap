import React from 'react'


function Body(props) {
    const { nodes, materials } = props


    return (
        <>
            <group {...nodes.body_1ChassisPaint} {...props}>
                {nodes.body_1ChassisPaint.children.map((it) => (
                    <mesh geometry={it.geometry} >
                        <meshMatcapMaterial   {...it.material} />
                    </mesh>
                ))}
            </group>

            
        </>
    )
}

export default Body
