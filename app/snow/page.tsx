'use client'
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
    type Container,
    type ISourceOptions,
    MoveDirection,
    OutMode,
} from "@tsparticles/engine";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import React from 'react'

interface Props { }

function Page(props: Props) {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            // await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
        const btn = document.querySelector("#btn");
        btn?.addEventListener('click', () => {
            container?.handleClickMode('push')
        })
    };
    const options: ISourceOptions = useMemo(
        () => ({
            fpsLimit: 60,
            background: {
                color: "#AAA"
            },
            interactivity: {
                events: {
                    onClick: { enable: true, mode: "push" },
                    onHover:  { enable: true, mode: "push" },
                    // onHover: {
                    //     enable: true,
                    //     mode: "repulse",
                    //     parallax: { enable: false, force: 60, smooth: 10 }
                    // },
                    resize: true
                },
                modes: {
                    push: { quantity: 100 },
                    repulse: { distance: 200, duration: 0.4 }
                }
            },
            fullScreen: {
                enable: false,
            },
            particles: {
                color: { value: "#ffffff" },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: "out",
                    random: false,
                    speed: 2,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        area: 800
                    },
                    value: 800
                },
                opacity: {
                    animation: {
                        enable: true,
                        speed: 0.05,
                        sync: true,
                        startValue: "max",
                        count: 1,
                        destroy: "min"
                    },
                    value: {
                        min: 0,
                        max: 0.5
                    }
                },
                shape: {
                    type: "circle"
                },
                size: {
                    value: { min: 1, max: 5 }
                }
            }
        }),
        [],
    );

    return <div >
        <button id="btn" className="bg-yellow-300 p-4 m-4">Кнопка которая трясет шар</button>
        {init && <Particles
            className="w-500 relative h-500"
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
        />}
    </div>;
}

export default Page
