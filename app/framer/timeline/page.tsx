'use client'
import { animate, AnimationSequence, motion as m, useAnimate } from 'framer-motion'
import React from 'react'

interface Props { }

function Page(props: Props) {
    const { } = props
    
    const sequence: AnimationSequence = [
        ['.TARGET', { opacity: 1 }, {duration: 2}],
        ['.TARGET', { rotate: 45 }, {duration: 1, at: 0}]
    ]
    return (
        <div className='h-screen w-full flex items-center justify-center'>
            <m.div animate={controls} initial={{opacity: 0}} className='TARGET w-20 h-20 bg-red-700'>

            </m.div>
            <button onClick={() => {
                animate(sequence)
            }}>BUTTON</button>
        </div>
    )
}

export default Page




const obj = {
    t: 0
}

gsap.to(obj, {
    t: 100,
    onUpdate: function () {
        const t = this.targets()[0]
        // t  0 , 0.1 , ... 100 
    },
})