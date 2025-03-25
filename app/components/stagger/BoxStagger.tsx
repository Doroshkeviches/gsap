'use client'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useState } from 'react'
type IFrom = "start" | "center" | "end" | "edges" | "random" | number | [number, number]
interface Props { }

function BoxStagger(props: Props) {
    const { } = props
    const [from, setFrom] = useState<IFrom>('center');

    function startAnimate() {
        gsap.to("#box", {
            duration: 0.5,
            opacity: 0,
            y: -100,
            stagger: {
                from: from,
                each: 0.2,
            },
            ease: "back.in",
        });
    }
    useGSAP(() => {
        document.querySelector('#reset')?.addEventListener("click", () => {
            gsap.killTweensOf('#box')
            document.querySelectorAll("#box").forEach((box) => {
                gsap.to(box, {
                    duration: 0.3,
                    opacity: 1,
                    y: 0,
                    ease: "back.in",

                });
            });
        })
        // startAnimate()
    }, [from])
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center gap-40'>
            <div className='flex flex-col gap-4'>
                <Button id='reset'>Reset</Button>
                <Button id='reset' onClick={startAnimate}>Start</Button>

                <Select onValueChange={(val) => setFrom(val as IFrom)} defaultValue='center'>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="center">Center</SelectItem>
                        <SelectItem value="end">End</SelectItem>
                        <SelectItem value="random">Random</SelectItem>
                        <SelectItem value="1">Index (1)</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className='flex items-center justify-center gap-4'>
                <div id='box' className='w-10 h-10 bg-slate-700'></div>
                <div id='box' className='w-10 h-10 bg-slate-700'></div>
                <div id='box' className='w-10 h-10 bg-slate-700'></div>
                <div id='box' className='w-10 h-10 bg-slate-700'></div>
                <div id='box' className='w-10 h-10 bg-slate-700'></div>
                <div id='box' className='w-10 h-10 bg-slate-700'></div>
                <div id='box' className='w-10 h-10 bg-slate-700'></div>


            </div>
        </div>
    )
}

export default BoxStagger
