import React from 'react'


function FinalModFbx(props) {
    const { nodes, materials } = props


    return (
        <>
            {nodes.FINAL_MODfbx.children.map(it => {
                it.children.map(child => {
                    child.children.map(ch => {
                        ch.children.map(mash => {
                            return (
                                <mesh geometry={mash.geometry} >
                                    <meshMatcapMaterial   {...mash.material} />
                                </mesh>
                            )
                        })
                    })
                })
            })}
        </>
    )
}

export default FinalModFbx
