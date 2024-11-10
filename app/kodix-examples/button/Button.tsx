'use client'
import React from 'react'
import './style.css'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { GSDevTools, MorphSVGPlugin } from 'gsap-trial/all'
interface Props { }

function Button(props: Props) {
    const { } = props
    useGSAP(() => {
        const button = document.querySelector('.button')
        const svg = document.querySelector('#svg')
        const paper = document.querySelector('#paper')


        console.log(button?.clientWidth, svg?.clientWidth)
        gsap.registerPlugin(MorphSVGPlugin)
        gsap.registerPlugin(GSDevTools)
        gsap.set('#paper', {
            opacity: 0
        })
        const tl = gsap.timeline()
        tl.to('#trash_init', {
            morphSVG: '#trash_last'
        })
            .to('#svg', {
                x: button?.clientWidth! / 2 - svg?.clientWidth!,
                scale: 1.5
            })
            .add(gsap.to("#span", {
                opacity: 0
            }), "<")
            .to('#paper', {
                opacity: 1,
            })

            .to('#paper', {
                y: 100,
            })
            .add(gsap.to("#paperSVG", {
                morphSVG: "#check"
            }), "<")
            .to('#paper', {
                opacity: 0,
            })
            .to('#svg', {
                x: 0,
            })
            .add(gsap.to("#span", {
                opacity: 1
            }), "<")
        GSDevTools.create()
    }, [])
    return (
        <div className='w-full h-screen flex items-center justify-center'>

            <div className='button'>
                <svg xmlns="http://www.w3.org/2000/svg" id='svg' width={24} height={24} viewBox="0 0 24 24" fill="currentColor">
                    <defs>
                        <path id='trash_last' d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 4V6H15V4H9Z" />
                    </defs>
                    <path id='trash_init' d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z" />

                </svg>
                <svg id='paper' xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor">
                    <defs>
                        <path id='check' d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z" />
                    </defs>
                    <path id='paperSVG' d="M9 2.00318V2H19.9978C20.5513 2 21 2.45531 21 2.9918V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5501 3 20.9932V8L9 2.00318ZM5.82918 8H9V4.83086L5.82918 8ZM11 4V9C11 9.55228 10.5523 10 10 10H5V20H19V4H11Z"></path>
                </svg>
                <span id='span'>DELETE ITEM</span>
            </div>
        </div>
    )
}

export default Button
