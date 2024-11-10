import React from 'react'
import SignupFormDemo from '@/components/example/signup-form-demo'
import LettersHover from './letters-hover/lettersHover'

interface Props { }

function Page(props: Props) {
    const { } = props

    return (
        <div className='w-full h-screen bg-white'>
            <LettersHover/>
        </div>

    )
}

export default Page
