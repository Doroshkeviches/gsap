'use client'
import React from 'react'
import Lottie from "lottie-react";
import json from "./data.json";
interface Props {}

function Page(props: Props) {
    const {} = props

    return (
        <Lottie animationData={json} loop={false} />
    )
}

export default Page
