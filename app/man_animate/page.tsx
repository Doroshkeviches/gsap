'use client'
import React from 'react'
import Scene from './Scene';

interface Props { }




function Page(props: Props) {
    const { } = props

    return (
        <>
            <div className="h-screen"></div>

            <div className='h-screen relative MAN-SCENE bg-neutral-900 text-white'>
                <Scene/>
            </div>
            <div className="h-screen"></div>
            <div className="h-screen"></div>

        </>


    )
}

export default Page


