'use client'
import React from 'react'
import s from './style.module.scss'
import { Draggable } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { InertiaPlugin } from 'gsap-trial/all';
interface Props { }

function Weather(props: Props) {
    gsap.registerPlugin(Draggable, InertiaPlugin);


    const { } = props
    useGSAP(() => {
        const rect = document.querySelector('#rect')
        Draggable.create(".rect_drag", {
            type: "x,y",
            onDragEnd: function () {
                const x = this.x; // Позиция по оси X
                const y = this.y; // Позиция по оси Y
                console.log(x, y)
            },
            bounds: '.bounds-container'
        });

        Draggable.create("#rect_rotate", {
            type: "rotation",
            inertia: true
        });
    }, [])

    return (
        <div className='h-screen'>
            {/* <div className='bounds-container absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 border-2 border-dotted border-blue-700 w-500 h-500'>
            <div  className='w-40 h-40 bg-red-400 rect_drag'></div>
            </div> */}
            <div id='rect_rotate' className=' absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-40 h-40 bg-green-400 mx-auto'></div>
        </div>
    )
}

export default Weather
