'use client'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap';
import { Flip } from 'gsap/all';
import React from 'react'
import './style.css'
interface Props { }

function FlipWithRotate(props: Props) {
    gsap.registerPlugin(Flip);
    const { } = props
    useGSAP(() => {
        const box = document.querySelector('.box')
        const originalContainer = document.querySelector('.originalContainer')
        const newContainer = document.querySelector('.newContainer')
        document.querySelector('.button')?.addEventListener('click', () => {
            if (!box) return;
            const state = Flip.getState(box);
            console.log(box.parentNode === originalContainer);
            (box.parentNode === originalContainer ? newContainer : originalContainer)?.appendChild(box)

            Flip.from(state, { duration: 1, scale: true, spin: 1 })
        })
    }, [])
    return (
        <>
            <div className='flex'>
                <div className='originalContainer w-full p-8'>
                    <div className='box bg-amber-400 w-32 h-32' />
                </div>
                <div className='newContainer border border-white float-end' />
            </div>
            <div className='w-full flex items-center justify-center'>
                <button className='button border border-white p-4'>FLIP</button>
            </div>

        </>
    )
}

export default FlipWithRotate
