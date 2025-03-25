'use client'
import { Button } from '@/components/ui/button'
import gsap from 'gsap'
import React, { useEffect, useState } from 'react'

interface Props { }
const data1 = {
    prev: 1900,
    next: 2000,
}
const data2 = {
    prev: 1920,
    next: 2010,
}
function Page(props: Props) {
    const { } = props
    const [prev, setPrev] = useState(data1.prev);
    const [next, setNext] = useState(data1.next);

    const animateNumber = (prevNumber: number, newNumber: number, setState: (num: number) => void) => {
        const obj = {
            start: prevNumber
        }
        gsap.to(obj, {
            start: newNumber,
            duration: 1,
            ease: "power1.out",
            onUpdate: function () {
                console.log(obj.start)
                setState((prev ) => ({...prev, start: 1}));
            }
        });
    };

    useEffect(() => {



    }, [prev, next]);
    return (
        <div>
            <div className='flex gap-10'>
                <h2>{prev}</h2>
                <h2>{next}</h2>
            </div>

            <Button onClick={() => {
                animateNumber(prev, data2.prev, setPrev)
                animateNumber(next, data2.next, setNext)
            }}>Change</Button>

        </div>
    )
}

export default Page
