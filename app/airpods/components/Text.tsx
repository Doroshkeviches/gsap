'use client'
import { useGSAP } from '@gsap/react'
import React from 'react'

interface Props {
    trigger: string,
    text: string,
}

function Text(props: Props) {
    const { trigger, text } = props
    return (
        <div className={`${trigger} text-6xl text-white opacity-0`}>
            {text}
        </div>
    )
}

export default Text
