import React from 'react'
import FlipWithRotate from '../components/flip-animations/FlipWithRotate/FlipWithRotate'
import FlipImages from '../components/flip-animations/flig-images/FlipImages'

interface Props {}

function Page(props: Props) {
    const {} = props

    return (
        <>
        <FlipImages/>
        <FlipWithRotate/>
        </>
    )
}

export default Page
