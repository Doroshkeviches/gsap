'use client'
import React, { useEffect } from 'react'
import s from './letters.module.scss'
import Image from 'next/image'
import clsx from 'clsx'
import { TweenLite, gsap } from 'gsap'
import { div } from 'framer-motion/client'
interface Props { }

function LettersHover(props: Props) {
    const { } = props
    const arr = new Array(10).fill(null)
    useEffect(() => {
        const box = document.querySelectorAll('.BOX')
        box.forEach(it => {
            it.addEventListener('mousemove', (e) => {
                closestEdge(e, it)
            })
        })
    }, [])
    function moveDiv(mouse: any, edge: any, elem: HTMLDivElement) {
        const width = elem.clientWidth;
        const height = elem.clientHeight;

        switch (edge) {
            case "left":
                elem.style.left = `${mouse.pageX + 50}px`
                break;
            case "right":
                console.log(mouse.pageX - width - 20)
                elem.style.left = `${mouse.pageX - width - 20}px`
                break;
            case "top":
                elem.style.top = `${mouse.pageY + 50}px`
                break;
            case "bottom":
                elem.style.top = `${mouse.pageY - height - 20}px`
                break;
        }
    }

    function closestEdge(mouse: any, elem: any) {
        let elemBounding = elem.getBoundingClientRect();

        let elementLeftEdge = elemBounding.left;
        let elementTopEdge = elemBounding.top;
        let elementRightEdge = elemBounding.right;
        let elementBottomEdge = elemBounding.bottom;

        let mouseX = mouse.pageX;
        let mouseY = mouse.pageY;

        let topEdgeDist = Math.abs(elementTopEdge - mouseY);
        let bottomEdgeDist = Math.abs(elementBottomEdge - mouseY);
        let leftEdgeDist = Math.abs(elementLeftEdge - mouseX);
        let rightEdgeDist = Math.abs(elementRightEdge - mouseX);

        let min = Math.min(topEdgeDist, bottomEdgeDist, leftEdgeDist, rightEdgeDist);
        let position;

        switch (min) {
            case leftEdgeDist:
                position = "left";
                break;
            case rightEdgeDist:
                position = "right";
                break;
            case topEdgeDist:
                position = "top";
                break;
            case bottomEdgeDist:
                position = "bottom";
                break;
        }

        moveDiv(mouse, position, elem);
    }

    return (
        <div>
            {arr.map((_, index) => (
                <div key={index} style={{
                    top: `${Math.random() * index * 50}px`,
                    left: `${Math.random() * index * 50}px`
                }} className={clsx(s.box, 'BOX')}></div>

            ))}
        </div>
    )
}

export default LettersHover
