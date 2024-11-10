'use client'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap';
import { Flip } from 'gsap/all';
import Image from 'next/image';
import React from 'react'
import './style.css'
interface Props { }

function FlipImages(props: Props) {
    gsap.registerPlugin(Flip);


    const { } = props
    useGSAP(() => {
        let products = gsap.utils.toArray(".product");
        let active = products[0] as any;

        products.forEach((el: any) => {
            el.addEventListener("click", () => changeGrid(el));
        });

        function changeGrid(el: any) {
            if (el === active) return;

            let state = Flip.getState(products as any);
            active.dataset.grid = el.dataset.grid;
            el.dataset.grid = "img-1";
            active = el;

            Flip.from(state, {
                duration: 0.3,
                absolute: true,
                ease: "power1.inOut",
            });
        }
    }, [])
    return (
        <div className='image-content'>
            <div className="image-container">
                <div className="images">
                    <div className="product product-1" data-grid="img-1"></div>
                    <div className="product product-2" data-grid="img-2"></div>
                    <div className="product product-3" data-grid="img-3"></div>
                    <div className="product product-4" data-grid="img-4"></div>
                </div>
            </div>
        </div>
    )
}

export default FlipImages
