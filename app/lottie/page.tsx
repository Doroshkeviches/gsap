'use client'
import React from 'react'
import Lottie from "lottie-react";
import json from "./Main.json";
interface Props {}

function Page(props: Props) {
    const {} = props

    return (
        <Lottie animationData={json} loop={true} />
    )
}

export default Page
